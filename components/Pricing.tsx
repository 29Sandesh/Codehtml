import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "MVP",
        price: "$999",
        desc: "Fast-track launch.",
        features: ["Custom Design", "Mobile Responsive", "Speed Optimization", "3 Pages"],
        highlight: false
    },
    {
        name: "Growth",
        price: "$2,499",
        desc: "Business scaling engine.",
        features: ["CMS Integration", "SEO Suite", "Analytics Dashboard", "5-7 Pages", "Newsletter Setup"],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "Total market dominance.",
        features: ["Custom Web App", "Database Architecture", "Advanced Security", "API Development", "24/7 Priority Support"],
        highlight: false
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-12 md:py-32 px-6 md:px-12 bg-black border-t border-white/10">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-8 md:mb-24">
                    <h2 className="text-3xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter">
                        Investment
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20">
                    {plans.map((plan, i) => (
                        <div key={i} className={`p-5 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col hover:bg-[#0a0a0a] transition-colors relative group ${i === plans.length - 1 ? 'md:border-r-0' : ''}`}>
                            
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 md:px-4 md:py-2 uppercase tracking-widest">
                                    Recommended
                                </div>
                            )}

                            <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 uppercase">{plan.name}</h3>
                            <div className="mb-2 md:mb-8">
                                <span className="text-3xl md:text-5xl font-display font-bold text-white">{plan.price}</span>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-12 h-auto md:h-10">{plan.desc}</p>

                            <ul className="space-y-2 md:space-y-6 mb-6 md:mb-12 flex-grow">
                                {plan.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-2 md:gap-4 text-xs md:text-sm font-medium text-gray-300">
                                        <div className="w-1.5 h-1.5 bg-blue-600 mt-1.5"></div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => window.open('https://calendly.com', '_blank')}
                                className={`w-full py-3 md:py-4 border-2 font-bold uppercase tracking-widest text-xs md:text-sm transition-all ${plan.highlight ? 'bg-white text-black border-white hover:bg-transparent hover:text-white' : 'border-white/20 text-white hover:border-white hover:bg-white hover:text-black'}`}
                            >
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;