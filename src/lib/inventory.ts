'use client'

import { useState, useEffect } from 'react'

export interface ProductStock {
  id: string
  name: string
  stock: number
  reserved: number
  available: number
  lowStockThreshold: number
  lastUpdated: Date
}

const INVENTORY_STORAGE_KEY = 'lili_inventory'

// Sample initial inventory data
const initialInventory: ProductStock[] = [
  {
    id: 'salopeta-bebe-rosu',
    name: 'Salopetă bebe roșie',
    stock: 15,
    reserved: 2,
    available: 13,
    lowStockThreshold: 5,
    lastUpdated: new Date()
  },
  {
    id: 'rochie-fete-albastru',
    name: 'Rochie fete albastră',
    stock: 8,
    reserved: 1,
    available: 7,
    lowStockThreshold: 3,
    lastUpdated: new Date()
  },
  {
    id: 'camasa-baieti-alb',
    name: 'Cămașă băieți albă',
    stock: 20,
    reserved: 0,
    available: 20,
    lowStockThreshold: 5,
    lastUpdated: new Date()
  }
]

function getInventory(): ProductStock[] {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem(INVENTORY_STORAGE_KEY)
    if (!stored) {
      localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(initialInventory))
      return initialInventory
    }
    
    const parsed = JSON.parse(stored)
    return parsed.map((item: any) => ({
      ...item,
      lastUpdated: new Date(item.lastUpdated)
    }))
  } catch {
    return initialInventory
  }
}

function saveInventory(inventory: ProductStock[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(INVENTORY_STORAGE_KEY, JSON.stringify(inventory))
}

export function getProductStock(productId: string): ProductStock | undefined {
  const inventory = getInventory()
  return inventory.find(item => item.id === productId)
}

export function updateProductStock(productId: string, quantityChange: number): boolean {
  const inventory = getInventory()
  const productIndex = inventory.findIndex(item => item.id === productId)
  
  if (productIndex === -1) return false
  
  const product = inventory[productIndex]
  const newStock = product.stock + quantityChange
  
  if (newStock < 0) return false
  
  inventory[productIndex] = {
    ...product,
    stock: newStock,
    available: newStock - product.reserved,
    lastUpdated: new Date()
  }
  
  saveInventory(inventory)
  return true
}

export function reserveProductStock(productId: string, quantity: number): boolean {
  const inventory = getInventory()
  const productIndex = inventory.findIndex(item => item.id === productId)
  
  if (productIndex === -1) return false
  
  const product = inventory[productIndex]
  
  if (product.available < quantity) return false
  
  inventory[productIndex] = {
    ...product,
    reserved: product.reserved + quantity,
    available: product.available - quantity,
    lastUpdated: new Date()
  }
  
  saveInventory(inventory)
  return true
}

export function releaseProductStock(productId: string, quantity: number): boolean {
  const inventory = getInventory()
  const productIndex = inventory.findIndex(item => item.id === productId)
  
  if (productIndex === -1) return false
  
  const product = inventory[productIndex]
  const releaseAmount = Math.min(quantity, product.reserved)
  
  inventory[productIndex] = {
    ...product,
    reserved: product.reserved - releaseAmount,
    available: product.available + releaseAmount,
    lastUpdated: new Date()
  }
  
  saveInventory(inventory)
  return true
}

export function getLowStockProducts(): ProductStock[] {
  const inventory = getInventory()
  return inventory.filter(item => item.available <= item.lowStockThreshold)
}

export function useInventory() {
  const [inventory, setInventory] = useState<ProductStock[]>(() => getInventory())
  const [lowStockItems, setLowStockItems] = useState<ProductStock[]>(() => getLowStockProducts())

  const refreshInventory = () => {
    const updated = getInventory()
    setInventory(updated)
    setLowStockItems(getLowStockProducts())
  }

  useEffect(() => {
    const handleStorageChange = () => refreshInventory()
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return {
    inventory,
    lowStockItems,
    refreshInventory,
    getProductStock,
    updateProductStock,
    reserveProductStock,
    releaseProductStock,
    getLowStockProducts
  }
}
