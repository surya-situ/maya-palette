/** @type {import('tailwindcss').Config} */

import scrollbarHide from 'tailwind-scrollbar-hide';

export const content = [
  "./index.html",
  "./src/**/*.{html,js,jsx,tsx}"
];
export const theme = {
  extend: {},
};
export const plugins = [
  scrollbarHide
];
