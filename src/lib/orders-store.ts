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

const getStoredOrders = (): OrderRecord[] => {
  if (typeof window === 'undefined') return []
  
  try {
    const raw = window.localStorage.getItem(ORDERS_STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as OrderRecord[]
  } catch {
    return []
  }
}

const saveOrders = (orders: OrderRecord[]) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
}

export const getOrders = async (): Promise<OrderRecord[]> => {
  const orders = getStoredOrders()
  return orders.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
}

export const createOrder = async (payload: OrderInput): Promise<OrderRecord> => {
  const orders = getStoredOrders()

  const order: OrderRecord = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload
  }

  const updatedOrders = [order, ...orders]
  saveOrders(updatedOrders)

  return order
}
