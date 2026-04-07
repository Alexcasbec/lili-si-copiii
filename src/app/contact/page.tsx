'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstagramLink from '@/components/InstagramLink'
import { MapPin, Phone, Mail, Clock, Send, Heart, Star, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    subiect: '',
    mesaj: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulare trimitere formular
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitMessage('Mesajul tău a fost trimis cu succes! Îți vom răspunde în cel mai scurt timp posibil.')
    setFormData({
      nume: '',
      email: '',
      telefon: '',
      subiect: '',
      mesaj: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Contactează-ne
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Suntem aici pentru a te ajuta. Orice întrebare ai avea, nu ezita să ne contactezi.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Informații contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresă</h3>
                      <p className="text-gray-600">
                        Strada Florilor nr. 12<br />
                        Sector 2, București<br />
                        Cod poștal: 020123
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <p className="text-gray-600">
                        +40 743 151 550<br />
                        Luni - Vineri: 09:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                        contact@lilisicopiii.ro<br />
                        suport@lilisicopiii.ro
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Program</h3>
                      <p className="text-gray-600">
                        Luni - Vineri: 09:00 - 18:00<br />
                        Sâmbătă: 10:00 - 16:00<br />
                        Duminică: Închis
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold mb-4">Urmărește-ne</h3>
                  <div className="flex gap-3">
                    <InstagramLink className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors">
                      <Heart className="text-pink-600" size={20} />
                    </InstagramLink>
                    <InstagramLink className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors">
                      <Star className="text-pink-600" size={20} />
                    </InstagramLink>
                    <InstagramLink className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors">
                      <MessageCircle className="text-pink-600" size={20} />
                    </InstagramLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Trimite-ne un mesaj</h2>
                
                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-2">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        id="nume"
                        name="nume"
                        value={formData.nume}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300"
                        placeholder="Numele tău"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300"
                      placeholder="+40 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subiect" className="block text-sm font-medium text-gray-700 mb-2">
                      Subiect *
                    </label>
                    <select
                      id="subiect"
                      name="subiect"
                      value={formData.subiect}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300"
                    >
                      <option value="">Alege un subiect</option>
                      <option value="comanda">Informații comandă</option>
                      <option value="produse">Informații produse</option>
                      <option value="retur">Retur și schimb</option>
                      <option value="colaborare">Colaborare</option>
                      <option value="alta">Alt subiect</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="mesaj"
                      name="mesaj"
                      value={formData.mesaj}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300 resize-none"
                      placeholder="Cum te putem ajuta?..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Trimite mesajul
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Întrebări frecvente</h2>
                <div className="space-y-4">
                  <details className="bg-white rounded-lg shadow-sm p-6">
                    <summary className="font-semibold cursor-pointer">
                      Care sunt costurile de livrare?
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Livrarea este gratuită pentru comenzi peste 200 lei. Pentru comenzi sub 200 lei, 
                      costul de livrare este de 15 lei prin Fan Courier sau 12 lei prin Poșta Română.
                    </p>
                  </details>
                  <details className="bg-white rounded-lg shadow-sm p-6">
                    <summary className="font-semibold cursor-pointer">
                      În cât timp primesc comanda?
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Comenzile se procesează în 1-2 zile lucrătoare. Livrarea durează apoi 1-2 zile 
                      pentru Fan Courier și 3-5 zile pentru Poșta Română.
                    </p>
                  </details>
                  <details className="bg-white rounded-lg shadow-sm p-6">
                    <summary className="font-semibold cursor-pointer">
                      Pot returna produsele?
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Da, poți returna produsele în termen de 14 zile calendaristice de la primirea coletului. 
                      Produsele trebuie să fie în starea inițială, cu etichete intacte.
                    </p>
                  </details>
                  <details className="bg-white rounded-lg shadow-sm p-6">
                    <summary className="font-semibold cursor-pointer">
                      Cum îngrijesc hăinuțele?
                    </summary>
                    <p className="mt-3 text-gray-600">
                      Recomandăm spălarea la 30°C cu detergent delicat, fără înălbitor. 
                      Uscați la aer sau la temperatură joasă. Calitatea materialelor se menține excelent în timp.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Ne găsești și aici</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Harta interactivă - Strada Florilor nr. 12, București</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
