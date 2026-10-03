export function Footer() {
  return (
    <footer id="contact" className="bg-[#f2c9b8] px-5 py-8 text-[#351915]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div><p className="text-xs uppercase tracking-[.2em] opacity-60">Instagram</p><a href="https://instagram.com/andiile.mtsweni" target="_blank" rel="noreferrer" className="font-semibold hover:underline">@andiile.mtsweni</a></div>
        <div><p className="text-xs uppercase tracking-[.2em] opacity-60">TikTok</p><span className="font-semibold">11k+</span></div>
        <div><p className="text-xs uppercase tracking-[.2em] opacity-60">For collaborations</p><a href="mailto:hello@andiile.co" className="font-semibold hover:underline">DM or email</a></div>
        <a href="mailto:hello@andiile.co" className="rounded-md bg-[#4a241d] px-6 py-4 text-center text-xs font-semibold tracking-[.2em] text-[#f8e5db] transition hover:-translate-y-0.5">LET’S CONNECT →</a>
      </div>
    </footer>
  );
}
