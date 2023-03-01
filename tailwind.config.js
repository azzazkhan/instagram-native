/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['App.tsx', '{screens,components}/**/*.{ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
