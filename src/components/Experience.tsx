import { motion } from 'framer-motion';

const experienceData = [
  {
    title: "Flutter Developer",
    company: "Acme Infosoft Pvt Ltd",
    duration: "Oct 2022 – Present",
    description: "Building and maintaining cross-platform apps using Flutter & Dart. Integrated REST APIs, Firebase Firestore, and real-time databases.",
    responsibilities: [
      "Used Provider & Bloc for efficient state management",
      "Implemented authentication using Firebase & Google Sign-In",
      "Optimized app performance",
      "Published apps on Play Store & App Store",
      "Wrote unit, widget, and integration tests"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Work Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            My professional journey
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/50 transition-all duration-300 hover:shadow-md mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">
                  {exp.duration}
                </span>
              </div>
              <p className="text-slate-600 mb-5">{exp.description}</p>
              <div>
                <h5 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-slate-600">
                      <span className="text-blue-500 mr-2 mt-1.5">•</span>
                      <span className="text-slate-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;