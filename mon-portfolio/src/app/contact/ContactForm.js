'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('')
    setLoading(true)
    console.log('Formulaire soumis')

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    
    console.log('Données du formulaire:', data)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      console.log('Statut de la réponse:', response.status)
      const result = await response.json()
      console.log('Réponse du serveur:', result)

      if (response.ok) {
        setStatus('Message envoyé avec succès !')
        e.target.reset() // Réinitialiser le formulaire
      } else {
        setError(result.error || 'Une erreur est survenue')
      }
    } catch (error) {
      console.error('Erreur lors de la soumission:', error)
      setError('Erreur lors de l\'envoi du message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2">Nom</label>
        <input 
          id="name"
          name="name" 
          required 
          placeholder="Votre nom" 
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">Email</label>
        <input 
          id="email"
          name="email" 
          type="email" 
          required 
          placeholder="Votre email" 
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">Message</label>
        <textarea 
          id="message"
          name="message" 
          required 
          placeholder="Votre message" 
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>
      {error && (
        <div className="text-red-500 bg-red-100 p-2 rounded">
          {error}
        </div>
      )}
      {status && (
        <div className="text-green-500 bg-green-100 p-2 rounded">
          {status}
        </div>
      )}
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  )
}