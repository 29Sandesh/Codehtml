import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Vibe check: Hold for 2.5s
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-black z-[99999] flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter animate-pulse select-none">
        CODEHTML.in
      </h1>
    </div>
  );
};

export default LoadingScreen;