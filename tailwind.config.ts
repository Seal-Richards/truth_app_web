import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/vaul/dist/*.js",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			xxs: '375px',
  			xs: '475px',
  			sm: '640px',
  			md: '768px',
  			lg: '992px',
  			xl: '1280px',
  			'2xl': '1400px',
  			xxl: '1500px',
  			xxxl: '1850px'
  		}
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			brand: 'hsl(var(--brand))',
  			'brand-foreground': 'hsl(var(--brand-foreground))',
  			'brand-accent': 'hsl(var(--brand-accent))',
  			surface: 'hsl(var(--surface))',
  			'surface-foreground': 'hsl(var(--surface-foreground))',
  			'surface-muted': 'hsl(var(--surface-muted))',
  			'surface-muted-foreground': 'hsl(var(--surface-muted-foreground))',
  			'gradient-from': 'hsl(var(--from-color))',
  			'gradient-to': 'hsl(var(--to-color))',
  			sec: 'hsl(var(--secondary))',
  			'sec-2': 'hsl(var(--secondary-foreground))',
  			accent1: 'hsl(var(--accent))',
  			accent2: 'hsl(var(--accent-foreground))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderColor: {
  			border: 'hsl(var(--border))'
  		},
  		fontFamily: {
			sans: ['Causten', ...fontFamily.sans],
		 },		 
  		fontSize: {
  			xxxs: '0.4rem',
  			xxs: '0.6rem',
  			xs: '0.8rem'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
                ...defaultTheme.borderRadius,
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [forms, tailwindcssAnimate, typography],
};

export default config;