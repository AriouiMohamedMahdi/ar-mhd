
import { siteData } from '../data/site'
import { ArrowUpRight, Clock } from 'lucide-react'

export default function Blog() {
  return (
    <section id="blog" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-end justify-between mb-12">
          <div className="section-label">
            <span>05</span> Blog & Writing
          </div>
          <a
            href={siteData.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] text-muted hover:text-accent2 tracking-widest flex items-center gap-1 transition-colors"
          >
            All articles on Medium <ArrowUpRight size={11} />
          </a>
        </div>

        {/* Intro text */}
        <p className="text-text max-w-xl mb-10 leading-relaxed">
          Essays, reflections, and ideas at the intersection of medicine, science, and the human
          experience. Articles coming soon — follow on Medium to be notified.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {siteData.blogs.map((post, i) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 flex flex-col gap-4 group cursor-none"
            >
              {/* Category */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-accent tracking-widest uppercase">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[9px] text-muted">
                  <Clock size={10} /> {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-text2 leading-snug group-hover:text-accent2 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-text text-sm leading-relaxed flex-1">{post.excerpt}</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="font-mono text-[9px] text-muted tracking-wider">{post.date}</span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-accent2 group-hover:gap-2 transition-all">
                  Read <ArrowUpRight size={11} />
                </span>
              </div>

              {/* Coming soon overlay */}
              {post.date === 'Coming Soon' && (
                <div
                  className="absolute inset-0 rounded flex items-center justify-center"
                  style={{ background: 'rgba(5,8,15,0.5)', backdropFilter: 'blur(1px)' }}
                >
                  <span className="font-mono text-[10px] text-muted tracking-widest border border-border px-3 py-1.5 rounded-sm">
                    COMING SOON
                  </span>
                </div>
              )}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
