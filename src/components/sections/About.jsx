import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontEndSkills = ["React", 
        "JS", 
        "HTML", 
        "CSS", 
        "TailwindCss",
    ]

    const backEndSkills = ["Python", 
        "Java", 
        "Django", 
        "Flask", 
        "Node.js",
        "MySQL"
    ]
    return <section id="about" 
    className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">

            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-l from-blue-700 to-red-800 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, distinctio nobis voluptas odio assumenda qui facilis, earum voluptate praesentium modi quisquam quod nam asperiores consequuntur. Ducimus qui ab alias harum.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>

                        <div className="flex flex-wrap gap-2">
                            {frontEndSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                                hover:shadow--[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>

                        <div className="flex flex-wrap gap-2">
                            {backEndSkills.map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover: bg-blue-500/20
                                hover:shadow--[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">

                    <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>
                                Certificate in Mobile App development
                            </strong> - Modcom Institute of Technology(MIT) (Jan 2020 - Sept 2020)
                        </li>

                        <li>
                            Relevant Coursework: Data Structures, Web Development, Android App Development(Java,Kotlin)
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all">

                    <h3 className="text-xl font-bold mb-4"> ⚒️ Work Experience </h3>

                    <div className="sapce-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">IT Inter at Sarova Hotels (October 2024 - Jan 2025)</h4>
                            <p>Basic network, system and hardware troubleshooting</p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Joined Upwork Freelancing (2021 - Current)</h4>
                            <p>Basic network, system and hardware troubleshooting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </RevealOnScroll>
    </section>;
}