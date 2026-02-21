import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

// Reordered according to request: Top 4 visible, rest hidden
const projects = [
  // --- VISIBLE INITIALLY ---
  {
    title: "Cafe De Casa",
    category: "Digital Dining Ecosystem",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    url: "cafedecasaa.netlify.app",
    year: "2024"
  },
  {
    title: "Lumina",
    category: "Modern E-commerce Platform",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    url: "lumina00.netlify.app",
    year: "2024"
  },
  {
    title: "Apex Storm",
    category: "3D Racing Portfolio",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop",
    url: "theapexstorm.netlify.app",
    year: "2024"
  },
  {
    title: "Bistro Two",
    category: "Culinary Showcase Platform",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
    url: "examplerestaurant2.netlify.app",
    year: "2023"
  },
  // --- HIDDEN INITIALLY ---
  {
    title: "El Gamingo",
    category: "Interactive Gaming Hub",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    url: "elgamingo.netlify.app",
    year: "2024"
  },
  {
    title: "Teamo Dating",
    category: "Smart Social Matchmaking",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop",
    url: "teamodating.netlify.app",
    year: "2023"
  },
  {
    title: "Azure Horizon",
    category: "Hotel Management Analytics",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    url: "azurehorizon.netlify.app",
    year: "2023"
  },
  {
    title: "Restro Luxe One",
    category: "Luxury Reservation System",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    url: "examplerestaurant1.netlify.app",
    year: "2023"
  }
];

const WorkGallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Slice the array based on state
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="py-12 md:py-32 px-6 md:px-12 bg-black border-t border-white/10">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-8 md:mb-24">
            <h2 className="text-3xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter mb-2 md:mb-6">
                Selected Work
            </h2>
            <p className="text-sm md:text-xl text-gray-400 max-w-xl">
                A collection of high-performance digital interfaces.
            </p>
        </div>
        
        <div className="flex flex-col border-b border-white/20">
            {visibleProjects.map((project, idx) => (
                <div 
                    key={idx} 
                    onClick={() => window.open(`https://${project.url}`, '_blank')}
                    className="group relative w-full h-20 md:h-32 hover:h-64 transition-all duration-500 ease-out border-t border-white/20 overflow-hidden cursor-pointer"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-gray-900">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-100 transform"
                        />
                         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full h-full flex items-center justify-between px-4 md:px-12 group-hover:items-end group-hover:pb-8 transition-all duration-500">
                        <div className="flex items-baseline gap-3 md:gap-12">
                            <span className="text-[10px] md:text-sm font-mono text-gray-600 group-hover:text-blue-500 transition-colors">0{idx + 1}</span>
                            <h3 className="text-xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                                {project.title}
                            </h3>
                        </div>

                        <div className="flex flex-col items-end gap-2 text-right">
                             <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-2">
                                <span className="text-xs font-mono text-white uppercase tracking-widest bg-blue-600 px-2 py-1">View Project</span>
                                <ArrowUpRight className="text-white" size={16} />
                             </div>
                             <div className="flex items-center gap-6 text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-gray-300">
                                <span className="hidden md:inline">{project.category}</span>
                                <span className="hidden md:inline">{project.url}</span>
                             </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
         <div className="mt-8 md:mt-16 flex justify-center">
            <button 
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
            >
                {showAll ? (
                    <>Collapse Archive <ChevronUp size={16} /></>
                ) : (
                    <>View Full Archive <ChevronDown size={16} /></>
                )}
            </button>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;