'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AdminLoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    console.log('🔍 LOGIN START:', credentials.email)

    try {
      // Login ultra-simplificat - doar validare și redirect
      const validCredentials = [
        { email: 'admin@lilisicopiii.ro', password: 'admin123' },
        { email: 'manager@lilisicopiii.ro', password: 'manager123' },
        { email: 'editor@lilisicopiii.ro', password: 'editor123' },
      ]

      console.log('🔍 CHECKING CREDENTIALS...')

      const isValid = validCredentials.some(
        cred => cred.email === credentials.email && cred.password === credentials.password
      )

      console.log('🔍 IS VALID:', isValid)

      if (isValid) {
        console.log('🔍 REDIRECTING TO /admin...')
        // Redirect direct - fără localStorage
        window.location.href = '/admin'
      } else {
        console.log('🔍 INVALID CREDENTIALS')
        setError('Email sau parolă incorectă')
      }
    } catch (error) {
      console.error('🔍 CATCH ERROR:', error)
      setError('Eroare: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parolă
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 disabled:opacity-50 transition-colors"
              >
                {isLoading ? 'Se procesează...' : 'Autentificare'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Demo: admin@lilisicopiii.ro / admin123
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
