// src/app/api/experiences/route.js

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// GET: Récupérer toutes les expériences
export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { order: 'asc' }
    });
    
    return NextResponse.json(experiences);
  } catch (error) {
    console.error('Erreur lors de la récupération des expériences:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des expériences' },
      { status: 500 }
    );
  }
}

// POST: Créer une nouvelle expérience (authentification requise)
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    
    // Vérifier l'authentification
    if (!session) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    const data = await request.json();
    
    // Validation basique
    if (!data.company || !data.position || !data.startDate) {
      return NextResponse.json(
        { error: 'Entreprise, poste et date de début sont requis' },
        { status: 400 }
      );
    }
    
    // Créer l'expérience
    const experience = await prisma.experience.create({
      data: {
        company: data.company,
        position: data.position,
        startDate: new Date(data.startDate),
        endDate: data.endDate ? new Date(data.endDate) : null,
        current: data.current || false,
        description: data.description || '',
        technologies: data.technologies || [],
        order: data.order || 0
      }
    });
    
    // Revalider le chemin pour mettre à jour la page
    revalidatePath('/experience');
    
    return NextResponse.json(experience, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de l\'expérience:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de l\'expérience' },
      { status: 500 }
    );
  }
}