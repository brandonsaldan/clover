import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import About from '../components/About'

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-[#070816] flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 mt-12">
        <main className="">
          <About />
        </main>
      </div>
    </div>
  )
}

export default Home
