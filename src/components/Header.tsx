import { useState } from 'react';
import { BarsIcon, TimesIcon } from './icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-xl border-b border-white/20 py-4 px-5 md:px-10 z-50 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div 
          onClick={() => scrollToSection('home')} 
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          Kamlesh<span className="text-purple-600">.</span>
        </div>
        
        <nav className={`flex gap-8 ${isOpen ? 'fixed top-0 right-0 h-screen w-2/3 bg-white/95 backdrop-blur-xl flex-col justify-center items-center z-50' : 'md:flex hidden'} transition-all duration-300`}>
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="text-gray-700 font-medium hover:text-blue-600 relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
          >
            Home
          </button>
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="text-gray-700 font-medium hover:text-blue-600 relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
          >
            About
          </button>
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            className="text-gray-700 font-medium hover:text-blue-600 relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
          >
            Skills
          </button>
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            className="text-gray-700 font-medium hover:text-blue-600 relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
          >
            Experience
          </button>
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="text-gray-700 font-medium hover:text-blue-600 relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
          >
            Projects
          </button>
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="text-gray-700 font-medium hover:text-blue-600 relative py-2 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
          >
            Contact
          </button>
        </nav>
        
        <button 
          onClick={toggleMenu}
          className="text-gray-700 text-2xl md:hidden z-50"
        >
          {isOpen ? <TimesIcon size={24} /> : <BarsIcon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;