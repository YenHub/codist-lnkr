'use client';
import clsx from 'clsx';
import localFont from 'next/font/local';

import styles from './styles.module.css';

const honkFont = localFont({ src: './font/Honk.ttf' });

export const AppLogo: React.FC = () => {
  const { 'font-face': fontFace } = styles;

  return <div className={clsx(honkFont.className, fontFace)}>LNKR</div>;
};
