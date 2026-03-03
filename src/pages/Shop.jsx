import { useState, useMemo } from 'react'
import { paintings } from '../data/paintings'
import Reveal from '../components/Reveal'

const MEDIA_FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Oil', value: 'oil' },
  { label: 'Watercolour', value: 'watercolour' },
  { label: 'Acrylic', value: 'acrylic' },
  { label: 'Mixed media', value: 'mixed media' },
]

const SORT_OPTIONS = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low → High', value: 'asc' },
  { label: 'Price: High → Low', value: 'desc' },
]

export default function Shop({ addToCart }) {
  const [activeMedia, setActiveMedia] = useState('all')
  const [sort, setSort] = useState('newest')
  const [addedIds, setAddedIds] = useState({})

  const filtered = useMemo(() => {
    let list = paintings.filter(
      (p) => activeMedia === 'all' || p.category === activeMedia
    )
    if (sort === 'asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'newest') list = [...list].sort((a, b) => b.year - a.year || b.id - a.id)
    return list
  }, [activeMedia, sort])

  const handleAdd = (painting) => {
    addToCart(painting)
    setAddedIds((prev) => ({ ...prev, [painting.id]: true }))
    setTimeout(
      () => setAddedIds((prev) => ({ ...prev, [painting.id]: false })),
      1800
    )
  }

  return (
    <div className="page-enter min-h-screen bg-canvas">
      {/* Page header */}
      <div className="px-6 md:px-12 pt-32 pb-10 max-w-7xl mx-auto">
        <Reveal>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-sepia">
            Original paintings
          </span>
          <h1 className="font-display text-6xl md:text-8xl text-ink mt-3 leading-none">Works</h1>
          <p className="font-display text-xl italic text-ink/50 mt-3">
            All pieces are unique — no editions, no prints.
          </p>
        </Reveal>
      </div>

      {/* Filter / sort bar */}
      <div className="sticky top-[68px] z-20 bg-canvas/95 backdrop-blur-sm border-b border-dust/30 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Medium filter */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {MEDIA_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveMedia(f.value)}
                className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 pb-px ${
                  activeMedia === f.value
                    ? 'text-ink border-b border-ink'
                    : 'text-dust hover:text-ink border-b border-transparent'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <label className="flex items-center gap-2 shrink-0">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-dust">
              Sort
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="font-body text-[10px] tracking-[0.15em] uppercase text-ink bg-transparent border-none outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {/* Works count */}
      <div className="px-6 md:px-12 pt-8 pb-4 max-w-7xl mx-auto">
        <p className="font-body text-[10px] tracking-wider text-dust uppercase">
          {filtered.length} {filtered.length === 1 ? 'work' : 'works'}
        </p>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        {filtered.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-display text-4xl italic text-ink/25">No works found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
            {filtered.map((painting, i) => (
              <Reveal key={painting.id} delay={(i % 3) * 80}>
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

                  {/* Metadata */}
                  <div className="space-y-1 mb-4">
                    <h2 className="font-display text-2xl text-ink leading-tight">
                      {painting.title}
                    </h2>
                    <p className="font-body text-[10px] tracking-wider uppercase text-sepia">
                      {painting.medium}
                    </p>
                    <p className="font-body text-[10px] text-dust">
                      {painting.dimensions} — {painting.year}
                    </p>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between gap-4">
                    <span className="font-display text-2xl text-ink">
                      €{painting.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => handleAdd(painting)}
                      className={`font-body text-[10px] tracking-[0.2em] uppercase border-b pb-px transition-colors duration-300 shrink-0 ${
                        addedIds[painting.id]
                          ? 'text-sepia border-sepia'
                          : 'text-ink border-ink/60 hover:text-sepia hover:border-sepia'
                      }`}
                    >
                      {addedIds[painting.id] ? 'Added ✓' : 'Add to Bag →'}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[11px] text-dust/80 mt-3 leading-relaxed">
                    {painting.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {/* Inquire section */}
        <Reveal>
          <div className="mt-28 border-t border-dust/30 pt-20 text-center">
            <p className="font-display text-3xl md:text-4xl text-ink italic mb-8">
              Looking for something specific?
            </p>
            <p className="font-body text-sm text-dust max-w-md mx-auto mb-8 leading-relaxed">
              Commissions are open. Get in touch to discuss a bespoke work for your home or
              collection.
            </p>
            <a
              href="mailto:ask@example.com"
              className="font-body text-[11px] tracking-[0.22em] uppercase text-sepia border-b border-sepia/60 pb-px hover:text-ink hover:border-ink transition-colors duration-300"
            >
              Get in touch →
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
