import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import ProjectText from '../components/Projects/ProjectText'
import ProjectCard from '../components/Projects/ProjectCard'
import CurrentlyPlaying from '../components/CurrentlyPlaying'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-[#000000] flex min-h-screen flex-col py-2">
      <Head>
        <title>Brandon Saldan - Projects</title>
        <meta name="description" content="Here's some personal projects I've worked on recently. Check out more on my GitHub!" />
        <meta name="keywords" content="Brandon Saldan, Saldan, brandons.place, saldan.dev" />
        <meta name="author" content="Brandon Saldan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandons.place/" />
        <meta property="og:title" content="Brandon Saldan - Website and Portfolio" />
        <meta property="og:description" content="Here's some personal projects I've worked on recently. Check out more on my GitHub!" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/d6ce3288bb.js" crossOrigin="anonymous"></script>
      </Head>

      <div className="mx-auto max-w-3xl sm:px-6 lg:px-8 mt-12">
        <main className="">
          <Header />
          <ProjectText />
          <ProjectCard />
        </main>
      </div>
      <div className="mt-auto">
        <CurrentlyPlaying />
      </div>
    </div>
  )
}

export default Home
