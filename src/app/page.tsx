'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Heart, Star, Truck, Shield, Leaf } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrderModal from '@/components/OrderModal'
import { featuredProducts } from '@/lib/store-products'
import { addItemToCart } from '@/lib/cart'

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedProductName, setSelectedProductName] = useState('')

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsImageModalOpen(true)
  }

  const handleAddToCart = (product: (typeof featuredProducts)[number]) => {
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const openOrderModal = (productName: string) => {
    setSelectedProductName(productName)
    setIsOrderModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Hăinuțe handmade cu{' '}
                  <span className="text-gradient">dragoste</span>{' '}
                  pentru cei mici
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Descoperă colecția noastră de îmbrăcăminte sustenabilă, creată manual cu materiale naturale pentru confortul și sănătatea copilului tău.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/categorie/bebelusi/salopete" className="btn-primary inline-flex items-center justify-center gap-2">
                    Explorează colecția
                    <ArrowRight size={20} />
                  </Link>
                  <Link href="/despre-noi" className="btn-secondary inline-flex items-center justify-center">
                    Povestea noastră
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/images/hero-baby-new.jpg" 
                  alt="Bebeluși fericiți în hăinuțe Lili și Copiii"
                  width={1000}
                  height={1000}
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="mt-4 ml-2 md:ml-0 bg-white rounded-2xl shadow-lg p-4 inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">100% Natural</p>
                    <p className="text-sm text-gray-600">Materiale organice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-pink-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Handmade cu iubire</h3>
                <p className="text-gray-600 text-sm">Fiecare piesă este creată manual cu atenție la detalii</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">100% sustenabil</h3>
                <p className="text-gray-600 text-sm">Materiale organice și procese ecologice</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Livrare rapidă</h3>
                <p className="text-gray-600 text-sm">Transport gratuit pentru comenzi peste 200 lei</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Calitate premium</h3>
                <p className="text-gray-600 text-sm">Materiale certificate și testate pentru siguranță</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Explorează categoriile</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Găsește hăinuțele perfecte pentru fiecare moment special din copilăria celui mic
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/categorie/bebelusi/salopete" className="group card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/products/set-nou-nascut.jpg" 
                    alt="Haine pentru bebeluși"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                  />
                  <h3 className="absolute bottom-4 left-4 text-gray-800 text-2xl font-bold bg-white/90 px-3 py-1 rounded-lg">Bebeluși</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">0-24 luni</p>
                  <p className="text-sm text-gray-500">Body-uri, salopete, costumașe și accesorii din cele mai fine materiale</p>
                </div>
              </Link>

              <Link href="/categorie/fete/rochii" className="group card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/products/fete-rosu.jpg" 
                    alt="Haine pentru fete"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                  />
                  <h3 className="absolute bottom-4 left-4 text-gray-800 text-2xl font-bold bg-white/90 px-3 py-1 rounded-lg">Fete</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">2-12 ani</p>
                  <p className="text-sm text-gray-500">Rochii, fuste, bluze și seturi adorabile pentru micile prințese</p>
                </div>
              </Link>

              <Link href="/categorie/baieti/camasi" className="group card-hover bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/products/camasa-baieti.jpg" 
                    alt="Haine pentru băieți"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                  />
                  <h3 className="absolute bottom-4 left-4 text-gray-800 text-2xl font-bold bg-white/90 px-3 py-1 rounded-lg">Băieți</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">2-12 ani</p>
                  <p className="text-sm text-gray-500">Cămăși, pantaloni, tricouri și seturi confortabile pentru băieței energici</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Produse recomandate</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Produse postate pe Instagram și disponibile la comandă direct în magazin
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group card-hover bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative cursor-pointer" onClick={() => openImageModal(product.image)}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={1000}
                      className="w-full h-64 object-contain hover:opacity-95 transition-opacity bg-gray-50"
                    />
                    <span className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      La comandă
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 group-hover:text-pink-500 transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">Instagram + magazin</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Termen: {product.leadTime}</p>
                    <p className="text-lg font-bold text-pink-600">{product.price} lei</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <button
                        className="btn-secondary"
                        onClick={() => handleAddToCart(product)}
                      >
                        Adaugă în coș
                      </button>
                      <button
                        className="btn-primary"
                        onClick={() => openOrderModal(product.name)}
                      >
                        Comandă
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/produse" className="btn-primary inline-flex items-center gap-2">
                Vezi toate produsele
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/about-atelier.jpg"
                  alt="Atelier Lili și Copiii"
                  width={1000}
                  height={800}
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Povestea Lili și Copiii</h2>
                <p className="text-gray-600 mb-4">
                  Totul a început cu dorința de a oferi copilului meu cele mai bune și naturale hăinuțe. 
                  Astfel s-a născut Lili și Copiii, un brand dedicat creării de îmbrăcăminte handmade, 
                  100% sustenabilă și sigură pentru pielea sensibilă a celor mici.
                </p>
                <p className="text-gray-600 mb-6">
                  Fiecare piesă este creată cu dragoste în atelierul nostru din București, 
                  folosind doar materiale certificate organice și vopsuri naturale.
                </p>
                <Link href="/despre-noi" className="btn-primary inline-flex items-center gap-2">
                  Descoperă mai mult
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fii la curent cu noutățile
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Abonează-te la newsletter și primești 10% reducere la prima comandă,
                plus acces exclusiv la noi colecții și promoții.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const email = formData.get('email') as string
                
                try {
                  const response = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                  })
                  
                  const data = await response.json()
                  
                  if (response.ok) {
                    alert(data.message)
                    ;(e.target as HTMLFormElement).reset()
                  } else {
                    alert(data.error)
                  }
                } catch (error) {
                  alert('Eroare la abonare. Încearcă din nou.')
                }
              }}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Adresa ta de email"
                  required
                  className="flex-1 px-6 py-3 rounded-full focus:outline-none"
                />
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Abonare
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={() => setIsImageModalOpen(false)}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage}
              alt="Produs mărit"
              width={1200}
              height={1600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productName={selectedProductName}
      />

      <Footer />
    </div>
  )
}
