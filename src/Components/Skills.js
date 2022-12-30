import React from "react";
import Skill from "./Skill";
import { skills } from "../JSON/data";
import { motion } from "framer-motion";


export default function Skills(){
    
    
      return(
        <section id="skills">
                <div className="bg-white flex md:flex-row flex-col w-full justify-center items-center md:px-28 py-20">
                    <div className = "text-center">
                        
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-purple p-3">
                        Skills &amp; Technologies
                        </h1>
                        <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto p-3">
                        Developing new features and apps by using programming tools .I use various web technologies to develop responsive websites.
                        </p>

                        <motion.div 
                        className="grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-5 text-center w-1/2 mx-auto"
                        initial={{
                            x:-200,
                            opacity:0
                        }}
                        transition={{
                            duration:1
                        }}
                        whileInView={{
                            opacity:1,
                            x:0
                        }}
                        whileFocus={{
                            opacity:1,
                            x:0
                        }}>
                        {
                            skills.map((skill)=>{
                                return(
                                    <Skill src={skill.src} key={skill.title} title={skill.title} alt={skill.alt}/>
                                )
                            })
                        }
                    </motion.div>
                    </div>
             

                </div>
        </section>
      )
    
}