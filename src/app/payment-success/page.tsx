'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function PaymentSuccessContent() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const searchParams = useSearchParams()

  useEffect(() => {
    const paymentIntent = searchParams.get('payment_intent')
    const paymentIntentClientSecret = searchParams.get('payment_intent_client_secret')
    const redirectStatus = searchParams.get('redirect_status')

    if (redirectStatus === 'succeeded' && paymentIntent) {
      setStatus('success')
    } else {
      setStatus('error')
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {status === 'loading' && (
            <div className="space-y-6">
              <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto"></div>
              <h1 className="text-3xl font-bold">Se procesează plata...</h1>
              <p className="text-gray-600">Așteptăm confirmarea plății.</p>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-green-600">Plată acceptată!</h1>
              <p className="text-gray-600 text-lg">
                Comanda ta a fost plasată cu succes. Vei primi o confirmare pe email în curând.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-semibold mb-4">Pași următori:</h2>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Confirmare email trimisă</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Comanda intră în producție</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Livrare în 3-5 zile lucrătoare</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/produse" className="btn-primary inline-flex items-center justify-center">
                  Continuă cumpărăturile
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                  Contactează-ne
                </Link>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-red-600">Plata a eșuat</h1>
              <p className="text-gray-600 text-lg">
                Nu am putut procesa plata. Te rugăm să încerci din nou sau să contactezi suportul.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cos" className="btn-primary inline-flex items-center justify-center">
                  Încearcă din nou
                </Link>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
                  Contactează suportul
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  )
}
