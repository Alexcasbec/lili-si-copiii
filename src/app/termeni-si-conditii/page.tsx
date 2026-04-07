'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, Shield, Users, CreditCard } from 'lucide-react'

export default function TermeniSiConditiiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Termeni și condiții</h1>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Generalități</h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Accesul și utilizarea site-ului <strong>lilisicopiii.ro</strong> sunt supuse acestor termeni și condiții. 
                Utilizarea site-ului implică acceptarea necondiționată a acestor termeni.
              </p>
              
              <p>
                <strong>SC Lili și Copiii SRL</strong>, cu sediul în Strada Florilor nr. 12, București, Sector 2, 
                CIF: RO12345678, este operatorul acestui site și deținătorul drepturilor asupra conținutului.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Serviciile oferite</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Produse și servicii</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Vânzare de îmbrăcăminte handmade pentru copii</li>
                  <li>• Consultanță în alegerea produselor</li>
                  <li>• Livrare națională</li>
                  <li>• Suport clienți</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Disponibilitate produse</h3>
                <p className="text-gray-600">
                  Ne rezervăm dreptul de a modifica disponibilitatea produselor fără notificare prealabilă. 
                  În cazul în care un produs comandat nu mai este disponibil, vom contacta clientul 
                  pentru a oferi alternative sau a rambursa suma achitată.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <CreditCard className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Prețuri și plată</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Prețuri</h3>
                <p className="text-gray-600">
                  Toate prețurile afișate sunt în lei (RON) și includ TVA. Prețurile sunt valabile 
                  la momentul plasării comenzii și pot suferi modificări.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Metode de plată</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Plată online prin card (Visa, Mastercard, PayPal)</li>
                  <li>• Plată ramburs la livrare</li>
                  <li>• Ordin de plată</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Securitatea plăților</h3>
                <p className="text-gray-600">
                  Toate tranzacțiile sunt procesate prin Stripe, un furnizor certificat PCI DSS Level 1. 
                  Nu stocăm detaliile cardurilor tale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Drepturi și obligații</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Drepturile clientului</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Dreptul de retur în 30 de zile conform OUG 34/2014</li>
                  <li>• Dreptul la informații corecte despre produse</li>
                  <li>• Dreptul la protecția datelor personale</li>
                  <li>• Dreptul la garanție pentru vicii ascunse</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Obligațiile clientului</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Furnizarea datelor reale la înregistrare</li>
                  <li>• Plata produselor comandate</li>
                  <li>• Respectarea condițiilor de retur</li>
                  <li>• Utilizarea site-ului în scopuri legale</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Proprietate intelectuală</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Conținutul acestui site (texte, imagini, design, logo) este proprietatea 
                SC Lili și Copiii SRL și este protejat de legile privind proprietatea intelectuală.
              </p>
              
              <p>
                Este interzisă copierea, distribuirea, modificarea sau utilizarea conținutului 
                fără acordul scris al titularului drepturilor.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Limitarea răspunderii</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                SC Lili și Copiii SRL nu este responsabilă pentru daune directe sau indirecte 
                rezultate din utilizarea site-ului, inclusiv dar fără a se limita la: pierderea 
                datelor, întreruperea serviciilor, viruși informatici.
              </p>
              
              <p>
                Ne străduim să menținem site-ul funcțional și actualizat, dar nu garantăm 
                disponibilitatea permanentă a serviciilor.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Litigii</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Orice neînțelegere va fi rezolvată pe cale amiabilă. În cazul în care acest lucru 
                nu este posibil, litigiile vor fi soluționate de instanțele judecătorești românești 
                competente.
              </p>
              
              <p>
                Pentru soluționarea alternativă a litigiilor online, puteți accesa platforma 
                European Online Dispute Resolution (ODR).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Modificarea termenilor</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                Modificările devin aplicabile odată cu publicarea pe site.
              </p>
              
              <p className="font-semibold">
                Acești termeni și condiții au fost actualizați la data de {new Date().toLocaleDateString('ro-RO')}.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
