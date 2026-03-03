import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Nav({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const linkClass = ({ isActive }) =>
    `font-body text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${
      isActive ? 'text-sepia' : 'text-ink hover:text-sepia'
    }`

  return (
    <>
      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'bg-canvas/96 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl tracking-[0.35em] uppercase text-ink hover:text-sepia transition-colors duration-300"
          >
            Ask
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink to="/" end className={linkClass}>
              Works
            </NavLink>
            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline font-body text-[11px] tracking-[0.22em] uppercase text-ink hover:text-sepia transition-colors duration-300"
            >
              Instagram ↗
            </a>

            <button
              onClick={onCartOpen}
              className="font-body text-[11px] tracking-[0.22em] uppercase text-ink hover:text-sepia transition-colors duration-300"
            >
              Bag ({cartCount})
            </button>

            {/* Hamburger */}
            <button
              className="relative md:hidden w-5 h-[13px] shrink-0"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`absolute left-0 w-full h-px bg-ink transition-all duration-300 ${
                  mobileOpen ? 'top-1/2 rotate-45 -translate-y-1/2' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-ink top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-full h-px bg-ink transition-all duration-300 ${
                  mobileOpen ? 'top-1/2 -rotate-45 -translate-y-1/2' : 'bottom-0'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 bg-canvas flex flex-col items-center justify-center gap-10 transition-opacity duration-400 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <NavLink
          to="/"
          end
          className="font-display text-5xl text-ink hover:text-sepia transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          Works
        </NavLink>
        <NavLink
          to="/shop"
          className="font-display text-5xl text-ink hover:text-sepia transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className="font-display text-5xl text-ink hover:text-sepia transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          About
        </NavLink>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-3xl text-sepia hover:text-ink transition-colors mt-4"
          onClick={() => setMobileOpen(false)}
        >
          Instagram ↗
        </a>
      </div>
    </>
  )
}
