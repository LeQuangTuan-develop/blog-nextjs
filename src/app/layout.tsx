import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import IndexTracking from '../../common/IndexScript';
import { NextUIProviders, ThemeProvider } from '../../context/theme-provider';
import AppNavBar from '@components/layout/root-layout/navbar';
import Footer from '@components/layout/root-layout/footer';
import AuthProvider from '@context/auth';
import BackToTop from '@components/custom/BackToTop';
import BackGround from '@components/layout/root-layout/background';
import OneColumnLayout from '@layout/OneColLayout';
import ThreeColumnLayout from '@layout/ThreeColsLayout';

export const metadata: Metadata = {
  title: 'FxEater | Homepage',
  description: "Learning about forex market, and let's not lose money from it.",
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          data-n-head="true"
          rel="icon"
          type="image/x-icon"
          href="/fav/favicon.ico"
        />
      </head>
      <body
        className={`${inter.className} text-gray-700 bg-gray-50 dark:text-white dark:bg-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextUIProviders>
            <AuthProvider>
              <AppNavBar />
              {children}
              <BackToTop />
              <IndexTracking />
              <BackGround />
              <Footer />
            </AuthProvider>
          </NextUIProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
