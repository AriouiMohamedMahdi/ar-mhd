/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono:    ['var(--font-mono)',    'monospace'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
      colors: {
        bg:      '#05080f',
        surface: '#090d18',
        card:    '#0c1220',
        border:  '#112040',
        border2: '#1a3a6e',
        accent:  '#2d7fff',
        accent2: '#00d4ff',
        neural:  '#00ffcc',
        warn:    '#ffaa00',
        danger:  '#ff3355',
        safe:    '#00ff88',
        muted:   '#3a5a8a',
        text:    '#a0c0e0',
        text2:   '#d0e8ff',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
        'pulse-glow':'pulseGlow 2s ease-in-out infinite',
        'scan':      'scan 3s linear infinite',
        'float':     'float 6s ease-in-out infinite',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp:    { from:{ opacity:0, transform:'translateY(24px)' }, to:{ opacity:1, transform:'none' } },
        fadeIn:    { from:{ opacity:0 }, to:{ opacity:1 } },
        pulseGlow: { '0%,100%':{ opacity:1 }, '50%':{ opacity:0.4 } },
        scan:      { '0%':{ transform:'translateY(-100%)' }, '100%':{ transform:'translateY(100vh)' } },
        float:     { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-10px)' } },
        blink:     { '0%,100%':{ opacity:1 }, '50%':{ opacity:0 } },
      },
    },
  },
  plugins: [],
}
