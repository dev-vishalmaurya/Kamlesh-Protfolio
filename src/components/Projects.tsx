import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from './icons';

const projectsData = [
  {
    title: "E-Commerce Delivery Partner App",
    tech: ["Flutter", "Provider", "Google Maps API", "Payment Gateway"],
    description: "Built a delivery partner tracking app with real-time expense and distance tracking. Integrated payment gateways and Google Maps for live tracking. Published on Apple App Store.",
    github: "#",
    live: "#"
  },
  {
    title: "Solar Shakti - Networking & MLM Marketing App",
    tech: ["Flutter", "Provider", "Razorpay", "E-Signing", "PDF Generation"],
    description: "Cross-Platform Development: Developed a comprehensive Multi-Level Marketing (MLM) application for the renewable energy sector, deployed seamlessly on Mobile (Android/iOS) and Web.",
    github: "#",
    live: "#"
  },
  {
    title: "Tracking App",
    tech: ["Flutter", "Flespi API", "Provider", "Google Maps API"],
    description: "Developing a real-time tracking application using Flutter and Flespi API for GPS-based vehicle tracking. Implemented features like live location updates, route history, geofencing, and trip analytics.",
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            Some of my recent work
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="h-48 bg-gradient-to-r from-blue-100 to-sky-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-full transition-all duration-300 hover:bg-blue-100 hover:-translate-y-1">
                    <GithubIcon size={16} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-full transition-all duration-300 hover:bg-blue-100 hover:-translate-y-1">
                    <ExternalLinkIcon size={16} /> Live Demo
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