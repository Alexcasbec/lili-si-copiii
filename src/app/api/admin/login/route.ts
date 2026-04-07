import { NextResponse } from 'next/server'

// Simple admin credentials (in production, use secure authentication)
const ADMIN_CREDENTIALS = {
  email: 'admin@lilisicopiii.ro',
  password: 'admin123'
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email și parola sunt obligatorii' },
        { status: 400 }
      )
    }

    // Verify credentials
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      // Generate simple token (in production, use JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64')
      
      return NextResponse.json({
        message: 'Autentificare reușită',
        token,
        admin: {
          email,
          role: 'admin'
        }
      })
    }

    return NextResponse.json(
      { error: 'Email sau parolă incorectă' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { error: 'Eroare la autentificare' },
      { status: 500 }
    )
  }
}
