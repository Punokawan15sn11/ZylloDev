import React, { useState, useEffect } from 'react';
import { Download, Database } from 'lucide-react';

const AdminButton = () => {
    const [customerCount, setCustomerCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const customers = JSON.parse(localStorage.getItem('customers') || '[]');
            setCustomerCount(customers.length);
        };

        updateCount();
        // Listen for storage events to update count in real-time
        window.addEventListener('storage', updateCount);
        // Custom event for same-window updates
        window.addEventListener('customerAdded', updateCount);

        return () => {
            window.removeEventListener('storage', updateCount);
            window.removeEventListener('customerAdded', updateCount);
        };
    }, []);

    const downloadCSV = () => {
        const customers = JSON.parse(localStorage.getItem('customers') || '[]');

        if (customers.length === 0) {
            alert('Belum ada data pelanggan.');
            return;
        }

        // Define CSV headers
        const headers = ['Nama Lengkap', 'WhatsApp', 'Kebutuhan Bisnis', 'Tanggal'];

        // Convert data to CSV format
        const csvContent = [
            headers.join(','),
            ...customers.map(c => [
                `"${c.fullName}"`,
                `"${c.whatsapp}"`,
                `"${c.businessNeed}"`,
                `"${c.timestamp}"`
            ].join(','))
        ].join('\n');

        // Create blob and download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `data_pelanggan_${new Date().toISOString().slice(0, 10)}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={downloadCSV}
            className="fixed bottom-4 right-4 z-50 bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-all opacity-50 hover:opacity-100 flex items-center gap-2"
            title="Download Database Pelanggan"
        >
            <Database size={20} />
            <span className="text-xs font-bold bg-indigo-500 rounded-full w-5 h-5 flex items-center justify-center">
                {customerCount}
            </span>
        </button>
    );
};

export default AdminButton;
