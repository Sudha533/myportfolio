import ReactTyped from "react-typed";
import HeroImage from '../images/herov1.png';
import { motion } from "framer-motion";
export default function HeaderBanner() {
    return (
        <section id="home" className="text-white">
            <div className="container mx-auto lg:max-w-[1080px] lg:flex lg:flex-row flex-col items-center text-center justify-between lg:p-1 lg:pt-14 pt-28 p-3">
                <div className="flex-1 lg:flex-grow mx-auto lg:w-9/12 flex flex-col lg:items-start lg:text-left items-center text-center">
                    <h1 className="font-extrabold md:text-4xl text-3xl mb-4">Hi, I'm Sudha Subramaniam</h1>
                    <h1 className="sm:text-4xl md:text-4xl text-3xl mb-4 font-medium">
                        <ReactTyped
                            strings={[
                                'Full stack web developer',
                                'Programmer',
                                'Software Engineer'
                            ]}
                            typeSpeed={140}
                            backSpeed={150}
                            loop />
                    </h1>
                    <p className="mb-8 leading-relaxed text-xl">
                        Full Stack web developer with 8 years of experience in the domain of web programming and business requirements analysis.
                    </p>
                    <div className="flex justify-center md:flex-row flex-col">
                       
                        <motion.button 
                        className="bg-transparent border border-white text-xl text-white  py-2 px-6 rounded "
                        
                        whileHover={{
                        scale: 1.1,
                        textShadow:"0px 0px 8px rgba(255,255,255)",
                        boxShadow:"0px 0px 8px rgba(255,255,255)"
                        }}>
                        <a
                            href="#projects"
                            className="">
                            See my past works
                        </a>
                        </motion.button>

                    </div>
                </div>
                <motion.div 
                className="flex-1 mx-auto lg:max-w-lg lg:w-full md:w-4/12 w-5/6 overflow-hidden"
                initial={{
                    x:200,
                    opacity:0
                }}
                transition={{
                    duration:1
                }}
                whileInView={{
                    opacity:1,
                    x:0
                }}>
                    <img className="max-w-full h-auto rounded-lg" alt="hero"
                    src={HeroImage}/>
                </motion.div>

            </div>

        </section>
    )
}