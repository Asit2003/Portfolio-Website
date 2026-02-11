import Link from "next/link";
import { NeuralScene } from "@/components/three-d/neural-scene";
import { portfolioData } from "@/lib/portfolio-data";

export default function HomePage(): JSX.Element {
  return (
    <section className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-2 text-accent">AI Engineer Portfolio</p>
          <h1 className="mb-4 text-4xl font-bold">{portfolioData.name}</h1>
          <p className="text-slate-300">{portfolioData.summary}</p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects" className="rounded bg-accent px-4 py-2 font-semibold text-slate-900">View Projects</Link>
            <Link href="/contact" className="rounded border border-slate-500 px-4 py-2">Contact</Link>
          </div>
        </div>
        <NeuralScene />
      </div>
      <div className="glass p-6">
        <h2 className="section-title">Featured Work</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.projects.slice(0, 4).map((project) => (
            <article key={project.title} className="rounded border border-slate-700 p-4">
              <h3 className="font-semibold text-accent">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
