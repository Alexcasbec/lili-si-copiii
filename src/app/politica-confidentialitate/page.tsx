'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Eye, Database, UserCheck } from 'lucide-react'

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Politica de confidențialitate</h1>
          
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Angajamentul nostru față de confidențialitate</h2>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <p className="text-green-800">
                La Lili și Copiii, luăm confidențialitatea datelor tale foarte în serios. 
                Această politică explică ce date colectăm, cum le folosim și cum le protejăm.
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                <strong>SC Lili și Copiii SRL</strong>, în calitate de operator de date, 
                se angajează să protejeze și să proceseze datele personale în conformitate cu 
                Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Database className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Ce date colectăm</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Date furnizate voluntar</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Nume și prenume</li>
                  <li>• Adresă de email</li>
                  <li>• Număr de telefon</li>
                  <li>• Adresă de livrare</li>
                  <li>• Date cont (la înregistrare)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Date colectate automat</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Adresă IP</li>
                  <li>• Tip și versiune browser</li>
                  <li>• Pagini vizitate și timp petrecut</li>
                  <li>• Cookie-uri și tehnologii similare</li>
                  <li>• Date de localizare ( aproximative)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Date financiare</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Detalii card (procesate securizat prin Stripe)</li>
                  <li>• Istoric comenzi</li>
                  <li>• Preferințe de plată</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">
                  Nu stocăm detaliile complete ale cardurilor tale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Eye className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Cum folosim datele tale</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Pentru servicii</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Procesarea comenzilor</li>
                    <li>• Livrarea produselor</li>
                    <li>• Facturare și plată</li>
                    <li>• Suport clienți</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Pentru marketing</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Newsletter (cu consimțământ)</li>
                    <li>• Oferte personalizate</li>
                    <li>• Promoții și reduceri</li>
                    <li>• Recomandări produse</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Pentru îmbunătățire</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Analiza traficului</li>
                    <li>• Optimizare site</li>
                    <li>• Testare A/B</li>
                    <li>• Dezvoltare servicii</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Pentru securitate</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Prevenirea fraudelor</li>
                    <li>• Protecția conturilor</li>
                    <li>• Conformitate legală</li>
                    <li>• Audit intern</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <UserCheck className="text-pink-500" size={24} />
              <h2 className="text-2xl font-semibold">Drepturile tale GDPR</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Dreptul de acces</h3>
                <p className="text-gray-600">
                  Poți solicita o copie a datelor personale pe care le deținem despre tine.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Dreptul de rectificare</h3>
                <p className="text-gray-600">
                  Poți corecta orice dată incorectă sau incompletă.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Dreptul la ștergere</h3>
                <p className="text-gray-600">
                  Poți solicita ștergerea datelor tale în anumite condiții.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Dreptul la portabilitate</h3>
                <p className="text-gray-600">
                  Poți solicita transferul datelor tale către alt furnizor de servicii.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Dreptul de opoziție</h3>
                <p className="text-gray-600">
                  Te poți opune prelucrării datelor în scopuri de marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Partajarea datelor</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Nu vindem datele tale</h3>
                <p className="text-gray-600">
                  Nu vindem, nu închiriem și nu distribuiem datele tale unor terțe părți în scopuri comerciale.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Parteneri de încredere</h3>
                <p className="text-gray-600 mb-2">
                  Partajăm datele doar cu următorii parteneri pentru a furniza servicii:
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• <strong>Stripe</strong> - procesare plăți securizate</li>
                  <li>• <strong>Fan Courier/Cargus</strong> - livrare comenzi</li>
                  <li>• <strong>Google/Meta</strong> - analytics și advertising (cu consimțământ)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Autorități legale</h3>
                <p className="text-gray-600">
                  Putem partaja datele cu autoritățile legale dacă suntem obligați prin lege.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Securitatea datelor</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale:
              </p>
              
              <ul className="space-y-1">
                <li>• Criptare SSL/TLS pentru toate conexiunile</li>
                <li>• Criptarea datelor sensibile în baza de date</li>
                <li>• Control acces strict la sisteme</li>
                <li>• Audit și monitorizare constantă</li>
                <li>• Formare regulată personal</li>
                <li>• Backup-uri securizate</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Cookie-uri</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Ce sunt cookie-urile</h3>
                <p className="text-gray-600">
                  Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău pentru a îmbunătăți experiența.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Tipuri de cookie-uri</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• <strong>Necesare</strong> - pentru funcționarea site-ului</li>
                  <li>• <strong>Funcționale</strong> - pentru preferințe și coș</li>
                  <li>• <strong>Analytics</strong> - pentru statistici anonime</li>
                  <li>• <strong>Marketing</strong> - pentru reclame personalizate</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Control cookie-uri</h3>
                <p className="text-gray-600">
                  Poți controla cookie-urile prin setările browserului sau banner-ul de consimțământ.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contact pentru drepturi GDPR</h2>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Pentru exercitarea drepturilor tale GDPR sau întrebări despre confidențialitate:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Email</h4>
                  <p className="text-gray-600">gdpr@lilisicopiii.ro</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Telefon</h4>
                  <p className="text-gray-600">+40 743 151 550</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Adresă</h4>
                  <p className="text-gray-600">
                    Strada Florilor nr. 12<br/>
                    București, Sector 2<br/>
                    Cod poștal: 021456
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Timp răspuns</h4>
                  <p className="text-gray-600">30 de zile conform GDPR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">Modificări ale politicii</h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Putem actualiza această politică periodic. Modificările vor fi publicate pe site 
                și, pentru schimbări semnificative, te vom notifica prin email.
              </p>
              
              <p className="font-semibold">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
