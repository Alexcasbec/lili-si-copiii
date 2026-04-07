import { randomUUID } from 'crypto'

export type OrderChannel = 'whatsapp' | 'email'

export type OrderInput = {
  productName: string
  nume: string
  telefon: string
  email: string
  canal: OrderChannel
  varsta: string
  culoare: string
  cantitate: string
  observatii: string
}

export type OrderRecord = OrderInput & {
  id: string
  createdAt: string
}

const ORDERS_STORAGE_KEY = 'lili_orders'

function getOrdersFromStorage(): OrderRecord[] {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem(ORDERS_STORAGE_KEY)
    if (!stored) return []
    return JSON.parse(stored)
  } catch {
    return []
  }
}

function saveOrdersToStorage(orders: OrderRecord[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
}

export async function createOrder(order: OrderInput): Promise<OrderRecord> {
  const orders = getOrdersFromStorage()
  
  const newOrder: OrderRecord = {
    ...order,
    id: randomUUID(),
    createdAt: new Date().toISOString()
  }
  
  orders.unshift(newOrder)
  saveOrdersToStorage(orders)
  
  return newOrder
}

export async function getOrders(): Promise<OrderRecord[]> {
  return getOrdersFromStorage()
}
