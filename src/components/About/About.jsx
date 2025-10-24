import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.png';
import profileImage2 from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about" className="py-6 px-2 md:px-6 lg:px-16 font-sans mt-4 md:mt-8 lg:mt-12"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-2">
        {/* Left Side */}
        <div className="md:w-1/2 max-w-xl text-center md:text-left flex flex-col justify-center items-center md:items-start mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Onkar Godase
          </h2>
          {/* Skills Heading with Typing Effect */}
          <div className="flex flex-col items-center md:items-start w-full mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">I am a</span>
            <span className="block mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-[#8245ec] min-h-[2.5rem]">
              <TypeAnimation
                sequence={[
                  'Fullstack Developer', 2000,
                  'Mern Developer', 2000,
                  'Coder', 2000,
                  '', 500
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={50}
                style={{ color: '#8245ec' }}
              />
            </span>
          </div>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-8 leading-relaxed">
            I am a full-stack developer ,building scalable web applications. 
            Skilled in both front-end and back-end development, 
            I specialize in the MERN stack and other modern technologies 
            to create seamless user experiences and efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1Q0AZM_me1WGp5Gysoh3_VP5fw1f54MEf/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage2}
              alt="Onkar Godase"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
