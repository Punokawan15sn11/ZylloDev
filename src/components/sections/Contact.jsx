import React from 'react';
import { Zap } from 'lucide-react';
import Reveal from '../ui/Reveal';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-indigo-600 relative overflow-hidden">
            {/* Decorative Circles with Animation */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32 animate-pulse animation-delay-2000"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Siap Mengembangkan Bisnis Anda?</h2>
                    <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
                        Jangan biarkan kompetitor mendahului Anda. Konsultasikan kebutuhan teknologi Anda hari ini, 100% Gratis.
                    </p>
                </Reveal>

                <Reveal delay={200}>
                    <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-xl mx-auto text-left transform transition-all hover:scale-[1.01]">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all hover:border-indigo-400" placeholder="Contoh: Budi Santoso" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all hover:border-indigo-400" placeholder="0812..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Kebutuhan Bisnis</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white appearance-none">
                                        <option>Pilih Layanan...</option>
                                        <option>Pembuatan Website</option>
                                        <option>Aplikasi Mobile</option>
                                        <option>Sistem Kasir/ERP</option>
                                        <option>Konsultasi Umum</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-2 transform active:scale-95 flex justify-center items-center group">
                                <span>Kirim & Jadwalkan Konsultasi</span>
                                <Zap className="ml-2 w-5 h-5 group-hover:text-yellow-300 transition-colors" />
                            </button>
                            <p className="text-xs text-slate-400 text-center mt-4">Data Anda aman. Kami akan menghubungi dalam 1x24 jam.</p>
                        </form>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
