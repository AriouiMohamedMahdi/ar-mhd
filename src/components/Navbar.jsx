
import { useState, useEffect } from 'react'
import { siteData } from '../data/site'

const NAV_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills'   },
  { href: '#blog',     label: 'Blog'     },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id); break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-lg text-text2 tracking-widest hover:text-accent2 transition-colors">
          <span className="text-accent2">A</span>
          <span className="text-muted">.</span>
          <span className="text-accent2">M</span>
          <span className="text-muted">.</span>
          <span className="text-text2">Mahdi</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href={siteData.social.email} className="hidden md:flex btn-primary text-xs py-2 px-4">
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span
              key={i}
              className={`block h-px bg-accent2 transition-all duration-300 ${
                i === 1 ? 'w-5' : 'w-7'
              } ${menuOpen && i === 0 ? 'rotate-45 translate-y-2.5 w-7' : ''}
               ${menuOpen && i === 1 ? 'opacity-0' : ''}
               ${menuOpen && i === 2 ? '-rotate-45 -translate-y-2.5' : ''}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-border px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
