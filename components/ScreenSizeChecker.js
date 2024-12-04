"use client"
import React, { useEffect, useState } from 'react';

const ScreenSizeChecker = ({ children }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  //if (isLargeScreen) {
  //  return (
  //    <div style={{ textAlign: 'center', marginTop: '20%' }}>
  //      <h1>Please use a desktop or laptop to access this application.</h1>
  //    </div>
  //  );
  //}

  return children;
};

export default ScreenSizeChecker;