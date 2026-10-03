import { Reveal } from "../ui/Reveal";

const pillars = [
  ["◇", "Brand Partnerships", "Authentic content that connects and converts."],
  ["◫", "Fashion & Beauty", "Product features, try-ons and reviews."],
  ["◎", "Lifestyle Content", "Travel, food, wellness and everyday moments."],
  ["▥", "UGC & Campaigns", "Creative content for brands and businesses."],
];

export function Collaborations() {
  return (
    <section id="collabs" className="section-wrap py-20">
      <Reveal><div className="mb-12 text-center"><p className="text-xs uppercase tracking-[.35em] text-[#e5b6a2]">Let’s create something amazing together</p><h2 className="mt-2 font-display text-4xl uppercase tracking-[.12em] sm:text-5xl">Collaborations</h2></div></Reveal>
      <div className="grid divide-y divide-white/20 border-y border-white/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {pillars.map(([icon, title, text], i) => <Reveal key={title} delay={i * .05}><article className="px-5 py-8 text-center lg:min-h-56"><div className="text-4xl text-[#f0c6b5]">{icon}</div><h3 className="mt-5 text-sm font-semibold uppercase tracking-[.16em]">{title}</h3><p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-[#f4d9cf]/65">{text}</p></article></Reveal>)}
      </div>
    </section>
  );
}
