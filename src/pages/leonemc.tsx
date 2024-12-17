import Typist from "react-typist-component";
import Head from "next/head"
import '../app/globals.css'

export default function LeoneMC() {
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
        <Typist>
            <Typist.Delay ms={1000} />
            <span> leonemc</span>
            <Typist.Delay ms={500} />
            <div className="m-3">
                <div className="text-center align-middle">
                    <h1>LeoneMC</h1>
                    <p>LeoneMC is a server that I currently work a developer on, As part of my work on LeoneMC I handle the Spigot API as well as the Java programming language. I also teach less experienced developers how to code in Java</p>
                </div>
            </div>
            <Typist.Delay ms={1000} />
        </Typist>
        </>
        )
}