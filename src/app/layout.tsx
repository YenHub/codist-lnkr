import './globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import {
  CopyRightMeta,
  Favicon,
  LanguageMeta,
} from '@/components/Layout/Header';
import { AppStoreProvider } from '@/providers/app-store-provider';
import { MuiThemeProvider } from '@/providers/mui-theme-provider';

import { metaKeywords } from '../constants/meta.keywords';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LNKR by Codist',
  description: 'LNKR | The free URL shortening service',
  keywords: metaKeywords,
  robots: 'index,follow',
  authors: { name: 'Codist | Ian Gilkes' },
  applicationName: 'LNKR',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <CopyRightMeta />
        <LanguageMeta />
        <Favicon />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <AppStoreProvider>
            <MuiThemeProvider>{children}</MuiThemeProvider>
          </AppStoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
