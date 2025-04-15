import { FiBook } from 'react-icons/fi';
import { education } from '../../../data/data';

const Education = () => {
  return (
    <div className="space-y-4">
      <hr className='text-gray-400 my-10'/>
      <div className="flex items-center gap-2">
        <FiBook className="text-blue-600" />
        <h2 className="text-xl font-bold">Education</h2>
      </div>
      
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <h3 className="font-bold">{item.degree}</h3>
              <p className="text-gray-600">{item.institution}</p>
            </div>
            <span className="text-green-600">{item.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;