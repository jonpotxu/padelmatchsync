import FormWizard from "@/components/FormWizard";

export default function Formulario() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Cuéntanos cómo juegas 🎾</h1>
        <p className="text-gray-400 mb-8">Toca para responder. Sin escribir, rápido y claro.</p>
        <FormWizard />
      </div>
    </div>
  );
}
