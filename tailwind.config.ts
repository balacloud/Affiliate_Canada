import type { Config } from 'tailwindcss';

/**
 * SmartShopCA two-pillar theme.
 * MERGE NOTE: if the existing config defines custom theme keys that legacy
 * components (DealCard, SeasonBanner, CollectionGrid…) still use, copy those
 * keys into `extend` below — nothing here removes Tailwind's default palette.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,mdx}',
    './config/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        'campaign-winter': '#3B82F6',
        'campaign-spring': '#10B981',
        'campaign-bts': '#F59E0B',
        'campaign-boxing': '#EF4444',
        ivory: '#FBF8F1',
        paper: '#FFFDF8',
        sand: '#F3EEE3',
        line: { DEFAULT: '#DDD5C5', soft: '#ECE6DA' },
        ink: { DEFAULT: '#1E2A24', body: '#3B4640', muted: '#4D5852' },
        rust: { DEFAULT: '#9A4318', dark: '#6E2F0F', tint: '#F5E6D8', line: '#E5CBB4', light: '#E9B48F' },
        sage: { DEFAULT: '#2E5A44', dark: '#1F4232', tint: '#E2EBE3', line: '#C3D3C6' },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', '"Book Antiqua"', 'Georgia', 'serif'],
      },
      maxWidth: {
        page: '75rem',
        prose: '42rem',
      },
    },
  },
  plugins: [],
};

export default config;
