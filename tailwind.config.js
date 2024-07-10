const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: [
    './index.html', './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        '128': '32rem',
      },
      minWidth: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
});