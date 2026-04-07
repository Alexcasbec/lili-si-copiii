'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Tag, Clock, Gift, Star } from 'lucide-react'

export default function PromotiiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Promoții</h1>
          
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white mb-8">
            <div className="text-center">
              <Tag className="mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold mb-4">Super oferte primăvara aceasta!</h2>
              <p className="text-lg mb-6">
                Reduceri de până la 50% la produsele selectate
              </p>
              <div className="flex items-center justify-center gap-2">
                <Clock size={20} />
                <span className="font-semibold">Oferte limitate în timp</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-pink-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="text-pink-500" size={24} />
                  <h3 className="text-xl font-semibold">Pachet familie</h3>
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">-30%</div>
                <p className="text-gray-600">La 3+ produse din aceeași colecție</p>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-3">Ce include:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Salopete + body-uri + accesorii</li>
                  <li>• Coordonare perfectă</li>
                  <li>• Economie de 100+ lei</li>
                  <li>• Ambalaj cadou gratuit</li>
                </ul>
                <button className="btn-primary w-full mt-4">
                  Vezi produsele
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-green-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-green-500" size={24} />
                  <h3 className="text-xl font-semibold">Nou-născut starter</h3>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">-25%</div>
                <p className="text-gray-600">Seturi complete pentru bebeluși 0-3 luni</p>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-3">Ce include:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5 body-uri + 5 salopete</li>
                  <li>• Materiale organice certificate</li>
                  <li>• Design unisex</li>
                  <li>• Cadou perfect pentru baby shower</li>
                </ul>
                <button className="btn-primary w-full mt-4">
                  Vezi seturile
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Oferte permanente</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Tag className="text-blue-500" size={20} />
                  <h3 className="font-semibold">Transport gratuit</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  La comenzi peste 200 lei
                </p>
                <div className="bg-blue-50 text-blue-700 p-3 rounded-lg text-sm">
                  Economisești 20-25 lei la transport
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="text-purple-500" size={20} />
                  <h3 className="font-semibold">Cadou la prima comandă</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Abonează-te la newsletter
                </p>
                <div className="bg-purple-50 text-purple-700 p-3 rounded-lg text-sm">
                  Primești 10% reducere + cadou surpriză
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="text-yellow-500" size={20} />
                  <h3 className="font-semibold">Program de loialitate</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Puncte la fiecare comandă
                </p>
                <div className="bg-yellow-50 text-yellow-700 p-3 rounded-lg text-sm">
                  1 punct = 1 leu, bonus la 100 de puncte
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-green-500" size={20} />
                  <h3 className="font-semibold">Livrare express</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  În București și Ilfov
                </p>
                <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
                  Livrare în 24 ore pentru comenzi plasate până la 12:00
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Cum obții reducerile</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Adaugă produse în coș</h4>
                  <p className="text-gray-600 text-sm">
                    Alege produsele dorite și adaugă-le în coșul de cumpărături
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Aplică codul de reducere</h4>
                  <p className="text-gray-600 text-sm">
                    Introdu codul promoțional în câmpul dedicat din coș
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Finalizează comanda</h4>
                  <p className="text-gray-600 text-sm">
                    Reducerea se aplică automat la totalul comenzii
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="text-orange-500" size={24} />
              Oferte cu timp limitat
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">Flash Sale - Rochii de vară</h3>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -50%
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  Rochii de vară pentru fete 2-8 ani
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Se termină în:</span>
                  <span className="text-orange-600 font-semibold">2 zile, 14 ore</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">Clearance - Colecția toamnă</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -70%
                  </span>
                </div>
                <p className="text-gray-600 mb-3">
                  Ultimele bucăți din colecția de toamnă
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Stoc limitat:</span>
                  <span className="text-green-600 font-semibold">Doar 15 produse</span>
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
