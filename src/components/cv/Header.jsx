import { FiMail, FiPhone, FiGithub, FiGlobe, FiDownload } from 'react-icons/fi';
import { myInfo } from '../../../data/data';

const Header = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-t-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold">{myInfo.name}</h1>
          <p className="text-blue-100">{myInfo.title}</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          {/* <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg mb-4 md:mb-0 md:ml-auto">
            <FiDownload className="text-sm" />
            <span>Download PDF</span>
          </button> */}
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <FiMail className="text-blue-200" />
              <span>{myInfo.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-blue-200" />
              <span>+{myInfo.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGithub className="text-blue-200" />
              <span>github.com/{myInfo.contact.github}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiGlobe className="text-blue-200" />
              <span>www.{myInfo.contact.website}.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;