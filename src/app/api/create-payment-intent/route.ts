import { NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: 'Suma invalidă' },
        { status: 400 }
      )
    }

    const paymentIntent = await createPaymentIntent(amount)

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    })
  } catch (error) {
    console.error('Payment intent error:', error)
    return NextResponse.json(
      { error: 'Nu am putut procesa plata' },
      { status: 500 }
    )
  }
}
