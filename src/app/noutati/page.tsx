'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Star, Heart } from 'lucide-react'

export default function NoutatiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Noutăți</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <Heart className="text-pink-500" size={48} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>15 Martie 2026</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">Colecția de primăvară 2026</h2>
                <p className="text-gray-600 mb-4">
                  Descoperă noua colecție de primăvară cu materiale organice și culori vibrate. 
                  Hăinuțe confortabile pentru zilele însorite.
                </p>
                <button className="text-pink-500 hover:text-pink-600 font-medium">
                  Citește mai mult →
                </button>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <Star className="text-green-500" size={48} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>1 Martie 2026</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">Certificare GOTS obținută</h2>
                <p className="text-gray-600 mb-4">
                  Suntem mândri să anunțăm certificarea Global Organic Textile Standard pentru 
                  toate produsele noastre din bumbac organic.
                </p>
                <button className="text-pink-500 hover:text-pink-600 font-medium">
                  Citește mai mult →
                </button>
              </div>
            </article>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Promoții curente</h2>
            
            <div className="space-y-4">
              <div className="border border-pink-200 rounded-xl p-6 bg-pink-50">
                <h3 className="font-semibold text-pink-800 mb-2">Lansare colecție primăvară</h3>
                <p className="text-pink-700 mb-3">
                  -20% la toate produsele noi din colecția de primăvară
                </p>
                <div className="flex items-center gap-2 text-sm text-pink-600">
                  <Calendar size={16} />
                  <span>Valabil până pe 31 Martie 2026</span>
                </div>
              </div>

              <div className="border border-green-200 rounded-xl p-6 bg-green-50">
                <h3 className="font-semibold text-green-800 mb-2">Transport gratuit</h3>
                <p className="text-green-700 mb-3">
                  Livrare gratuită la comenzi peste 200 lei
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Star size={16} />
                  <span>Ofertă permanentă</span>
                </div>
              </div>

              <div className="border border-purple-200 rounded-xl p-6 bg-purple-50">
                <h3 className="font-semibold text-purple-800 mb-2">Abonează-te la newsletter</h3>
                <p className="text-purple-700 mb-3">
                  Primești 10% reducere la prima comandă
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <Heart size={16} />
                  <span>Reducere unică</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Evenimente viitoare</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold">APR</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Târg de produse handmade</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Participăm la târgul de produse handmade din Băneasa
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>25-27 Aprilie 2026</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">MAI</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Atelier deschis</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Vizitează atelierul nostru și vezi cum creăm hăinuțele
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>15 Mai 2026</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">IUN</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ziua copilului</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Reduceri speciale și cadouri pentru Ziua Copilului
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    <span>1 Iunie 2026</span>
                  </div>
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
