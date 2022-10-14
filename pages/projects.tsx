import type { NextPage } from 'next'
import Head from 'next/head'

import ProjectText from '../components/ui/text/ProjectText'
import ProjectCard from '../components/ui/ProjectCard'

const Projects: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Brandon Saldan - Projects</title>
        <meta name="description" content="Here's some personal projects I've worked on recently. Check out more on my GitHub!" />
        <meta name="keywords" content="Brandon Saldan, Saldan, brandons.place, saldan.dev" />
        <meta name="author" content="Brandon Saldan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandons.place/" />
        <meta property="og:title" content="Brandon Saldan - Website and Portfolio" />
        <meta property="og:description" content="Here's some personal projects I've worked on recently. Check out more on my GitHub!" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <ProjectText />
        <ProjectCard />
    </div>
  )
}

export default Projects
