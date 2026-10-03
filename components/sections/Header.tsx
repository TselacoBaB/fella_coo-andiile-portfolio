export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3">
      <nav className="mx-auto flex max-w-6xl items-center justify-center gap-3 rounded-full border border-white/15 bg-[#f2c9b8]/90 px-4 py-3 text-[11px] font-semibold tracking-[.16em] text-[#351915] shadow-lg backdrop-blur-md sm:gap-7 sm:px-7 sm:text-xs">
        {[["HOME", "#home"], ["PORTFOLIO", "#portfolio"], ["BRAND COLLABS", "#collabs"], ["ABOUT", "#about"], ["CONTACT", "#contact"]].map(([label, href]) => (
          <a key={href} href={href} className="transition-opacity hover:opacity-60">{label}</a>
        ))}
      </nav>
    </header>
  );
}
