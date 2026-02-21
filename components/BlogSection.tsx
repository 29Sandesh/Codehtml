import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';

interface BlogSectionProps {
    onPostClick: (post: BlogPost) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onPostClick }) => {
    // Show top 3 posts
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="py-12 md:py-32 px-6 md:px-12 bg-black border-t border-white/10 overflow-hidden">
             <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-24 gap-4 md:gap-6">
                    <div>
                         <div className="flex items-center gap-3 text-blue-600 mb-2 md:mb-4">
                            <Terminal size={14} className="md:w-4 md:h-4" />
                            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">Engineering Logs</span>
                        </div>
                        <h2 className="text-3xl md:text-8xl font-display font-bold text-white uppercase tracking-tighter leading-[0.85]">
                            System<br/>Intelligence
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-gray-400 text-sm md:text-lg">
                            Declassified insights on AI architecture, brutalist design, and high-performance web systems.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    {recentPosts.map((post, i) => (
                        <div 
                            key={i} 
                            onClick={() => onPostClick(post)}
                            className="group relative border-t border-white/10 py-5 md:py-8 cursor-pointer hover:bg-white transition-colors duration-500 ease-out"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-8 relative z-10 px-1 md:px-4">
                                
                                {/* Date & Tag */}
                                <div className="lg:w-1/4 flex flex-row lg:flex-col items-center lg:items-start gap-3 md:gap-2">
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:text-blue-600 border border-blue-600/30 px-1.5 py-0.5 md:px-2 md:py-1 w-fit">
                                        {post.tags[0]}
                                    </span>
                                    <span className="text-[10px] md:text-xs font-mono text-gray-500 group-hover:text-black/60">
                                        {post.date}
                                    </span>
                                </div>
                                
                                {/* Title - Center/Main */}
                                <div className="lg:w-1/2">
                                    <h3 className="text-xl md:text-5xl font-bold text-white group-hover:text-black transition-colors uppercase leading-none mb-1 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-black/70 text-xs md:text-base line-clamp-2 max-w-lg transition-colors">
                                        {post.desc}
                                    </p>
                                </div>

                                {/* Action - Right */}
                                <div className="lg:w-1/4 flex justify-between lg:justify-end items-center mt-2 lg:mt-0">
                                    <span className="md:hidden text-[10px] font-mono text-gray-500 group-hover:text-black uppercase">Read Entry</span>
                                    <div className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 border border-white/20 group-hover:border-black text-white group-hover:text-black font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 md:gap-3 transition-all">
                                        <span className="relative z-10 hidden md:inline">Access Log</span>
                                        <span className="relative z-10 md:hidden">Open</span>
                                        <ArrowUpRight size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-white/10"></div>
                </div>

                 <div className="mt-8 md:mt-16 flex justify-center">
                    <button className="text-gray-500 hover:text-white font-mono text-[10px] md:text-xs uppercase tracking-widest hover:underline underline-offset-4 decoration-blue-600 transition-colors">
                        View All Archives
                    </button>
                 </div>
             </div>
        </section>
    );
};

export default BlogSection;