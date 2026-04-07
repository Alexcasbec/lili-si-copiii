'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import UserAuth from '@/components/UserAuth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AccountPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  const handleAuthSuccess = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Contul tău</h1>
            <p className="text-gray-600">
              Autentifică-te pentru a accesa istoricul comenzilor și a gestiona datele personale
            </p>
          </div>
          
          <UserAuth mode="login" onToggleMode={() => router.push('/cont/register')} />
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Bun venit, {user.nume}!</h1>
                <p className="text-gray-600">Gestionează contul tău și vezi istoricul comenzilor</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Delogare
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Date personale</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Nume</p>
                    <p className="font-medium">{user.nume}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="font-medium">{user.telefon}</p>
                  </div>
                </div>
              </div>

              {/* Order History */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Istoric comenzi</h2>
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-4">Nu ai comenzi încă</p>
                  <button
                    onClick={() => router.push('/produse')}
                    className="btn-primary inline-flex items-center"
                  >
                    Explorează produsele
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Acțiuni rapide</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => router.push('/produse')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  <p className="font-medium">Produse</p>
                  <p className="text-sm text-gray-500">Explorează colecția</p>
                </button>
                <button
                  onClick={() => router.push('/cos')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  <p className="font-medium">Coș de cumpărături</p>
                  <p className="text-sm text-gray-500">Vezi produsele selectate</p>
                </button>
                <button
                  onClick={() => router.push('/contact')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  <p className="font-medium">Contact</p>
                  <p className="text-sm text-gray-500">Ajutor și suport</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
