import React from "react";
import { socials } from "../data";

export default function Socials() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto text-center justify-center">
        <div className="flex flex-row lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center justify-center">
            {socials.map((social) => (
                <div key={social.name} className="p-2 opacity-80 hover:opacity-100">
                    {/* <div className="bg-gray-800 rounded flex p-4 h-full items-center"> */}
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                            <img src={social.image} alt="hero" className="w-20 h-20 flex-shrink-0 mr-4" />
                        </a>
                    {/* </div> */}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}