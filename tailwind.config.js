//tailwind.config.js

/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                primary: '#202225',
                secondary: '#5865f2',
                gray: {
                    900: '#202225',
                    800: '#2f3136'
                },
              fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
              }
            }
        },
    },
    variants: {},
    plugins: [],
}
