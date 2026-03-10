
import { siteData } from '../data/site'
import { Github, Linkedin, Mail, BookOpen, Instagram, ArrowUpRight } from 'lucide-react'

const CONTACTS = [
  { label: 'Email',     icon: Mail,      href: siteData.social.email,     value: 'contact@ammahdi.dev' },
  { label: 'GitHub',    icon: Github,    href: siteData.social.github,    value: 'github.com/ammahdi'  },
  { label: 'LinkedIn',  icon: Linkedin,  href: siteData.social.linkedin,  value: 'linkedin.com/in/ammahdi' },
  { label: 'Medium',    icon: BookOpen,  href: siteData.social.medium,    value: 'medium.com/@ammahdi' },
  { label: 'Instagram', icon: Instagram, href: siteData.social.instagram, value: '@ammahdi'            },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(45,127,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="section-label mb-12">
          <span>06</span> Contact
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-text2 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
              Let's build something{' '}
              <span className="text-accent2">together.</span>
            </h2>
            <p className="text-text leading-relaxed max-w-md">
              Whether it's a research collaboration, a development project, a writing opportunity,
              or just an interesting conversation — I'm always open to connecting with curious people.
            </p>
            <div className="pt-2 space-y-1">
              <div className="font-mono text-[9px] text-muted tracking-widest uppercase">MHD Institute</div>
              <p className="text-text text-sm">
                If you're interested in joining or contributing to MHD Institute's scientific community,
                reach out — all fields welcome.
              </p>
            </div>
            <a
              href={siteData.social.email}
              className="btn-primary inline-flex"
            >
              Send a Message <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right: links */}
          <div className="space-y-3">
            {CONTACTS.map(({ label, icon: Icon, href, value }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-center gap-4 group cursor-none"
              >
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 transition-all"
                  style={{
                    background: 'rgba(45,127,255,0.08)',
                    border: '1px solid #112040',
                  }}
                >
                  <Icon size={15} className="text-muted group-hover:text-accent2 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[9px] text-muted tracking-widest uppercase">{label}</div>
                  <div className="font-mono text-xs text-text2 truncate">{value}</div>
                </div>
                <ArrowUpRight size={13} className="text-muted group-hover:text-accent2 transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
