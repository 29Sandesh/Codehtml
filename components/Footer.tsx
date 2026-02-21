import React from 'react';
import Logo from './Logo';

const Footer: React.FC<{ onNavClick: (id: string) => void }> = ({ onNavClick }) => {
  return (
    <footer className="hidden md:block bg-black border-t border-white/10 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-12 md:mb-24">
            <div>
                <Logo />
            </div>
            {/* Hidden on mobile, handled by Floating Menu */}
            <div className="hidden md:flex gap-8 md:gap-16 text-sm font-bold uppercase tracking-widest">
                <button onClick={() => onNavClick('work')} className="hover:text-blue-600 transition-colors">Work</button>
                <button onClick={() => onNavClick('process')} className="hover:text-blue-600 transition-colors">Process</button>
                <button onClick={() => onNavClick('pricing')} className="hover:text-blue-600 transition-colors">Plans</button>
                <button onClick={() => onNavClick('blog')} className="hover:text-blue-600 transition-colors">Insights</button>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase border-t border-white/10 pt-8">
            <p>&copy; {new Date().getFullYear()} CODEHTML.in. All Systems Operational.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a 
                    href="https://www.linkedin.com/company/codehtml/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    LinkedIn
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;