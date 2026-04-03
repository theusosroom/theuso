import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags?: string[];
}

export function ContentCard({
  title,
  description,
  imageUrl,
  link,
  tags = [],
}: CardProps) {
  const PLACEHOLDER =
    "https://images.unsplash.com/photo-1560306611-996178225497?q=80&w=800&auto=format&fit=crop";

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
          unoptimized={
            finalSrc.startsWith("https://via.placeholder") ||
            finalSrc.includes("unsplash")
          }
        />
      </div>

      <div className="space-y-4 p-5">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">
            {title || "Sem título"}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2">
            {description || "Sem descrição"}
          </p>
        </div>

        <Link
          href={link || "#"}
          className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          Detalhes e Download <span className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}