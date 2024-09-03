/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'nav1':'#FC6565',
        'nav-2':'#FCEBA3',
        'col-1':'#147AA9',
        'bg-1':'#E3EFF8',
        'bg-2':'#EBB5BC',
        'bg-3':'#FBFBFD'
      },
      colors: {
        'col-1':'#147AA9',
        'col-2':'#2B2B2B',
        'col-3':'#858585',
        'nav1':'#FC6565',
        'col-4':'#323233'
      },
      backgroundImage: {
        'logo': "url('monkey.png')",
        'body':"url(Body.png)",
        'img1':"url(image-1.png)",
        'img2':"url(image-2.png)",
        'img3':"url(image-3.png)",
        'cart':"url(cart.png)"
      },
      spacing:{
        11:'44px',
        13:'46.7px',
        82:'22rem',
        13.5:'53.15px',
        100:'28rem'
      },
    },
  },
  plugins: [],
}

