import type { Config } from 'tailwindcss';

const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      clipPath: {
        star: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary':
          'linear-gradient(90deg, rgb(0, 70, 223), rgb(9, 226, 181))',
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
        'blue-1': '#0046df',
        darkblue: 'rgb(49, 49, 186)',
        'darkblue-2': 'rgb(5, 34, 74)',

        'black-1': '#161200',
        'yellow-primary': '#fbe95b',
        'blue-primary': '#051f4d',
      },
    },
  },
  plugins: [
    plugin(
      ({
        addComponents,
      }: {
        addComponents: (components: Record<string, any>) => void;
      }) => {
        addComponents({
          '.text-h1': {
            fontSize: '21px',
            fontWeight: 700,
            lineHeight: '1.6',
            '@media screen and (min-width: 48rem)': {
              fontSize: '62.69px',
            },
          },

          '.text-h3': {
            fontSize: '18px',
            lineHeight: '1.6',
            fontWeight: 400,
            '@media screen and (min-width: 48rem)': {
              fontSize: '36.05px',
            },
          },

          '.text-h5': {
            fontSize: '13px',
            lineHeight: '1.6',
            fontWeight: 400,
            '@media screen and (min-width: 48rem)': {
              fontSize: '19px',
            },
          },

          '.text-title': {
            fontSize: '35px',
            fontWeight: 'bold',
            margin: 0,
            color: '#545454',
            '@media screen and (min-width: 48rem)': {
              fontSize: '40px',
            },
            textShadow: '4px 4px 0 rgb(210, 250, 240)',
          },
          '.highlight': {
            '@apply text-black text-[70px] font-bold relative lg:text-[100px]':
              {},
            '&::before': {
              '@apply absolute top-0 left-0 w-full h-full blur-[40px] mix-blend-screen lg:blur-[20px]':
                {},
              content: '""',
              display: 'block',
              backgroundImage:
                'linear-gradient(rgb(0, 68, 223), rgb(7, 226, 181))',
            },
          },
          '.title': {
            '@apply text-[36px] italic font-normal mt-0 text-black mb-0 lg:text-[60px] lg:text-darkgray':
              {},
            textShadow: 'rgb(210, 250, 240) 4px 4px 0px',
            lineHeight: 1,

            '&.first': {
              '@apply mr-0 mb-2 lg:mr-[160px]': {},
            },
          },
        });
      }
    ),
  ],
  corePlugins: {
    preflight: false,
  },
};
export default config;
