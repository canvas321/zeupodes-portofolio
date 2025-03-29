import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
         <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-l from-blue-700 to-red-800 bg-clip-text text-transparent text-center">
            Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Django Project</h3>

                <p className="text-gray-400 mb-4">Project written in django</p>

                <div className="flex flex-wrap gap-2 mb-4 ">
                    {["Html", "Css", "Js", "Django-Rest-Framework"].map((tech,key) => (
                        <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                                hover:shadow--[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://github.com/canvas321/DJANGO-LESS" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pt-3">View Project ➡️</a>
                </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">React Project</h3>

                <p className="text-gray-400 mb-4">Project written in reactjs</p>

                <div className="flex flex-wrap gap-2 mb-4 ">
                    {["Reactjs", "Bootstrapcss", "Node.js", "Firebase"].map((tech,key) => (
                        <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                                hover:shadow--[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://canvas321-pangwa-v2.vercel.app" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pt-3">View Project ➡️</a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Flask Project</h3>

                <p className="text-gray-400 mb-4">Project written in django</p>

                <div className="flex flex-wrap gap-2 mb-4 ">
                    {["Html", "Css", "Js", "Flask-Framework"].map((tech,key) => (
                        <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                                hover:shadow--[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://github.com/canvas321/LiMS_.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pt-3">View Project ➡️</a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">ToDo List</h3>

                <p className="text-gray-400 mb-4">Project written in react native</p>

                <div className="flex flex-wrap gap-2 mb-4 ">
                    {["React Native", "AsyncStorage", "Expo"].map((tech,key) => (
                        <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                                hover:shadow--[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://github.com/canvas321/ToDoList.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4 pt-3">View Project ➡️</a>
                </div>
            </div>
        </div>
        </div>
        </RevealOnScroll>
    </section>
}
