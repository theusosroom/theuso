import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function ContentCard({ title, description, imageUrl, link }: CardProps) {
  // Fallback para uma imagem interna ou URL absoluta garantida
  const PLACEHOLDER = "https://images.unsplash.com/photo-1560306611-996178225497?q=80&w=800&auto=format&fit=crop";

  // Validação simplificada e direta
  const getValidSrc = () => {
    if (!imageUrl || typeof imageUrl !== "string" || imageUrl.trim() === "") {
      return PLACEHOLDER;
    }
    return imageUrl;
  };

  const finalSrc = getValidSrc();

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={finalSrc}
          alt={title || "Card Image"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized={finalSrc.startsWith("https://via.placeholder") || finalSrc.includes("unsplash")}
        />
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-slate-900">{title || "Sem título"}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">{description || "Sem descrição"}</p>
        <Link
          href={link || "#"}
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Ver detalhes <span className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}