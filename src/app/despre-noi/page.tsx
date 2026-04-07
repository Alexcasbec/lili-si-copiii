'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstagramLink from '@/components/InstagramLink'
import { Heart, Leaf, Award, Users, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function DespreNoi() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Povestea <span className="text-gradient">Lili și Copiii</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Creăm hăinuțe handmade cu iubire, pentru ca fiecare copil să se simtă confortabil și fericit în pielea sa.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cum a început totul</h2>
                <p className="text-gray-600 mb-4">
                  Numele &quot;Lili și Copiii&quot; poartă semnătura lui Lili, croitoreasa noastră principală și inima atelierului. 
                  Fiecare model începe în mâinile ei, de la schiță la ultimul detaliu, pentru ca fiecare hăinuță să ofere eleganță discretă, confort real și grijă pentru pielea sensibilă a copiilor.
                </p>
                <p className="text-gray-600 mb-4">
                  Am realizat că părinții ca mine își doresc ce mai bun pentru copiii lor, dar opțiunile sunt limitate și adesea foarte scumpe. 
                  Așa că am început să creez propriile modele, în micul meu atelier din București.
                </p>
                <p className="text-gray-600 mb-6">
                  Astăzi, Lili și Copiii este o echipă de mame și artizani pasionați, care pun suflet în fiecare piesă pe care o creăm. 
                  Credem în calitate, sustenabilitate și, mai presus de toate, în confortul și fericirea copiilor.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Heart className="text-pink-500" size={24} />
                    <span className="font-semibold">100% Handmade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="text-green-500" size={24} />
                    <span className="font-semibold">Materiale organice</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/about-story.jpg"
                  alt="Povestea Lili și Copiii"
                  width={900}
                  height={700}
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white rounded-2xl p-6 shadow-lg">
                  <p className="text-3xl font-bold mb-1">5000+</p>
                  <p className="text-sm">Copii fericiți</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Valorile noastre</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ghidăm fiecare decizie pe baza acestor principii fundamentale
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-pink-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dragoste și grijă</h3>
                <p className="text-gray-600">
                  Fiecare hăinuță este creată cu aceeași grijă și atenție ca și cum ar fi pentru propriul copil.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-green-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustenabilitate</h3>
                <p className="text-gray-600">
                  Folosim doar materiale organice, certificate și procese prietenoase cu mediul.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calitate premium</h3>
                <p className="text-gray-600">
                  Controlăm calitatea la fiecare pas, de la materie primă până la produsul final.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunitate</h3>
                <p className="text-gray-600">
                  Construim o comunitate de părinți care își doresc ce mai bun pentru copiii lor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Procesul nostru creativ</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Design</h3>
                  <p className="text-gray-600">
                    Creăm modele confortabile și practice, inspirate din nevoile reale ale copiilor și părinților.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Producție</h3>
                  <p className="text-gray-600">
                    Fiecare piesă este croită și cusută manual în atelierul nostru, cu atenție la fiecare detaliu.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Control calitate</h3>
                  <p className="text-gray-600">
                    Verificăm fiecare produs pentru a ne asigura că respectă standardele noastre înalte de calitate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Echipa noastră</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                O echipă de mame și artizani pasionați, uniți de dragostea pentru copii
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Image
                  src="/next.svg"
                  alt="Founder"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Bacneanu Elena</h3>
                <p className="text-pink-500 mb-3">Croitoreasă</p>
                <p className="text-gray-600 text-sm">
                  Maestrul croitoreasă, cu peste 15 ani experiență în creația de hăinuțe pentru copii.
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/next.svg"
                  alt="Artizan principal"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Oana Liliana</h3>
                <p className="text-pink-500 mb-3">Artizan Principal</p>
                <p className="text-gray-600 text-sm">
                  Coase de 20 de ani și pune suflet în fiecare piesă creată în atelierul nostru.
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/next.svg"
                  alt="Manager operațiuni"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Oana Alexandru</h3>
                <p className="text-pink-500 mb-3">Manager Operațiuni</p>
                <p className="text-gray-600 text-sm">
                  Asigură că totul funcționează perfect, de la materii prime până la livrare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-400 to-purple-400">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vrei să fii parte din povestea noastră?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Alătură-te comunității noastre de părinți care aleg calitatea și sustenabilitatea pentru copiii lor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produse" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block">
                Explorează colecția
              </Link>
              <InstagramLink className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center gap-2">
                <Star size={20} />
                Urmărește-ne pe Instagram
              </InstagramLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
