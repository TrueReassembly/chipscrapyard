'use client'
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
      <main className="flex min-h-screen flex-col items-center justify-between p-12 h-screen">
        <div className="justify-center font-mono text-center">
          {/* &apos; is an apostrophe, whoever decided that is an idiot */}
          <h1 className="text-6xl font-bold mb-1">Assembly&apos;s Scrapyard</h1>
          <p className="text-2xl mb-1">The useless things I&apos;ve made to learn Next.js</p>
          <p className="text-1xl">Even though I&apos;m using TypeScript</p>
          <p>I am also not a graphics designer</p>
        </div>

      <div className="grid justify-center items-center h-screen grid-flow-row">
        <a href="./project" className="border-2 bg-transparent p-5 text-2xl rounded-xl min-h-fit border-white min-w-min transform transition-transform duration-500 hover:scale-110">My Projects</a>
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
