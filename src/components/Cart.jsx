import { useEffect } from 'react'

export default function Cart({ isOpen, onClose, items, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[420px] bg-canvas flex flex-col transition-transform duration-500 ease-out-expo ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-dust/30">
          <span className="font-body text-[11px] tracking-[0.22em] uppercase text-ink">
            Bag — {items.length} {items.length === 1 ? 'work' : 'works'}
          </span>
          <button
            onClick={onClose}
            className="font-body text-[11px] tracking-[0.22em] uppercase text-sepia hover:text-ink transition-colors duration-300"
          >
            Close ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
              <p className="font-display text-3xl italic text-ink/30">Your bag is empty</p>
              <button
                onClick={onClose}
                className="font-body text-[11px] tracking-[0.22em] uppercase text-sepia border-b border-sepia/60 pb-px hover:text-ink hover:border-ink transition-colors duration-300"
              >
                Continue browsing →
              </button>
            </div>
          ) : (
            <ul className="space-y-8">
              {items.map((item) => (
                <li key={item.id} className="flex gap-5">
                  <div className="w-[72px] h-[90px] shrink-0 overflow-hidden bg-cream">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <p className="font-display text-xl text-ink leading-snug">{item.title}</p>
                      <p className="font-body text-[10px] tracking-wider text-sepia mt-1 uppercase">
                        {item.medium}
                      </p>
                      <p className="font-body text-[10px] text-dust mt-0.5">{item.dimensions}</p>
                    </div>
                    <div className="flex items-end justify-between mt-3">
                      <span className="font-display text-xl text-ink">
                        €{item.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="font-body text-[10px] tracking-wider uppercase text-dust hover:text-ink transition-colors duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-8 border-t border-dust/30 space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-body text-[11px] tracking-[0.22em] uppercase text-ink">
                Subtotal
              </span>
              <span className="font-display text-3xl text-ink">
                €{subtotal.toLocaleString()}
              </span>
            </div>
            <p className="font-body text-[11px] text-dust leading-relaxed">
              All works are unique originals. Contact to arrange payment, framing, and shipping.
            </p>
            <a
              href="mailto:askx0169@gmail.com"
              className="block text-center font-body text-[11px] tracking-[0.22em] uppercase text-canvas bg-ink py-4 hover:bg-sepia transition-colors duration-300"
            >
              Inquire to Purchase →
            </a>
          </div>
        )}
      </aside>
    </>
  )
}
