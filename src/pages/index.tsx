'use client'
import ConsoleTypeComponent from '../components/ConsoleTypeComponent'
import '../app/globals.css'
import Head from "next/head";


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
        <main className="text-white">
          <ConsoleTypeComponent />
        </main>
        
    </>
  )
}
