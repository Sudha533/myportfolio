import React from 'react';


function Skill({src,alt,title}) {
    return (
        <div className="group cursor-pointer flex justify-center rounded-full border border-gray-400 py-4 px-4"
        >
            <img 
            src={src} 
            alt={alt}
            title={title}
            className="md:w-24 w-full filter group-hover:grayscale"/>
        </div>
    );
}

export default Skill;