import { Header } from "@/components/sections/Header";
import { HeroCollage } from "@/components/sections/HeroCollage";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { Collaborations } from "@/components/sections/Collaborations";
import { About } from "@/components/sections/About";
import { PhotoStrip } from "@/components/sections/PhotoStrip";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="portfolio-shell flowing-bg relative">
      <Header />
      <HeroCollage />
      <CategoryGrid />
      <Collaborations />
      <About />
      <PhotoStrip />
      <Footer />
    </main>
  );
}
