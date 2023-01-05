export default {
  shortcuts: [{ logo: 'i-logos-vue w-6em h-6em transform transition-800' }],
  theme: {
    colors: {
      primary: '#2767FD',
      warning: '#FF8541',
      negative: '#DC0C48',
      bg: {
        main: '#F5F6FA',
        457: '#F4F5F7',
        '5D7': '#FFF5D7',
        light: '#EFFFEF',
        lightblue: '#2767fd',
        blue: '#2785FD',
        f8: '#F8F8FB',
        fff: '#fff'
      },
      text: {
        1: '#172B4D',
        2: '#42526E',
        3: '#515F68',
        4: '#8497A4',
        29: '#29303A',
        10: '#353535',
        255: '#fff',
        blue: '#2767FD',
        gray: 'rgba(255,255,255,.54)',
        white: '#7A869A'
      },
      dark: {
        primary: '#2767FD',
        warning: '#F86F1A'
      },
      light: {
        primary: '#2767FD',
        secondary: '#F4FCF9',
        warning: '#FFBB16',
        negative: 'rgba(220,12,72,0.1);'
      }
    }
  },
  rules: [
    // 基于不透明度纯黑的边框色
    // bg-bl-85 => border-color: rgba(0, 0, 0, 0.85);
    [
      /^border-bl-(\d+)$/,
      ([, d]) => ({ 'border-color': `rgba(0, 0, 0, 0.${d})` })
    ],

    // 基于不透明度纯黑的背景色
    // bg-b-85 => background-color: rgba(0, 0, 0, 0.85);
    [
      /^bg-b-(\d+)$/,
      ([, d]) => ({ 'background-color': `rgba(0, 0, 0, 0.${d})` })
    ],

    // 基于不透明度纯黑的文字色
    // text-b-85 => color: rgba(0, 0, 0, 0.85);
    [/^text-b-(\d+)$/, ([, d]) => ({ color: `rgba(0, 0, 0, 0.${d})` })],

    // 基于不透明度纯白的背景色
    // bg-w-85 => background-color: rgba(255, 255, 255, 0.85);
    [
      /^bg-w-(\d+)$/,
      ([, d]) => ({ 'background-color': `rgba(255, 255, 255, 0.${d})` })
    ],

    // 基于不透明度纯白的文字色
    // text-w-85 => color: rgba(255, 255, 255, 0.85);
    [/^text-w-(\d+)$/, ([, d]) => ({ color: `rgba(255, 255, 255, 0.${d})` })],

    // 字体大小，基于rem的比例写法
    // fs-7-8 => font-size: (7/8 = 0.875)rem;
    [
      /^fs-(\d+)-(\d+)$/,
      ([, d1, d2]) => {
        return { 'font-size': `${d1 / d2}rem` }
      }
    ],

    // 高度
    // hi-11-8 => height: (11/8 = 1.375)rem;
    [
      /^hi-(\d+)-(\d+)$/,
      ([, d1, d2]) => {
        const lh = d1 / d2
        return { height: `${lh}rem` }
      }
    ],

    [
      /^w-(\d+)-(\d+)$/,
      ([, d1, d2]) => {
        const w = (d1 / d2) * 100
        return { width: `${w}%` }
      }
    ],

    // lh-11-8 => line-height: (11/8 = 1.375)rem;
    [
      /^lh-(\d+)-(\d+)$/,
      ([, d1, d2]) => {
        const lh = d1 / d2
        return { 'line-height': `${lh}rem` }
      }
    ],

    // 固定灰色背景
    [/^bg-grey$/, () => ({ 'background-color': 'rgba(244,247,250,1)' })],

    // 平移工具
    // translate-x-1-2 => transform: translateX(50%);
    [
      /^translate-(x|y)-(\d+)-(\d+)$/,
      ([, direction, d1, d2]) => {
        return {
          transform: `translate${direction === 'x' ? 'X' : 'Y'}(${
            (100 * d1) / d2
          }%)`
        }
      }
    ],

    // 负向平移工具
    // translate--x-1-2 => transform: translateX(-50%);
    [
      /^translate--(x|y)-(\d+)-(\d+)$/,
      ([, direction, d1, d2]) => {
        return {
          transform: `translate${direction === 'x' ? 'X' : 'Y'}(-${
            (100 * d1) / d2
          }%)`
        }
      }
    ],

    // 定位位置工具
    // left-1-2 => left: 50%;
    [
      /^(left|right|top|bottom)-(\d+)-(\d+)$/,
      ([, direction, d1, d2]) => {
        return { [direction]: `${(100 * d1) / d2}%` }
      }
    ],

    // 负向定位位置工具
    // left--1-2 => left: -50%;
    [
      /^(left|right|top|bottom)--(\d+)-(\d+)$/,
      ([, direction, d1, d2]) => {
        return { [direction]: `-${(100 * d1) / d2}%` }
      }
    ],

    // 基于16进制色值的纯黑文字色
    // text-bh-2 => color: #222;
    [/^text-bh-(\d|[ABCDEF]+)$/, ([, d]) => ({ color: `#${d}${d}${d}` })],

    // 基于16进制色值的重复3次背景色
    // bg-bh-2 => background-color: #222;
    [
      /^bg-bh-([ABCDEF\d]+)$/,
      ([, d]) => ({ 'background-color': `#${d}${d}${d}` })
    ],

    // 基于16进制色值的重复3次边框色
    // border-h-2 => background-color: #222;
    [
      /^border-h-([ABCDEF\d]+)$/,
      ([, d]) => ({ 'border-color': `#${d}${d}${d}` })
    ],

    // 基于16进制色值的完全色值背景
    [/^bg-([a-fA-F\d]{6})$/, ([, v]) => ({ 'background-color': `#${v}` })],

    // 基于16进制色值的完全色值文字
    [/^text-([a-fA-F\d]{6})$/, ([, v]) => ({ color: `#${v}` })]
  ]
}
