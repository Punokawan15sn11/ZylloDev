import React, { useState, useRef } from 'react';
import { Zap, CheckCircle, Loader2 } from 'lucide-react';
import Reveal from '../ui/Reveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        fullName: '',
        whatsapp: '',
        businessNeed: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // 1. Simpan ke LocalStorage (Backup)
        const newCustomer = {
            ...formData,
            id: Date.now(),
            timestamp: new Date().toLocaleString()
        };
        const existingCustomers = JSON.parse(localStorage.getItem('customers') || '[]');
        localStorage.setItem('customers', JSON.stringify([...existingCustomers, newCustomer]));
        window.dispatchEvent(new Event('customerAdded'));

        // 2. Kirim via EmailJS (Background SMTP)
        // Gunakan Public Key dari Environment Variable
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log('Email sent:', result.text);
                setStatus('success');
                setFormData({ fullName: '', whatsapp: '', businessNeed: '' });
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.error('Email failed:', error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

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
                        {status === 'success' ? (
                            <div className="text-center py-10">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Pesan Terkirim!</h3>
                                <p className="text-slate-600">Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-indigo-600 font-semibold hover:text-indigo-800"
                                >
                                    Kirim pesan lagi
                                </button>
                            </div>
                        ) : (
                            <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                                    <input
                                        required
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all hover:border-indigo-400"
                                        placeholder="Contoh: Budi Santoso"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
                                    <input
                                        required
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all hover:border-indigo-400"
                                        placeholder="0812..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Kebutuhan Bisnis</label>
                                    <div className="relative">
                                        <select
                                            name="businessNeed"
                                            value={formData.businessNeed}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white appearance-none"
                                        >
                                            <option value="">Pilih Layanan...</option>
                                            <option value="Pembuatan Website">Pembuatan Website</option>
                                            <option value="Aplikasi Mobile">Aplikasi Mobile</option>
                                            <option value="Sistem Kasir/ERP">Sistem Kasir/ERP</option>
                                            <option value="Konsultasi Umum">Konsultasi Umum</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-2 transform active:scale-95 flex justify-center items-center group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                            <span>Mengirim...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Kirim & Jadwalkan Konsultasi</span>
                                            <Zap className="ml-2 w-5 h-5 group-hover:text-yellow-300 transition-colors" />
                                        </>
                                    )}
                                </button>
                                {status === 'error' && (
                                    <p className="text-sm text-red-500 text-center mt-2">Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.</p>
                                )}
                                <p className="text-xs text-slate-400 text-center mt-4">Data Anda aman. Kami akan menghubungi dalam 1x24 jam.</p>
                            </form>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
