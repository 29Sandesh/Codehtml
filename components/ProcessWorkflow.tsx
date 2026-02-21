import React from 'react';

const steps = [
    {
        id: '01',
        title: 'Strategy',
        desc: 'We dissect your business model and find the digital leverage points.'
    },
    {
        id: '02',
        title: 'Design',
        desc: 'Brutalist, minimalist, or maximalist. We craft visuals that arrest attention.'
    },
    {
        id: '03',
        title: 'Build',
        desc: 'Clean code. Blazing speed. Scalable architecture. No compromises.'
    },
    {
        id: '04',
        title: 'Deploy',
        desc: 'Global launch. Performance monitoring. We ensure you stay online and ahead.'
    }
];

const ProcessWorkflow: React.FC = () => {
    return (
        <section id="process" className="py-12 md:py-32 px-6 md:px-12 bg-black border-t border-white/10">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-8 md:mb-24">
                    <h2 className="text-3xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
                        The Protocol
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="group relative border-t-2 border-white/20 pt-3 md:pt-8 hover:border-blue-600 transition-colors duration-500">
                             <div className="text-3xl md:text-8xl font-display font-bold text-gray-900 group-hover:text-blue-600/20 transition-colors mb-1 md:mb-6 select-none">
                                {step.id}
                             </div>
                             <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-4 uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                                {step.title}
                             </h3>
                             <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs group-hover:text-white transition-colors">
                                {step.desc}
                             </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessWorkflow;