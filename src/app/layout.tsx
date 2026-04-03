import type { Metadata } from "next"; // Importa a tipagem de SEO do Next.js
import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Configuração de SEO e Compartilhamento (Substitui as tags <head> do HTML)
export const metadata: Metadata = {
  title: "Theuso | Traduções e Conteúdo Personalizado",
  description: "Portfólio de projetos e mods desenvolvidos por Theuso.",
  openGraph: {
    title: "Theuso | Projetos e Mods",
    description: "Portfólio de projetos e mods desenvolvidos por Theuso.",
    url: "https://seusite.com.br",
    siteName: "Theuso",
    images: [
      {
        url: "/og-image.jpg", // A imagem que aparecerá no WhatsApp/Discord/Twitter
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
    title: "Theuso | Projetos e Mods",
    description: "Portfólio de projetos e mods desenvolvidos por Theuso.",
    images: ["/og-image.jpg"],
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