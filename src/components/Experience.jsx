import React from 'react'

const Experience = () => {
    const experienceData = [
    {
      title: "Software Development Engineer",
      company: "Bluestock Fintech",
      period: "Apr'25 - Jun'25",
      description: "Contributed to the development of Bluestock Fintech’s official website as part of the frontend team. Built responsive, modular UI components using HTML5, CSS3, JavaScript, React, Redux, and Tailwind CSS.",
      technologies: ["React", "Tailwind", "Redux", "JavaScript"]
    },
    {
      title: "Sub-Head",
      company: "Rajasthan Cultural Association",
      period: "Jan'23 - Aug'23",
      description: "Handled and maintained the official website of the association, managing frontend architecture using HTML, CSS, JavaScript, React, and Tailwind CSS",
      technologies: ["React", "Tailwind", "Redux", "JavaScript"]
    },
  ];

  return (
    <section id="Experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My professional journey and the projects I've worked on
          </p>
        </div>

        <div className="grid gap-8">
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
            >
              {/* Company indicator line */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {experience.title}
                  </h3>
                  <div className="text-blue-600 font-semibold text-lg mb-1">
                    {experience.company}
                  </div>
                  <div className="text-slate-500 mb-4">
                    {experience.period}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;