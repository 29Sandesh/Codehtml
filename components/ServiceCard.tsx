import React from 'react';
import { ServiceProps } from '../types';

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, tags }) => {
  // Convert title to css-class-format
  const className = '.' + title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="group relative font-mono text-sm bg-[#111] border border-ide-border p-6 rounded hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Line Numbers Background */}
      <div className="absolute left-4 top-6 bottom-6 w-6 text-gray-800 text-right select-none leading-relaxed text-xs border-r border-gray-800 pr-2">
        1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7
      </div>

      <div className="pl-10 relative z-10">
        <div className="mb-2">
            <span className="text-yellow-400">{className}</span> <span className="text-gray-400">{'{'}</span>
        </div>
        
        <div className="pl-4 space-y-1 text-gray-400">
            <div>
                <span className="text-purple-400">display</span>: <span className="text-green-400">"immersive-experience"</span>;
            </div>
            <div>
                 <span className="text-purple-400">description</span>: <span className="text-green-400">"{description.slice(0, 30)}..."</span>;
            </div>
            <div>
                 <span className="text-purple-400">tech-stack</span>: <span className="text-blue-400">[{tags.slice(0,2).join(', ')}]</span>;
            </div>
             <div className="group-hover:text-white transition-colors">
                 <span className="text-purple-400">status</span>: <span className="text-yellow-400">active</span>;
            </div>
        </div>

        <div className="mt-2 text-gray-400">
            {'}'}
        </div>
        
        <div className="absolute top-4 right-4 text-gray-700 opacity-20 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-300">
            {icon}
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
    </div>
  );
};

export default ServiceCard;