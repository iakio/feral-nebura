/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // ゲーム画面で動的に使用される色クラス
    'bg-green-500',
    'bg-red-500',
    'bg-white/30',
    'text-white/60',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}