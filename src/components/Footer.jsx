// eslint-disable-next-line
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              DEV<span className="font-light">PORTFOLIO</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Crafting exceptional digital experiences
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {[<FaGithub />, <FaLinkedin />, <FaTwitter />].map(
                (icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3, color: "#06b6d4" }}
                    href="#"
                    className="text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    {icon}
                  </motion.a>
                )
              )}
            </div>
            <p className="text-gray-600 text-sm font-mono">
              Made with ❤️ by Alex Carter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
