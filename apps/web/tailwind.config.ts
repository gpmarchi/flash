import { colors } from '@repo/tokens/colors'
import { fonts } from '@repo/tokens/fonts'
import { radii } from '@repo/tokens/radii'
import { spacing } from '@repo/tokens/spacing'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    spacing,
    borderRadius: radii,
    fontWeight: fonts.fontWeights,
    fontFamily: {
      sans: fonts.fontFamilies.default,
    },
    fontSize: fonts.fontSizes,
    lineHeight: fonts.lineHeights,
  },
  plugins: [],
} satisfies Config
