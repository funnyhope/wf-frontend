import React, { useEffect, useRef } from 'react';

const LandingPage = () => {
  const checkPasswordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (checkPasswordRef.current && window.scrollY > window.innerHeight / 2) {
        window.scrollTo({
          top: checkPasswordRef.current.offsetTop,
          behavior: 'smooth',
        });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [checkPasswordRef]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="animate-bounce">
        <h1 className="text-6xl font-bold">WELCOME</h1>
      </div>
    </div>
  );
};

export default LandingPage;
