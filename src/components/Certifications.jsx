import { FiAward } from 'react-icons/fi';
import { certifications } from '../../data/data';


const Certifications = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <FiAward className="text-blue-600" />
        <h2 className="text-xl font-bold">Certifications</h2>
      </div>
      
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <h3 className="font-bold">{cert.name}</h3>
              <p className="text-gray-600">{cert.organization}</p>
            </div>
            <span className="text-green-600">{cert.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;