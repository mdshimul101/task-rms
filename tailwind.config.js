/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        foodtheme: {
          primary: "#FA7316",
          secondary: "#FFE4C6",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        raleWay: ["Raleway", "sans - serifs"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cookie: ["Cookie", "sans-serif"],
      },
      backgroundImage: {
        chooseFoodBg: "url('/src/assets/Images/Food Gallery.png')",
        discountBanner: "url('/src/assets/Images/discountBanner.png')",
        reviewBg: "url('/src/assets/Images/review_bg.png')",
        fixedBg: "url('/src/assets/Images/fixed_background.jpg')",
      },
      dropShadow: {
        shadowMd: "0px 2px 20px 0px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  extend: {
    rotate: {
      360: "360deg",
    },
  },
  plugins: [require("daisyui")],
};
