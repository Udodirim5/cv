import Header from "../components/cv/Header";
import AboutMe from "../components/cv/AboutMe";
import Skills from "../components/cv/Skills";
import Projects from "../components/cv/Projects";
import Education from "../components/cv/Education";
import Certifications from "../components/cv/Certifications";

const CV = () => {
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

export default CV;
