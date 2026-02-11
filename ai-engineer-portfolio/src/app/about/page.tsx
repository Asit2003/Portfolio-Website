import { portfolioData } from "@/lib/portfolio-data";

export default function AboutPage(): JSX.Element {
  return (
    <section className="space-y-6">
      <h1 className="section-title">About</h1>
      <p className="glass p-5 text-slate-200">{portfolioData.summary}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass p-5">
          <h2 className="mb-3 text-xl font-semibold">Education</h2>
          {portfolioData.education.map((ed) => (
            <div key={ed.degree}>
              <p className="font-medium">{ed.degree}</p>
              <p className="text-slate-300">{ed.institution}</p>
              <p className="text-sm text-slate-400">{ed.period}</p>
            </div>
          ))}
        </div>
        <div className="glass p-5">
          <h2 className="mb-3 text-xl font-semibold">Certifications</h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-300">
            {portfolioData.certifications.map((cert) => <li key={cert}>{cert}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
