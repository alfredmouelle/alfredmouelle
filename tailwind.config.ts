import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'), // Texte principal clair
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h1: {
              color: theme('colors.gray.900'), // Couleur H1
            },
            h2: {
              color: theme('colors.gray.900'), // Couleur H2
            },
            h3: {
              color: theme('colors.gray.900'), // Couleur H3
            },
            h4: {
              color: theme('colors.gray.900'), // Couleur H4
            },
            strong: {
              color: theme('colors.gray.900'), // Texte en gras
            },
            em: {
              color: theme('colors.gray.700'), // Texte en italique
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.300'),
              color: theme('colors.gray.600'), // Citations
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.500'), // Puces des listes
            },
            hr: {
              borderColor: theme('colors.gray.200'), // Ligne de séparation
            },
            table: {
              color: theme('colors.gray.800'), // Texte dans les tableaux
              th: {
                color: theme('colors.gray.900'), // En-têtes de tableau
                borderColor: theme('colors.gray.300'),
              },
              td: {
                borderColor: theme('colors.gray.200'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'), // Texte principal sombre
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
            h1: {
              color: theme('colors.white'), // Couleur H1 sombre
            },
            h2: {
              color: theme('colors.white'), // Couleur H2 sombre
            },
            h3: {
              color: theme('colors.white'), // Couleur H3 sombre
            },
            h4: {
              color: theme('colors.white'), // Couleur H4 sombre
            },
            strong: {
              color: theme('colors.gray.100'), // Texte en gras sombre
            },
            em: {
              color: theme('colors.gray.400'), // Texte en italique sombre
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.600'),
              color: theme('colors.gray.400'), // Citations sombres
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.400'), // Puces des listes sombres
            },
            hr: {
              borderColor: theme('colors.gray.600'), // Ligne de séparation sombre
            },
            table: {
              color: theme('colors.gray.300'), // Texte dans les tableaux sombres
              th: {
                color: theme('colors.gray.100'), // En-têtes de tableau sombres
                borderColor: theme('colors.gray.600'),
              },
              td: {
                borderColor: theme('colors.gray.500'),
              },
            },
          },
        },
    }),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
