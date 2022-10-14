import type { NextPage } from 'next'
import Head from 'next/head'

import AboutText from '../components/ui/text/AboutText'
import ToolCard from '../components/ui/ToolCard'

const About: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Brandon Saldan - Website and Portfolio</title>
        <meta name="description" content="Business and Computer Science student from Pennsylvania" />
        <meta name="keywords" content="Brandon Saldan, Saldan, brandons.place, saldan.dev" />
        <meta name="author" content="Brandon Saldan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brandons.place/" />
        <meta property="og:title" content="Brandon Saldan - Website and Portfolio" />
        <meta property="og:description" content="Business and Computer Science student from Pennsylvania" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AboutText />
      <div className="mt-2">
        <ToolCard/>
      </div>
    </div>
  )
}

export default About
