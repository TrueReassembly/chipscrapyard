import { useRef, useState } from "react";
import "../app/globals.css"
import Head from "next/head";

export default function ClickTheButton() {

  const [clicks, setClicks] = useState(0);
  const meta = {
    title: "Click the Button",
    description: "Click the button. That's it."
  }

  function click() {
    setClicks(clicks + 1);
    switch (clicks + 1) {
      case 100: alert("You've clicked the button 100 times! That's a lot of clicks!"); break;
      case 200: alert("You've clicked the button 200 times! That's even more a lot of clicks!"); break;
      case 400: alert("I'm sorry about missing 300, got distracted by a birthday party."); break;
      case 510: alert("SORRY! sorry, I was running a bit late but congrats on 500 clicks!"); break;
      case 600: alert("Why are you still here!"); break;
      case 700: alert("I'm not giving you anything for 700 clicks! >:D"); break;
      case 800: alert("I think you should stop..."); break;
      case 900: alert("Do not get to 1000. This is your first and last warning!"); break;
      case 1000: { 
        alert("I warned you...");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        break;
      }
    }
  }

  return( 
    <>
        <Head>
          <title>Assembly&apos;s Scrapyard</title>
          <meta content="Assembly&apos;s Scrapyard" property="og:title" />
          <meta content="The useless things I&apos;ve made to learn Next.js" property="og:description" />
          <meta content="https://scrapyard.reassembly.dev" property="og:url" />
          <meta content="https://pbs.twimg.com/profile_images/1726294196573642752/Gb-VwBsQ_400x400.jpg" property="og:image" />
          <meta content="#55199E" data-react-helmet="true" name="theme-color" />
        </Head>
        <button className="absolute top-0 left-0 m-5 scale-150" onClick={() => window.history.back()}>← Back</button>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
            <p className="text-6xl font-bold text-center mb-1">Click the Button</p>
            <p className="text-2xl text-center mb-1">That&apos;s it.</p>
            <p className="text-1xl text-center mb-6">There&apos;s nothing else to this page.</p>
            <p className="text-4xl w-screen text-center flex justify-center mt-5">You have clicked the button {clicks} times</p>
            <div className="flex justify-center items-center h-screen flex-col">
              <button className="border bg-slate-800 p-5 text-2xl rounded-xl w-30 min-w-min" onClick={click}>Click me!</button>
            </div>
        </main>
    </>
  )
}