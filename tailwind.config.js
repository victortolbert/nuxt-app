const defaultTheme = require('tailwindcss/defaultTheme')
// const remark = require('remark')
const defaultColors = require('tailwindcss/colors')
delete defaultColors.warmGray
delete defaultColors.trueGray
delete defaultColors.coolGray
delete defaultColors.blueGray
delete defaultColors.lightBlue

const svgToDataUri = require('mini-svg-data-uri')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const appColors = require('./design-tokens').colors
const colors = { ...defaultColors, ...appColors }
// colors = { ...colors, ...{ transparent: 'transparent' } }

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': colors.sanJuan,
        'secondary': colors.athensGray,
        'accent': colors.tango,

        'danger': '#b60000',
        'danger-invert': '#fff',
        'warning': '#f4c300',
        'warning-invert': '#fff',
        'success': '#006724',
        'success-invert': '#fff',
        'info': '#005C98',
        'info-invert': '#fff',

        'green': colors.emerald,
        'purple': colors.violet,
        'yellow': colors.amber,
        'pink': colors.fuchsia,
        'san-juan': colors.sanJuan,

        'gray': colors.slate,
        'neutral': colors.gray,
        'light': colors.alabaster,
        'dark': colors.shark,

        'brand': colors.toreaBay,

        'vue-one': '#64B687',
        'vue-two-three': '#3C8171',
        'vue-two': '#42B883',
        'vue-three': '#35495E',
        'code': {
          'punctuation': '#A1E8FF',
          'tag': '#D58FFF',
          'attr-name': '#4BD0FB',
          'attr-value': '#A2F679',
          'string': '#A2F679',
          'highlight': 'rgb(125 211 252 / 0.1)',
        },
        'main': {
          DEFAULT: colors.gray[700],
          dark: '#ffffff',
        },
        'highlight': {
          DEFAULT: colors.red[700],
          dark: colors.violet[800],
        },
        'highlight-background': {
          DEFAULT: colors.yellow[400],
          dark: '#1fb6ff',
        },
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      backgroundSize: ({ theme }) => ({
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        ...theme('spacing'),
      }),
      fill: ({ theme }) => ({
        gray: theme('colors.gray'),
      }),
      backgroundImage: theme => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400',
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`,
        )}")`,
      }),
      boxShadow: {
        tag: '3px 3px 0 #004085',
        field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
        link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
      },
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        // display: ['Pica'],
        mono: ['Space Mono', 'Fira Code', ...defaultTheme.fontFamily.mono],
        mockup: ['Balsamiq Sans', 'cursive'],
        proto: ['Flow Circular', 'Redacted Script', 'Flow Block', 'Blokk Neue', 'Blokk', 'Flow Rounded', 'cursive'],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      gridTemplateColumns: {
        // 16: 'repeat(16, minmax(0, 1fr))',
        // 22: 'repeat(22, minmax(60px, 1fr))',
        24: 'repeat(24, minmax(1rem, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      listStyleType: {
        'square': 'square',
        'roman': 'upper-roman',
        'circle': 'circle',
        'disc': 'disc',
        'thumbs-up': 'thumbs-up',
        'fisheye': 'fisheye',
        'heart': 'heart',
        'globe': 'globe',
        'lemon': 'lemon',
        'check': 'check',
      },
      minWidth: {
        4: '1rem',
      },
      minHeight: {
        4: '1rem',
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
      animation: {
        'wiggle': 'wiggle 1s infinite',
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
      },
      spacing: {
        13: '3.25rem', // 52px
        14: '3.5rem', // 56px
        15: '3.75rem', // 60px
        16: '4rem', // 64px
        17: '4.25rem', // 68px
        18: '4.5rem', // 72px
        20: '5rem', // 80px
        22: '5.5rem', // 88px
        30: '7.5rem', // 120px
        34: '8.5rem', // 136px
        49: '12.25rem', // 196px
        50: '12.5rem', // 200px
        74: '18.5rem', // 296px
        76: '19rem', // 304px
        79: '19.75rem', // 316px
        84: '21rem', // 336px
        88: '22rem', // 352px
        94: '23.5rem', // 376px
        95: '23.75rem', // 380px
        96: '24rem', // 384px
        104: '26rem', // 416px
        112: '28rem', // 448px
        128: '32rem', // 512px
        136: '34rem', // 554px
        144: '36rem', // 576px
        148: '37rem', // 592px
        152: '38rem', // 608px
        160: '40rem', // 640px
        164: '41rem', // 656px
        200: '50rem', // 800px
        282: '70.5rem', // 1128px
        300: '75rem', // 1200px
        400: '100rem', // 1600px
        full: '100%',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
        'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
      },
      // typography: theme => ({
      //   DEFAULT: {
      //     css: {
      //       'maxWidth': 'none',
      //       'color': theme('colors.gray.700'),
      //       'hr': {
      //         borderColor: theme('colors.gray.100'),
      //         marginTop: '3em',
      //         marginBottom: '3em',
      //       },
      //       'h1, h2, h3': {
      //         letterSpacing: '-0.025em',
      //       },
      //       'h2': {
      //         marginBottom: `${16 / 24}em`,
      //       },
      //       'h3': {
      //         marginTop: '2.4em',
      //         lineHeight: '1.4',
      //       },
      //       'h4': {
      //         marginTop: '2em',
      //         fontSize: '1.125em',
      //       },
      //       'h2 small, h3 small, h4 small': {
      //         fontFamily: theme('fontFamily.mono').join(', '),
      //         color: theme('colors.gray.500'),
      //         fontWeight: 500,
      //       },
      //       'h2 small': {
      //         fontSize: theme('fontSize.lg')[0],
      //         ...theme('fontSize.lg')[1],
      //       },
      //       'h3 small': {
      //         fontSize: theme('fontSize.base')[0],
      //         ...theme('fontSize.base')[1],
      //       },
      //       'h4 small': {
      //         fontSize: theme('fontSize.sm')[0],
      //         ...theme('fontSize.sm')[1],
      //       },
      //       'h2, h3, h4': {
      //         'scroll-margin-top': 'var(--scroll-mt)',
      //       },
      //       'ul > li': {
      //         paddingLeft: '1.75em',
      //       },
      //       'ul > li::before': {
      //         width: '0.75em',
      //         height: '0.125em',
      //         top: 'calc(0.875em - 0.0625em)',
      //         left: 0,
      //         borderRadius: '999px',
      //         backgroundColor: theme('colors.gray.300'),
      //       },
      //       'a': {
      //         fontWeight: theme('fontWeight.semibold'),
      //         textDecoration: 'none',
      //         borderBottom: `1px solid ${theme('colors.sky.300')}`,
      //       },
      //       'a:hover': {
      //         borderBottomWidth: '2px',
      //       },
      //       'a code': {
      //         color: 'inherit',
      //         fontWeight: 'inherit',
      //       },
      //       'strong': {
      //         color: theme('colors.gray.900'),
      //         fontWeight: theme('fontWeight.semibold'),
      //       },
      //       'a strong': {
      //         color: 'inherit',
      //         fontWeight: 'inherit',
      //       },
      //       'code': {
      //         fontWeight: theme('fontWeight.medium'),
      //         fontVariantLigatures: 'none',
      //       },
      //       'pre': {
      //         color: theme('colors.gray.50'),
      //         borderRadius: theme('borderRadius.xl'),
      //         padding: theme('padding.5'),
      //         boxShadow: theme('boxShadow.md'),
      //         display: 'flex',
      //         marginTop: `${20 / 14}em`,
      //         marginBottom: `${32 / 14}em`,
      //       },
      //       'p + pre': {
      //         marginTop: `${-4 / 14}em`,
      //       },
      //       'pre + pre': {
      //         marginTop: `${-16 / 14}em`,
      //       },
      //       'pre code': {
      //         flex: 'none',
      //         minWidth: '100%',
      //       },
      //       'table': {
      //         fontSize: theme('fontSize.sm')[0],
      //         lineHeight: theme('fontSize.sm')[1].lineHeight,
      //       },
      //       'thead': {
      //         color: theme('colors.gray.700'),
      //         borderBottomColor: theme('colors.gray.200'),
      //       },
      //       'thead th': {
      //         paddingTop: 0,
      //         fontWeight: theme('fontWeight.semibold'),
      //       },
      //       'tbody tr': {
      //         borderBottomColor: theme('colors.gray.100'),
      //       },
      //       'tbody tr:last-child': {
      //         borderBottomWidth: '1px',
      //       },
      //       'tbody code': {
      //         fontSize: theme('fontSize.xs')[0],
      //       },
      //       'figure figcaption': {
      //         textAlign: 'center',
      //         fontStyle: 'italic',
      //       },
      //       'figure > figcaption': {
      //         marginTop: `${12 / 14}em`,
      //       },
      //     },
      //   },
      // }),
    },
  },
  // experimental: {
  //   optimizeUniversalDefaults: true,
  // },

  content: [
    'components/**/*.{vue,js,ts}',
    'content/**/*.{md,yml,json,json5,csv}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    // 'formkit.config.{js,ts}',
    // 'theme.{js,ts}',
  ],

  // transform: {
  //   md: (content) => {
  //     return remark().process(content)
  //   },
  // },
  safelist: [
    {
      pattern: /(text|fill)-(primary|secondary)/,
      variants: [],
    },
    {
      pattern: /(bg|text|border)-(red|green|blue)-(100|200|300|900)/,
      variants: ['hover', 'focus'],
    },
  ],
  darkMode: 'class',
  plugins: [
    // require('daisyui'),
    // require('@formkit/themes/tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    // require('tailwindcss-theming')({
    //   variants: {
    //     dark: true,
    //     light: true,
    //   },
    // }),
    require('tailwindcss-scrims')({
      directions: {
        t: 'to bottom',
        b: 'to top',
        r: 'to left',
        l: 'to right',
      },
      distances: {
        'default': '25%',
        '1/4': '25%',
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.66666%',
        '3/4': '75%',
      },
      colors: {
        default: ['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)'],
      },
      variants: ['responsive', 'hover'],
    }),
    require('tailwind-heropatterns')({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: [],

      // The foreground colors of the pattern
      colors: {
        'default': '#9C92AC',
        'blue-dark': '#000044', // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
    function ({ addUtilities, theme }) {
      const shadows = theme('boxShadow')
      addUtilities(
        Object.keys(shadows).reduce(
          (utils, key) => ({
            ...utils,
            [`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`]: {
              textShadow: shadows[key].replace(
                /([0-9]+(px)? [0-9]+(px)? [0-9]+(px)?) [0-9]+(px)?/g,
                '$1',
              ),
            },
          }),
          {},
        ),
      )
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      )
    },
    function ({ addUtilities, theme }) {
      const backgroundSize = '7.07px 7.07px'
      const backgroundImage = color =>
        `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`
      const colors = Object.entries(theme('backgroundColor')).filter(
        ([, value]) => typeof value === 'object' && value[400] && value[500],
      )

      addUtilities(
        Object.fromEntries(
          colors.map(([name, colors]) => {
            const backgroundColor = `${colors[400]}/1a` // 10% opacity
            const stripeColor = `${colors[500]}/80` // 50% opacity

            return [
              `.bg-stripes-${name}`,
              {
                backgroundColor,
                backgroundImage: backgroundImage(stripeColor),
                backgroundSize,
              },
            ]
          }),
        ),
      )

      addUtilities({
        '.bg-stripes-white': {
          backgroundImage: backgroundImage('rgba(255 255 255 / 0.75)'),
          backgroundSize,
        },
      })

      addUtilities({
        '.ligatures-none': {
          fontVariantLigatures: 'none',
        },
      })
    },
  ],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'primary': colors.sanJuan[500],
          'primary-focus': colors.sanJuan[600],
          'info': '#005C98',
          'success': '#006724',
          'warning': '#f4c300',
          'error': '#b60000',
          '--rounded-box': '0.25rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.25rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'capitalize', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
        mytheme: {
          'primary': '#FF0000',
          'secondary': '#F000B8',
          'accent': '#37CDBE',
          'neutral': '#3D4451',
          'base-100': '#FFFFFF',
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#F87272',

          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.25rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
  configViewer: {
    baseFontSize: 16,
    typographyExample: 'Your example sentence',
    themeReplacements: {
      'var(--color-black)': '#000000',
    },
  },
}
