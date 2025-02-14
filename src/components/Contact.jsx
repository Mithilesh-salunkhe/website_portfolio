import { motion } from "framer-motion";


export default function Contact(){
    return(
        <section id="contact">
            <div className="border-b border-neutral-900 pb-20">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-center text-4xl">Get In Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-4">Pune , Maharastra</motion.p>
                <motion.p 
                whileInView={{ opacity: 1, x: 0 }} 
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="my-4">+91 7058647229</motion.p>
                <motion.a
                href="#" className="border-b">mithilrshsalunkhe3@gmail.com</motion.a>
            </div>
        </div>
        </section>
        
    )
}