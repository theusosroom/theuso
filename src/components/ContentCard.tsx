import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export function ContentCard({ title, description, imageUrl, link }: CardProps) {
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const finalSrc = isValidUrl(imageUrl) ? imageUrl : "https://via.placeholder.com/800x400?text=Imagem+Indisponivel";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={finalSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Ver detalhes <span className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}