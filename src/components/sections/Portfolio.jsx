import React from 'react';
import Reveal from '../ui/Reveal';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-slate-900 text-white overflow-hidden relative">
            {/* Twinkle Stars Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle-1"></div>
                <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-twinkle-2"></div>
                <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle-3"></div>
                <div className="absolute top-1/2 right-10 w-2 h-2 bg-purple-400 rounded-full animate-twinkle-1" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-twinkle-2"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-twinkle-3" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mereka Yang Telah Bertransformasi</h2>
                        <p className="text-slate-400 text-lg">Bergabunglah dengan ratusan pengusaha UMKM yang telah naik kelas.</p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Testimonial 1 - Pak Budi */}
                    <Reveal delay={0}>
                        <div className="bg-slate-800 p-8 rounded-2xl relative hover:bg-slate-700 transition-colors duration-300 h-full group border border-slate-700 hover:border-indigo-500/50">
                            <div className="text-indigo-400 text-6xl absolute top-4 right-6 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
                            <p className="text-slate-300 mb-6 relative z-10 italic">
                                "Dulu stok toko selalu berantakan. Setelah pakai sistem custom dari Zyllo, saya bisa pantau stok real-time dari HP. Omzet naik 30% karena jarang kehabisan barang."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-indigo-900/50 text-indigo-400 border border-indigo-500/30 rounded-full flex items-center justify-center font-bold text-xl mr-4">B</div>
                                <div>
                                    <h4 className="font-bold text-white">Pak Budi</h4>
                                    <p className="text-indigo-400 text-sm">Pemilik 'Budi Mart'</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Testimonial 2 - Siska */}
                    <Reveal delay={200}>
                        <div className="bg-slate-800 p-8 rounded-2xl relative hover:bg-slate-700 transition-colors duration-300 h-full group border border-slate-700 hover:border-pink-500/50">
                            <div className="text-indigo-400 text-6xl absolute top-4 right-6 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
                            <p className="text-slate-300 mb-6 relative z-10 italic">
                                "Sebagai startup kecil, budget kami terbatas. Zyllo memberikan solusi MVP aplikasi mobile yang pas di kantong tapi kualitasnya seperti aplikasi unicorn."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-pink-900/50 text-pink-400 border border-pink-500/30 rounded-full flex items-center justify-center font-bold text-xl mr-4">S</div>
                                <div>
                                    <h4 className="font-bold text-white">Siska A.</h4>
                                    <p className="text-indigo-400 text-sm">Founder 'SayurKilat'</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Testimonial 3 - Andi */}
                    <Reveal delay={400}>
                        <div className="bg-slate-800 p-8 rounded-2xl relative hover:bg-slate-700 transition-colors duration-300 h-full group border border-slate-700 hover:border-emerald-500/50">
                            <div className="text-indigo-400 text-6xl absolute top-4 right-6 opacity-20 group-hover:opacity-40 transition-opacity">"</div>
                            <p className="text-slate-300 mb-6 relative z-10 italic">
                                "Sistem kerja manual sangat membuang waktu. Digitalisasi internal kami membuat tim operasional bekerja lebih cepat dan data jauh lebih akurat."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center font-bold text-xl mr-4">A</div>
                                <div>
                                    <h4 className="font-bold text-white">Andi P.</h4>
                                    <p className="text-indigo-400 text-sm">Manajer Operasional</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
