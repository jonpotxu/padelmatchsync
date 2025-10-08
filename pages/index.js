import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white">
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#00ffc36b_0%,transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src="/logo.svg"
          alt="PadelMatch Sync Logo"
          className="w-32 sm:w-40 md:w-48 mb-8 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 0px #00ffcc)",
              "drop-shadow(0 0 12px #00ffcc)",
              "drop-shadow(0 0 0px #00ffcc)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          🚧 PadelMatch Sync está en construcción 🚧
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-400 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Pronto podrás encontrar tu pareja de pádel ideal.
        </motion.p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs sm:text-sm text-gray-500 w-full text-center z-10">
        © 2025 <span className="text-gray-300 font-medium">PadelMatch Sync</span> — Coming soon
      </footer>
    </div>
  );
}
