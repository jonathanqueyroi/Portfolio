// src/app/api/projects/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET pour récupérer les projets
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { order: 'asc' }
    });
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ error: "Erreur lors de la récupération des projets" }, { status: 500 });
  }
}

// POST pour ajouter un projet
export async function POST(request) {
  try {
    const data = await request.json();
    
    const project = await prisma.project.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        content: data.content,
        imageUrl: data.imageUrl,
        demoUrl: data.demoUrl,
        githubUrl: data.githubUrl,
        technologies: data.technologies,
        featured: data.featured || false,
        order: data.order || 0
      }
    });
    
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json({ error: "Erreur lors de la création du projet" }, { status: 500 });
  }
}