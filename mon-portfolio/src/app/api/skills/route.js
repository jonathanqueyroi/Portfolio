// src/app/api/skills/route.js

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// GET: Récupérer toutes les compétences
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const skills = await prisma.skill.findMany({
      where: category ? { category } : {},
      orderBy: { order: 'asc' }
    });
    
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Erreur lors de la récupération des compétences:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des compétences' },
      { status: 500 }
    );
  }
}

// POST: Créer une nouvelle compétence (authentification requise)
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
    if (!data.name || !data.category) {
      return NextResponse.json(
        { error: 'Nom et catégorie sont requis' },
        { status: 400 }
      );
    }
    
    // Créer la compétence
    const skill = await prisma.skill.create({
      data: {
        name: data.name,
        category: data.category,
        level: data.level || 3,
        icon: data.icon,
        order: data.order || 0
      }
    });
    
    // Revalider le chemin pour mettre à jour la page
    revalidatePath('/skills');
    
    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de la compétence:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la compétence' },
      { status: 500 }
    );
  }
}