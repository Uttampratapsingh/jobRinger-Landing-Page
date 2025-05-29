import React from 'react'
import { useState, useEffect } from 'react';
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiBootstrapFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiJquery } from "react-icons/si";



const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const skills = [
    { name: "React", icon: <FaReact /> , color: "from-blue-400 to-blue-600" },
    { name: "HTML5", icon: <TiHtml5 /> , color: "from-blue-500 to-indigo-600" },
    { name: "JavaScript", icon: <SiJavascript /> , color: "from-yellow-400 to-orange-500" },
    { name: "Bootstrap", icon: <RiBootstrapFill />, color: "from-green-400 to-green-600" },
    { name: "CPP", icon: <TbBrandCpp />, color: "from-orange-400 to-red-500" },
    { name: "Python", icon: <FaPython />, color: "from-green-500 to-blue-500" },
    { name: "CSS3", icon: <IoLogoCss3 />, color: "from-pink-400 to-purple-600" },
    { name: "Tailwind", icon: <RiTailwindCssFill />, color: "from-green-600 to-teal-600" },
    { name: "Git", icon: <FaGithubSquare />, color: "from-orange-400 to-red-500" },
    { name: "Jquery", icon: <SiJquery /> , color: "from-blue-500 to-indigo-600" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [skills.length]);

  return (
    <section id="Skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Technologies I work with to bring your ideas to life
          </p>
        </div>

        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {skills.map((skill, index) => {
              const angle = (index - currentIndex) * (360 / skills.length);
              const radius = 155;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={skill.name}
                  className={`absolute transition-all duration-1000 ease-in-out transform`}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${
                      index === currentIndex ? 1.2 : 0.75
                    })`,
                    opacity: index === currentIndex ? 1 : 0.5,
                  }}
                >
                  <div className={`bg-gradient-to-r ${skill.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">{skill.icon}</div>
                      <div className="text-white font-semibold text-sm">
                        {skill.name}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Center skill display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">{skills[currentIndex].icon}</div>
              <h3 className="text-2xl font-bold text-slate-800">
                {skills[currentIndex].name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
