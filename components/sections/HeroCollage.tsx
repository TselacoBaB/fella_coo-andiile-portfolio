import Image from "next/image";
import { Reveal } from "../ui/Reveal";

export function HeroCollage() {
  return (
    <section id="home" className="relative flex min-h-[760px] items-center pt-28 sm:min-h-[820px]">
      <div className="section-wrap grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <div className="relative mx-auto h-[500px] w-full max-w-[470px] sm:h-[590px]">
            <div className="absolute inset-8 overflow-hidden rounded-[48%_48%_12%_12%] border border-white/10 shadow-2xl sm:inset-3">
              <Image src="/assets/gallery/hero.jpg" alt="Andiile editorial portrait" fill priority sizes="(max-width: 1024px) 90vw, 470px" className="object-cover object-center scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e1714]/45 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-2 left-0 right-0 h-28 rounded-[50%] bg-[#5d2d25]/70 blur-xl" />
            <div className="absolute -right-1 top-10 rotate-6 overflow-hidden border-8 border-[#f4d7c8] shadow-xl sm:-right-12">
              <Image src="/assets/gallery/lifestyle.jpg" alt="Lifestyle moment" width={170} height={210} className="h-44 w-36 object-cover sm:h-52 sm:w-40" />
            </div>
            <div className="absolute bottom-14 -right-4 -rotate-6 overflow-hidden border-8 border-[#f4d7c8] shadow-xl sm:-right-16">
              <Image src="/assets/gallery/travel.jpg" alt="Travel moment" width={170} height={210} className="h-44 w-36 object-cover sm:h-52 sm:w-40" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={.1} className="relative z-10">
          <p className="mb-5 text-xs uppercase tracking-[.35em] text-[#eec9b8]">Fashion • Beauty • Lifestyle • Travel</p>
          <h1 className="font-script text-7xl leading-none text-[#f5cdbd] sm:text-8xl lg:text-[8.5rem]">Andiile</h1>
          <h2 className="mt-2 max-w-xl font-display text-3xl uppercase tracking-[.12em] sm:text-5xl">Digital Creator & Lifestyle Muse</h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#f3d9ce]/80 sm:text-lg">Fashion. Beauty. Lifestyle. Real moments. Partnering with brands to create authentic, engaging and memorable content.</p>
          <a href="#contact" className="mt-8 inline-flex rounded-sm border border-[#f4c7b3] px-7 py-4 text-xs font-semibold tracking-[.22em] transition hover:bg-[#f4c7b3] hover:text-[#3a1d18]">WORK WITH ME <span className="ml-5">→</span></a>
        </Reveal>
      </div>
    </section>
  );
}
