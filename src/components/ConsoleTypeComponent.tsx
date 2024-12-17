import Typist from "react-typist-component";
import "../app/globals.css";
import { useState, useEffect } from "react";

const ConsoleTypeComponent = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [showContent, setShowContent] = useState(false);

    function startTitleTimer() {
        let timeoutId: NodeJS.Timeout;
        if (!showTitle) {
          timeoutId = setTimeout(() => {
            setShowContent(true);
          }, 3000);
        }
    }

    useEffect(startTitleTimer, [showTitle]);

    return (
        <div className="font-mono p-3">
            <span><span className="text-green-400">assembly@scrapyard</span>:<span className="text-blue-600">-</span>$</span>
            <Typist onTypingDone={() => setShowTitle(true)}>
            <Typist.Delay ms={1000} />
            <span> website</span>
            <Typist.Delay ms={1000} />
            </Typist>

            {showTitle && (
                <div className="m-3">
                    <div className="text-center align-middle">
                        <h1>Assembly&apos;s Scrapyard</h1>
                        <p>The useless things I&apos;ve made to learn Next.js</p>
                    </div>
                </div>
            )}
            
            {showContent && (
                
                // The following div only exists to not break the code, react requiring this is one of the many dumb development decisions that have been made, the first being to use javascript and typescript as the languages to base it on. #RustGang
                // For the record, this div now has a purpose of providing a margin for the rest of the content, so it's not entirely useless. However, my previous statement still stands. #RustGang
                // The second issue is that I can only write comments here
                // Notice the following code: <p>Assembly&apos;s Scrapyard</p>. This is a workaround for the fact that I can't use the apostrophe character in the JSX code. If only typescript's "wonderful" dynamic typing system could use common sense to establish that the apostrophe is not a special character in this context.
                <div className="m-3">
                    

                    <div className="mt-3 align-middle text-center">
                        
                        <h1>Projects & Experience:</h1>
                        <a href="/leonemc">LeoneMC</a>
                        
                        <hr className="p-3"/>
                        
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