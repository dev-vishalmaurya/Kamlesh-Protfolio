import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Chhatrapati Shahuji Maharaj University, Kanpur, Uttar Pradesh",
    duration: "Graduated: 2019",
    description: "Completed Master of Computer Application with focus on software development, algorithms, and system design."
  },
  {
    degree: "Bachelor of Science",
    institution: "Dr. Ram Manohar Lohia Avadh University, Ayodhya, Uttar Pradesh",
    duration: "Graduated: 2015",
    description: "Completed Bachelor of Science degree with foundational knowledge in mathematics, physics, and computer science."
  }
];

const Education = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Education
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            Academic background
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 transition-all duration-300 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-blue-600">{edu.institution}</h4>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{edu.duration}</span>
              </div>
              <p className="text-slate-600">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;