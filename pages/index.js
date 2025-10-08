export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-center text-white">
      <img
        src="/logo.svg"
        alt="PadelMatch Sync Logo"
        className="w-48 mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">🚧 PadelMatch Sync está en construcción 🚧</h1>
      <p className="text-lg text-gray-400">
        Estamos preparando algo increíble para los amantes del pádel.
      </p>
      <p className="text-sm text-gray-500 mt-4">
        Síguenos y vuelve pronto para descubrir más.
      </p>
    </div>
  );
}
