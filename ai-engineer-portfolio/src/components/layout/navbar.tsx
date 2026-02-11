import Link from "next/link";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/experience", "Experience"],
  ["/contact", "Contact"]
] as const;

export function Navbar(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/60 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-accent">Asit Ghosh</Link>
        <ul className="flex gap-4 text-sm text-slate-300">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="hover:text-accent transition-colors">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
