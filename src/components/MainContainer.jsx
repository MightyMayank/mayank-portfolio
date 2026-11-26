import React, { useState } from 'react';
import BentoLayout from './BentoLayout';
import ProfileSidebar from './ProfileSidebar';
import Footer from './Footer';

const MainContainer = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((currentMode) => {
      const nextMode = !currentMode;
      localStorage.setItem('portfolio-theme', nextMode ? 'dark' : 'light');
      return nextMode;
    });
  };

  return (
    <div className={`flex flex-col items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} px-4 lg:px-20`}>
      <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto gap-4">
        <div className="flex-1 rounded-lg p-6">
          <ProfileSidebar isDarkMode={isDarkMode} />
        </div>
        <div className="flex-1 rounded-lg p-6">
          <BentoLayout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
      <div className="my-5 lg:my-0">
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
