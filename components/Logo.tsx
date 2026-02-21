import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 select-none" data-cursor="hover">
        {/* SVG Implementation of >_ */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chevron > */}
            <path d="M14 12L26 24L14 36" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Block _ */}
            <rect x="28" y="28" width="12" height="8" rx="1" fill="#2563eb" />
        </svg>
        <span className="font-display font-bold text-xl tracking-tighter text-white pt-1">
            CODEHTML<span className="lowercase">.in</span>
        </span>
    </div>
  );
};

export default Logo;