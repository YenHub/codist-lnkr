import './globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import {
  ApplicationNameMeta,
  AuthorMeta,
  CopyRightMeta,
  Favicon,
  LanguageMeta,
  RobotsMeta,
} from '@/components/Layout/Header';
import { ThemeProvider } from '@/lib/mui';
import { AppStoreProvider } from '@/providers/app-store-provider';
import theme from '@/theme';

import { metaKeywords } from '../constants/meta.keywords';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LNKR by Codist',
  description: 'LNKR | The free URL shortening service',
  keywords: metaKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <RobotsMeta />
        <AuthorMeta />
        <CopyRightMeta />
        <ApplicationNameMeta />
        <LanguageMeta />
        <Favicon />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <AppStoreProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppStoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
