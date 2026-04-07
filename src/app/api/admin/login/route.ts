import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Utilizatori predefiniți
    const users = [
      { email: 'admin@lilisicopiii.ro', password: 'admin123', role: 'super_admin', name: 'Admin Principal' },
      { email: 'manager@lilisicopiii.ro', password: 'manager123', role: 'manager', name: 'Manager' },
      { email: 'editor@lilisicopiii.ro', password: 'editor123', role: 'editor', name: 'Editor' },
    ]

    // Verificare credențiale
    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Email sau parolă incorectă' },
        { status: 401 }
      )
    }

    // Token simplificat (în producție ar trebui JWT)
    const token = btoa(`${user.email}:${Date.now()}`)

    return NextResponse.json({
      success: true,
      message: 'Login reușit',
      token,
      user: {
        email: user.email,
        name: user.name,
        role: user.role
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Eroare de server. Încercați din nou.' },
      { status: 500 }
    )
  }
}
