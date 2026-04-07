'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { RotateCcw, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function ReturPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Politica de retur</h1>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <RotateCcw className="text-pink-500" size={24} />
              Retur gratuit în 30 de zile
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Dreptul legal de retur</h3>
                  <p className="text-green-700">
                    Conform OUG 34/2014, beneficiezi de dreptul de a returna produsele în 30 de zile 
                    calendaristice de la primirea coletului, fără a fi nevoit să justifici decizia.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Condiții de retur</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Produsul să fie nefolosit, în ambalajul original</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Toate etichetele și accesoriile să fie intacte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Să nu prezinte urme de uzură sau deteriorare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Copia facturii și bonul fiscal să fie anexate</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Produse care nu pot fi returnate</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="text-red-500 mt-1" size={16} />
                    <span>Produse personalizate sau făcute la comandă</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="text-red-500 mt-1" size={16} />
                    <span>Produse sigiliate care nu pot fi returnate din motive de igienă</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="text-red-500 mt-1" size={16} />
                    <span>Produse deteriorate de client</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="text-pink-500" size={24} />
              Procesul de retur
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Solicitare retur</h4>
                  <p className="text-gray-600 text-sm">
                    Contactează-ne la contact@lilisicopiii.ro sau +40 743 151 550
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Ambalare colet</h4>
                  <p className="text-gray-600 text-sm">
                    Păstrează ambalajul original și include toate documentele
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Expediere</h4>
                  <p className="text-gray-600 text-sm">
                    Trimite coletul la adresa noastră prin orice curierat
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Rambursare</h4>
                  <p className="text-gray-600 text-sm">
                    Banii sunt returnați în 14 zile lucrătoare
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Metode de rambursare</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-3">Transfer bancar</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Rambursare în contul tău</li>
                  <li>• Durată: 2-5 zile lucrătoare</li>
                  <li>• Fără comisioane</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-3">Voucher magazin</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Valoare +10% bonus</li>
                  <li>• Valabilitate 6 luni</li>
                  <li>• Utilizare imediată</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact pentru retururi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-gray-600">contact@lilisicopiii.ro</p>
                <p className="text-sm text-gray-500">Răspuns în 24 ore</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Telefon</h4>
                <p className="text-gray-600">+40 743 151 550</p>
                <p className="text-sm text-gray-500">Luni - Vineri: 9:00 - 18:00</p>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-medium mb-2">Adresă retururi</h4>
                <p className="text-gray-600">
                  Lili și Copiii<br/>
                  Strada Florilor nr. 12<br/>
                  București, Sector 2<br/>
                  Cod poștal: 021456
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
