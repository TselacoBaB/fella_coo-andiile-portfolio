import { PolaroidCard } from "../ui/PolaroidCard";
import { Reveal } from "../ui/Reveal";

const categories = [
  ["/assets/gallery/fashion.jpg", "Fashion Looks", "Everyday style & statement moments", -2],
  ["/assets/gallery/travel.jpg", "Travel", "New places, better perspectives", 1],
  ["/assets/gallery/lifestyle.jpg", "Food & Lifestyle", "Good food, good vibes", -1],
  ["/assets/gallery/events.jpg", "Events", "Exclusive invites & special moments", 2],
  ["/assets/gallery/beauty.jpg", "Beauty", "Skincare, glam & self care", -1],
  ["/assets/gallery/travel2.jpg", "Everyday Life", "Real moments, real me", 1],
] as const;

export function CategoryGrid() {
  return (
    <section id="portfolio" className="section-wrap py-20">
      <Reveal><div className="mb-10 text-center"><p className="text-xs uppercase tracking-[.35em] text-[#e5b6a2]">A little bit of everything</p><h2 className="mt-2 font-display text-4xl uppercase tracking-[.12em] sm:text-5xl">My World</h2></div></Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(([src, title, text, rotate]) => <PolaroidCard key={title} src={src} title={title} text={text} rotate={rotate} />)}
      </div>
    </section>
  );
}
