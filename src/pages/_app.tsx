import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import '@/styles/globals.css';
import { theme } from '@/styles/theme';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Garage Manager</title>
        <meta
          name="description"
          content="Uma plataforma que facilita o gerenciamento da sua oficina mecânica"
        />
        <meta name="keywords" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
