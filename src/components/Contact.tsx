import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapMarkerIcon, LinkedinIcon, GithubIcon } from './icons';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative">
        <div className="text-center mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Information Card */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-slate-800">Contact Information</h3>
              </div>
              <p className="text-slate-600 text-base">I'm always open to discussing new opportunities, creative projects, or partnerships.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                  <MapMarkerIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">Location</h4>
                  <p className="text-slate-600 text-sm">New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                  <EnvelopeIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">Email</h4>
                  <a href="mailto:kamleshyadav0195@gmail.com" className="text-slate-700 hover:text-blue-600 hover:underline font-medium transition-colors text-sm">kamleshyadav0195@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                  <PhoneIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">Phone</h4>
                  <a href="tel:+917617883521" className="text-slate-700 hover:text-blue-600 hover:underline font-medium transition-colors text-sm">+91 7617883521</a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                  <LinkedinIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">LinkedIn</h4>
                  <a href="https://linkedin.com/in/kamlesh-kumar-yadav" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 hover:underline font-medium transition-colors text-sm">Connect with me</a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                  <GithubIcon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">GitHub</h4>
                  <a href="https://github.com/kamlesh-kumar" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 hover:underline font-medium transition-colors text-sm">View my work</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-200/50">
              <h4 className="text-base font-semibold text-slate-800 mb-4">Follow me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/kamlesh-kumar-yadav" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300">
                  <LinkedinIcon size={18} />
                </a>
                <a href="https://github.com/kamlesh-kumar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white hover:bg-slate-800 transition-colors duration-300">
                  <GithubIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3"></div>
                <h3 className="text-xl font-bold text-slate-800">Send a Message</h3>
              </div>
              <p className="text-slate-600 text-base">Fill out the form and I'll get back to you as soon as possible.</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-slate-700 font-medium mb-2 text-sm">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-slate-700 font-medium mb-2 text-sm">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate-700 font-medium mb-2 text-sm">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400 text-sm"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2 text-sm">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400 resize-none text-sm"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;