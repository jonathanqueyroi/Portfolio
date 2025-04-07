// src/app/api/projects/[slug]/route.js

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// GET: Récupérer un projet par son slug
export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    const project = await prisma.project.findUnique({
      where: { slug }
    });
    
    if (!project) {
      return NextResponse.json(
        { error: 'Projet non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('Erreur lors de la récupération du projet:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du projet' },
      { status: 500 }
    );
  }
}

// PUT: Mettre à jour un projet (authentification requise)
export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    // Vérifier l'authentification
    if (!session) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    const { slug } = params;
    const data = await request.json();
    
    // Vérifier si le projet existe
    const existingProject = await prisma.project.findUnique({
      where: { slug }
    });
    
    if (!existingProject) {
      return NextResponse.json(
        { error: 'Projet non trouvé' },
        { status: 404 }
      );
    }
    
    // Mettre à jour le projet
    const updatedProject = await prisma.project.update({
      where: { slug },
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        imageUrl: data.imageUrl,
        demoUrl: data.demoUrl,
        githubUrl: data.githubUrl,
        technologies: data.technologies,
        featured: data.featured,
        order: data.order
      }
    });
    
    // Revalider les chemins pour mettre à jour les pages
    revalidatePath('/projects');
    revalidatePath(`/projects/${updatedProject.slug}`);
    
    return NextResponse.json(updatedProject);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du projet:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour du projet' },
      { status: 500 }
    );
  }
}

// DELETE: Supprimer un projet (authentification requise)
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    
    // Vérifier l'authentification
    if (!session) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      );
    }
    
    const { slug } = params;
    
    // Vérifier si le projet existe
    const existingProject = await prisma.project.findUnique({
      where: { slug }
    });
    
    if (!existingProject) {
      return NextResponse.json(
        { error: 'Projet non trouvé' },
        { status: 404 }
      );
    }
    
    // Supprimer le projet
    await prisma.project.delete({
      where: { slug }
    });
    
    // Revalider les chemins pour mettre à jour les pages
    revalidatePath('/projects');
    
    return NextResponse.json({ message: 'Projet supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du projet:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression du projet' },
      { status: 500 }
    );
  }
}