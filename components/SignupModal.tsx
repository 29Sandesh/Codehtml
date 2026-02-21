import React, { useState } from 'react';
import { X, Lock, ArrowRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && name && email) {
        setIsSubmitting(true);
        
        // --- EMAILJS CONFIGURATION ---
        // 1. Go to https://emailjs.com/ and sign up for free.
        // 2. Create a generic "Email Service" (like Gmail).
        // 3. Create an "Email Template" with variables {{from_name}}, {{from_email}}, and {{message}}.
        // 4. Replace the strings below with your actual IDs.
        
        const SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_8x9...'
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_3z2...'
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. 'user_2b9...'

        try {
            // For demo purposes, we simulate a delay if keys aren't set yet.
            if (SERVICE_ID === 'YOUR_SERVICE_ID') {
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log("Simulated Email Sent:", { name, email });
            } else {
                await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                    from_name: name,
                    from_email: email,
                    message: "New User requested Lab Access.",
                }, PUBLIC_KEY);
            }
            setStep(2);
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Uplink disrupted. Please check console or try again.");
        } finally {
            setIsSubmitting(false);
        }
    } else {
        onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#050505] border border-white/20 p-8 md:p-12 shadow-[0_0_50px_rgba(37,99,235,0.1)] animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        {step === 1 ? (
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 text-red-500 mb-2">
                    <Lock size={18} />
                    <span className="font-mono text-xs uppercase tracking-widest">Restricted Access</span>
                </div>
                
                <div>
                    <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tighter mb-2">
                        Identify Yourself
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Access to CODEHTML.in labs requires verified credentials.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Codename / Name</label>
                        <input 
                            type="text" 
                            required
                            disabled={isSubmitting}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-blue-600 transition-colors placeholder:text-gray-800 font-mono disabled:opacity-50"
                            placeholder="ENTER_NAME"
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Secure Frequency / Email</label>
                        <input 
                            type="email" 
                            required
                            disabled={isSubmitting}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-blue-600 transition-colors placeholder:text-gray-800 font-mono disabled:opacity-50"
                            placeholder="ENTER_EMAIL"
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-4 w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 size={16} className="animate-spin" /> ESTABLISHING UPLINK...
                            </>
                        ) : (
                            "Grant Access"
                        )}
                    </button>
                </form>

                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink-0 mx-4 text-[10px] text-gray-600 font-mono uppercase tracking-widest">Or Authenticate With</span>
                    <div className="flex-grow border-t border-white/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button 
                        type="button"
                        className="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 text-xs"
                        onClick={() => {
                            setStep(2);
                            setName("Google User");
                        }}
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                        </svg>
                        Google
                    </button>

                    <button 
                        type="button"
                        className="w-full py-3 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3 text-xs"
                        onClick={() => {
                            setStep(2);
                            setName("Apple User");
                        }}
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05 1.72-3.1 1.72-2.3 0-3.15-1.7-5.5-1.7-2.3 0-3.15 1.7-5.5 1.7-1.05 0-2.12-.77-3.1-1.72C-4.5 11.2 3.1 3.5 10.5 4.5c2.3.2 3.1 1.5 4.5 1.5 1.4 0 2.2-1.5 4.5-1.5 1.25-.1 2.5.45 3.5 1.25-3.35 1.75-2.75 6.5.75 8.25-1.05 2.6-2.6 4.6-4.2 6.28zM12.03 4.45c1.1-1.35 1.8-3.15 1.6-4.45-1.55.05-3.45 1-4.3 2.1-.8 1.15-1.5 2.85-1.3 4.2 1.65.15 3-1.15 4-1.85z" />
                        </svg>
                        Apple
                    </button>
                </div>

            </div>
        ) : (
            <div className="flex flex-col items-center text-center gap-6 py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center text-green-500 animate-pulse">
                    <ArrowRight size={32} />
                </div>
                <div>
                    <h2 className="text-2xl font-display font-bold text-white uppercase tracking-tighter mb-2">
                        Access Granted
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Welcome to the mainframe, <span className="text-white font-mono">{name}</span>.
                    </p>
                </div>
                <button 
                    onClick={onClose}
                    className="mt-4 w-full py-3 border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                    Enter Lab
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default SignupModal;