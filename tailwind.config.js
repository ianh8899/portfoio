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
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
            },
            colors: {
                primary: '#202225',
                secondary: '#5865f2',
                gray: {
                    900: '#202225',
                    800: '#2f3136'
                },
            },
            backgroundColor: {
                'lighter-blue': '#f5fafd'
            },
            scrollSnapType: {
                'y-proximity': 'y proximity'
            }
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            'custom': "1800px"
        },
    },
    variants: {},
    plugins: [],
}
