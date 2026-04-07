'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Truck, Clock, MapPin, Shield } from 'lucide-react'

export default function LivrarePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Livrare</h1>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Metode de livrare</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="text-pink-500" size={24} />
                  <h3 className="text-xl font-semibold">Fan Courier</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Livrare în 24-48 ore</li>
                  <li>• Cost: 20 lei</li>
                  <li>• Gratuit pentru comenzi peste 200 lei</li>
                  <li>• Tracking online</li>
                </ul>
                <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
                  Cea mai rapidă metodă de livrare
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-pink-500" size={24} />
                  <h3 className="text-xl font-semibold">Cargus</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Livrare în 2-3 zile</li>
                  <li>• Cost: 18 lei</li>
                  <li>• Gratuit pentru comenzi peste 250 lei</li>
                  <li>• Ridicare din locker</li>
                </ul>
                <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm">
                  Opțiune economică și flexibilă
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Program de livrare</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="text-pink-500" size={20} />
                  Zile lucrătoare
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Luni - Vineri: 9:00 - 18:00</li>
                  <li>Sâmbătă: 9:00 - 14:00</li>
                  <li>Duminică: Închis</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="text-pink-500" size={20} />
                  Zone de acoperire
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• București și Ilfov</li>
                  <li>• Toate județele țării</li>
                  <li>• Acoperire națională</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Timp de procesare</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Confirmare comandă</h4>
                  <p className="text-gray-600 text-sm">
                    Primești confirmarea imediat pe email
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Producție</h4>
                  <p className="text-gray-600 text-sm">
                    1-3 zile pentru produsele handmade
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Livrare</h4>
                  <p className="text-gray-600 text-sm">
                    24-48 ore pentru Fan Courier, 2-3 zile pentru Cargus
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="text-pink-500" size={24} />
              Garanția livrării
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Siguranță 100%</h4>
                <p className="text-gray-600 text-sm">
                  Toate coletele sunt asigurate și monitorizate până la livrare.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Verificare la livrare</h4>
                <p className="text-gray-600 text-sm">
                  Poți verifica produsele înainte de a semna primirea.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Notificări SMS</h4>
                <p className="text-gray-600 text-sm">
                  Primești alerte despre statusul livrării pe telefon.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Suport dedicat</h4>
                <p className="text-gray-600 text-sm">
                  Echipa noastră te ajută cu orice problemă de livrare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
