import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    if (!post) return <div className="pt-32 text-center text-white">Log Not Found</div>;

    return (
        <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
             <button 
                onClick={() => navigate('/blog')} 
                className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-xs uppercase"
            >
                <ArrowLeft size={16} /> ../logs
            </button>

            <header className="mb-12 border-b border-white/10 pb-8">
                <div className="flex gap-2 mb-6">
                    {post.tags.map(tag => (
                        <span key={tag} className={`px-2 py-1 border border-white/10 text-gray-400 text-xs font-mono rounded`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    {post.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-400 font-mono text-xs uppercase">
                    <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
                </div>
            </header>

            <article className="prose prose-invert prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
            </article>
        </div>
    );
};

export default BlogPost;