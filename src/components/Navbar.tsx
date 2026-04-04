import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-slate-300/70 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-center px-4">
        <Link href="/" className="text-xl font-bold tracking-tighter text-blue-600">
          Theuso.
        </Link>
      </nav>
    </header>
  );
}