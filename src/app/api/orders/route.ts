import { NextResponse } from 'next/server'
import { createOrder, getOrders, type OrderInput } from '@/lib/orders-store'

const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === 'string' && value.trim().length > 0
}

export async function GET() {
  try {
    const orders = await getOrders()
    return NextResponse.json({ orders })
  } catch (error) {
    console.error('GET /api/orders failed', error)
    return NextResponse.json({ error: 'Nu am putut încărca comenzile.' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<OrderInput>

    if (!isNonEmptyString(body.nume) || !isNonEmptyString(body.telefon)) {
      return NextResponse.json({ error: 'Numele și telefonul sunt obligatorii.' }, { status: 400 })
    }

    if (!isNonEmptyString(body.varsta) || !isNonEmptyString(body.culoare)) {
      return NextResponse.json({ error: 'Vârsta și culoarea sunt obligatorii.' }, { status: 400 })
    }

    const payload: OrderInput = {
      productName: isNonEmptyString(body.productName) ? body.productName : 'Nespecificat',
      nume: body.nume.trim(),
      telefon: body.telefon.trim(),
      email: isNonEmptyString(body.email) ? body.email.trim() : '',
      canal: body.canal === 'email' ? 'email' : 'whatsapp',
      varsta: body.varsta.trim(),
      culoare: body.culoare.trim(),
      cantitate: isNonEmptyString(body.cantitate) ? body.cantitate.trim() : '1',
      observatii: isNonEmptyString(body.observatii) ? body.observatii.trim() : ''
    }

    const order = await createOrder(payload)
    return NextResponse.json({ order }, { status: 201 })
  } catch (error) {
    console.error('POST /api/orders failed', error)
    return NextResponse.json({ error: 'Nu am putut salva comanda.' }, { status: 500 })
  }
}
