'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrderModal from '@/components/OrderModal'
import InstagramLink from '@/components/InstagramLink'
import { madeToOrderProducts } from '@/lib/store-products'
import { addItemToCart } from '@/lib/cart'

export default function ProdusePage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedProductName, setSelectedProductName] = useState('')
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const openOrderModal = (productName: string) => {
    setSelectedProductName(productName)
    setIsOrderModalOpen(true)
  }

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsImageModalOpen(true)
  }

  const handleAddToCart = (product: (typeof madeToOrderProducts)[number]) => {
    addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Produse la comandă</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Toate produsele postate pe Instagram pot fi comandate și din magazinul online.
              Alegi produsul, completezi formularul, iar noi revenim rapid pentru confirmare.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {madeToOrderProducts.map((product) => (
                <article key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
                  <div className="relative cursor-pointer" onClick={() => openImageModal(product.image)}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={800}
                      height={1000}
                      className="w-full h-64 object-cover hover:opacity-95 transition-opacity"
                    />
                    <span className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      La comandă
                    </span>
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all flex items-center justify-center">
                      <svg className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="font-semibold text-gray-800 mb-1">{product.name}</h2>
                    <p className="text-sm text-gray-500 mb-2">{product.material}</p>
                    <p className="text-sm text-gray-500 mb-2">Mărimi: {product.sizes.join(', ')}</p>
                    <p className="text-sm text-gray-500 mb-3">Termen execuție: {product.leadTime}</p>
                    <p className="text-lg font-bold text-pink-600 mb-4">{product.price} lei</p>

                    <div className="grid grid-cols-[1fr_1fr_auto] gap-2">
                      <button
                        className="btn-secondary"
                        onClick={() => handleAddToCart(product)}
                      >
                        Adaugă în coș
                      </button>
                      <button
                        className="btn-primary flex-1"
                        onClick={() => openOrderModal(product.name)}
                      >
                        Comandă produsul
                      </button>
                      <InstagramLink
                        className="px-3 py-2 rounded-full border border-pink-200 text-pink-600 hover:bg-pink-50 transition-colors"
                        ariaLabel={`Vezi ${product.name} pe Instagram`}
                      >
                        IG
                      </InstagramLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productName={selectedProductName}
      />

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
    </div>
  )
}
