import { Link } from 'react-router-dom'
import { paintings } from '../data/paintings'
import Reveal from '../components/Reveal'

const featured = paintings.filter((p) => p.featured)

export default function Home({ addToCart }) {
  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src="https://picsum.photos/seed/ask-studio-01/1920/1080"
          alt="Ask — studio"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />

        {/* Hero text — bottom aligned */}
        <div className="relative z-10 w-full px-6 md:px-12 pb-12 md:pb-20">
          <h1
            className="font-display leading-none text-canvas"
            style={{ fontSize: 'clamp(96px, 18vw, 320px)' }}
          >
            Ask
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-3">
            <p className="font-display text-xl md:text-2xl italic text-canvas/75 max-w-sm leading-snug">
              Painting the silence between things.
            </p>
            <Link
              to="/shop"
              className="font-body text-[11px] tracking-[0.22em] uppercase text-canvas border-b border-canvas/50 pb-px hover:border-canvas transition-colors duration-300 w-fit"
            >
              View Works →
            </Link>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
          <div className="w-px h-10 bg-canvas" />
        </div>
      </section>

      {/* ── Selected Works ── */}
      <section className="px-6 md:px-12 py-24 md:py-36 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-baseline justify-between mb-14 md:mb-20">
              <h2 className="font-display text-4xl md:text-6xl text-ink">Selected Works</h2>
              <Link
                to="/shop"
                className="hidden md:inline font-body text-[11px] tracking-[0.22em] uppercase text-sepia border-b border-sepia/60 pb-px hover:text-ink hover:border-ink transition-colors duration-300"
              >
                All works →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {featured.map((painting, i) => (
              <Reveal key={painting.id} delay={i * 120}>
                <article className="group">
                  {/* Image */}
                  <div className="overflow-hidden aspect-[4/5] bg-cream mb-5">
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-ink leading-tight">
                        {painting.title}
                      </h3>
                      <p className="font-body text-[10px] tracking-wider uppercase text-sepia mt-1.5">
                        {painting.medium}
                      </p>
                      <p className="font-body text-[10px] text-dust mt-0.5">{painting.dimensions}</p>
                    </div>
                    <span className="font-display text-2xl text-ink shrink-0">
                      €{painting.price.toLocaleString()}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => addToCart(painting)}
                    className="mt-4 font-body text-[11px] tracking-[0.22em] uppercase text-ink border-b border-ink/60 pb-px hover:text-sepia hover:border-sepia transition-colors duration-300"
                  >
                    Add to Bag →
                  </button>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Mobile "all works" link */}
          <Reveal delay={200}>
            <div className="mt-14 text-center md:hidden">
              <Link
                to="/shop"
                className="font-body text-[11px] tracking-[0.22em] uppercase text-sepia border-b border-sepia/60 pb-px"
              >
                View all works →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quote banner ── */}
      <section className="bg-ink px-6 md:px-12 py-28 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl text-canvas italic leading-snug">
              "I paint to discover what I cannot say —<br className="hidden md:block" /> and to sit
              with it."
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/about"
              className="inline-block mt-14 font-body text-[11px] tracking-[0.22em] uppercase text-canvas/50 border-b border-canvas/25 pb-px hover:text-canvas hover:border-canvas transition-colors duration-300"
            >
              About Ask →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Availability strip ── */}
      <section className="bg-canvas px-6 md:px-12 py-16 border-t border-dust/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Reveal>
            <div>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sepia">
                Currently available
              </span>
              <p className="font-display text-3xl md:text-4xl text-ink mt-2">
                {paintings.length} original works
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col gap-2">
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sepia">
                Commissions
              </span>
              <p className="font-display text-xl text-ink italic">Open — enquire by email</p>
              <a
                href="mailto:ask@example.com"
                className="font-body text-[11px] tracking-[0.22em] uppercase text-ink border-b border-ink/60 pb-px hover:text-sepia hover:border-sepia transition-colors duration-300 w-fit mt-1"
              >
                ask@example.com →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
