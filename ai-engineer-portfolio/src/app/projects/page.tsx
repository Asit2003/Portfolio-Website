import { portfolioData } from "@/lib/portfolio-data";

export default function ProjectsPage(): JSX.Element {
  return (
    <section>
      <h1 className="section-title">Projects</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <article key={project.title} className="glass p-5">
            <p className="text-xs text-glow">{project.category}</p>
            <h2 className="text-xl font-semibold text-accent">{project.title}</h2>
            <p className="my-2 text-slate-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {project.stack.map((tech) => <span key={tech} className="rounded bg-slate-800 px-2 py-1">{tech}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
