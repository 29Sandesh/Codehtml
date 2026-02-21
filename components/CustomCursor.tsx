import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is interactive
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.dataset.cursor === 'hover' ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-6 h-6 bg-white mix-blend-difference pointer-events-none z-[9999] transition-all duration-200 ease-out flex items-center justify-center`}
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        opacity: hovering ? 0 : 1, // Hide when hovering interactive elements
      }}
    >
        {/* Default square shape */}
        <div className="w-full h-full bg-white"></div>
    </div>
  );
};

export default CustomCursor;