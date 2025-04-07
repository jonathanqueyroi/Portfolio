// scripts/create-admin.js

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const readline = require('readline');

const prisma = new PrismaClient();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  console.log('Création d\'un utilisateur administrateur');
  
  rl.question('Nom d\'utilisateur: ', (username) => {
    rl.question('Email: ', (email) => {
      rl.question('Mot de passe: ', async (password) => {
        try {
          // Hashage du mot de passe
          const hashedPassword = await bcrypt.hash(password, 10);
          
          // Création de l'utilisateur
          const user = await prisma.user.create({
            data: {
              username,
              email,
              password: hashedPassword
            }
          });
          
          console.log(`Utilisateur créé avec succès: ${user.username}`);
        } catch (error) {
          console.error('Erreur lors de la création de l\'utilisateur:', error);
        } finally {
          await prisma.$disconnect();
          rl.close();
        }
      });
    });
  });
}

main();