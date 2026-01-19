import React from 'react';
import { Code, Smartphone, Database, Zap, ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

const Services = ({ scrollToSection }) => {
    return (
        <section id="layanan" className="py-20 bg-white relative overflow-hidden">
            {/* Soft floating gradient orbs for white background */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Komprehensif</h2>
                            <p className="text-lg text-slate-600">Apa pun tahap bisnis Anda saat ini, kami memiliki solusi digital yang tepat.</p>
                        </div>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hidden md:flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition-colors group"
                        >
                            Diskusikan Kebutuhan Anda <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Code size={28} />,
                            title: 'Web Development',
                            desc: 'Website company profile atau e-commerce yang cepat, SEO-friendly, dan memikat pelanggan.',
                            color: 'text-purple-600 bg-purple-50 group-hover:bg-purple-600 group-hover:text-white'
                        },
                        {
                            icon: <Smartphone size={28} />,
                            title: 'Mobile App Dev',
                            desc: 'Aplikasi Android & iOS untuk memudahkan pelanggan mengakses layanan Anda di mana saja.',
                            color: 'text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white'
                        },
                        {
                            icon: <Database size={28} />,
                            title: 'Sistem Bisnis (ERP)',
                            desc: 'Digitalisasi kasir, inventaris, dan laporan keuangan. Ucapkan selamat tinggal pada pembukuan manual.',
                            color: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white'
                        },
                        {
                            icon: <Zap size={28} />,
                            title: 'Konsultasi Digital',
                            desc: 'Bingung mulai dari mana? Kami bantu petakan strategi transformasi digital langkah demi langkah.',
                            color: 'text-amber-600 bg-amber-50 group-hover:bg-amber-600 group-hover:text-white'
                        }
                    ].map((service, idx) => (
                        <Reveal key={idx} delay={idx * 150}>
                            <div className="group border border-slate-200 rounded-xl p-6 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-default h-full bg-white/60 backdrop-blur-sm hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 transition-colors duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
