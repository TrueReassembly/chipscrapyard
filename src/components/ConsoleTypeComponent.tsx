import Typist from "react-typist-component";
import "../app/globals.css";
import { useState } from "react";

const ConsoleTypeComponent = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="font-mono">
            <span><span className="text-green-400">assembly@scrapyard</span>:<span className="text-blue-600">-</span>$</span>
            <Typist onTypingDone={() => setShow(true)}>
            <Typist.Delay ms={1000} />
            <span> website</span>
            <Typist.Delay ms={500} />
            </Typist>
             {show && (
                
                // The following div only exists to not break the code, react requiring this is one of the many dumb development decisions that have been made, the first being to use javascript and typescript as the languages to base it on. #RustGang
                // For the record, this div now has a purpose of providing a margin for the rest of the content, so it's not entirely useless. However, my previous statement still stands. #RustGang
                <div className="m-3">
                    <div className="text-center align-middle">
                        <p>Assembly's Scrapyard</p>
                        <p>https://scrapyard.reassembly.dev</p>
                        <p>The rest is coming soon I promise</p>
                    </div>

                    <div className="mt-3 align-middle text-center">
                        <h1>Friends:</h1>
                        <a href="https://aroze.me"><img src="https://github.com/UwUAroze/aroze.me/blob/main/images/88x31/aroze.png?raw=true" alt="https://aroze.me" className="mx-auto"/></a>
                        <a href="https://santio.me">Santio</a>
                    </div>
                </div>
             )}
        </div>

        
    )
} 

export default ConsoleTypeComponent;