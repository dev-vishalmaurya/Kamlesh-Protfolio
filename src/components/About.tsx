import { motion } from 'framer-motion';
import profileImage from '../assets/about.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            Get to know me better
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I'm a <span className="text-blue-600 font-semibold">Flutter Developer</span> with expertise in building cross-platform mobile applications. 
              I have experience working with Flutter, Dart, Firebase, and various third-party APIs to create high-quality applications.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              My professional journey includes working at Acme Infosoft Pvt Ltd, where I've contributed to multiple projects, 
              optimized app performance, and implemented CI/CD pipelines to enhance deployment efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a <span className="text-blue-600 font-semibold">Flutter Developer</span> with expertise in building cross-platform mobile applications. 
              I have experience working with Flutter, Dart, Firebase, and various third-party APIs to create high-quality applications.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My professional journey includes working at Acme Infosoft Pvt Ltd, where I've contributed to multiple projects, 
              optimized app performance, and implemented CI/CD pipelines to enhance deployment efficiency.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-lg text-gray-700">
                <span className="font-semibold text-blue-600 mr-2">📍</span> New Delhi, India
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <span className="font-semibold text-blue-600 mr-2">📧</span> kamleshyadav0195@gmail.com
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <span className="font-semibold text-blue-600 mr-2">📞</span> +91 7617883521
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <span className="font-semibold text-blue-600 mr-2">🔗</span> LinkedIn Profile
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <motion.div 
              className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center overflow-hidden shadow-xl relative premium-shadow float-animation"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
           
              {/* <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80)' }} /> */}
              <div className="absolute w-full h-full rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;