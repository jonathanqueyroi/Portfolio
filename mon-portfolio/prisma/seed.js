// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Création d'un utilisateur admin de test
  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      password: 'hashed_password', // Assure-toi d'utiliser bcrypt pour hasher en production
    },
  });

  // Création d'un projet de test
  const project = await prisma.project.create({
    data: {
      title: 'Mon premier projet',
      slug: 'mon-premier-projet',
      description: 'Description de mon premier projet',
      content: 'Contenu détaillé de mon projet',
      technologies: ['React', 'Next.js'],
      featured: true,
      order: 1,
    },
  });

  console.log('Données de seed insérées');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
