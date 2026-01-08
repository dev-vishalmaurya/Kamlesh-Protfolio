import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Flutter", "Dart", "Swift (Basic)"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Provider", "Bloc", "Clean Architecture", "Material Design"]
  },
  {
    category: "Technologies & Tools",
    skills: ["Firebase", "Firebase Authentication", "Google Maps API", "Payment Gateway Integration"]
  },
  {
    category: "Development Practices",
    skills: ["CI/CD", "Unit and Integration Testing", "UI/UX", "Cross-platform development"]
  },
  {
    category: "Other Skills",
    skills: ["Mobile app deployment", "Agile methodologies", "Build releases", "SDLC processes"]
  },
  {
    category: "API & Integration",
    skills: ["Third Party API integration", "Rest API integration"]
  }
];

const Skills = () => {
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            Technologies I've been working with
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-100 hover:scale-105">
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;