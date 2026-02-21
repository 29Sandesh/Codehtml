import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Terminal, ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <div className="flex items-center gap-4 mb-12">
                <Terminal className="text-yellow-500 w-8 h-8" />
                <h1 className="text-4xl font-mono font-bold text-white">Engineering Logs</h1>
            </div>
            
            <div className="relative w-full md:w-96 mb-12">
                <Search className="absolute top-3 left-3 h-4 w-4 text-gray-500" />
                <input
                    type="text"
                    className="bg-black border border-white/10 text-white text-sm rounded-lg block w-full pl-10 p-2.5 font-mono focus:border-blue-500 outline-none"
                    placeholder="search logs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {filteredPosts.map((post, i) => (
                    <div 
                        key={i} 
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className={`group border border-white/10 bg-[#111] p-8 rounded-2xl hover:border-${post.color}-500/50 transition-all cursor-pointer relative overflow-hidden`}
                    >
                        <div className="flex gap-2 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            {post.desc}
                        </p>
                        <div className="flex justify-between items-center pt-6 border-t border-white/5">
                            <span className="text-[10px] text-gray-600 font-mono uppercase flex items-center gap-2">
                                <Calendar size={10} /> {post.date}
                            </span>
                            <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;