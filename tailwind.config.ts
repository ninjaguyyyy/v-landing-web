import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        red: '#D70015',
        'dust-red': '#FF4D4F',
        'dust-red-1': '#ffccc7',
        'dust-red-2': '#fff2f0',
        'dust-red-5': '#ff4d4f',

        purple: '#615dfa',
        'purple-1': '#5753e4',
        'purple-2': '#4e4ac8',
        gray: '#adafca',
        'gray-1': '#f5f5f5',
        'gray-2': '#707070',
        'gray-3': '#6a696c',
        'gray-4': '#8f91ac',
        'gray-5': '#eaeaf5',
        'gray-6': '#fcfcfd',
        'gray-7': '#c5bdbd',
        darkgray: 'rgb(84, 84, 84)',

        lightblue: 'rgb(176, 237, 255)',

        dark: '#3e3f5e',

        blue: '#00c7d9',
        darkblue: 'rgb(49, 49, 186)',
        'darkblue-2': 'rgb(5, 34, 74)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
