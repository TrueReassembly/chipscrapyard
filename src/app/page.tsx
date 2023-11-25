'use client'
import './globals.css'

export default function Home() {
  const destinations = {
    "Github": "https://github.com/TrueReassembly",
    "Main Twitter": "https://twitter.com/ChipDaFurry",
    "RWBY Twitter": "https://twitter.com/AssemblyRose"
  }

  const redirect = (destination: string) => {
    window.open(destination)
  }
  // border-l text-1xl border-r p-2

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
      <div className="justify-center">
        {/* &apos; is an apostrophe, whoever decided that is an idiot */}
        <h1 className="text-6xl font-bold text-center mb-1">Assembly&apos;s Scrapyard</h1>
        <p className="text-2xl text-center mb-1">The useless things I&apos;ve made to learn Next.js</p>
        <p className="text-1xl text-center">Even though I&apos;m using TypeScript</p>
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
  )
}
