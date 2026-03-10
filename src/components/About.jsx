
import { siteData } from '../data/site'
import { MapPin, Calendar } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        <div className="section-label mb-12">
          <span>02</span> About Me
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: bio */}
          <div className="space-y-6">
            <h2 className="font-display font-bold text-text2 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
              Building at the intersection of{' '}
              <span className="text-accent2">Medicine</span>,{' '}
              <span className="text-neural">Science</span> &{' '}
              <span className="text-accent">Technology</span>.
            </h2>

            <p className="text-text leading-relaxed">
              I'm A.M.Mahdi — a medical student who refuses to stay in one lane. My work spans
              clinical medicine, software development, community building, and writing. I believe
              the most important problems of our time require people who can think across disciplines.
            </p>
            <p className="text-text leading-relaxed">
              I founded <span className="text-accent2 font-medium">MHD Institute</span> to create
              a space where researchers, developers, and thinkers from different fields can
              collaborate and exchange ideas freely. Science belongs to everyone.
            </p>

            {/* Info chips */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Location',  value: 'Algeria',        icon: MapPin     },
                { label: 'Status',    value: 'M.D. Student',   icon: Calendar   },
                { label: 'Institute', value: 'MHD Institute',  icon: null       },
                { label: 'Languages', value: 'AR · EN · FR',   icon: null       },
              ].map(item => (
                <div key={item.label} className="card p-4 space-y-1">
                  <div className="font-mono text-[9px] text-muted tracking-widest uppercase">{item.label}</div>
                  <div className="font-mono text-xs text-neural">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-8">
              Experience Timeline
            </h3>

            <div className="relative pl-8 space-y-8">
              {/* Vertical line */}
              <div className="timeline-line" />

              {siteData.experience.map((item, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="timeline-dot" style={{ top: '4px' }} />

                  <div className="card p-5 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-display font-semibold text-text2 text-sm">{item.role}</div>
                        <div className="font-mono text-xs text-accent2 mt-0.5">{item.org}</div>
                      </div>
                      <div className="font-mono text-[9px] text-muted tracking-wider whitespace-nowrap pt-0.5">
                        {item.year}
                      </div>
                    </div>
                    <p className="text-text text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
