import { siteData } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-text2 tracking-widest text-sm">
          <span className="text-accent2">A</span>.<span className="text-accent2">M</span>.Mahdi
        </div>
        <div className="font-mono text-[10px] text-muted tracking-wider text-center">
          © {year} A.M.Mahdi · MHD Institute · Built with Next.js
        </div>
        <div className="font-mono text-[10px] text-muted tracking-widest">
          <span className="text-neural">{'>'}</span> SCIENCE · CODE · WORDS
        </div>
      </div>
    </footer>
  )
}
