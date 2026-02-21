import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 bg-black overflow-hidden pt-20">
            
            {/* Background Noise/Grid - Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-[1800px] mx-auto w-full relative z-10">
                
                <div className="mb-8 overflow-hidden">
                    <span className="inline-block animate-in slide-in-from-bottom duration-700 text-blue-600 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                        The All-In-One Digital Foundry
                    </span>
                </div>

                <h1 className="text-[14vw] md:text-[11vw] font-display font-bold leading-[0.8] tracking-tighter text-white mix-blend-difference mb-12 select-none">
                    WEBSITES. TOOLS. <br/>
                    <span className="text-transparent stroke-text hover:text-white transition-colors duration-500 cursor-default">SOFTWARE.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end border-t border-white/20 pt-12">
                    <div className="md:col-span-6">
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                            We don't just build pages. We engineer the complete digital ecosystem. <strong className="text-white">High-performance Websites, Proprietary Software, and AI Tools</strong>—everything you need to dominate, all under one roof.
                            <br/><br/>
                            <span className="text-white font-bold">Because AI is the Future.</span>
                        </p>
                    </div>
                    <div className="md:col-span-6 flex flex-col md:flex-row gap-6 justify-end">
                        <button 
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                            data-cursor="hover"
                        >
                            View Ecosystem
                        </button>
                        <button 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-all"
                            data-cursor="hover"
                        >
                            Start Project
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;