'use client'

import { useState } from 'react'
import { ShoppingCart, Search, Menu, X, Heart, Phone } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/lib/cart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">🌸 Produse handmade cu iubire pentru copii</span>
            <a 
              href="https://www.instagram.com/lilisicopiii/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors font-medium text-sm"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+40743151550" className="flex items-center gap-1 text-gray-600 hover:text-pink-500">
              <Phone size={16} />
              <span>+40 743 151 550</span>
            </a>
            <button className="flex items-center gap-1 text-gray-600 hover:text-pink-500">
              <Heart size={16} />
              <span>Favorite</span>
            </button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-3xl font-bold text-gradient">
            Lili și Copiii
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-pink-500 transition-colors">
                Bebeluși
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/categorie/bebelusi/salopete" className="block py-2 px-3 hover:bg-pink-50 rounded">Salopete</Link>
                <Link href="/categorie/bebelusi/bluze" className="block py-2 px-3 hover:bg-pink-50 rounded">Bluze</Link>
                <Link href="/categorie/bebelusi/costumase" className="block py-2 px-3 hover:bg-pink-50 rounded">Costumașe</Link>
                <Link href="/categorie/bebelusi/caciuli" className="block py-2 px-3 hover:bg-pink-50 rounded">Căciuli</Link>
                <Link href="/categorie/bebelusi/camasi" className="block py-2 px-3 hover:bg-pink-50 rounded">Cămăși</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-pink-500 transition-colors">
                Fete
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/categorie/fete/rochii" className="block py-2 px-3 hover:bg-pink-50 rounded">Rochii și Sarafane</Link>
                <Link href="/categorie/fete/fuste" className="block py-2 px-3 hover:bg-pink-50 rounded">Fuste</Link>
                <Link href="/categorie/fete/bluze" className="block py-2 px-3 hover:bg-pink-50 rounded">Bluze</Link>
                <Link href="/categorie/fete/pantaloni" className="block py-2 px-3 hover:bg-pink-50 rounded">Pantaloni</Link>
                <Link href="/categorie/fete/salopete" className="block py-2 px-3 hover:bg-pink-50 rounded">Salopete</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-pink-500 transition-colors">
                Băieți
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/categorie/baieti/camasi" className="block py-2 px-3 hover:bg-pink-50 rounded">Cămăși</Link>
                <Link href="/categorie/baieti/bluze" className="block py-2 px-3 hover:bg-pink-50 rounded">Bluze</Link>
                <Link href="/categorie/baieti/pantaloni" className="block py-2 px-3 hover:bg-pink-50 rounded">Pantaloni</Link>
                <Link href="/categorie/baieti/salopete" className="block py-2 px-3 hover:bg-pink-50 rounded">Salopete</Link>
                <Link href="/categorie/baieti/tricouri" className="block py-2 px-3 hover:bg-pink-50 rounded">Tricouri</Link>
              </div>
            </div>

            <Link href="/despre-noi" className="font-medium text-gray-700 hover:text-pink-500 transition-colors">
              Despre noi
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors">
              <Search size={20} />
              <span className="text-sm">Caută...</span>
            </button>
            <button className="relative p-2 hover:bg-pink-50 rounded-full transition-colors">
              <Heart size={24} />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </button>
            <Link href="/cos" className="relative p-2 hover:bg-pink-50 rounded-full transition-colors" aria-label="Coșul de cumpărături">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs min-w-5 h-5 px-1 rounded-full flex items-center justify-center">{count}</span>
            </Link>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <div>
                <button className="font-medium text-gray-700 py-2">Bebeluși</button>
                <div className="pl-4 space-y-2">
                  <Link href="/categorie/bebelusi/salopete" className="block py-1 text-gray-600">Salopete</Link>
                  <Link href="/categorie/bebelusi/bluze" className="block py-1 text-gray-600">Bluze</Link>
                  <Link href="/categorie/bebelusi/costumase" className="block py-1 text-gray-600">Costumașe</Link>
                </div>
              </div>
              <div>
                <button className="font-medium text-gray-700 py-2">Fete</button>
                <div className="pl-4 space-y-2">
                  <Link href="/categorie/fete/rochii" className="block py-1 text-gray-600">Rochii și Sarafane</Link>
                  <Link href="/categorie/fete/fuste" className="block py-1 text-gray-600">Fuste</Link>
                  <Link href="/categorie/fete/bluze" className="block py-1 text-gray-600">Bluze</Link>
                </div>
              </div>
              <div>
                <button className="font-medium text-gray-700 py-2">Băieți</button>
                <div className="pl-4 space-y-2">
                  <Link href="/categorie/baieti/camasi" className="block py-1 text-gray-600">Cămăși</Link>
                  <Link href="/categorie/baieti/bluze" className="block py-1 text-gray-600">Bluze</Link>
                  <Link href="/categorie/baieti/pantaloni" className="block py-1 text-gray-600">Pantaloni</Link>
                </div>
              </div>
              <Link href="/despre-noi" className="font-medium text-gray-700 py-2">Despre noi</Link>
              <Link href="/contact" className="font-medium text-gray-700 py-2">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
