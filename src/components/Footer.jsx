import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

export default function Footer(){
    return(
        <div className="flex justify-center gap-6 h-30 items-center text-4xl pt-6 pb-9 bg-neutral-900">
                <motion.a 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                href="https://github.com/Mithilesh-salunkhe"><FaGithub /></motion.a>
                <motion.a variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                href="https://www.linkedin.com/in/mithilesh-salunkhe-777921256/"><FaLinkedin /></motion.a>
                <motion.a variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                href="#"><FaInstagramSquare /></motion.a>
                <motion.a variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                href="#"><FaTwitter /></motion.a>
        </div>
    )
}