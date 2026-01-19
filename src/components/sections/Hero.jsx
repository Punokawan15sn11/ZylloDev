import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
            {/* Animated Blobs Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
                {/* Noise & Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-1">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 mb-8 backdrop-blur-sm hover:bg-indigo-900/70 transition-colors cursor-default">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium">Partner Digitalisasi UMKM No.1</span>
                    </div>
                </div>

                <h1 className="animate-fade-in-2 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                    Bawa Bisnis Anda ke <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-x">
                        Masa Depan Digital
                    </span>
                </h1>

                <p className="animate-fade-in-3 mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">
                    Solusi teknologi kustom untuk UMKM Indonesia. Modern, cepat, dan terjangkau.
                    Kami membantu Anda mengotomatisasi proses bisnis agar Anda bisa fokus pada pertumbuhan.
                </p>

                <div className="animate-fade-in-4 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                    >
                        Konsultasi Gratis <ArrowRight className="ml-2 w-5 h-5 animate-bounce-x" />
                    </button>
                    <button
                        onClick={() => scrollToSection('ai-demo')}
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 hover:border-white/40 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"
                    >
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        Coba AI Kami
                    </button>
                </div>

                {/* Stats / Trust Badges */}
                <div className="animate-fade-in-4 mt-16 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                    {['50+ Proyek Selesai', '98% Klien Puas', 'Support 24/7'].map((stat, idx) => (
                        <div key={stat} className="flex items-center text-slate-400 font-medium hover:text-white transition-colors">
                            <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                            {stat}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
