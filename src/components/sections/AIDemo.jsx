import React, { useState } from 'react';
import { Sparkles, Bot, Zap, Loader2, CheckCircle } from 'lucide-react';
import Reveal from '../ui/Reveal';

const AIDemo = ({ scrollToSection }) => {
    const [aiBusiness, setAiBusiness] = useState('');
    const [aiDescription, setAiDescription] = useState('');
    const [aiResult, setAiResult] = useState(null);
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [aiError, setAiError] = useState('');

    const handleAiConsultation = async (e) => {
        e.preventDefault();
        if (!aiBusiness || !aiDescription) return;

        setIsAiLoading(true);
        setAiResult(null);
        setAiError('');

        const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
        const prompt = `Bertindaklah sebagai konsultan teknologi senior dari Zyllo.id.
    Klien memiliki bisnis: "${aiBusiness}".
    Deskripsi usaha dan keinginan mereka: "${aiDescription}".
    
    Berikan rekomendasi solusi digital (Website atau Aplikasi) yang paling cocok untuk mendukung usaha mereka dalam format JSON sederhana:
    {
      "konsep_solusi": "Nama Konsep (Contoh: Website E-Commerce Minimalis, Aplikasi Loyalty Program, atau ERP System)",
      "analisis_kebutuhan": "Penjelasan singkat mengapa konsep ini cocok dengan deskripsi usaha mereka.",
      "fitur_kunci": ["Fitur 1", "Fitur 2", "Fitur 3"],
      "manfaat_utama": "Satu kalimat tentang bagaimana solusi ini akan meningkatkan bisnis mereka."
    }
    Gunakan Bahasa Indonesia yang profesional namun ramah.`;

        try {
            if (!apiKey) {
                // Fallback for demo without API key
                await new Promise(resolve => setTimeout(resolve, 2000));
                setAiResult({
                    konsep_solusi: "Sistem Manajemen Bisnis Terintegrasi (Demo Result)",
                    analisis_kebutuhan: "Karena Anda tidak memasukkan API Key, ini adalah hasil simulasi. Bisnis Anda membutuhkan sistem yang dapat mengelola stok dan pesanan secara otomatis.",
                    fitur_kunci: ["Dashboard Real-time", "Integrasi Marketplace", "Laporan Keuangan Otomatis"],
                    manfaat_utama: "Meningkatkan efisiensi operasional hingga 40% dengan otomatisasi penuh."
                });
                return;
            }

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        generationConfig: {
                            responseMimeType: "application/json"
                        }
                    }),
                }
            );

            if (!response.ok) throw new Error("Gagal menghubungi AI Server");

            const data = await response.json();
            const textResponse = data.candidates[0].content.parts[0].text;
            const parsedResult = JSON.parse(textResponse);

            setAiResult(parsedResult);
        } catch (error) {
            console.error(error);
            setAiError("Maaf, sistem sedang sibuk. Silakan coba lagi nanti.");
        } finally {
            setIsAiLoading(false);
        }
    };

    return (
        <section id="tanya-ai" className="py-20 bg-gradient-to-br from-indigo-900 to-slate-900 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/30 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-[80px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 mb-6 backdrop-blur-sm">
                                <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
                                <span className="text-sm font-medium">Tanya AI</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Temukan Konsep Digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                                    Yang Paling Cocok
                                </span>
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Bingung memilih antara Website Profile, Toko Online, atau Aplikasi Custom?
                                Ceritakan tentang usaha Anda, dan AI kami akan merekomendasikan teknologi yang paling tepat untuk pertumbuhan bisnis Anda.
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                                <div className="flex items-center"><Bot className="w-5 h-5 mr-2 text-indigo-400" /> Rekomendasi Pintar</div>
                                <div className="flex items-center"><Zap className="w-5 h-5 mr-2 text-yellow-400" /> Solusi Tepat Guna</div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative">
                            {!aiResult ? (
                                <form onSubmit={handleAiConsultation} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-indigo-200 mb-2">Jenis Bisnis Anda</label>
                                        <input
                                            type="text"
                                            value={aiBusiness}
                                            onChange={(e) => setAiBusiness(e.target.value)}
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                            placeholder="Contoh: Coffee Shop, Fashion Brand, Jasa Logistik..."
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-indigo-200 mb-2">Deskripsi Usaha</label>
                                        <textarea
                                            value={aiDescription}
                                            onChange={(e) => setAiDescription(e.target.value)}
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all h-24 resize-none"
                                            placeholder="Contoh: Kami menjual produk handmade dengan target anak muda, ingin tampilan web yang estetik dan bisa transaksi langsung..."
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isAiLoading}
                                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                                    >
                                        {isAiLoading ? (
                                            <>
                                                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                                                Menganalisis Kebutuhan...
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="mr-2 h-5 w-5" />
                                                Cari Solusi Digital
                                            </>
                                        )}
                                    </button>
                                    {aiError && <p className="text-red-400 text-sm text-center mt-2">{aiError}</p>}
                                </form>
                            ) : (
                                <div className="animate-fade-in-up">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white">Rekomendasi Zyllo AI</h3>
                                        <button
                                            onClick={() => setAiResult(null)}
                                            className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full text-white transition-colors"
                                        >
                                            Ulangi
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-gradient-to-r from-indigo-600/40 to-purple-600/40 p-4 rounded-lg border border-indigo-400/30">
                                            <p className="text-indigo-200 text-xs uppercase tracking-wider font-bold mb-1">Konsep Disarankan:</p>
                                            <p className="text-white font-bold text-lg">{aiResult.konsep_solusi}</p>
                                        </div>

                                        <div className="bg-indigo-900/40 p-4 rounded-lg border border-indigo-500/30">
                                            <p className="text-indigo-200 text-sm font-semibold mb-1">Mengapa ini cocok:</p>
                                            <p className="text-white text-sm">{aiResult.analisis_kebutuhan}</p>
                                        </div>

                                        <div>
                                            <p className="text-indigo-200 text-sm font-semibold mb-2">Fitur Kunci yang Diperlukan:</p>
                                            <ul className="space-y-2">
                                                {aiResult.fitur_kunci.map((item, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-slate-300">
                                                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center mt-2">
                                            <p className="text-white text-sm italic">"{aiResult.manfaat_utama}"</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="w-full mt-6 bg-white text-indigo-900 font-bold py-3 rounded-lg hover:bg-indigo-50 transition-colors"
                                    >
                                        Bangun {aiResult.konsep_solusi} Sekarang
                                    </button>
                                </div>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AIDemo;
