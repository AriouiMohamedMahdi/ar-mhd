
import { useEffect, useRef, useState } from 'react'
import { siteData } from '../data/site'

function SkillBar({ name, level, note, delay = 0 }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-text2">{name}</span>
          {note && <span className="font-mono text-[9px] text-muted tracking-wider">/ {note}</span>}
        </div>
        <span className="font-mono text-[10px] text-accent2">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-sm overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%`, transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { skills } = siteData

  const groups = [
    { label: 'Languages',          key: 'languages',   items: skills.languages   },
    { label: 'Development',        key: 'development', items: skills.development },
    { label: 'Other Skills',       key: 'other',       items: skills.other       },
  ]

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        <div className="section-label mb-12">
          <span>04</span> Skills
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map(group => (
            <div key={group.key} className="card p-6 space-y-5">
              <div className="pb-3 border-b border-border">
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase">{group.label}</span>
              </div>
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    note={item.note}
                    delay={i * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools / tech list */}
        <div className="mt-12 card p-6">
          <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-5">
            Tools & Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Python','C++','JavaScript','React','Next.js','HTML/CSS',
              'Video Editing','Medical Research','Content Creation',
              'Community Management','Scientific Writing','Data Analysis',
            ].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
