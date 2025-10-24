import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-24 z-10`}
          >
            {/* Left Side (Card for even, empty for odd) */}
            {index % 2 === 0 ? (
              <div className="hidden sm:flex justify-end w-1/2 pr-8">
                <div className="w-full max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-xl font-semibold text-white">{edu.degree}</h3>
                        <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                  <p className="mt-4 text-gray-400">{edu.desc}</p>
                </div>
              </div>
            ) : (
              <div className="hidden sm:block w-1/2"></div>
            )}

            {/* Timeline Circle */}
            <div className="z-20 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex justify-center items-center">
                <img src={edu.img} alt={edu.school} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>

            {/* Right Side (Card for odd, empty for even) */}
            {index % 2 !== 0 ? (
              <div className="hidden sm:flex justify-start w-1/2 pl-8">
                <div className="w-full max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-xl font-semibold text-white">{edu.degree}</h3>
                        <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                  <p className="mt-4 text-gray-400">{edu.desc}</p>
                </div>
              </div>
            ) : (
              <div className="hidden sm:block w-1/2"></div>
            )}

            {/* Mobile View: Card below circle, full width */}
            <div className="sm:hidden w-full mt-4">
              <div className="w-full p-4 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <h4 className="text-md text-gray-300">{edu.school}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
