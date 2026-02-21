import React from 'react';

const softwares = [
    {
        name: "LEAD GEN TOOL",
        desc: "Automated B2B prospecting and high-velocity outreach engine.",
        version: "V2.0"
    },
    {
        name: "AI INTERVIEW BOT",
        desc: "Autonomous candidate screening and technical assessment system.",
        version: "BETA"
    },
    {
        name: "SHORTS AI",
        desc: "Intelligent long-form to viral short-form video converter.",
        version: "V1.5"
    }
];

interface SoftwareTrialProps {
    onOpenSignup: () => void;
}

const SoftwareTrial: React.FC<SoftwareTrialProps> = ({ onOpenSignup }) => {
    return (
        <section id="software" className="py-12 md:py-32 px-6 md:px-12 bg-black border-t border-white/10">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-8 md:mb-24">
                    <h2 className="text-3xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter mb-2 md:mb-6">
                        Lab Access
                    </h2>
                    <p className="text-sm md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        You can try our <strong className="text-white">best proprietary software</strong> for trial purposes. 
                        Test drive the engines that power our agency before they hit the public market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {softwares.map((sw, i) => (
                        <div key={i} className="group relative border border-white/20 bg-black hover:bg-white transition-colors duration-500 overflow-hidden min-h-[auto] md:min-h-[400px] flex flex-col justify-between p-5 md:p-10">
                            
                            {/* Decorative Background Number */}
                            <div className="absolute -right-2 -top-2 text-[40px] md:text-[120px] font-display font-bold text-white/5 group-hover:text-black/5 select-none transition-colors">
                                0{i+1}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-2 md:mb-8">
                                    <span className="px-2 py-0.5 md:px-3 md:py-1 border border-blue-600 text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-wider group-hover:border-black group-hover:text-black transition-colors">
                                        {sw.version}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl md:text-4xl font-display font-bold text-white uppercase mb-1 md:mb-4 group-hover:text-black transition-colors">
                                    {sw.name}
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                                    {sw.desc}
                                </p>
                            </div>

                            <button 
                                onClick={onOpenSignup}
                                className="relative z-10 w-full py-3 md:py-4 mt-4 md:mt-8 border border-white/20 text-white text-xs md:text-base font-bold uppercase tracking-widest group-hover:border-black group-hover:bg-black group-hover:text-white transition-all hover:bg-blue-600 hover:border-blue-600"
                            >
                                Start Trial
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftwareTrial;