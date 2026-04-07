'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit2, Trash2, Save, X, Upload, Package, DollarSign, Users, FileText, Mail, LogOut } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  category: string
  subcategory: string
  stock: number
  description: string
  images: string[]
  sizes?: string[]
  colors?: string[]
}

interface StaticPage {
  slug: string
  title: string
  content: string
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('products')
  const [products, setProducts] = useState<Product[]>([])
  const [pages, setPages] = useState<StaticPage[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [editingPage, setEditingPage] = useState<StaticPage | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      // Load products from localStorage
      const storedProducts = localStorage.getItem('lili_products')
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts))
      }
      
      // Load static pages
      const staticPages: StaticPage[] = [
        { slug: 'despre-noi', title: 'Despre Noi', content: 'Conținut despre noi...' },
        { slug: 'contact', title: 'Contact', content: 'Informații de contact...' },
        { slug: 'livrare', title: 'Livrare', content: 'Informații livrare...' },
        { slug: 'retur', title: 'Retur', content: 'Politica de retur...' },
      ]
      setPages(staticPages)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const saveProduct = (product: Product) => {
    const updatedProducts = editingProduct 
      ? products.map(p => p.id === product.id ? product : p)
      : [...products, { ...product, id: Date.now().toString() }]
    
    setProducts(updatedProducts)
    localStorage.setItem('lili_products', JSON.stringify(updatedProducts))
    setEditingProduct(null)
  }

  const deleteProduct = (productId: string) => {
    const updatedProducts = products.filter(p => p.id !== productId)
    setProducts(updatedProducts)
    localStorage.setItem('lili_products', JSON.stringify(updatedProducts))
  }

  const savePage = (page: StaticPage) => {
    const updatedPages = editingPage 
      ? pages.map(p => p.slug === page.slug ? page : p)
      : [...pages, page]
    
    setPages(updatedPages)
    setEditingPage(null)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && editingProduct) {
      // For demo purposes, simulate upload with file names
      const newImages = Array.from(files).map(file => `/products/${file.name}`)
      setEditingProduct({
        ...editingProduct,
        images: [...editingProduct.images, ...newImages]
      })
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Se încarcă...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Panou Administrare</h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'products', label: 'Produse', icon: Package },
              { id: 'pages', label: 'Pagini Statice', icon: FileText },
              { id: 'orders', label: 'Comenzi', icon: Users },
              { id: 'newsletter', label: 'Newsletter', icon: Mail },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Management Produse</h2>
              <button
                onClick={() => setEditingProduct({
                  id: '',
                  name: '',
                  price: 0,
                  category: '',
                  subcategory: '',
                  stock: 0,
                  description: '',
                  images: [],
                  sizes: [],
                  colors: []
                })}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Adaugă Produs
              </button>
            </div>

            {/* Products List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingProduct(product)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{product.category} / {product.subcategory}</p>
                  <p className="text-xl font-bold mb-2">{product.price} RON</p>
                  <p className="text-sm text-gray-500">Stoc: {product.stock}</p>
                </div>
              ))}
            </div>

            {/* Edit Product Modal */}
            {editingProduct && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">
                      {editingProduct.id ? 'Editează Produs' : 'Adaugă Produs Nou'}
                    </h3>
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nume Produs</label>
                      <input
                        type="text"
                        value={editingProduct.name}
                        onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preț (RON)</label>
                        <input
                          type="number"
                          value={editingProduct.price}
                          onChange={(e) => setEditingProduct({...editingProduct, price: Number(e.target.value)})}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stoc</label>
                        <input
                          type="number"
                          value={editingProduct.stock}
                          onChange={(e) => setEditingProduct({...editingProduct, stock: Number(e.target.value)})}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Categorie</label>
                        <input
                          type="text"
                          value={editingProduct.category}
                          onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subcategorie</label>
                        <input
                          type="text"
                          value={editingProduct.subcategory}
                          onChange={(e) => setEditingProduct({...editingProduct, subcategory: e.target.value})}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Descriere</label>
                      <textarea
                        value={editingProduct.description}
                        onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Imagini</label>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                      <div className="mt-2 flex flex-wrap gap-2">
                        {editingProduct.images.map((image, index) => (
                          <div key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {image}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Anulează
                    </button>
                    <button
                      onClick={() => saveProduct(editingProduct)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Salvează
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pages Tab */}
        {activeTab === 'pages' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Management Pagini Statice</h2>
            </div>

            <div className="space-y-4">
              {pages.map((page) => (
                <div key={page.slug} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">{page.title}</h3>
                    <button
                      onClick={() => setEditingPage(page)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 line-clamp-3">{page.content}</p>
                </div>
              ))}
            </div>

            {/* Edit Page Modal */}
            {editingPage && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Editează Pagina: {editingPage.title}</h3>
                    <button
                      onClick={() => setEditingPage(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Titlu</label>
                      <input
                        type="text"
                        value={editingPage.title}
                        onChange={(e) => setEditingPage({...editingPage, title: e.target.value})}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Conținut</label>
                      <textarea
                        value={editingPage.content}
                        onChange={(e) => setEditingPage({...editingPage, content: e.target.value})}
                        rows={12}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      onClick={() => setEditingPage(null)}
                      className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Anulează
                    </button>
                    <button
                      onClick={() => savePage(editingPage)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Salvează
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Management Comenzi</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Funcționalitate de management comenzi va fi adăugată aici...</p>
            </div>
          </div>
        )}

        {/* Newsletter Tab */}
        {activeTab === 'newsletter' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Management Newsletter</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">Funcționalitate de newsletter va fi adăugată aici...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
