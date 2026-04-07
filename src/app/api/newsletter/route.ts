import { NextResponse } from 'next/server'

// Simple in-memory storage (in production, use a database)
const subscribers: { email: string; date: string }[] = []

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalid' },
        { status: 400 }
      )
    }

    // Check if already subscribed
    const existingSubscriber = subscribers.find(s => s.email === email)
    if (existingSubscriber) {
      return NextResponse.json(
        { message: 'Ești deja abonat la newsletter' },
        { status: 200 }
      )
    }

    // Add subscriber
    subscribers.push({
      email,
      date: new Date().toISOString()
    })

    // In production, integrate with email service like SendGrid, Brevo, etc.
    console.log(`New newsletter subscriber: ${email}`)

    return NextResponse.json({
      message: 'Abonare reușită! Verifică emailul pentru confirmare.',
      email
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Eroare la abonare' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    return NextResponse.json({
      subscribers: subscribers.length,
      message: 'Newsletter stats'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Eroare la încărcare date' },
      { status: 500 }
    )
  }
}
