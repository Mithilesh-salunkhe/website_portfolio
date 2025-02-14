import { motion } from "framer-motion";


const projectList = [
    {
        title: "Staycation - Vacation booking platform",
        description: "A user-friendly platform for booking vacations with seamless search and reservation features.",
        technologies: ["HTML", "CSS", "Node.Js", "Express.Js", "MongoDB", "JavaScript"],
        image: "https://pageflows.com/media/videos/thumbnail_c255de9b-910b-42dd-a639-1917027e0504.jpg"
    },
    {
        title: "Smart Task Manager",
        description: "A React-based smart task management tool focused on enhancing productivity.",
        technologies: ["React", "Tailwind CSS", "API's", "MongoDB", "Node.Js"],
        image: "https://images.prismic.io/smarttask/ZvpFBrVsGrYSwHgT_image14.png?auto=format,compress"
    },
    {
        title: "Mini-Whatsapp",
        description: "A real-time chat application built using MERN stack for instant messaging.",
        technologies: ["API's", "MongoDB", "Node.Js", "HTML", "CSS"],
        image: "https://i.ytimg.com/vi/yx7pWzOqQHE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG2CIAC0AWKAgwIABABGB4gcigUMA8=&rs=AOn4CLBKSbb1VGERe3E4Ff9geqTtqBjMew"
    }
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>
                {projectList.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        {/* Project Image */}
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0 }} 
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                width={300} 
                                height={300}  
                                className="mb-6 rounded shadow-lg"
                            />
                        </motion.div>

                        {/* Project Details */}
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0 }} 
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-2/4">
                            <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>

                            {/* Technologies List */}
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index} 
                                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-900"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
        </section>
        
    );
}
