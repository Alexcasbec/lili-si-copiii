'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { getProductStock, reserveProductStock, releaseProductStock } from './inventory'

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

const CART_STORAGE_KEY = 'lili_cart_items'
const CART_EVENT_NAME = 'cart-updated'

function emitCartUpdated() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(CART_EVENT_NAME))
}

export function readCart(): CartItem[] {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed.filter((item) => item && typeof item.id === 'string') as CartItem[]
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
}

export function addItemToCart(item: Omit<CartItem, 'quantity'>, quantity = 1) {
  const stock = getProductStock(item.id)
  
  // Check if product is available
  if (!stock || stock.available < quantity) {
    throw new Error('Produsul nu este disponibil în stocul necesar')
  }

  const existing = readCart()
  const found = existing.find((current) => current.id === item.id)
  const currentQuantity = found?.quantity || 0
  const totalQuantity = currentQuantity + quantity

  // Check if total quantity exceeds available stock
  if (stock.available < totalQuantity) {
    throw new Error(`Doar ${stock.available} bucăți disponibile în stoc`)
  }

  // Reserve the additional quantity
  if (!reserveProductStock(item.id, quantity)) {
    throw new Error('Nu am putut rezerva stocul')
  }

  const nextItems = found
    ? existing.map((current) =>
        current.id === item.id
          ? { ...current, quantity: current.quantity + quantity }
          : current
      )
    : [...existing, { ...item, quantity }]

  saveCart(nextItems)
  emitCartUpdated()
}

export function removeItemFromCart(id: string) {
  const existing = readCart()
  const item = existing.find(current => current.id === id)
  
  if (item) {
    // Release the reserved stock
    releaseProductStock(id, item.quantity)
  }
  
  const nextItems = existing.filter((item) => item.id !== id)
  saveCart(nextItems)
  emitCartUpdated()
}

export function updateItemQuantity(id: string, quantity: number) {
  const existing = readCart()
  const currentItem = existing.find(item => item.id === id)
  
  if (!currentItem) return
  
  const stock = getProductStock(id)
  if (!stock) return
  
  const quantityDiff = quantity - currentItem.quantity
  
  // Handle stock reservation/release
  if (quantityDiff > 0) {
    // Need to reserve more stock
    if (stock.available < quantityDiff) {
      throw new Error(`Doar ${stock.available} bucăți disponibile în stoc`)
    }
    if (!reserveProductStock(id, quantityDiff)) {
      throw new Error('Nu am putut rezerva stocul suplimentar')
    }
  } else if (quantityDiff < 0) {
    // Release some stock
    releaseProductStock(id, Math.abs(quantityDiff))
  }

  const nextItems = existing
    .map((item) => (item.id === id ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0)

  saveCart(nextItems)
  emitCartUpdated()
}

export function clearCart() {
  const existing = readCart()
  
  // Release all reserved stock
  existing.forEach(item => {
    releaseProductStock(item.id, item.quantity)
  })
  
  saveCart([])
  emitCartUpdated()
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => readCart())

  const refreshCart = useCallback(() => {
    setItems(readCart())
  }, [])

  useEffect(() => {
    const onStorage = () => refreshCart()
    const onCustomEvent = () => refreshCart()

    window.addEventListener('storage', onStorage)
    window.addEventListener(CART_EVENT_NAME, onCustomEvent)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(CART_EVENT_NAME, onCustomEvent)
    }
  }, [refreshCart])

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  )

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  return {
    items,
    count,
    total,
    addToCart: addItemToCart,
    removeFromCart: removeItemFromCart,
    updateQuantity: updateItemQuantity,
    clearAll: clearCart,
  }
}
