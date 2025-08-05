import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    schoolProfile?: {
        name: string;
        logo?: string;
    };
    [key: string]: unknown;
}

interface PpdbFormData {
    full_name: string;
    date_of_birth: string;
    gender: string;
    address: string;
    phone: string;
    email: string;
    previous_school: string;
    parent_name: string;
    parent_phone: string;
    parent_email: string;
    parent_occupation: string;
    [key: string]: string;
}

export default function Ppdb({ schoolProfile }: Props) {
    const { data, setData, post, processing, errors } = useForm<PpdbFormData>({
        full_name: '',
        date_of_birth: '',
        gender: '',
        address: '',
        phone: '',
        email: '',
        previous_school: '',
        parent_name: '',
        parent_phone: '',
        parent_email: '',
        parent_occupation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('ppdb.store'));
    };

    return (
        <>
            <Head title="PPDB - Penerimaan Peserta Didik Baru" />
            
            {/* Header */}
            <header className="bg-green-600 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center space-x-4">
                                {schoolProfile?.logo && (
                                    <img 
                                        src={schoolProfile.logo} 
                                        alt="Logo" 
                                        className="h-12 w-12 rounded-full"
                                    />
                                )}
                                <h1 className="text-2xl font-bold">
                                    {schoolProfile?.name || 'Sekolah Contoh'}
                                </h1>
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/" className="hover:text-green-200 transition-colors">Beranda</Link>
                            <Link href="/about" className="hover:text-green-200 transition-colors">Tentang</Link>
                            <Link href="/news" className="hover:text-green-200 transition-colors">Berita</Link>
                            <Link href="/gallery" className="hover:text-green-200 transition-colors">Galeri</Link>
                            <Link href="/ppdb" className="text-green-200 font-medium">PPDB</Link>
                            <Link href="/contact" className="hover:text-green-200 transition-colors">Kontak</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                        📝 PPDB Online
                    </h2>
                    <p className="text-xl text-green-700 max-w-3xl mx-auto">
                        Penerimaan Peserta Didik Baru - Daftarkan putra-putri Anda dengan mudah melalui sistem online
                    </p>
                </div>
            </section>

            {/* Information Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-12">
                        <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">
                            ℹ️ Informasi PPDB
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                <div className="text-3xl text-green-600 mb-4 text-center">📅</div>
                                <h4 className="font-semibold text-green-800 mb-2 text-center">Jadwal Pendaftaran</h4>
                                <div className="text-sm text-green-700 space-y-1">
                                    <p>📌 Pendaftaran: 1 Januari - 31 Maret</p>
                                    <p>📌 Tes Seleksi: 1-15 April</p>
                                    <p>📌 Pengumuman: 30 April</p>
                                </div>
                            </div>
                            
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                <div className="text-3xl text-green-600 mb-4 text-center">📋</div>
                                <h4 className="font-semibold text-green-800 mb-2 text-center">Persyaratan</h4>
                                <div className="text-sm text-green-700 space-y-1">
                                    <p>✅ Ijazah/SKHUN SMP</p>
                                    <p>✅ Akte Kelahiran</p>
                                    <p>✅ KK & KTP Orang Tua</p>
                                    <p>✅ Pas Foto 3x4 (2 lembar)</p>
                                </div>
                            </div>
                            
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                <div className="text-3xl text-green-600 mb-4 text-center">💰</div>
                                <h4 className="font-semibold text-green-800 mb-2 text-center">Biaya</h4>
                                <div className="text-sm text-green-700 space-y-1">
                                    <p>💵 Pendaftaran: Gratis</p>
                                    <p>💵 SPP: Rp 500.000/bulan</p>
                                    <p>💵 Seragam: Rp 750.000</p>
                                    <p>💵 Buku: Rp 300.000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Form */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">
                            📄 Formulir Pendaftaran
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                            {/* Student Information */}
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                                    👤 Data Calon Siswa
                                </h4>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Lengkap *
                                        </label>
                                        <input
                                            type="text"
                                            value={data.full_name}
                                            onChange={(e) => setData('full_name', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                        {errors.full_name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tanggal Lahir *
                                        </label>
                                        <input
                                            type="date"
                                            value={data.date_of_birth}
                                            onChange={(e) => setData('date_of_birth', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                        {errors.date_of_birth && (
                                            <p className="text-red-500 text-sm mt-1">{errors.date_of_birth}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Jenis Kelamin *
                                        </label>
                                        <select
                                            value={data.gender}
                                            onChange={(e) => setData('gender', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        >
                                            <option value="">Pilih Jenis Kelamin</option>
                                            <option value="male">Laki-laki</option>
                                            <option value="female">Perempuan</option>
                                        </select>
                                        {errors.gender && (
                                            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            No. Telepon *
                                        </label>
                                        <input
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>
                                    
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>
                                    
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Alamat Lengkap *
                                        </label>
                                        <textarea
                                            value={data.address}
                                            onChange={(e) => setData('address', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                        {errors.address && (
                                            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                                        )}
                                    </div>
                                    
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Asal Sekolah
                                        </label>
                                        <input
                                            type="text"
                                            value={data.previous_school}
                                            onChange={(e) => setData('previous_school', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        />
                                        {errors.previous_school && (
                                            <p className="text-red-500 text-sm mt-1">{errors.previous_school}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Parent Information */}
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-green-800 mb-4 border-b border-green-200 pb-2">
                                    👥 Data Orang Tua/Wali
                                </h4>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Orang Tua/Wali *
                                        </label>
                                        <input
                                            type="text"
                                            value={data.parent_name}
                                            onChange={(e) => setData('parent_name', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                        {errors.parent_name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.parent_name}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            No. Telepon Orang Tua *
                                        </label>
                                        <input
                                            type="tel"
                                            value={data.parent_phone}
                                            onChange={(e) => setData('parent_phone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            required
                                        />
                                        {errors.parent_phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.parent_phone}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Orang Tua
                                        </label>
                                        <input
                                            type="email"
                                            value={data.parent_email}
                                            onChange={(e) => setData('parent_email', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        />
                                        {errors.parent_email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.parent_email}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Pekerjaan Orang Tua
                                        </label>
                                        <input
                                            type="text"
                                            value={data.parent_occupation}
                                            onChange={(e) => setData('parent_occupation', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        />
                                        {errors.parent_occupation && (
                                            <p className="text-red-500 text-sm mt-1">{errors.parent_occupation}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Submit Button */}
                            <div className="text-center">
                                <Button 
                                    type="submit" 
                                    size="lg" 
                                    className="bg-green-600 hover:bg-green-700 px-8"
                                    disabled={processing}
                                >
                                    {processing ? '⏳ Memproses...' : '📝 Daftar Sekarang'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 {schoolProfile?.name || 'Sekolah Contoh'}. Semua hak cipta dilindungi.</p>
                </div>
            </footer>
        </>
    );
}