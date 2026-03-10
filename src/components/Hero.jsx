
import { useEffect, useState } from 'react'
import { siteData } from '../data/site'
import { Github, Linkedin, Mail, BookOpen, Instagram, ArrowDown } from 'lucide-react'

const TYPED_STRINGS = [
  'M.D. Student',
  'Researcher',
  'Developer',
  'Founder @ MHD Institute',
  'Aspiring Writer',
]

const SOCIAL_ICONS = [
  { icon: Github,    href: siteData.social.github,    label: 'GitHub'    },
  { icon: Linkedin,  href: siteData.social.linkedin,  label: 'LinkedIn'  },
  { icon: BookOpen,  href: siteData.social.medium,    label: 'Medium'    },
  { icon: Instagram, href: siteData.social.instagram, label: 'Instagram' },
  { icon: Mail,      href: siteData.social.email,     label: 'Email'     },
]

export default function Hero() {
  const [typed,    setTyped]    = useState('')
  const [strIdx,   setStrIdx]   = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = TYPED_STRINGS[strIdx]
    const delay  = deleting ? 50 : 90

    const t = setTimeout(() => {
      if (!deleting) {
        setTyped(target.slice(0, charIdx + 1))
        if (charIdx + 1 === target.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setTyped(target.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setCharIdx(0)
          setStrIdx(i => (i + 1) % TYPED_STRINGS.length)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [typed, strIdx, charIdx, deleting])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg"
      style={{ paddingTop: '80px' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(45,127,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div className="space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-sm bg-surface">
              <span className="w-2 h-2 rounded-full bg-safe animate-pulse-glow" style={{ boxShadow: '0 0 8px #00ff88' }} />
              <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                Available for collaboration
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="section-label mb-4">
                <span>01</span> Hello, I'm
              </p>
              <h1 className="font-display font-extrabold leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#d0e8ff' }}>
                Arioui Mohamed
                <span
                  className="block glow-cyan"
                  style={{ color: '#00d4ff', WebkitTextStroke: '1px rgba(0,212,255,0.3)' }}
                >
                  Mahdi
                </span>
              </h1>
            </div>

            {/* Typed */}
            <div className="flex items-center gap-3 h-8">
              <span className="text-muted font-mono text-sm">{'>'}</span>
              <span className="font-mono text-accent2 text-sm tracking-wider">{typed}</span>
              <span className="w-2 h-5 bg-accent2 animate-blink inline-block" />
            </div>

            {/* Bio */}
            <p className="text-text leading-relaxed max-w-lg" style={{ fontSize: '15px' }}>
              {siteData.bio}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDown size={14} />
              </a>
              <a href={siteData.social.email} className="btn-ghost">
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 pt-2">
              <span className="font-mono text-[10px] text-muted tracking-widest">FIND ME ON</span>
              <div className="h-px flex-1 max-w-[40px] bg-border" />
              <div className="flex gap-4">
                {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted hover:text-accent2 transition-colors duration-200"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: glowing ID card */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-72 h-96 card glow-box-blue"
              style={{ border: '1px solid #1a3a6e' }}
            >
              {/* corner decorations */}
              {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-4 h-4`}>
                  <div className={`absolute w-3 h-px bg-accent2 ${i > 1 ? 'bottom-0' : 'top-0'} ${i % 2 ? 'right-0' : 'left-0'}`} />
                  <div className={`absolute h-3 w-px bg-accent2 ${i > 1 ? 'bottom-0' : 'top-0'} ${i % 2 ? 'right-0' : 'left-0'}`} />
                </div>
              ))}

              {/* Avatar placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-display font-bold text-accent2"
                  style={{
                    background: 'radial-gradient(circle, rgba(45,127,255,0.15), rgba(9,13,24,0.8))',
                    border: '1px solid #1a3a6e',
                    boxShadow: '0 0 30px rgba(45,127,255,0.2)',
                  }}
                >
                  AM
                </div>

                <div className="text-center space-y-2">
                  <div className="font-display font-bold text-text2 text-xl tracking-wider">A.M.Mahdi</div>
                  <div className="font-mono text-xs text-accent2 tracking-widest">M.D. STUDENT</div>
                  <div className="font-mono text-[10px] text-muted tracking-widest">FOUNDER · DEVELOPER</div>
                </div>

                <div className="w-full space-y-2">
                  {[
                    { label: 'INSTITUTE', value: 'MHD' },
                    { label: 'STATUS',    value: 'ACTIVE' },
                    { label: 'CLEARANCE', value: 'RESEARCHER' },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between items-center py-1.5 border-b border-border">
                      <span className="font-mono text-[9px] text-muted tracking-widest">{r.label}</span>
                      <span className="font-mono text-[10px] text-neural">{r.value}</span>
                    </div>
                  ))}
                </div>

                {/* scan line animation */}
                <div
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded"
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="absolute left-0 right-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
                      animation: 'scan 3s linear infinite',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="font-mono text-[9px] text-muted tracking-widest">SCROLL</span>
          <ArrowDown size={14} className="text-muted" />
        </div>
      </div>
    </section>
  )
}
