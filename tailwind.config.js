/** @type {import('tailwindcss').Config} */
const brand = require('./brand.json');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // ---- Colors: mapped directly from brand.json ----
      colors: {
        blood: {
          DEFAULT: brand.colors.primary.bloodRed, // #A31621
          deep: brand.colors.accent.bloodRedDeep, // #7A0E16
          ember: brand.colors.accent.emberRed, // #D7263D
        },
        ink: brand.colors.background.dark, // #0A0A0A
        inkMuted: brand.colors.background.darkMuted, // #161616
        bone: brand.colors.secondary.bone, // #F4F1EA
        ash: brand.colors.primary.ashGrey, // #8A8A8A
        slate: brand.colors.secondary.slate, // #3D3D3D
        concrete: brand.colors.secondary.concrete, // #2A2A2A
        coal: brand.colors.surface.cardDark, // #141414
        elevated: brand.colors.surface.elevatedDark, // #1E1E1E
        line: brand.colors.surface.borderDark, // #2A2A2A
        lineLight: brand.colors.surface.borderLight, // #E5E0D5
        gold: brand.colors.accent.goldFlex, // #C9A227
      },
      // ---- Typography: brand.json fonts via next/font CSS variables ----
      fontFamily: {
        display: ['var(--font-display)', brand.typography.fonts.display, 'sans-serif'],
        heading: ['var(--font-heading)', brand.typography.fonts.heading, 'sans-serif'],
        body: ['var(--font-body)', brand.typography.fonts.body, 'sans-serif'],
      },
      // ---- Layout: brand.json radius + spacing tokens ----
      borderRadius: {
        btn: brand.layout.borderRadius.button, // 2px — brutalist buttons
        card: brand.layout.borderRadius.card, // 4px
        chip: brand.layout.borderRadius.chip, // 999px
        sharp: brand.layout.borderRadius.image, // 0px — brutalist imagery
      },
      spacing: {
        ...brand.layout.padding, // xs / sm / md / lg / xl
      },
      maxWidth: {
        shell: brand.layout.containerMaxWidth, // 1200px
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
};
