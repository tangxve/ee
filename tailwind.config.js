/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/**/*.{tsx, js, ts}',
    './src/**/*',
    './index.html',
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
