/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Nanum Barun Gothic"', 'system-ui', 'sans-serif'],
        },
        colors: {
          primary: {
            DEFAULT: '#4493ce',   // 기본 버튼 색
            hover: '#2864a0',     // 마우스 오버
            foreground: '#ffffff',
            muted: '#4493ce',
            subtle: '#147fb8',
            emphasis: '#2864a0',
            surface: '#e2edf3',
            deep: '#18294d',
          },
          ghost: {
            DEFAULT: '#322d2d',   // 기본 버튼 색
            hover: '#2864a0',     // 마우스 오버
          },
          table: {
            head: '#3c89c3',
            level: '#1472b8',
            hover: '#f4fbff',
          },
          label: {
            bg: '#d7f2ff',
            text: '#0a5289',
          },
           surface: {
            base: "#ffffff",
            warm: "#F8EEE2",
          },
          pt:{
            w100: '#ffe1c3',
            b100: '#d7f2ee',
            b200: '#4492d0',
            b300: '#18294d',
            b400: '#9acdf6',
          },
          neutral: {
            50: '#fafafa',
            100: '#f8f7f6',
            900: '#949494',
          },
        },
        letterSpacing: {
           body: '-0.08em',
           small: '0.005em',
           button: '-0.03em',
           title: '-0.1em',
        },
        lineHeight: {
        title: '1.25rem',
        ui: '1.5rem',
        body: '1.6rem',
        caption: '1.5rem',
      },
      },
    },
    plugins: [],
  }