import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>PadelMatch Sync</title>
        <meta name="description" content="Encuentra tu pareja ideal de pádel, sincronizada con tu nivel y motivación." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-graphite via-[#0f1115] to-black px-6">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <img src="/logo.svg" alt="PadelMatch Sync" className="w-36 h-36" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Encuentra tu pareja ideal de pádel,<br/> 
            <span className="text-electric">sincronizada</span> con tu nivel y motivación.
          </h1>
          <p className="text-white/70 text-lg md:text-xl">
            La app inteligente que conecta jugadores compatibles para disfrutar, aprender y progresar juntos.
          </p>
          <div>
            <Link href="/registro" className="btn btn-primary text-lg md:text-xl">
              Regístrate gratis y empieza a buscar pareja ahora mismo
            </Link>
          </div>
        </div>
        <footer className="absolute bottom-4 text-xs text-white/40">
          © {new Date().getFullYear()} PadelMatch Sync
        </footer>
      </main>
    </>
  );
}
