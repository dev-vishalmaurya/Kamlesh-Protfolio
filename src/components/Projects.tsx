import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from './icons';
import ecommerceImage from '../assets/image.png';
import solarShaktiImage from '../assets/dashboarsolar.png';
import trackingImage from '../assets/solar-shati1.png';

const projectsData = [
  {
    title: "E-Commerce Delivery Partner",
    tech: ["Flutter", "Provider", "Google Maps", "Payments"],
    description: "Built a delivery partner tracking app with real-time expense and distance tracking. Integrated payment gateways and Google Maps for live tracking. Published on Apple App Store.",
    github: "#",
    live: "#",
    imagePath: ecommerceImage
  },
  {
    title: "Solar Shakti - MLM Platform",
    tech: ["Flutter", "Razorpay", "E-Signing", "PDF Gen"],
    description: "Cross-Platform Development: Developed a comprehensive Multi-Level Marketing (MLM) application for the renewable energy sector, deployed seamlessly on Mobile (Android/iOS) and Web.",
    github: "#",
    live: "https://mysolarshakti.com/login",
    imagePath: solarShaktiImage
  },
  {
    title: "GPS Tracking System",
    tech: ["Flutter", "Flespi API", "Geofencing", "Maps"],
    description: "Developing a real-time tracking application using Flutter and Flespi API for GPS-based vehicle tracking. Implemented features like live location updates, route history, geofencing, and trip analytics.",
    github: "#",
    live: "#",
    imagePath: trackingImage
  }
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg"
          >
            A selection of recent work focused on mobile and web solutions.
          </motion.p>
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder while loading */}
                <img 
                  src={project.imagePath} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out relative z-10" 
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                  {project.description}
                </p>

                <hr className="border-slate-100 mb-5" />

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
                  >
                    <GithubIcon size={18} />
                    <span>Source Code</span>
                  </a>
                  
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-slate-900 text-white hover:bg-blue-600 text-sm font-medium py-2 px-5 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Live Demo</span>
                    <ExternalLinkIcon size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;