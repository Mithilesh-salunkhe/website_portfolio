import aboutImg from "../assets/aboutImg1.png";
import { motion } from "framer-motion";

const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",

];

export default function AboutMe() {

  return (
    <section id="about">
      <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-5xl font-thin">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center ">
            <img
              className="rounded-xl "
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0 , x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="border-1 border-neutral-500 my-6 rounded-xl">
              <p className="my-2 max-w-xl py-6 pl-6 text-lg pr-4">
                I am a dedicated Full Stack Developer who builds robust,
                user-friendly web applications. Combining front-end creativity
                with back-end logic, I deliver efficient and scalable solutions.
              </p>
              <hr className="border-t-1 border-neutral-500 my-3 m-3" />
              <div className="flex flex-wrap justify-center items-center mb-6">
                <ul className="grid grid-cols-2 gap-x-10 list-disc pl-5">
                {skillsList.map((skill, index) => (
                  <li key={index} className="text-white-700 text-lg">
                    {skill}
                  </li>
                ))}
              </ul>
              </div>
              <hr className="border-t-1 border-neutral-500 my-3 m-3" />
              <p className="my-2 max-w-xl py-6 pl-6 text-lg pr-4">
                My expertise includes designing responsive interfaces, optimizing databases, and implementing robust APIs. I thrive on solving complex problems and continuously improving my skills to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
    
  );
}
