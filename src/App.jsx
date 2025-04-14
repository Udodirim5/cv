import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <Header />
        <div className="p-8 space-y-8">
          <AboutMe />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
        </div>
      </div>
    </div>
  );
};

export default App;