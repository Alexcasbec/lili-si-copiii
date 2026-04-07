import { NextResponse } from 'next/server'

interface User {
  id: string
  email: string
  nume: string
  telefon: string
  createdAt: string
}

// Simple in-memory storage (in production, use a database)
const users: User[] = []

export async function POST(request: Request) {
  try {
    const { email, password, nume, telefon } = await request.json()

    if (!email || !password || !nume || !telefon) {
      return NextResponse.json(
        { error: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Parola trebuie să aibă cel puțin 6 caractere' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'Un cont cu acest email există deja' },
        { status: 400 }
      )
    }

    // Create new user (in production, hash password)
    const newUser: User = {
      id: Date.now().toString(),
      email,
      nume,
      telefon,
      createdAt: new Date().toISOString()
    }

    users.push(newUser)

    return NextResponse.json({
      message: 'Cont creat cu succes',
      user: {
        id: newUser.id,
        email: newUser.email,
        nume: newUser.nume,
        telefon: newUser.telefon
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Eroare la crearea contului' },
      { status: 500 }
    )
  }
}
