import { Heart, Star, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import InstagramLink from '@/components/InstagramLink'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Lili și Copiii</h3>
            <p className="text-gray-600 mb-4">
              Creăm cu dragoste hăinuțe handmade pentru cei mici, din materiale sustenabile și naturale.
            </p>
            <div className="flex gap-3">
              <InstagramLink className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <Heart size={20} className="text-pink-500" />
              </InstagramLink>
              <InstagramLink className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <Star size={20} className="text-pink-500" />
              </InstagramLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Link-uri utile</h4>
            <ul className="space-y-2">
              <li><Link href="/categorie/bebelusi" className="text-gray-600 hover:text-pink-500 transition-colors">Bebeluși</Link></li>
              <li><Link href="/categorie/fete" className="text-gray-600 hover:text-pink-500 transition-colors">Fete</Link></li>
              <li><Link href="/categorie/baieti" className="text-gray-600 hover:text-pink-500 transition-colors">Băieți</Link></li>
              <li><Link href="/noutati" className="text-gray-600 hover:text-pink-500 transition-colors">Noutăți</Link></li>
              <li><Link href="/promotii" className="text-gray-600 hover:text-pink-500 transition-colors">Promoții</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Servicii clienți</h4>
            <ul className="space-y-2">
              <li><Link href="/cum-comand" className="text-gray-600 hover:text-pink-500 transition-colors">Cum comand</Link></li>
              <li><Link href="/livrare" className="text-gray-600 hover:text-pink-500 transition-colors">Livrare</Link></li>
              <li><Link href="/retur" className="text-gray-600 hover:text-pink-500 transition-colors">Retur</Link></li>
              <li><Link href="/termeni-si-conditii" className="text-gray-600 hover:text-pink-500 transition-colors">Termeni și condiții</Link></li>
              <li><Link href="/politica-confidentialitate" className="text-gray-600 hover:text-pink-500 transition-colors">Politica de confidențialitate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={18} className="text-pink-500" />
                <span>+40 743 151 550</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={18} className="text-pink-500" />
                <span>contact@lilisicopiii.ro</span>
              </div>
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin size={18} className="text-pink-500 mt-1" />
                <span>Strada Florilor nr. 12<br/>București, Sector 2</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold text-gray-800 mb-2">Abonează-te la newsletter</h5>
              <form className="flex gap-2" onSubmit={async (e) => {
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
                  placeholder="Emailul tău" 
                  required
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-300"
                />
                <button type="submit" className="btn-primary px-4 py-2">
                  Abonare
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                Primești 10% reducere la prima comandă
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 Lili și Copiii. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-semibold">Plăți securizate:</span>
                <span className="text-blue-600">Visa</span>
                <span className="text-red-600">Mastercard</span>
                <span className="text-blue-700">PayPal</span>
                <span className="text-purple-600">Stripe</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-semibold">Livrare:</span>
                <span>Fan Courier</span>
                <span>Cargus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
