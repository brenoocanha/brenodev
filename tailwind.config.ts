import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '0px',
      // => @media (min-width: 768px) { ... }

      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      full: '1920',
      // => @media (min-width: 1920px) { ... }

      ultrawide: '2560',
      // => @media (min-width: 2560px) { ... }
    },
    extend: {
      backgroundImage: {
        'texture': "url('/assets/texture-bg.png')",
        'main': "linear-gradient(130deg, #5D7E7B 49.62%, rgba(16, 91, 91, 0.85) 74.12%, rgba(13, 81, 81, 0.80) 86%, rgba(6, 40, 40, 0.75) 100.56%);"
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config
