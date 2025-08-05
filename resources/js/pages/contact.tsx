import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    schoolProfile?: {
        name: string;
        address: string;
        phone?: string;
        email?: string;
        logo?: string;
    };
    [key: string]: unknown;
}

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    [key: string]: string;
}

export default function Contact({ schoolProfile }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Hubungi Kami" />
            
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
                            <Link href="/ppdb" className="hover:text-green-200 transition-colors">PPDB</Link>
                            <Link href="/contact" className="text-green-200 font-medium">Kontak</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                        📞 Hubungi Kami
                    </h2>
                    <p className="text-xl text-green-700 max-w-3xl mx-auto">
                        Kami siap membantu menjawab pertanyaan Anda. Jangan ragu untuk menghubungi kami
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
                        📍 Informasi Kontak
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                        <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-4xl text-green-600 mb-4">📍</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-3">Alamat</h4>
                            <p className="text-gray-700">
                                {schoolProfile?.address || 'Jl. Pendidikan No. 123, Jakarta Pusat, DKI Jakarta 10110'}
                            </p>
                        </div>
                        
                        <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-4xl text-green-600 mb-4">📞</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-3">Telepon</h4>
                            <p className="text-gray-700 mb-2">
                                {schoolProfile?.phone || '(021) 123-4567'}
                            </p>
                            <p className="text-sm text-gray-600">
                                Senin - Jumat: 07.00 - 16.00 WIB
                            </p>
                        </div>
                        
                        <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
                            <div className="text-4xl text-green-600 mb-4">✉️</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-3">Email</h4>
                            <p className="text-gray-700">
                                {schoolProfile?.email || 'info@sekolah.sch.id'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold text-center text-green-800 mb-8">
                            💬 Kirim Pesan
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subjek *
                                </label>
                                <input
                                    type="text"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    required
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                )}
                            </div>
                            
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pesan *
                                </label>
                                <textarea
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    required
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>
                            
                            <div className="text-center">
                                <Button 
                                    type="submit" 
                                    size="lg" 
                                    className="bg-green-600 hover:bg-green-700 px-12"
                                    disabled={processing}
                                >
                                    {processing ? '⏳ Mengirim...' : '📧 Kirim Pesan'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-green-800 mb-8">
                        🗺️ Lokasi Sekolah
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center text-gray-600">
                                <div className="text-6xl mb-4">🗺️</div>
                                <p className="text-lg font-medium">Peta Lokasi Sekolah</p>
                                <p className="text-sm">
                                    {schoolProfile?.address || 'Alamat sekolah akan ditampilkan di sini'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
                        ❓ Pertanyaan yang Sering Diajukan
                    </h3>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="text-lg font-semibold text-green-800 mb-2">
                                Bagaimana cara mendaftar PPDB?
                            </h4>
                            <p className="text-gray-700">
                                Anda dapat mendaftar PPDB secara online melalui halaman PPDB di website kami. 
                                Isi formulir pendaftaran dan lengkapi persyaratan yang diminta.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="text-lg font-semibold text-green-800 mb-2">
                                Kapan jadwal penerimaan siswa baru?
                            </h4>
                            <p className="text-gray-700">
                                Jadwal PPDB dimulai dari bulan Januari hingga Maret setiap tahunnya. 
                                Informasi detail dapat dilihat di halaman PPDB.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="text-lg font-semibold text-green-800 mb-2">
                                Apa saja fasilitas yang tersedia?
                            </h4>
                            <p className="text-gray-700">
                                Sekolah kami dilengkapi dengan berbagai fasilitas modern seperti laboratorium, 
                                perpustakaan, lapangan olahraga, dan fasilitas penunjang lainnya.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h4 className="text-lg font-semibold text-green-800 mb-2">
                                Bagaimana cara menghubungi sekolah?
                            </h4>
                            <p className="text-gray-700">
                                Anda dapat menghubungi kami melalui telepon, email, atau datang langsung ke sekolah. 
                                Kami juga menyediakan formulir kontak online di website ini.
                            </p>
                        </div>
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