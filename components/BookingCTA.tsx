import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BookingCTA: React.FC = () => {
    return (
        <section id="contact" className="pt-12 pb-32 md:py-40 px-6 md:px-12 bg-black border-t border-white/10 overflow-hidden">
            <div className="max-w-[1800px] mx-auto text-center">
                
                <h2 className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.8] text-white uppercase tracking-tighter mb-6 md:mb-12">
                    Let's Build<br/>
                    The Future
                </h2>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <button 
                        onClick={() => window.open('https://calendly.com', '_blank')}
                        className="group relative px-6 py-3 md:px-12 md:py-6 bg-blue-600 overflow-hidden w-full md:w-auto"
                        data-cursor="hover"
                    >
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2 md:gap-4 text-white font-bold uppercase tracking-widest text-xs md:text-lg group-hover:text-black transition-colors">
                            Book Strategy Call <ArrowUpRight />
                        </span>
                    </button>
                    
                    <a href="mailto:Contact@codehtml.in" className="text-xs md:text-xl font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                        Contact@codehtml.in
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BookingCTA;