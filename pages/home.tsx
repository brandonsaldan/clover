import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-[#000000] flex min-h-screen flex-col py-2">
      <Head>
        <meta http-equiv="Refresh" content="0; url='https://brandons.place/'"/>
      </Head>
    </div>
  )
}

export default Home
