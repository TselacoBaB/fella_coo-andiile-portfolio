import { Reveal } from "../ui/Reveal";

export function About() {
  return <section id="about" className="section-wrap py-20"><Reveal><div className="glass-line mx-auto max-w-3xl rounded-2xl p-7 text-center sm:p-10"><p className="text-xs uppercase tracking-[.3em] text-[#e4b19d]">About the creator</p><h2 className="mt-3 font-display text-3xl uppercase tracking-[.1em]">Real life, styled beautifully.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-[#f4d9cf]/75">Andiile’s content blends fashion, beauty, travel, food and everyday lifestyle moments into an editorial visual diary built for modern brands.</p></div></Reveal></section>;
}
