import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white text-center">
      <div className="flex-grow flex flex-col items-center justify-center px-6">
        <motion.img
          src="/logo.svg"
          alt="PadelMatch Sync Logo"
          className="w-40 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
            filter: [
              "drop-shadow(0 0 0px #00ffcc)",
              "drop-shadow(0 0 12px #00ffcc)",
              "drop-shadow(0 0 0px #00ffcc)"
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          🚧 PadelMatch Sync está en construcción 🚧
        </motion.h1>

        <motion.p
          className="text-lg text-gray-400 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Pronto podrás encontrar tu pareja de pádel ideal.
        </motion.p>
      </div>

      <footer className="py-4 text-sm text-gray-600 border-t border-gray-800 w-full">
        © 2025 <span className="text-white font-semibold">PadelMatch Sync</span> — Coming soon
      </footer>
    </div>
  );
}
