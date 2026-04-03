import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tighter text-blue-600">
          The Sims
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/projetos" className="hover:text-blue-600 transition-colors">Projetos</Link>
          <Link href="/sobre" className="hover:text-blue-600 transition-colors">Sobre</Link>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-all active:scale-95">
            Entrar
          </button>
        </div>
      </nav>
    </header>
  );
}