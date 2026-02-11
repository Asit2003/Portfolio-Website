import { portfolioData } from "@/lib/portfolio-data";

export default function ContactPage(): JSX.Element {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Contact</h1>
      <div className="glass p-5 text-slate-200">
        <p>Email: <a className="text-accent" href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></p>
        <p>Phone: {portfolioData.phone}</p>
        <p>Location: {portfolioData.location}</p>
      </div>
      <form className="glass grid gap-3 p-5">
        <input className="rounded bg-slate-800 p-2" placeholder="Name" />
        <input className="rounded bg-slate-800 p-2" placeholder="Email" type="email" />
        <textarea className="rounded bg-slate-800 p-2" placeholder="Message" rows={5} />
        <button className="w-fit rounded bg-accent px-4 py-2 font-semibold text-slate-900" type="button">Send Message</button>
      </form>
    </section>
  );
}
