import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ApplicationNameMeta } from '@/components/Layout/Header/ApplicationNameMeta';
import { AuthorMeta } from '@/components/Layout/Header/AuthorMeta';
import { CopyRightMeta } from '@/components/Layout/Header/CopyRightMeta';
import { LanguageMeta } from '@/components/Layout/Header/LanguageMeta';
import { RobotsMeta } from '@/components/Layout/Header/RobotsMeta';
import { metaKeywords } from '@/constants/meta.keywords';

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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
