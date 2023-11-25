'use client'
import './globals.css'

export default function Home() {

  function useFooterButton(destination: String) {
    switch (destination) {
      case 'Github': window.location.href = 'https://github.com/TrueReassembly'
      case 'Main Twitter': window.location.href = 'https://twitter.com/ChipDaFurry'
      case 'RWBY Twitter': window.location.href = 'https://twitter.com/AssemblyRose'
      default: return
    }
  }
  
  const footerButtons = ['Github', 'Main Twitter', 'RWBY Twitter']
  // border-l text-1xl border-r p-2

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
      <div className="justify-center">
        <h1 className="text-6xl font-bold text-center mb-1">Assembly's Scrapyard</h1>
        <p className="text-2xl text-center mb-1">The useless things I've made to learn Next.js</p>
        <p className="text-1xl text-center">Even though I'm using TypeScript</p>
      </div>

      <footer className="flex flex-col items-center justify-center mt-auto">
        <div className="grid grid-rows-1 grid-flow-col">
            {footerButtons.map((button, index) => (
              <button key={index} className="border-l text-1xl border-r p-2" onClick={() => useFooterButton(button)}>{button}</button>
            ))}
        </div>

        <p className="text-slate-400 mt-5">Made with ♥ by Assembly</p>
      </footer>
    </main>
  )
}
