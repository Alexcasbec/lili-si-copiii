import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
})

export interface StripePaymentIntent {
  client_secret: string
  amount: number
  currency: string
}

export async function createPaymentIntent(amount: number, currency: string = 'ron'): Promise<StripePaymentIntent> {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        source: 'lili-si-copiii',
      },
    })

    return {
      client_secret: paymentIntent.client_secret!,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    }
  } catch (error) {
    console.error('Error creating payment intent:', error)
    throw new Error('Nu am putut inițializa plata')
  }
}
