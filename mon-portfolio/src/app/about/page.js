// pages/about.js
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-16">
      <Head>
        <title>À propos | Jonathan Queyroi</title>
        <meta name="description" content="En savoir plus sur Jonathan Queyroi, ingénieur en informatique industrielle et électronique" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">À propos de moi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Qui suis-je ?</h2>
            <p className="text-gray-300 mb-4">
              Ingénieur en informatique industrielle et électronique, spécialisé en développement full-stack et conception d'interfaces UI/UX.
              Je possède une expérience confirmée en gestion de projet, avec une expertise dans l'optimisation des processus industriels via des solutions numériques.
            </p>
            <p className="text-gray-300 mb-4">
              Actuellement en apprentissage chez Safran Aircraft Engines, je suis en charge du développement d'applications web et de la conception d'interfaces utilisateur.
              Ma formation à Polytech Sorbonne m'a permis d'acquérir des compétences solides en électronique et informatique industrielle.
            </p>
            <p className="text-gray-300">
              Passionné par l'innovation, la coordination d'équipes et l'intégration de nouvelles technologies pour améliorer la performance industrielle,
              je suis constamment à la recherche de nouvelles opportunités pour développer mes compétences.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Formation</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Polytech Sorbonne, Paris</p>
                  <p className="text-sm text-gray-400">Diplôme d'Ingénieur en Électronique et Informatique Industrielle</p>
                  <p className="text-sm text-gray-400">2022 - 2025</p>
                </li>
                <li>
                  <p className="font-medium">Université Paris-Saclay, Evry</p>
                  <p className="text-sm text-gray-400">Licence 3 Électronique, Automatique et Traitement de l'Information</p>
                  <p className="text-sm text-gray-400">2021 - 2022</p>
                </li>
                <li>
                  <p className="font-medium">Université Paris-Saclay, Evry</p>
                  <p className="text-sm text-gray-400">DUT Génie Électrique et Informatique Industrielle</p>
                  <p className="text-sm text-gray-400">2019 - 2021</p>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-blue-400">Passions</h3>
              <ul className="text-gray-300">
                <li>✈️ Aviation & Voyages internationaux</li>
                <li>🏎️ Sports mécaniques (Formula 1, Moto GP)</li>
                <li>🏃‍♂️ Activités sportives (Course à pied, cyclisme, musculation)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}