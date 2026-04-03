import type { Metadata } from "next"; // Importa a tipagem de SEO do Next.js
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Configuração de SEO e Compartilhamento (Substitui as tags <head> do HTML)
export const metadata: Metadata = {
  title: "Theuso | Traduções e Conteúdo Personalizado",
  description: "Veja o catálogo das minhas criações para o The Sims 4, que incluem traduções de mods e conteúdos personalizados criados por mim.",
  openGraph: {
    title: "Theuso | Traduções e Conteúdo Personalizado",
    description: "Veja o catálogo das minhas criações para o The Sims 4, que incluem traduções de mods e conteúdos personalizados criados por mim.",
    url: "https://theuso.rio.br",
    siteName: "Theuso",
    images: [
      {
        url: "https://i.imgur.com/OwqNUoo.png", // A imagem que aparecerá no WhatsApp/Discord/Twitter
        width: 1200,
        height: 630,
        alt: "Capa do site Theuso",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theuso | Traduções e Conteúdo Personalizado",
    description: "Veja o catálogo das minhas criações para o The Sims 4, que incluem traduções de mods e conteúdos personalizados criados por mim.",
    images: ["https://i.imgur.com/OwqNUoo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}