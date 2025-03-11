import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-200">Jonathan</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 transition cursor-pointer">Projets</li>
          <li className="hover:text-gray-400 transition cursor-pointer">Compétences</li>
          <li className="hover:text-gray-400 transition cursor-pointer">Contact</li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
        <div className="bg-gray-800 shadow-lg rounded-2xl p-10 max-w-3xl">
          <Image 
            src="/profile.jpg" 
            alt="Profile Picture" 
            width={120} 
            height={120} 
            className="rounded-full mx-auto border-4 border-gray-600"
          />
          <h2 className="text-5xl font-bold mt-6 text-gray-100">Création de produits digitaux & expériences</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Collaborons ensemble pour concevoir des interfaces modernes et performantes.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition">
            Voir mes projets
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900 text-center">
        <h3 className="text-3xl font-semibold text-gray-200">Mes compétences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold text-gray-100">Développement Web</h4>
            <p className="text-gray-400">Création d'interfaces modernes et performantes.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold text-gray-100">UI/UX Design</h4>
            <p className="text-gray-400">Expérience utilisateur intuitive et efficace.</p>
          </div>
          <div className="p-6 bg-gray-800 shadow-md rounded-lg hover:bg-gray-700 transition">
            <h4 className="text-xl font-bold text-gray-100">Optimisation & Performance</h4>
            <p className="text-gray-400">Amélioration de la vitesse et accessibilité des sites.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 text-center">
        <h3 className="text-3xl font-semibold text-gray-200">Discutons de votre projet</h3>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition">
            Email Me
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold hover:bg-gray-700 transition">
            WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-gray-900">
        © 2025 Jonathan - Tous droits réservés.
      </footer>
    </div>
  );
}
