import React from "react";
import {projects} from "../JSON/data";
import { motion } from "framer-motion";

export default function Projects(){
  return(
    <section id="projects">
        <div className="bg-zinc-900  relative flex flex-col justify-evenly mx-auto  max-w-full text-center items-center md:px-28 px-5 py-28">
            <div className="flex relative flex-col">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">Projects</h1>
                <p className="text-xl leading-relaxed mx-auto text-white">
                Below are some of my projects <br/>built in with multiple technologies
          </p>
            </div>
            <div className="flex flex-wrap mt-9">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative h-56">
                <motion.img
                initial={{
                  x:project.directionLeft?-200:200,
                  opacity:0
                }}
                transition={{
                  duration:1
                }}
                whileInView={{
                  opacity:1,
                  x:0
                }}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center overflow-hidden"
                  src={project.image}
                />
                <motion.div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-[#c273af]"
                initial={{opacity:0}}
                whileHover={{opacity:1}}
                transition={{
                  ease:[0.5, 0.71, 1, 1.5]
                }}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </motion.div>
              </div>
            </a>
          ))}
        </div>
            <div className="w-full absolute top-[30%] bg-[#c273af]/10 left-0 h-[550px] -skew-y-6"/>
            
        </div>

    </section>
  )  
}