'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrderModal from '@/components/OrderModal'
import { Heart, Filter, Grid, List } from 'lucide-react'
import { addItemToCart } from '@/lib/cart'

export default function CategoryPage() {
  const params = useParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedProductName, setSelectedProductName] = useState('')
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedImageProductName, setSelectedImageProductName] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    marime: [] as string[],
    culoare: [] as string[],
    material: [] as string[],
    pret: [0, 500] as [number, number]
  })

  const category = params.category as string
  const subcategory = params.subcategory as string

  const allProducts = [
    {
      id: 1,
      category: 'fete',
      subcategories: ['rochii', 'fuste', 'bluze'],
      name: 'Set fetițe 2 piese cu iepuraș',
      price: 179,
      originalPrice: 209,
      image: '/products/set-2-piese-corect.jpg',
      badge: 'Nou',
      rating: 4.8,
      reviews: 24,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani', '10-12 ani'],
      colors: ['Roz pudrat', 'Alb'],
      material: 'Bumbac organic 100%'
    },
    {
      id: 2,
      category: 'fete',
      subcategories: ['rochii', 'fuste'],
      name: 'Rochiță de ocazie cu dantelă',
      price: 199,
      originalPrice: 229,
      image: '/products/rochita-noua.jpg',
      badge: 'Popular',
      rating: 4.9,
      reviews: 31,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '5-6 ani'],
      colors: ['Roz', 'Lavandă', 'Alb'],
      material: 'Bumbac satinat + dantelă'
    },
    {
      id: 3,
      category: 'fete',
      subcategories: ['bluze', 'pantaloni'],
      name: 'Set galben 2 piese din muselină',
      price: 169,
      originalPrice: 199,
      image: '/products/imagine-corecta.jpg',
      badge: 'Nou',
      rating: 4.8,
      reviews: 12,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani', '10-12 ani'],
      colors: ['Galben'],
      material: 'Muselină de bumbac 100%'
    },
    {
      id: 4,
      category: 'fete',
      subcategories: ['rochii', 'bluze'],
      name: 'Set galben cu volane pentru fetițe',
      price: 169,
      originalPrice: 199,
      image: '/products/set-galben-actualizat.jpg',
      badge: 'Nou',
      rating: 4.7,
      reviews: 16,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani', '10-12 ani'],
      colors: ['Galben'],
      material: 'Muselină de bumbac 100%'
    },
    {
      id: 10,
      category: 'fete',
      subcategories: ['rochii', 'bluze'],
      name: 'Set alb elegant pentru fetițe',
      price: 169,
      originalPrice: 199,
      image: '/products/set-alb-nou.jpg',
      badge: 'Nou',
      rating: 4.9,
      reviews: 8,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani', '10-12 ani'],
      colors: ['Alb', 'Roz'],
      material: 'Bumbac organic 100%'
    },
    {
      id: 15,
      category: 'fete',
      subcategories: ['rochii', 'bluze'],
      name: 'Set elegant pentru fetițe',
      price: 189,
      originalPrice: 219,
      image: '/products/produs-recomandat-nou.jpg',
      badge: 'Popular',
      rating: 4.9,
      reviews: 22,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani', '10-12 ani'],
      colors: ['Roz', 'Alb', 'Bej'],
      material: 'Bumbac organic 100%'
    },
    {
      id: 13,
      category: 'baieti',
      subcategories: ['camasi', 'bluze'],
      name: 'Cămașă băieți elegantă',
      price: 149,
      originalPrice: 179,
      image: '/products/imagine-corecta.jpg',
      badge: 'Popular',
      rating: 4.8,
      reviews: 20,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani'],
      colors: ['Albastru', 'Alb'],
      material: 'Bumbac organic 100%'
    },
    {
      id: 14,
      category: 'baieti',
      subcategories: ['camasi', 'bluze'],
      name: 'Cămașă băieți modernă',
      price: 159,
      originalPrice: 189,
      image: '/products/produs-nou-baieti-2.jpg',
      badge: 'Nou',
      rating: 4.9,
      reviews: 10,
      sizes: ['2-3 ani', '3-4 ani', '4-5 ani', '6-7 ani', '8-9 ani'],
      colors: ['Albastru', 'Alb', 'Bej'],
      material: 'Bumbac organic 100%'
    }
  ]

  const categoryProducts = allProducts.filter((product) => product.category === category)
  const hasSubcategoryMatches = categoryProducts.some((product) => product.subcategories.includes(subcategory))
  const products = hasSubcategoryMatches
    ? categoryProducts.filter((product) => product.subcategories.includes(subcategory))
    : categoryProducts

  const getCategoryTitle = () => {
    const titles: Record<string, string> = {
      'bebelusi': 'Bebeluși',
      'fete': 'Fete',
      'baieti': 'Băieți'
    }
    return titles[category] || category
  }

  const getSubcategoryTitle = () => {
    const titles: Record<string, string> = {
      'salopete': 'Salopete',
      'bluze': 'Bluze',
      'costumase': 'Costumașe',
      'rochii': 'Rochii',
      'pantaloni': 'Pantaloni',
      'tricouri': 'Tricouri',
      'camasi': 'Cămăși',
      'fuste': 'Fuste'
    }
    return titles[subcategory] || subcategory
  }

  const handleFilterChange = (filterType: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => {
      const currentArray = prev[filterType] as string[];
      return {
        ...prev,
        [filterType]: currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  }

  const openOrderModal = (productName: string) => {
    setSelectedProductName(productName)
    setIsOrderModalOpen(true)
  }

  const openImageModal = (imageSrc: string, productName: string) => {
    setSelectedImage(imageSrc)
    setSelectedImageProductName(productName)
    setIsImageModalOpen(true)
  }

  const handleAddToCart = (product: (typeof products)[number]) => {
    addItemToCart({
      id: `${category}-${subcategory}-${product.id}`,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-500 transition-colors">Acasă</Link>
              <span>/</span>
              <span>{getCategoryTitle()}</span>
              <span>/</span>
              <span className="text-gray-800 font-medium">{getSubcategoryTitle()}</span>
            </div>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {getSubcategoryTitle()} pentru {getCategoryTitle().toLowerCase()}
                </h1>
                <p className="text-gray-600">
                  {products.length} produse disponibile
                </p>
                <p className="text-sm text-pink-600 mt-1">
                  Toate produsele sunt realizate la comandă.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors md:hidden"
                >
                  <Filter size={20} />
                  Filtre
                </button>
                
                <div className="flex items-center gap-2 border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-pink-50 text-pink-600' : 'text-gray-600'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-pink-50 text-pink-600' : 'text-gray-600'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">Filtre</h3>
                  <button
                    onClick={() => setSelectedFilters({
                      marime: [],
                      culoare: [],
                      material: [],
                      pret: [0, 500]
                    })}
                    className="text-sm text-pink-500 hover:text-pink-600"
                  >
                    Resetare
                  </button>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Mărimi</h4>
                  <div className="space-y-2">
                    {['0-3 luni', '3-6 luni', '6-9 luni', '9-12 luni', '12-18 luni', '18-24 luni'].map(size => (
                      <label key={size} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters.marime.includes(size)}
                          onChange={() => handleFilterChange('marime', size)}
                          className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                        />
                        <span className="text-sm text-gray-700">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Culoare</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Roz', 'Roșu', 'Alb', 'Bej', 'Albastru', 'Galben', 'Verde', 'Gri', 'Piersică', 'Lavandă'].map(color => (
                      <button
                        key={color}
                        onClick={() => handleFilterChange('culoare', color)}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                          selectedFilters.culoare.includes(color)
                            ? 'bg-pink-500 text-white border-pink-500'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Material</h4>
                  <div className="space-y-2">
                    {['Bumbac 100%', 'Bumbac organic 100%', 'Lână merinos 100%', 'Muselină de bumbac 100%'].map(material => (
                      <label key={material} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters.material.includes(material)}
                          onChange={() => handleFilterChange('material', material)}
                          className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500"
                        />
                        <span className="text-sm text-gray-700">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Preț</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={selectedFilters.pret[1]}
                      onChange={(e) => setSelectedFilters(prev => ({ ...prev, pret: [prev.pret[0], parseInt(e.target.value)] }))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0 lei</span>
                      <span>{selectedFilters.pret[1]} lei</span>
                    </div>
                  </div>
                </div>

                <button className="btn-primary w-full">
                  Aplică filtrele
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sorting */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Arată {products.length} produse
                </p>
                <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300">
                  <option>Sortează după popularitate</option>
                  <option>Sortează după preț: crescător</option>
                  <option>Sortează după preț: descrescător</option>
                  <option>Sortează după noutăți</option>
                  <option>Sortează după evaluare</option>
                </select>
              </div>

              {/* Products */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {products.map(product => (
                  <div key={product.id} className={`bg-white rounded-lg shadow-sm overflow-hidden card-hover ${
                    viewMode === 'list' ? 'flex gap-4' : ''
                  }`}>
                    <div className={`relative ${viewMode === 'list' ? 'w-48' : ''}`}>
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={700}
                          height={900}
                          className={`w-full h-64 ${viewMode === 'list' ? 'h-full' : ''} object-contain cursor-pointer bg-gray-50`}
                          onClick={() => openImageModal(product.image, product.name)}
                        />
                      ) : (
                        <div className={`w-full h-64 ${viewMode === 'list' ? 'h-full' : ''} bg-gray-100`} />
                      )}
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {product.badge}
                        </span>
                      )}
                      <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 hover:opacity-100 transition-opacity">
                        <Heart size={18} className="text-gray-600 hover:text-pink-500" />
                      </button>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-semibold mb-2 hover:text-pink-500 transition-colors cursor-pointer">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{product.material}</p>
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl font-bold text-pink-600">{product.price} lei</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">{product.originalPrice} lei</span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="btn-secondary" onClick={() => handleAddToCart(product)}>
                          Adaugă în coș
                        </button>
                        <button className="btn-primary" onClick={() => openOrderModal(product.name)}>
                          Comandă
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Anterior
                  </button>
                  <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                  <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Următor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setIsImageModalOpen(false)}>
          <div className="relative max-w-4xl max-h-full" onClick={(event) => event.stopPropagation()}>
            <Image
              src={selectedImage}
              alt={selectedImageProductName || 'Produs mărit'}
              width={1200}
              height={1600}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="mt-4 flex justify-center">
              <button
                className="btn-primary"
                onClick={() => {
                  setIsImageModalOpen(false)
                  openOrderModal(selectedImageProductName)
                }}
              >
                Comandă acest produs
              </button>
            </div>
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
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
    </div>
  )
}
