import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import Head from 'next/head'
import { PageTransition } from 'next-page-transitions'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

import Loader from '../components/Loader'

const timeout = 400

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <PageTransition
      timeout={timeout}
      classNames="page-transition"
      loadingComponent={<Loader />}
      loadingDelay={500}
      loadingTimeout={{
        enter: timeout,
        exit: 0,
      }}
      loadingClassNames="loading-indicator"
    >
      <GeistProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </PageTransition>
    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
      }
      .page-transition-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity ${timeout}ms, transform ${timeout}ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity ${timeout}ms;
      }
      .loading-indicator-appear,
      .loading-indicator-enter {
        opacity: 0;
      }
      .loading-indicator-appear-active,
      .loading-indicator-enter-active {
        opacity: 1;
        transition: opacity ${timeout}ms;
      }
    `}</style>
  </>
)}

export default MyApp; ({ Component, pageProps }: AppProps) => (
  <GeistProvider>
    <CssBaseline />
    <Component {...pageProps} />
  </GeistProvider>
)
