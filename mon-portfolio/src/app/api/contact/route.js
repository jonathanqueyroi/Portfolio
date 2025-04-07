import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  console.log('API Contact: Requête reçue')
  
  try {
    const data = await request.json()
    console.log('API Contact: Données reçues:', data)
    
    // Validation basique côté serveur
    if (!data.name || data.name.trim().length < 2) {
      console.log('API Contact: Nom invalide')
      return NextResponse.json({ 
        error: 'Le nom doit contenir au moins 2 caractères' 
      }, { status: 400 })
    }
    
    if (!data.email || !data.email.includes('@')) {
      console.log('API Contact: Email invalide')
      return NextResponse.json({ 
        error: 'Email invalide' 
      }, { status: 400 })
    }
    
    if (!data.message || data.message.trim().length < 10) {
      console.log('API Contact: Message trop court')
      return NextResponse.json({ 
        error: 'Le message doit contenir au moins 10 caractères' 
      }, { status: 400 })
    }

    // Enregistrement en base de données
    console.log('API Contact: Tentative d\'enregistrement en base de données')
    const message = await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        subject: data.subject || null,  // Ajout du champ sujet
        phone: data.phone || null,
        company: data.company || null
      }
    })
    
    console.log('API Contact: Message enregistré avec succès, ID:', message.id)

    // Ici, vous pourriez ajouter le code pour envoyer un email

    return NextResponse.json({ 
      message: 'Message envoyé avec succès', 
      messageId: message.id 
    }, { status: 201 })

  } catch (error) {
    console.error('API Contact: Erreur:', error)
    return NextResponse.json({ 
      error: 'Erreur lors de l\'envoi du message' 
    }, { status: 500 })
  }
}