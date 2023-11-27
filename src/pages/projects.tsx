import "../app/globals.css"

export default function Projects() {

    interface Project {
        name: string,
        description: string,
        subpage: string
    }

    const projects: Project[] = [
        {
            name: "Click the Button",
            description: "Click the button. That's it.",
            subpage: "clickthebutton"
        },
        {
            name: "Fictional Currency Converter",
            description: "Convert currency from the real world to fictional currencies from video games and animated shows and vice versa.\n(Coming Soon)",
            subpage: "realandfakeconversions"
        }  
    ]

    return (
        <main className="flex min-h-screen flex-col items-center p-12 h-screen">
            <button className="absolute top-0 left-0 m-5 scale-150" onClick={() => window.history.back()}>← Back</button>
            <div className="justify-center text-center font-mono">
                <p className="text-6xl">My Projects</p>
                <p className="text-2xl">The list of all the dumb stuff I&apos;ve coded</p>
                <p className="text-1xl">This is purely because I have no idea how to code a navbar lol</p>    
            </div>

            <div className="flex flex-col gap-5 w-6/12 mt-5">
                {projects.map((project, i) => (
                    <div key={i} className="border-4 border-transparent bg-slate-900 border-t-indigo-500 p-5 rounded-xl text-center transform transition-transform duration-500 hover:scale-110">
                        <p className="text-4xl">{project.name}</p>
                        <p className="text-1xl">{project.description}</p>
                        <a className="text-blue-600" href={project.subpage} >Click here to go to {project.name}</a>
                    </div>
                ))}
            </div>
        </main>
    )
}