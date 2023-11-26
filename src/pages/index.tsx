'use client'
import Head from 'next/head'
import '../app/globals.css'

export default function Home() {

  const meta = {
    title: "Assembly's Scrapyard",
    description: "The stuff I've made to learn Next.js"
  }

  const destinations: Destination = {
    "Github": "https://github.com/TrueReassembly",
    "Main Twitter": "https://twitter.com/ChipDaFurry",
    "RWBY Twitter": "https://twitter.com/AssemblyRose"
  }

  interface Destination {
    [key: string]: string
  }

  const redirect = (destination: string) => {
    window.location.href = destinations[destination];
  }
  // border-l text-1xl border-r p-2

  return (
    <>

      <Head>
        <title>Assembly&apos;s Scrapyard</title>
        <meta content="Assembly&apos;s Scrapyard" property="og:title" />
        <meta content="The useless things I&apos;ve made to learn Next.js" property="og:description" />
        <meta content="https://scrapyard.reassembly.dev" property="og:url" />
        <meta content="https://pbs.twimg.com/profile_images/1726294196573642752/Gb-VwBsQ_400x400.jpg" property="og:image" />
        <meta content="#55199E" data-react-helmet="true" name="theme-color" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
        
        <div className="justify-center">
          {/* &apos; is an apostrophe, whoever decided that is an idiot */}
          <h1 className="text-6xl font-bold text-center mb-1">Assembly&apos;s Scrapyard</h1>
          <p className="text-2xl text-center mb-1">The useless things I&apos;ve made to learn Next.js</p>
          <p className="text-1xl text-center">Even though I&apos;m using TypeScript</p>
        </div>

      <div className="grid justify-center items-center h-screen grid-flow-row">
        <a href="./clickthebutton" className="border bg-slate-900 p-5 text-2xl rounded-xl w-30 min-w-min transform transition-transform duration-500 hover:scale-110">Click the Button!</a>
      </div>

        <footer className="flex flex-col items-center justify-center mt-auto">
          <div className="grid grid-rows-1 grid-flow-col">
              {Object.keys(destinations).map((button, i) => (
                <button key={i} className="border-l text-1xl border-r p-2" onClick={() => redirect(button)}>{button}</button>
              ))}
          </div>

          <p className="text-slate-400 mt-5">Made with ♥ by Assembly</p>
        </footer>
      </main>
    </>
  )
}
