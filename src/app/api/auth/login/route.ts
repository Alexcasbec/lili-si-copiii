import { NextResponse } from 'next/server'

interface User {
  id: string
  email: string
  nume: string
  telefon: string
  createdAt: string
}

// Simple in-memory storage (in production, use a database)
const users: User[] = [
  {
    id: '1',
    email: 'demo@lilisicopiii.ro',
    nume: 'Demo User',
    telefon: '0712345678',
    createdAt: new Date().toISOString()
  }
]

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email și parola sunt obligatorii' },
        { status: 400 }
      )
    }

    // Find user (in production, verify password hash)
    const user = users.find(u => u.email === email)
    if (!user) {
      return NextResponse.json(
        { error: 'Email sau parolă incorectă' },
        { status: 401 }
      )
    }

    // For demo, accept any password for existing user
    // In production, verify: bcrypt.compare(password, user.passwordHash)

    return NextResponse.json({
      message: 'Autentificare reușită',
      user: {
        id: user.id,
        email: user.email,
        nume: user.nume,
        telefon: user.telefon
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Eroare la autentificare' },
      { status: 500 }
    )
  }
}
