'use client'

import { useEffect, useState } from 'react'
import { X, Send } from 'lucide-react'

type OrderModalProps = {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export default function OrderModal({ isOpen, onClose, productName }: OrderModalProps) {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    email: '',
    canal: 'whatsapp',
    varsta: '',
    culoare: '',
    cantitate: '1',
    observatii: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const mesajComanda = [
      'Comandă nouă - Lili și Copiii',
      `Produs: ${productName || 'Nespecificat'}`,
      `Nume: ${formData.nume}`,
      `Telefon: ${formData.telefon}`,
      `Email: ${formData.email || 'Nespecificat'}`,
      `Vârstă: ${formData.varsta}`,
      `Culoare: ${formData.culoare}`,
      `Cantitate: ${formData.cantitate}`,
      `Observații: ${formData.observatii || 'Fără observații'}`
    ].join('\n')

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productName: productName || 'Nespecificat',
          ...formData
        })
      })

      if (!response.ok) {
        throw new Error('Nu am putut salva comanda în sistem.')
      }
    } catch {
      setSubmitMessage('A apărut o problemă la salvarea comenzii. Te rugăm să încerci din nou.')
      setIsSubmitting(false)
      return
    }

    if (formData.canal === 'whatsapp') {
      const whatsappNumber = '40743151550'
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mesajComanda)}`
      window.open(whatsappUrl, '_blank')
      setSubmitMessage('Comanda a fost pregătită și deschisă în WhatsApp.')
    } else {
      const subject = encodeURIComponent(`Comandă nouă: ${productName || 'Produs'}`)
      const body = encodeURIComponent(mesajComanda)
      const mailtoUrl = `mailto:contact@lilisicopiii.ro?subject=${subject}&body=${body}`
      window.location.href = mailtoUrl
      setSubmitMessage('Comanda a fost pregătită în aplicația de email.')
    }

    setFormData({
      nume: '',
      telefon: '',
      email: '',
      canal: 'whatsapp',
      varsta: '',
      culoare: '',
      cantitate: '1',
      observatii: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b p-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Plasează comanda</h2>
            <p className="text-sm text-gray-500">
              {productName ? `Produs selectat: ${productName}` : 'Completează detaliile și te contactăm pentru confirmare.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Închide fereastra de comandă"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          {submitMessage && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
              {submitMessage}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="nume" className="mb-1 block text-sm font-medium text-gray-700">Nume complet *</label>
              <input
                id="nume"
                name="nume"
                type="text"
                required
                value={formData.nume}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
                placeholder="Numele tău"
              />
            </div>
            <div>
              <label htmlFor="telefon" className="mb-1 block text-sm font-medium text-gray-700">Telefon *</label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                value={formData.telefon}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
                placeholder="+40 XXX XXX XXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
                placeholder="email@exemplu.ro"
              />
            </div>
            <div>
              <label htmlFor="canal" className="mb-1 block text-sm font-medium text-gray-700">Trimite comanda prin *</label>
              <select
                id="canal"
                name="canal"
                value={formData.canal}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
              >
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div>
              <label htmlFor="varsta" className="mb-1 block text-sm font-medium text-gray-700">Vârstă copil *</label>
              <select
                id="varsta"
                name="varsta"
                required
                value={formData.varsta}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
              >
                <option value="">Alege vârsta</option>
                <option value="0 ani">0 ani</option>
                <option value="1 an">1 an</option>
                <option value="2 ani">2 ani</option>
                <option value="3 ani">3 ani</option>
                <option value="4 ani">4 ani</option>
                <option value="5 ani">5 ani</option>
                <option value="6 ani">6 ani</option>
                <option value="7 ani">7 ani</option>
                <option value="8 ani">8 ani</option>
                <option value="9 ani">9 ani</option>
              </select>
            </div>
            <div>
              <label htmlFor="culoare" className="mb-1 block text-sm font-medium text-gray-700">Culoare dorită *</label>
              <input
                id="culoare"
                name="culoare"
                type="text"
                required
                value={formData.culoare}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
                placeholder="Ex: roz pudrat, crem, albastru"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cantitate" className="mb-1 block text-sm font-medium text-gray-700">Cantitate</label>
            <input
              id="cantitate"
              name="cantitate"
              type="number"
              min="1"
              value={formData.cantitate}
              onChange={handleChange}
              className="w-full max-w-[120px] rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="observatii" className="mb-1 block text-sm font-medium text-gray-700">Observații</label>
            <textarea
              id="observatii"
              name="observatii"
              rows={4}
              value={formData.observatii}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 focus:border-pink-300 focus:outline-none"
              placeholder="Detalii despre personalizare sau livrare"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-gray-200 px-5 py-2 font-medium text-gray-700 hover:bg-gray-50"
            >
              Anulează
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary inline-flex items-center gap-2"
            >
              {isSubmitting ? 'Se trimite...' : 'Trimite comanda'}
              {!isSubmitting && <Send size={18} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
