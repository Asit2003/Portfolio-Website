import { portfolioData } from "@/lib/portfolio-data";

export default function ExperiencePage(): JSX.Element {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Experience</h1>
      {portfolioData.experience.map((exp) => (
        <article key={`${exp.company}-${exp.role}`} className="glass p-5">
          <h2 className="text-xl font-semibold text-accent">{exp.role}</h2>
          <p className="text-slate-300">{exp.company} • {exp.location}</p>
          <p className="text-sm text-slate-400">{exp.period}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-200">
            {exp.impact.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </section>
  );
}
