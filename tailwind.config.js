/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "miniTelefon":"380px",
      "telefon": "578px",
      "miniTablet": "768px",
      'tablet': '992px',
      'laptop': '1024px',
      'desktop': '1280px',

    },
    extend: {
      colors: {
        customRed: '#E74B3C',
        green:'#E74B3C',
        bgGray: '#F7FAFC',
        primaryGray:"#999999",
        textGray:"#757a81",
        textBoldBlue:"#212529",
        textBlue:"#353539",
        lighBlue: '#EFF4FF',
        primaryGreen: '#0ECA2D',
        primaryBlue:"#033CAA",
        secondaryBlue:"#013089",      
        tertiaryBlue:"#0F2557"
      },

    },
  },
  plugins: [],
}
