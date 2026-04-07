'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Clock, CreditCard, Package, Phone } from 'lucide-react'

export default function CumComandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Cum comanzi</h1>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Pași simpli pentru a comanda</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Alege produsele dorite</h3>
                  <p className="text-gray-600">
                    Explorează colecțiile noastre și adaugă în coș produsele preferate. 
                    Poți filtra după categorie, vârstă sau culoare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Verifică coșul de cumpărături</h3>
                  <p className="text-gray-600">
                    Revizuiește produsele selectate, ajustează cantitățile și verifică totalul comenzii.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Alege metoda de comandă</h3>
                  <p className="text-gray-600">
                    Poți comanda direct online cu plată securizată sau completează formularul de comandă
                    pentru a fi contactat de noi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Confirmare și livrare</h3>
                  <p className="text-gray-600">
                    Vei primi confirmarea comenzii pe email și produsele vor fi livrate în 3-5 zile lucrătoare.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-pink-500" size={24} />
                <h3 className="text-xl font-semibold">Plată online</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Plăți securizate prin Stripe</li>
                <li>• Carduri Visa, Mastercard, PayPal</li>
                <li>• Procesare instantă</li>
                <li>• Confirmare imediată</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-pink-500" size={24} />
                <h3 className="text-xl font-semibold">Comandă telefonică</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Sună la +40 743 151 550</li>
                <li>• Luni - Vineri: 9:00 - 18:00</li>
                <li>• Consiliere gratuită</li>
                <li>• Comandă rapidă</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Informații utile</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Package className="text-pink-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Ambalare premium</h4>
                  <p className="text-sm text-gray-600">
                    Toate produsele sunt ambalate cu grijă și protejate corespunzător.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-pink-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Timp de producție</h4>
                  <p className="text-sm text-gray-600">
                    Produsele handmade necesită 1-3 zile pentru producție.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-pink-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Suport clienți</h4>
                  <p className="text-sm text-gray-600">
                    Suntem disponibili pentru orice întrebare sau nelămurire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
