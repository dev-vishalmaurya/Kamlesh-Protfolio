import { LinkedinIcon, GithubIcon, TwitterIcon } from './icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <h3 className="text-2xl font-bold mb-4 text-white">
          Kamlesh<span className="text-blue-400">.</span>
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Thank you for visiting my portfolio. Feel free to reach out if you have any questions or opportunities.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/kamlesh-yadav-2019?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1">
            <GithubIcon size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1">
            <TwitterIcon size={20} />
          </a>
        </div>
        <p className="text-gray-400 text-sm pt-8 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Kamlesh Kumar Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;