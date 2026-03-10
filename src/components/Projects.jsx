
import { siteData } from '../data/site'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const STATUS_COLORS = {
  'Active':      { bg: 'rgba(0,255,136,0.08)', text: '#00ff88', border: 'rgba(0,255,136,0.2)' },
  'In Progress': { bg: 'rgba(255,170,0,0.08)', text: '#ffaa00', border: 'rgba(255,170,0,0.2)' },
  'Planned':     { bg: 'rgba(45,127,255,0.08)', text: '#2d7fff', border: 'rgba(45,127,255,0.2)' },
  'Ongoing':     { bg: 'rgba(0,212,255,0.08)', text: '#00d4ff', border: 'rgba(0,212,255,0.2)' },
}

export default function Projects() {
  const featured = siteData.projects.filter(p => p.featured)
  const others   = siteData.projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-28 relative">
      {/* Subtle bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(9,13,24,0.9) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        <div className="flex items-end justify-between mb-12">
          <div className="section-label">
            <span>03</span> Projects
          </div>
          <a
            href={siteData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-muted hover:text-accent2 tracking-widest flex items-center gap-1 transition-colors"
          >
            View all on GitHub <ArrowUpRight size={11} />
          </a>
        </div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} large={i === 0} />
          ))}
        </div>

        {/* Others */}
        {others.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

function ProjectCard({ project: p, large }) {
  const sc = STATUS_COLORS[p.status] || STATUS_COLORS['Planned']

  return (
    <div
      className={`card p-6 flex flex-col gap-4 group ${large ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[9px] text-muted tracking-widest uppercase mb-1">{p.category}</div>
          <h3 className="font-display font-semibold text-text2 text-lg group-hover:text-accent2 transition-colors">
            {p.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text2 transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          )}
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent2 transition-colors"
              aria-label="Visit"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-text text-sm leading-relaxed flex-1">{p.description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex flex-wrap gap-1.5">
          {p.tags.slice(0, 3).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <span
          className="font-mono text-[9px] tracking-widest px-2 py-1 rounded-sm border flex-shrink-0"
          style={{ background: sc.bg, color: sc.text, borderColor: sc.border }}
        >
          {p.status}
        </span>
      </div>
    </div>
  )
}
