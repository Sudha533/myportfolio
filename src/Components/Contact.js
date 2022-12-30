import react from "react";
import mailImg from "../images/contact.png";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact(){
    const formInitialDetails = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        message:""

    }
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid]= useState(false);
    const [status, setStatus] = useState({});
    const onFormUpdate = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category]:value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setButtonText("Sending....");
       
        let Data = {
            firstName:formDetails.firstName,
            lastName:formDetails.lastName,
            phone:formDetails.phone,
            email:formDetails.email,
            message:formDetails.message
        }
       
       
        await axios.post('/api/sendEmail',Data)
        .then(res =>{
            console.log(res);
            setSubmitted(true);
            setButtonText("Sent");
        }).catch((error)=>{
        console.log(error);
        })
        if(formDetails.firstName && formDetails.lastName && formDetails.message && formDetails.phone && formDetails.email){
            setValid(true);
        }
        setSubmitted(true);

    }
    return(
        <section id="contact">
            <div className="flex md:flex-row flex-col w-full justify-center items-center md:px-28 p-5 py-28">
               <div className="flex-auto mx-auto md:w-2/4 w-full">
                    <motion.img 
                    initial={{
                        opacity:0,
                        x:-200
                    }}
                    transition={{
                        duration:1
                    }}
                    whileInView={{
                        x:0,
                        opacity:1
                    }}
                    src={mailImg} 
                    alt="mail image"/>
               </div> 
               <div className="flex-auto md:w-2/4 w-full mx-auto ">
                
                 <h1 className="sm:text-5xl text-3xl font-medium title-font text-white">Get In Touch</h1>
                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className="py-2 flex lg:flex-row flex-col">
                        <input 
                       onChange={(e)=>onFormUpdate("firstName", e.target.value)}
                       value= {formDetails.firstName}
                        id="firstname" 
                        name="firstname" 
                        type="text"  
                        required 
                        className="relative block w-full rounded-md rounded-t-md px-3 py-3 focus:z-10  sm:text-sm text-lg mr-3  bg-white/[0.1] border border-white/[0.50] placeholder-white text-white focus:bg-white/[1] focus:outline-none focus:text-black focus:placeholder-black" placeholder="First name"/>
                        <input 
                        value={formDetails.lastName} 
                        onChange= {(e)=>onFormUpdate("lastName", e.target.value)}
                        id="lastname" 
                        name="lastname" 
                        type="text" autoComplete="" 
                        required 
                        className="relative block w-full  rounded-md rounded-t-md px-3 py-3 focus:z-10  sm:text-sm text-lg lg:mt-0 mt-3 bg-white/[0.1] border border-white/[0.50] placeholder-white text-white focus:bg-white/[1] focus:outline-none focus:text-black focus:placeholder-black" placeholder="Last name"/>
                        </div>
                        <div className="py-2 flex lg:flex-row flex-col">
                        <input 
                        value={formDetails.email} 
                        onChange={(e)=>onFormUpdate("email", e.target.value)}
                        id="email" 
                        name="email" 
                        type="email" 
                        autoComplete="" 
                        required 
                        className="relative block w-full appearance-none rounded-md rounded-t-md px-3 py-3 focus:z-10  sm:text-sm text-lg mr-3  bg-white/[0.1] border border-white/[0.50] placeholder-white text-white focus:bg-white/[1] focus:outline-none focus:text-black focus:placeholder-black" placeholder="Email"/>
                        <input 
                        value={formDetails.phone} 
                        onChange={(e)=>onFormUpdate("phone", e.target.value)}
                        id="phone" 
                        name="phone" 
                        type="number" 
                        autoComplete="" 
                        required 
                        className="relative block w-full appearance-none rounded-md rounded-t-md px-3 py-3 focus:z-10  sm:text-sm text-lg lg:mt-0 mt-3 bg-white/[0.1] border border-white/[0.50] placeholder-white text-white focus:bg-white/[1] focus:outline-none focus:text-black focus:placeholder-black" placeholder="Phone"/>
                        </div>
                        <div className="py-2 flex flex-row">
                        <textarea 
                        value={formDetails.message}
                        onChange = {(e)=>onFormUpdate("message", e.target.value)}
                        rows="4" 
                        id="message" 
                        name="message" 
                        required
                        className="w-full rounded-md px-3 py-3 focus:z-10  sm:text-sm text-lg lg:mr-1 bg-white/[0.1] border border-white/[0.50] placeholder-white text-white focus:bg-white/[1] focus:outline-none focus:text-black focus:placeholder-black" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div>
                      { submitted && valid ? <p className="font-medium title-font text-white pb-5">Your message has been sent successfully!</p> : null} 
                        <motion.button 
                    className="bg-transparent border border-white text-white  py-2 px-6 rounded"
                    onClick={()=>console.log("Contact")}
                    whileHover={{
                        scale: 1.1,
                        textShadow:"0px 0px 8px rgba(255,255,255)",
                        boxShadow:"0px 0px 8px rgba(255,255,255)"
                        }}>{buttonText}
                        </motion.button>
                    </div>
                </form>
               </div>
            </div>

        </section>
    );
}