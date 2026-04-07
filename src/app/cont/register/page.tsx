'use client'

import { useRouter } from 'next/navigation'
import UserAuth from '@/components/UserAuth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RegisterPage() {
  const router = useRouter()

  const handleToggleMode = () => {
    router.push('/cont')
  }

  const handleRegisterSuccess = () => {
    router.push('/cont')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Creează cont nou</h1>
          <p className="text-gray-600">
            Alătură-te comunității Lili și Copiii pentru a beneficia de oferte exclusive
          </p>
        </div>
        
        <UserAuth 
          mode="register" 
          onToggleMode={handleToggleMode}
        />
      </main>

      <Footer />
    </div>
  )
}
