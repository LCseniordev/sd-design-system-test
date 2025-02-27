import type { Config } from 'tailwindcss'
import { COLORS } from './colors.ts'

export const tailwindConfig: Config = {
  content: ['./src/**/*.{html,js,vue,ts}'],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
