export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-50">
      <section className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Bem-vindo ao Matheus
        </h1>
        <p className="text-lg text-slate-600">
          Frontend na Vercel conectado diretamente ao Supabase.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Começar agora
          </button>
          <button className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-100 transition-colors">
            Saiba mais
          </button>
        </div>
      </section>
    </main>
  );
}