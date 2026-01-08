import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon, DownloadIcon } from './icons';
import profileImage from '../assets/pro1.jpeg';

const Hero = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center p-0 md:p-5 bg-gradient-to-br from-blue-50 to-sky-100 relative overflow-hidden pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10 w-full px-4 md:px-0">
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <div className="text-lg font-semibold text-blue-600 mb-4">
            Hello, I'm
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Kamlesh Kumar Yadav
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
            Flutter Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Results-driven Flutter Developer with Acme Infosoft Pvt Ltd, skilled in cross-platform mobile applications. 
            Achieved a 30% reduction in load times through optimized performance and implemented CI/CD pipelines, 
            enhancing deployment efficiency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
              >
                Contact Me
              </button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
            >
              <button className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-50 hover:-translate-y-1 flex items-center gap-2">
                <DownloadIcon size={16} /> Download CV
              </button>
            </motion.div>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-blue-600 text-xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white shadow-md">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-blue-600 text-xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white shadow-md">
              <GithubIcon size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white text-blue-600 text-xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white shadow-md">
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden shadow-2xl relative premium-shadow float-animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            <div className="absolute w-full h-full rounded-full border-4 border-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;