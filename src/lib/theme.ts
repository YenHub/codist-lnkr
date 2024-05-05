'use client';

import type {} from '@mui/material/themeCssVarsAugmentation';
import { Roboto } from 'next/font/google';

import { experimental_extendTheme as extendTheme } from './mui/mui';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: teal[600],
        // },
      },
    },
    dark: {
      palette: {
        // primary: {
        //   main: teal[400],
        // },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
