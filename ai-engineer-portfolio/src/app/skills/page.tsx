import { portfolioData } from "@/lib/portfolio-data";

export default function SkillsPage(): JSX.Element {
  const sections = Object.entries(portfolioData.skills);
  return (
    <section className="space-y-6">
      <h1 className="section-title">Skills & Expertise</h1>
      {sections.map(([title, values]) => (
        <div key={title} className="glass p-5">
          <h2 className="mb-3 text-lg font-semibold capitalize">{title.replace("_", " ")}</h2>
          <div className="flex flex-wrap gap-2">
            {values.map((skill) => <span key={skill} className="rounded bg-slate-800 px-3 py-1 text-sm">{skill}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
}
