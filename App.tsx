import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import Pricing from './components/Pricing';
import BookingCTA from './components/BookingCTA';
import ProcessWorkflow from './components/ProcessWorkflow';
import SoftwareTrial from './components/SoftwareTrial';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollReveal from './components/ScrollReveal';
import LoadingScreen from './components/LoadingScreen';
import MatrixBackground from './components/MatrixBackground';
import Logo from './components/Logo';
import BlogSection from './components/BlogSection';
import SignupModal from './components/SignupModal';
import { blogPosts, BlogPost } from './data/blogData';
import { X, ArrowRight, Calendar, Clock, Search, Hash, Terminal } from 'lucide-react';

// --- Overlay Component ---
const Overlay: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setVisible(false), 500);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!visible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className={`absolute right-0 top-0 h-full w-full md:w-[800px] bg-[#0d0d0d] border-l border-ide-border shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#111]">
                    <h2 className="font-mono text-xl font-bold text-white truncate pr-4">{title}</h2>
                    <button onClick={onClose} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500 hover:text-red-500 transition-all group">
                        <X size={20} className="group-hover:rotate-90 transition-transform" />
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto p-6 md:p-12 custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
};

// --- Command Palette Component ---
const CommandPalette: React.FC<{ isOpen: boolean; onClose: () => void; onNavigate: (id: string) => void }> = ({ isOpen, onClose, onNavigate }) => {
    if (!isOpen) return null;
    
    const commands = [
        { id: 'work', label: 'Go to Work Gallery', icon: <Hash size={14} />, action: () => onNavigate('work') },
        { id: 'process-workflow', label: 'View Process', icon: <Hash size={14} />, action: () => onNavigate('process-workflow') },
        { id: 'pricing', label: 'Check Pricing', icon: <Hash size={14} />, action: () => onNavigate('pricing') },
        { id: 'blog', label: 'Read Engineering Logs', icon: <Hash size={14} />, action: () => onNavigate('blog') },
        { id: 'book-call', label: 'Book Discovery Call', icon: <Calendar size={14} />, action: () => onNavigate('book-call') },
    ];

    return (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh] animate-in fade-in duration-200">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative w-full max-w-lg bg-[#151515] border border-white/20 rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                    <Search className="text-gray-500" size={18} />
                    <input 
                        autoFocus
                        type="text" 
                        placeholder="Type a command or search..." 
                        className="bg-transparent border-none outline-none text-white w-full font-mono text-sm placeholder:text-gray-600"
                    />
                    <div className="px-2 py-1 bg-white/10 rounded text-[10px] font-mono text-gray-400">ESC</div>
                </div>
                <div className="p-2">
                    <div className="text-[10px] font-mono uppercase text-gray-600 px-3 py-2">Navigation</div>
                    {commands.map((cmd) => (
                        <button 
                            key={cmd.id}
                            onClick={() => { cmd.action(); onClose(); }}
                            className="w-full flex items-center gap-3 px-3 py-3 rounded hover:bg-blue-600 hover:text-white text-gray-400 transition-colors text-sm font-mono group text-left"
                        >
                            {cmd.icon}
                            <span>{cmd.label}</span>
                            <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                        </button>
                    ))}
                </div>
                <div className="bg-black/50 p-2 text-center text-[10px] text-gray-600 font-mono border-t border-white/5">
                    Select an option to jump
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [showCmd, setShowCmd] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Smooth Scroll Handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCmd((open) => !open);
      }
      if (e.key === 'Escape') {
          setShowCmd(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`bg-ide-bg min-h-screen text-white relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="hidden md:block">
            <CustomCursor />
        </div>
        <MatrixBackground />
        <div className="bg-grid"></div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5">
             <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo />
             </div>
             
             {/* Desktop Links */}
             <div className="hidden md:flex items-center gap-8 font-mono text-xs text-gray-400">
                <button onClick={() => scrollToSection('process')} className="hover:text-white transition-colors hover:underline decoration-blue-500 decoration-2 underline-offset-4 font-bold">PROCESS</button>
                <button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors hover:underline decoration-blue-500 decoration-2 underline-offset-4 font-bold">WORK</button>
                <button onClick={() => scrollToSection('software')} className="hover:text-white transition-colors hover:underline decoration-blue-500 decoration-2 underline-offset-4 font-bold">SOFTWARE</button>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors hover:underline decoration-blue-500 decoration-2 underline-offset-4 font-bold">PRICING</button>
             </div>

             <div className="flex gap-4 items-center">
                <button 
                    onClick={() => setShowCmd(true)}
                    className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-400 hover:border-white/30 hover:text-white transition-all"
                >
                    <Terminal size={12} />
                    <span>CMD+K</span>
                </button>
                <button onClick={() => scrollToSection('contact')} className="px-5 py-2 bg-blue-600 text-white text-xs font-mono font-bold hover:bg-blue-700 transition-all rounded shadow-[0_0_15px_rgba(37,99,235,0.3)] uppercase tracking-wider">
                    Start Project
                </button>
             </div>
        </nav>
        
        {/* Main Single Page Content */}
        <main>
            <Hero />
            <ScrollReveal><ProcessWorkflow /></ScrollReveal>
            <ScrollReveal><WorkGallery /></ScrollReveal>
            <ScrollReveal><SoftwareTrial onOpenSignup={() => setShowSignup(true)} /></ScrollReveal>
            <ScrollReveal><Pricing /></ScrollReveal>
            <ScrollReveal>
                <BlogSection onPostClick={(post) => setActivePost(post)} />
            </ScrollReveal>
            <ScrollReveal><BookingCTA /></ScrollReveal>
        </main>
        
        <Footer 
            onNavClick={scrollToSection}
        />

        {/* --- OVERLAYS --- */}
        <CommandPalette isOpen={showCmd} onClose={() => setShowCmd(false)} onNavigate={scrollToSection} />
        <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />

        <Overlay 
            isOpen={!!activePost} 
            onClose={() => setActivePost(null)} 
            title={activePost?.title || 'Log Entry'}
        >
            {activePost && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="flex gap-2 mb-6">
                        {activePost.tags.map(tag => (
                            <span key={tag} className={`px-2 py-1 border border-white/10 text-gray-400 text-xs font-mono rounded`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-6 text-gray-400 font-mono text-xs uppercase mb-8 border-b border-white/10 pb-4">
                        <span className="flex items-center gap-2"><Calendar size={14} /> {activePost.date}</span>
                        <span className="flex items-center gap-2"><Clock size={14} /> {activePost.readTime}</span>
                    </div>
                    <article className="prose prose-invert prose-lg max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: activePost.content || '' }} />
                    </article>
                    
                    <button 
                        onClick={() => setActivePost(null)}
                        className="mt-12 flex items-center gap-2 text-xs font-mono uppercase text-gray-500 hover:text-white transition-colors"
                    >
                        <ArrowRight className="rotate-180" size={14} /> Close Log
                    </button>
                </div>
            )}
        </Overlay>

      </div>
    </>
  );
};

export default App;