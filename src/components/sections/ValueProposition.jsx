import React from 'react';
import { TrendingUp, Users, ShieldCheck } from 'lucide-react';
import Reveal from '../ui/Reveal';

const ValueProposition = () => {
    return (
        <section id="keunggulan" className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] animate-grid"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Mengapa Memilih Kami?</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Teknologi Enterprise, Harga UMKM</h3>
                        <p className="mt-4 text-lg text-slate-600">Kami memahami tantangan bisnis kecil. Solusi kami dirancang untuk memecahkan masalah nyata.</p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <Reveal delay={100}>
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 animate-float">
                                <TrendingUp size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Skalabilitas Tinggi</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Sistem yang kami bangun tumbuh bersama bisnis Anda. Mulai dari yang kecil, upgrade fitur kapan saja.
                            </p>
                        </div>
                    </Reveal>

                    {/* Feature 2 */}
                    <Reveal delay={200}>
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 animate-float-delayed">
                                <ShieldCheck size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Efisiensi Biaya</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Investasi teknologi yang tepat sasaran. Kami fokus pada fitur yang memberikan ROI nyata bagi cashflow Anda.
                            </p>
                        </div>
                    </Reveal>

                    {/* Feature 3 */}
                    <Reveal delay={300}>
                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full transform hover:-translate-y-2">
                            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 animate-float">
                                <Users size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">Dukungan Lokal</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Tim support asli Indonesia. Konsultasi mudah dengan bahasa yang dimengerti, tanpa jargon teknis.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
