/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.08 0.015 265)',
        foreground: 'oklch(0.95 0.005 265)',
        card: 'oklch(0.12 0.015 265)',
        'card-foreground': 'oklch(0.95 0.005 265)',
        primary: 'oklch(0.62 0.19 271)',
        'primary-foreground': 'oklch(0.98 0.005 265)',
        secondary: 'oklch(0.18 0.015 265)',
        'secondary-foreground': 'oklch(0.95 0.005 265)',
        muted: 'oklch(0.16 0.015 265)',
        'muted-foreground': 'oklch(0.55 0.01 265)',
        accent: 'oklch(0.62 0.19 271)',
        'accent-foreground': 'oklch(0.98 0.005 265)',
        success: 'oklch(0.65 0.15 180)',
        border: 'oklch(0.22 0.015 265)',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
