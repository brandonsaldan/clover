import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import About from '../components/About'
import ProjectCard from '../components/ProjectCard'
import CurrentlyPlaying from '../components/CurrentlyPlaying'

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-[#000000] flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/d6ce3288bb.js" crossorigin="anonymous"></script>
      </Head>

      <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 mt-12">
        <main className="mt-24 sm:mt-32">
          <About />
        </main>
      </div>
      <div className="mt-auto">
        <CurrentlyPlaying />
      </div>
    </div>
  )
}

export default Home
