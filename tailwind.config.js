/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
				space_mono: ["'Space Mono'", 'sans-serif']
			}
    }
  },

  plugins: []
};
