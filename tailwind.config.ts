import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'void-bg': '#0a0a0a',
        'void-text': '#fafafa',
        'void-accent': '#ff2244',
        'void-cyan': '#00ffff',
        'void-magenta': '#ff00ff',
        'void-orange': '#ffaa44',
        'void-muted': '#555555',
        'void-dim': '#333333',
        'void-tile': '#111111',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
      },
      animation: {
        'pulse-sep': 'pulse-sep 1s ease-in-out infinite',
        'gradient-move': 'gradient-move 2s linear infinite',
        'hint-in': 'hint-in 0.5s forwards',
        'phase-enter': 'phase-enter 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
        'reveal-in': 'reveal-in 1s forwards',
        'nothing-in': 'nothing-in 2s 0.5s forwards',
        'fade-up': 'fade-up 0.8s forwards',
        'screen-shake': 'screen-shake 0.3s ease-out',
        'glitch-1': 'glitch-1 2s infinite',
        'glitch-2': 'glitch-2 2s infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'shatter-drift': 'shatter-drift 4s ease-in-out infinite',
        'shatter-drift-reverse': 'shatter-drift-reverse 5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-sep': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        'hint-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'phase-enter': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'reveal-in': {
          '0%': { opacity: '0', transform: 'scale(0.8) rotateX(20deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotateX(0)' },
        },
        'nothing-in': {
          '0%': { opacity: '0', letterSpacing: '0.5em', filter: 'blur(10px)' },
          '50%': { opacity: '1', letterSpacing: '0.1em', filter: 'blur(0)' },
          '100%': { opacity: '1', letterSpacing: '-0.02em' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'screen-shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-3px) rotate(-0.5deg)' },
          '40%': { transform: 'translateX(3px) rotate(0.5deg)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
        'glitch-1': {
          '0%, 90%, 100%': { transform: 'translateX(0)' },
          '92%': { transform: 'translateX(-5px)' },
          '94%': { transform: 'translateX(5px)' },
        },
        'glitch-2': {
          '0%, 90%, 100%': { transform: 'translateX(0)' },
          '93%': { transform: 'translateX(5px)' },
          '95%': { transform: 'translateX(-5px)' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        'shatter-drift': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(2px, -1px) rotate(0.5deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-0.5deg)' },
          '75%': { transform: 'translate(1px, 1px) rotate(0.3deg)' },
        },
        'shatter-drift-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(-2px, 1px) rotate(-0.3deg)' },
          '66%': { transform: 'translate(2px, -2px) rotate(0.5deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
