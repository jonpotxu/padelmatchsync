import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-white/10">
        <img src="/logo.svg" alt="PadelMatch Sync" className="w-28" />
        <nav className="space-x-6 text-sm font-medium">
          <a href="#features" className="hover:text-emerald-400">Características</a>
          <a href="#about" className="hover:text-emerald-400">Sobre nosotros</a>
          <a href="#contact" className="hover:text-emerald-400">Contacto</a>
        </nav>
      </header>

      {/* Hero section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Encuentra tu pareja de pádel ideal 🎾
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Conecta con jugadores de tu nivel, forma parejas compatibles y disfruta del juego sin complicaciones.
        </motion.p>
        <motion.a
          href="#registro"
          className="mt-10 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-2xl shadow-lg transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Regístrate gratis
        </motion.a>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-white/10">
        © 2025 PadelMatch Sync — Tu compañero ideal de pádel
      </footer>
    </div>
  );
}
