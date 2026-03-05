import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <div className="page-enter min-h-screen bg-canvas">
      {/* ── Hero label ── */}
      <div className="px-6 md:px-12 pt-32 pb-0 max-w-7xl mx-auto">
        <Reveal>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] text-ink leading-none">
            About
          </h1>
        </Reveal>
      </div>

      {/* ── Main split ── */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Portrait */}
          <Reveal>
            <div className="aspect-[3/4] overflow-hidden bg-cream w-full max-w-lg">
              <img
                src="/images/studio/artist-studio.jpg"
                alt="Ask in the studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-body text-[10px] tracking-wider text-dust uppercase mt-3">
              Studio, Copenhagen — 2024
            </p>
          </Reveal>

          {/* Text */}
          <div className="flex flex-col justify-start pt-0 lg:pt-6 space-y-8">
            <Reveal delay={80}>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-sepia">
                Artist Statement
              </span>
            </Reveal>

            <Reveal delay={160}>
              <h2 className="font-display text-5xl md:text-6xl text-ink leading-none">Ask</h2>
            </Reveal>

            <Reveal delay={240}>
              <div className="font-display text-xl md:text-2xl text-ink/70 italic leading-relaxed space-y-5">
                <p>
                  I paint to slow things down. My work begins with a feeling — not yet an image —
                  and the canvas becomes the place where I try to hold it still long enough to look
                  at it.
                </p>
                <p>
                  Most of my paintings start in grey. From there, warmth enters slowly — ochres,
                  raw sienna, the occasional deep blue. I am interested in threshold states: dawn,
                  fog, the edge of memory.
                </p>
                <p>
                  The goal is never resolution. It is the moment before clarity, held as long as
                  possible.
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="font-body text-sm text-sepia leading-loose space-y-3 max-w-md">
                <p>
                  Ask is a Copenhagen-based painter working primarily in oil on canvas and
                  watercolour on paper. Educated at the Royal Danish Academy of Fine Arts, his work
                  has been shown in group exhibitions across Scandinavia.
                </p>
                <p>Available for commissions and studio visits by appointment.</p>
              </div>
            </Reveal>

            {/* Social links */}
            <Reveal delay={400}>
              <div className="pt-6 border-t border-dust/30 space-y-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-[11px] tracking-[0.22em] uppercase text-ink hover:text-sepia transition-colors duration-300 group w-fit"
                >
                  <span>Instagram</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
                <a
                  href="mailto:ask@example.com"
                  className="flex items-center gap-3 font-body text-[11px] tracking-[0.22em] uppercase text-ink hover:text-sepia transition-colors duration-300 group w-fit"
                >
                  <span>ask@example.com</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Facts strip ── */}
      <section className="border-t border-dust/30 px-6 md:px-12 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
          <Reveal>
            <div>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sepia">
                Medium
              </span>
              <p className="font-display text-2xl md:text-3xl text-ink mt-3 leading-snug">
                Oil on canvas &amp; linen, watercolour on paper
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sepia">
                Based in
              </span>
              <p className="font-display text-2xl md:text-3xl text-ink mt-3">
                Copenhagen, Denmark
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <span className="font-body text-[10px] tracking-[0.25em] uppercase text-sepia">
                Commissions
              </span>
              <p className="font-display text-2xl md:text-3xl text-ink mt-3 italic">
                Open — enquire by email
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process images ── */}
      <section className="px-6 md:px-12 pb-20 max-w-7xl mx-auto">
        <Reveal>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-sepia mb-8 block">
            Studio
          </span>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: '/images/studio/artist-studio.jpg', alt: 'Ask with painting in studio' },
            { src: '/images/paintings/green-landscape.jpg', alt: 'Through the Gate — studio view' },
            { src: '/images/paintings/three-portraits.jpg', alt: 'The Three — work in progress' },
          ].map(({ src, alt }, i) => (
            <Reveal key={src} delay={i * 100}>
              <div className="overflow-hidden aspect-[4/5] md:aspect-auto md:h-72 bg-cream">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="border-t border-dust/30 px-6 md:px-12 py-24 md:py-32 bg-canvas">
        <Reveal>
          <blockquote className="font-display text-3xl md:text-5xl text-ink italic text-center max-w-3xl mx-auto leading-snug">
            "The painting is done when I stop being afraid of it."
          </blockquote>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink px-6 md:px-12 py-20 text-center">
        <Reveal>
          <p className="font-display text-2xl md:text-3xl text-canvas italic mb-8">
            Interested in a work?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              to="/shop"
              className="font-body text-[11px] tracking-[0.22em] uppercase text-canvas border-b border-canvas/40 pb-px hover:border-canvas transition-colors duration-300"
            >
              Browse shop →
            </Link>
            <a
              href="mailto:ask@example.com"
              className="font-body text-[11px] tracking-[0.22em] uppercase text-canvas/50 border-b border-canvas/20 pb-px hover:text-canvas hover:border-canvas transition-colors duration-300"
            >
              Send an email →
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
