/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/package/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/module/**/*.{js,ts,jsx,tsx,mdx}',
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
        gabiGreen:'#51E7AD',
        bgGray: '#F7FAFC',
        primaryGray:"#999999",
        textGray:"#757a81",
        textBoldBlue:"#212529",
        textBlue:"#353539",
        lighBlue: '#EFF4FF',
        primaryGreen: '#0ECA2D',
        primaryBlue:"#033CAA",
        primaryYellow:"#FACC15",
        primaryRed:"#ff1a1a",
        primaryPink:"#B181F8",
        secondaryBlue:"#013089",
        secondaryGray:"#1E1E1E",  
        secondaryRed:"#ffcccc",    
        tertiaryBlue:"#0F2557",
        tertiaryRed:"#ff4d4d",
        blueOne:"#34A0A4",
        redOne:"#E30815"
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}
