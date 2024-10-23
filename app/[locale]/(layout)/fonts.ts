// fonts.tsx
import localFont from 'next/font/local';

const BeVietnamPro = localFont({
  src: [
    {
      path: '../../../public/fonts/BeVietnamPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/BeVietnamPro-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/BeVietnamPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/BeVietnamPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  preload: false,
  display: 'swap',
  variable: '--font-main',
  fallback: ['sans-serif'],
});

export { BeVietnamPro };
