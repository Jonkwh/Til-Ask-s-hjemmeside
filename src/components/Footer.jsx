import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-dust/30 px-6 md:px-12 py-12 bg-canvas">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-display text-2xl tracking-[0.3em] uppercase text-ink">Ask</p>
          <p className="font-body text-[10px] tracking-wider text-sepia mt-1 uppercase">
            Original Paintings · Copenhagen
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          <Link
            to="/"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-ink hover:text-sepia transition-colors duration-300"
          >
            Works
          </Link>
          <Link
            to="/shop"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-ink hover:text-sepia transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-ink hover:text-sepia transition-colors duration-300"
          >
            About
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-ink hover:text-sepia transition-colors duration-300"
          >
            Instagram ↗
          </a>
          <a
            href="mailto:ask@example.com"
            className="font-body text-[10px] tracking-[0.2em] uppercase text-ink hover:text-sepia transition-colors duration-300"
          >
            Contact →
          </a>
        </nav>

        <p className="font-body text-[10px] tracking-wider text-dust">
          © {new Date().getFullYear()} Ask
        </p>
      </div>
    </footer>
  )
}
