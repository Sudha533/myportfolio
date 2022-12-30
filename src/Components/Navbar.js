import React from "react";
import { MenuItems } from "../JSON/MenuItems";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {FaRegTimesCircle} from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";


export default function Navbar(){
    const [activeLink, setActiveLink] = useState("Home");
    const [scrolled, setScrolled] = useState(false); 
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () =>window.removeEventListener("scroll", onScroll);
    },[])
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return(
    <nav id="nav" className={`w-full fixed md:z-50 top-0 left-0  ${scrolled ?"md:bg-black/[0.8] bg-black md:p-2 p-2":"md:bg-transparent bg-black md:p-5 p-3"}`}>
        <div className="container mx-auto lg:max-w-[1080px] lg:px-0 md:flex items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer flex items-center">
                <h1 className="navbar-logo">SS</h1>
            </div>
            <div onClick={()=>setOpenMobileMenu(!openMobileMenu)} className="text-3xl absolute right-8 top-4 text-white cursor-pointer md:hidden">
              {openMobileMenu ?<FaRegTimesCircle/>:<FaBars/>} 
            </div>
            <ul className={`md:flex md:items-center cursor-pointer md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  w-full md:w-auto md:pl-0 pl-9 left-0 transition-all duration-500 ease-in ${openMobileMenu ? "top-[47px] bg-black ": "top-[-490px]"}`}>
                {MenuItems.map((items,index)=>{
                    return(
                        <li className={`md:ml-8 text-xl text-white hover:text-gray-400 md:my-0 my-7 cursor-pointer ${activeLink === items.title ? "underline" : "no-underline" }`} key={index} ><a href={items.url} title={items.title} onClick={()=>onUpdateActiveLink(items.title)}>{items.title}</a></li>
                    )
                })}
                <li className="md:ml-8 text-2xl text-white hover:text-gray-400 md:my-0 my-7"><a href="https://github.com/Sudha533" title="Github"><FaGithub/></a></li>
                <li className="md:ml-8 text-2xl text-white hover:text-gray-400 md:my-0 my-7"><a href="https://www.linkedin.com/in/sudha-subramaniam-12748092/" title="linkedIn"><FaLinkedin/></a></li>
                <li>
                    <motion.button 
                    className="bg-transparent border border-white text-white  py-2 px-6 rounded md:ml-8"
                    onClick={()=>console.log("Contact")}
                    whileHover={{
                        scale: 1.1,
                        textShadow:"0px 0px 8px rgba(255,255,255)",
                        boxShadow:"0px 0px 8px rgba(255,255,255)"
                        }}>
                    <a href="#contact" title="Contact">Let's connect</a>
                    </motion.button>
                </li>
                     
            </ul>
        </div>
    </nav>

    )
    
    
}