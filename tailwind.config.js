/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-blue-500",
    "bg-blue-300",
    "bg-pink-500",
    "bg-orange-500",
    "text-blue-500",
    "text-blue-300",
    "text-pink-500",
    "text-orange-500",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "400% 400%",
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
