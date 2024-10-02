// GRAND DESIGN WEBSITE
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        BackgroundColor: '#FAF0B9',
        SecondaryColor: '#AF3700',
        BgAwal: '#fffbf0',
        Bg2: '#f6e9b7',
        HeaderFooter: '#320600',
        Bg3: '#44C59E',
      },
      boxShadow: {
        custom: '2px 2px 8px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        body: ["Montserrat"],
        main: ["Adventure"],
      },
      fontSize: {
        h1: ['64px', '120%'],
        h2: ['48px', '120%'],
        h3: ['32px', '120%'],
        h4: ['24px', '120%'],
        h5: ['20px', '120%'],
        h6: ['16px', '120%'],
        sh1: ['36px', '120%'],
        sh2: ['32px', '120%'],
        sh3: ['24px', '120%'],
        sh4: ['20px', '120%'],
        sh5: ['18px', '120%'],
        b1: ['24px', '120%'],
        b2: ['20px', '120%'],
        b3: ['16px', '120%'],
        b4: ['14px', '120%'],
        b5: ['12px', '120%'],
      },
    },
  },
  plugins: [],
}
