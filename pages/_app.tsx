import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { PageTransition } from 'next-page-transitions'
import { GeistProvider, CssBaseline } from '@geist-ui/core'

import Loader from '../components/Loader'
import StatusIndicator from '../components/ui/StatusIndicator'
import Header from '../components/Header'

const timeout = 400

function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <title>Brandon Saldan - Website and Portfolio</title>
        <meta name="description" content="Business and Computer Science student from Pennsylvania" />
        <meta name="keywords" content="Brandon Saldan, Saldan, brandons.place, saldan.dev" />
        <meta name="author" content="Brandon Saldan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandons.place/" />
        <meta property="og:title" content="Brandon Saldan" />
        <meta property="og:description" content="Business & Computer Science Student" />
        <meta content="https://avatars.githubusercontent.com/u/26472557?v=4" property="og:image" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-white dark:bg-[#000000] h-full">
    <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 h-screen">
      <div className="pt-12 pb-12 bg-white dark:bg-[#000000]">
      <Header />
      <PageTransition
        timeout={timeout}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={10}
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
    </div>
    </div>
    <div className="absolute bottom-0 w-full">
      <StatusIndicator />
    </div>
    </div>
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

export default App; ({ Component, pageProps }: AppProps) => (
  <GeistProvider>
    <CssBaseline />
    <Component {...pageProps} />
  </GeistProvider>
)
