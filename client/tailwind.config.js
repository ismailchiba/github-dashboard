/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'
  ],
  
  plugins: [],
  theme: {
      extend: {    
        colors:{
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        bgPrimary: 'var(--color-bg-primary)',
        bgSecondary: 'var(--color-bg-secondary)',
        bgTertiary: 'var(--color-bg-tertiary)',
        border: 'var(--border-color)',
        }
      },
    },
}