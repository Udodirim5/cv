import { FiAward, FiGlobe } from "react-icons/fi";
import { certifications } from "../../../data/data";

const Certifications = () => {
  return (
    <div className="space-y-4">
      <hr className="text-gray-400 my-10" />

      <div className="flex items-center gap-2">
        <FiAward className="text-blue-600" />
        <h2 className="text-xl font-bold">Certifications</h2>
      </div>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <h3 className="font-bold text-gray-800">{cert.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-gray-600">{cert.platform} </p>
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  <FiGlobe className="text-gray-600 hover:text-gray-900" />
                </a>
              </div>
            </div>
            <span className="text-green-600">{cert.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
