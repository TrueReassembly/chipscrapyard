import { createRef, useRef } from "react"
import "../app/globals.css"
import Head from "next/head";

export default function RealAndFakeConversions() {

    const from = useRef<HTMLInputElement>(null);
    const fromCurrency = useRef<HTMLSelectElement>(null);
    const to = useRef<HTMLInputElement>(null);
    const toCurrency = useRef<HTMLSelectElement>(null);

    interface Entry {
        [key: string]: number
    }

    // For when I come back to this, Each number is how much 1 USD is worth in that currency
    const currenciesToTheDollar: Entry = {
        "USD": 1,
        "EUR": 0.92,
        "GBP": 0.79,
        "SUVIS": 0.61,
        "LIEN": 0.20
    }

    function convert(from: number, fromCurrency: string, toCurrency: string) {
        if (fromCurrency === toCurrency) {
            return from;
        } else {
            var amountInDollars = from / currenciesToTheDollar[fromCurrency];
            return (amountInDollars * currenciesToTheDollar[toCurrency]).toFixed(2);
        }
    }

    function onFromEdit(event: React.ChangeEvent<HTMLInputElement>) {
        if (from.current && to.current && fromCurrency.current && toCurrency.current) {
            to.current.value = convert(parseFloat(from.current.value), fromCurrency.current.value, toCurrency.current.value).toString();
        }
    }

    function onToEdit(event: React.ChangeEvent<HTMLInputElement>) {
        if (from.current && to.current && fromCurrency.current && toCurrency.current) {
            from.current.value = convert(parseFloat(to.current.value), toCurrency.current.value, fromCurrency.current.value).toString();
        }
    }
    
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
            <main className="flex min-h-screen flex-col items-center p-12 h-screen">
                
                <button className="absolute top-0 left-0 m-5 scale-150" onClick={() => window.history.back()}>← Back</button>
                <div className="justify-center text-center font-mono">
                    <p className="text-6xl">Real and Fake Currency Converter</p>
                    <p className="text-2xl">Convert currency from the real world to fictional currencies from video games and animated shows and vice versa.</p>
                    <p>This site&apos;s conversions may well be inaccurate as they do not update automatically, this should not be used for financial information</p>
                </div>
                
                <div className="flex flex-row align-middle justify-center items-center h-screen">
                    <input className="border-4 border-transparent bg-slate-900 border-t-indigo-500 p-5 rounded-xl text-center" type="number" placeholder="From" ref={from} onChange={onFromEdit}/>
                    <select className="border-4 border-transparent bg-slate-900 border-t-indigo-500 p-5 rounded-xl text-center" ref={fromCurrency}>
                        {Object.keys(currenciesToTheDollar).map((currency) => {
                            return <option key={currency}>{currency}</option>
                        }, [])}
                    </select>
                    <p className="text-4xl p-5">{"<-->"}</p>

                    <select className="border-4 border-transparent bg-slate-900 border-t-indigo-500 p-5 rounded-xl text-center" ref={toCurrency}>
                        {Object.keys(currenciesToTheDollar).map((currency) => {
                            return <option key={currency}>{currency}</option>
                        }, [])}
                    </select>
                    <input className="border-4 border-transparent bg-slate-900 border-t-indigo-500 p-5 rounded-xl text-center" type="number" placeholder="To" ref={to} onChange={onToEdit}/>
                </div>
            </main>
        </>
    )
}