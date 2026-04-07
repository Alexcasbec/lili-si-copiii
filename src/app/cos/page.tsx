'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PaymentModal from '@/components/PaymentModal'
import { useCart } from '@/lib/cart'
import { useState } from 'react'

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart, clearAll } = useCart()
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const handlePaymentSuccess = () => {
    clearAll()
    // Redirect will be handled by Stripe
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Coșul tău</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <p className="text-gray-600 mb-4">Nu ai produse în coș momentan.</p>
            <Link href="/produse" className="btn-primary inline-flex items-center justify-center">
              Vezi produsele
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-white rounded-2xl shadow-sm divide-y">
              {items.map((item) => (
                <div key={item.id} className="p-4 flex gap-4 items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-pink-600 font-bold">{item.price} lei</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-1 border rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="min-w-6 text-center">{item.quantity}</span>
                    <button
                      className="px-3 py-1 border rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="text-sm text-red-500 hover:text-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Elimină
                  </button>
                </div>
              ))}
            </div>

            <aside className="bg-white rounded-2xl shadow-sm p-6 h-fit">
              <h3 className="text-xl font-semibold mb-4">Sumar comandă</h3>
              <div className="flex justify-between mb-2">
                <span>Total</span>
                <span className="font-bold text-pink-600">{total} lei</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Comanda finală se trimite prin formularul de comandă.</p>

              <div className="space-y-2">
                <button 
                  className="btn-primary w-full"
                  onClick={() => setIsPaymentModalOpen(true)}
                  disabled={items.length === 0}
                >
                  Plătește online
                </button>
                <Link href="/produse" className="btn-secondary w-full text-center block">
                  Continuă cumpărăturile
                </Link>
                <button className="btn-secondary w-full" onClick={clearAll}>
                  Golește coșul
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={total}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  )
}
