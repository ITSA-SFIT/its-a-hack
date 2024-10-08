import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Card = ({ name, imageSrc, linkedinUrl, githubUrl, mentor }) => {
    return (
        <div className={`flex flex-col bg-white transition-all hover:scale-105 hover:bg-red-950 bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg mt-5 ${mentor ? "sm:w-[25%] w-[75%]" : "sm:w-[30%] w-[80%]"}`}>
            <div className="m-2.5 overflow-hidden rounded-md flex justify-center items-center">
                <img className="w-full object-cover aspect-square" src={imageSrc} alt={`${name}-profile-picture`} />
            </div>
            <div className="text-center">
                <h1 className="mb-1 text-xl font-semibold text-white">
                    {name}
                </h1>
            </div>
            <div className="flex justify-center p-6 pt-2 gap-4">
                {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-2xl" />
                </a>}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-2xl" />
                </a>
            </div>
        </div>
    );
};

export default Card;