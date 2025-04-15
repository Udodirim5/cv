import React from 'react';
import { FiUser } from 'react-icons/fi';
import { myInfo } from '../../../data/data';

const AboutMe = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <FiUser className="text-blue-600" />
        <h2 className="text-xl font-bold">About Me</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">{myInfo.description}</p>
    </div>
  );
};

export default AboutMe;