import { promises as fs } from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

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

const ordersFilePath = path.join(process.cwd(), 'data', 'orders.json')

const ensureOrdersFile = async () => {
  const dataDir = path.dirname(ordersFilePath)
  await fs.mkdir(dataDir, { recursive: true })

  try {
    await fs.access(ordersFilePath)
  } catch {
    await fs.writeFile(ordersFilePath, '[]', 'utf-8')
  }
}

export const getOrders = async (): Promise<OrderRecord[]> => {
  await ensureOrdersFile()
  const raw = await fs.readFile(ordersFilePath, 'utf-8')

  const parsed = JSON.parse(raw) as OrderRecord[]
  return parsed.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
}

export const createOrder = async (payload: OrderInput): Promise<OrderRecord> => {
  const orders = await getOrders()

  const order: OrderRecord = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload
  }

  orders.unshift(order)
  await fs.writeFile(ordersFilePath, JSON.stringify(orders, null, 2), 'utf-8')

  return order
}
