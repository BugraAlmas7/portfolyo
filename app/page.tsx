"use client";

import { motion } from "framer-motion";
// Image importunu ekledim
import Image from "next/image";
import { FaGithub, FaLinkedin, FaRobot, FaBrain, FaCode, FaTerminal, FaExternalLinkAlt, FaGlobeAmericas, FaEnvelope } from "react-icons/fa";

export default function Home() {
  
  // --- KİŞİSEL BİLGİLERİN ---
  const myEmail = "BugraAlmas@hotmail.com"; 
  const myGithub = "https://github.com/BugraAlmas7";
  const myLinkedin = "https://www.linkedin.com/in/ahmet-bu%C4%9Fra-almas-082233260";

  // PROJELER
  const projects = [
    {
      title: "Code Archaeologist (AI Agent)",
      desc: "An NLP assistant using RAG and LLMs to analyze large codebases. Built with LangChain and Ollama.",
      tags: ["Python", "NLP", "LangChain", "RAG"],
      icon: <FaBrain className="text-4xl text-purple-400 mb-4" />,
      link: "https://github.com/BugraAlmas7/Code-Archaeologist"
    },
    {
      title: "Autonomous TurtleBot",
      desc: "Autonomous navigation robot project in ROS & Gazebo. Implements SLAM and obstacle avoidance using Lidar data.",
      tags: ["ROS", "C++", "Gazebo", "Robotics"],
      icon: <FaRobot className="text-4xl text-blue-400 mb-4" />,
      link: "https://github.com/BugraAlmas7/autonomous-robot"
    },
    {
      title: "Algo Visualizer",
      desc: "Interactive tool visualizing the logic behind complex tree and graph algorithms.",
      tags: ["Python", "Algorithms", "Graph Theory"],
      icon: <FaCode className="text-4xl text-green-400 mb-4" />,
      link: "https://github.com/BugraAlmas7/algo-visualizer"
    },
    {
      title: "Real-Time Automation Engine",
      desc: "Developed a high-performance bot that analyzes real-time data streams on dynamic web interfaces and executes sub-second automated actions based on probability algorithms.",
      tags: ["Python", "Selenium", "Data Analysis", "Automation"],
      icon: <FaCode className="text-4xl text-red-400 mb-4" />,
      link: "https://github.com/kullaniciadin/automation-engine"
    }
  ];

  // TEKNİK YETENEKLER
  const skills = [
    "Python", "C++", "ROS", "Unity", 
    "Unreal Engine", "Linux/Ubuntu", "SQL"
  ];

  // DİLLER
  const languages = [
    { name: "Turkish", level: "Native", code: "TR", percent: 100 },
    { name: "English", level: "Professional", code: "EN", percent: 85 }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-purple-500 selection:text-white">
      
      {/* NAVBAR VE LOGO */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          {/* 'B' HARFİ LOGOSU (SVG) */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M10 5H22C26.4183 5 30 8.58172 30 13C30 17.4183 26.4183 21 22 21H14M14 21H24C28.4183 21 32 24.5817 32 29C32 33.4183 28.4183 37 24 37H10V5Z" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="10" y1="5" x2="32" y2="37" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" /> {/* Mavi */}
                <stop offset="1" stopColor="#A855F7" /> {/* Mor */}
              </linearGradient>
            </defs>
            {/* Hafif bir dış parıltı efekti için filtre */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <path d="M10 5H22C26.4183 5 30 8.58172 30 13C30 17.4183 26.4183 21 22 21H14M14 21H24C28.4183 21 32 24.5817 32 29C32 33.4183 28.4183 37 24 37H10V5Z" stroke="url(#paint0_linear)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" opacity="0.6"/>
          </svg>
          {/* İsteğe bağlı: Yanına isim de yazabiliriz */}
          {/* <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Buğra</span> */}
        </motion.div>
        
        {/* Navbar sağ tarafı (İstersen buraya menü linkleri de ekleyebiliriz) */}
        <div></div> 
      </header>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20"> {/* pt-20 eklendi: navbar'ın altında kalmaması için */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center" // Fotoğrafı ortalamak için ekledim
        >
          {/* FOTOĞRAF KISMI BURADA */}
          <div className="relative w-40 h-40 mb-8 rounded-full border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)] overflow-hidden">
            <Image 
              src="/ben.jpg" 
              alt="Ahmet Buğra Almas" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          <h2 className="text-purple-400 font-mono text-xl mb-4">Hello, I'm [Ahmet Buğra Almas]</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Computer Engineer
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-8 leading-relaxed">
            I solve complex problems with modern technologies. 
            Specializing in <span className="text-white font-semibold">NLP, Robotics (ROS)</span>, and <span className="text-white font-semibold">Game Development</span>.
          </p>
          
          <div className="flex justify-center gap-6">
            <motion.a whileHover={{ scale: 1.1 }} href={myGithub} target="_blank" className="text-3xl hover:text-white text-slate-400 transition-colors"><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href={myLinkedin} target="_blank" className="text-3xl hover:text-white text-slate-400 transition-colors"><FaLinkedin /></motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href={`mailto:${myEmail}`} className="text-3xl hover:text-white text-slate-400 transition-colors"><FaEnvelope /></motion.a>
          </div>
        </motion.div>
      </section>

      {/* SKILLS & LANGUAGES */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
            
            {/* Tech Stack */}
            <div>
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><FaTerminal /> Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    {skills.map((skill, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
                            className="p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-lg cursor-default hover:border-purple-500/30 transition-colors"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-3"><FaGlobeAmericas /> Languages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {languages.map((lang, i) => (
                      <motion.div 
                          key={i}
                          whileHover={{ y: -5 }}
                          className="p-5 bg-slate-800/50 rounded-lg border border-slate-700 flex flex-col gap-3 hover:border-blue-500/30 transition-colors"
                      >
                          <div className="flex items-center gap-4">
                            <span className="text-xl font-bold text-slate-400 bg-slate-900 w-12 h-12 flex items-center justify-center rounded-full border border-slate-700">
                              {lang.code}
                            </span>
                            <div className="flex-1">
                              <div className="flex justify-between items-end mb-2">
                                <h3 className="text-lg font-bold text-white">{lang.name}</h3>
                                <span className="text-xs text-purple-400 font-mono">{lang.level}</span>
                              </div>
                              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${lang.percent}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                  className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full"
                                ></motion.div>
                              </div>
                            </div>
                          </div>
                      </motion.div>
                  ))}
              </div>
            </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-b border-slate-800 pb-4">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="block bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 hover:shadow-purple-500/20 hover:shadow-lg transition-all group relative"
            >
              <div className="flex justify-between items-start">
                {project.icon}
                <FaExternalLinkAlt className="text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 min-h-[60px]">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`mailto:${myEmail}`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all"
        >
          <FaEnvelope /> Say Hello
        </motion.a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>Built with Next.js & Tailwind CSS. &copy; 2026</p>
      </footer>
    </main>
  );
}
