import HeroImg from "../assets/header-img.svg";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <section id="home">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-20 ml-[1rem] overflow-y-auto">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start justify-start text-center lg:text-left pl-8 sm:pl-12 lg:pl-40">
            {/* Name */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl sm:text-6xl lg:text-8xl font-thin tracking-tight"
            >
              Mithilesh
            </motion.h1>

            {/* Title with Gradient */}
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            {/* Description */}
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-lg text-sm sm:text-base md:text-lg font-light tracking-tighter leading-relaxed mt-[30px] sm:pr-4"
            >
              I am a passionate Full Stack Developer with experience in building
              dynamic, user-friendly, and high-performance web applications. I
              thrive in both front-end and back-end development, leveraging a
              variety of tools and technologies to bring ideas to life.
            </motion.p>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="p-[3px] relative mt-[20px]"
              aria-label="Learn more about Mithilesh"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              <Link
              to="about" // This is the target section's ID
              smooth={true} 
              duration={500}
              className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent"
              >
              About Me
              </Link>
              </div>
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-0 mt-4 ml-4 lg:mt-0 lg:ml-0">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100 , opacity:0}}
              animate={{x:0 , opacity:1}}
              transition={{duration :1 , delay:1.2}}
              src={HeroImg}
              alt="Developer working on code"
              className="w-full lg:w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
}
