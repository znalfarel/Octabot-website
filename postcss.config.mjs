/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Perhatikan: Gunakan string '@tailwindcss/postcss', BUKAN 'tailwindcss'
    '@tailwindcss/postcss': {},
  },
};

export default config;