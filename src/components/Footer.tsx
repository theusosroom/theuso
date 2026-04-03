export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900">Matheus</h3>
            <p className="text-sm text-slate-500 max-w-xs">
              Seus mods.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <span className="font-bold text-slate-900 mb-2">Legal</span>
            <a href="/termos" className="hover:underline">Termos de Uso</a>
            <a href="/privacidade" className="hover:underline">Privacidade</a>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-xs text-slate-400">
          © 2026 The Sims. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}