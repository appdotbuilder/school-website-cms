import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    schoolProfile?: {
        name: string;
        motto?: string;
        vision?: string;
        mission?: string;
        logo?: string;
        phone?: string;
        email?: string;
        address: string;
    };
    latestNews?: Array<{
        id: number;
        title: string;
        excerpt?: string;
        slug: string;
        image?: string;
        published_at: string;
    }>;
    featuredGallery?: Array<{
        id: number;
        title: string;
        file_path: string;
        type: string;
    }>;
    featuredTeachers?: Array<{
        id: number;
        name: string;
        subject: string;
        photo?: string;
    }>;
    facilities?: Array<{
        id: number;
        name: string;
        description: string;
        image?: string;
    }>;
    [key: string]: unknown;
}

export default function Welcome({ 
    schoolProfile, 
    latestNews = [], 
    featuredGallery = [],
    featuredTeachers = [],
    facilities = []
}: Props) {
    return (
        <>
            <Head title="Beranda" />
            
            {/* Header */}
            <header className="bg-green-600 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {schoolProfile?.logo && (
                                <img 
                                    src={schoolProfile.logo} 
                                    alt="Logo" 
                                    className="h-12 w-12 rounded-full"
                                />
                            )}
                            <div>
                                <h1 className="text-2xl font-bold">
                                    {schoolProfile?.name || '🏫 Sekolah Contoh'}
                                </h1>
                                {schoolProfile?.motto && (
                                    <p className="text-green-100 text-sm">{schoolProfile.motto}</p>
                                )}
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/" className="hover:text-green-200 transition-colors">Beranda</Link>
                            <Link href="/about" className="hover:text-green-200 transition-colors">Tentang</Link>
                            <Link href="/news" className="hover:text-green-200 transition-colors">Berita</Link>
                            <Link href="/gallery" className="hover:text-green-200 transition-colors">Galeri</Link>
                            <Link href="/ppdb" className="hover:text-green-200 transition-colors">PPDB</Link>
                            <Link href="/contact" className="hover:text-green-200 transition-colors">Kontak</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                        🌟 Selamat Datang di Website Sekolah
                    </h2>
                    <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto">
                        Platform digital modern untuk mengelola informasi sekolah dengan mudah dan efisien. 
                        Dilengkapi sistem CMS yang komprehensif untuk pengelolaan konten yang dinamis.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                            <Link href="/ppdb">📝 Daftar PPDB</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                            <Link href="/about">ℹ️ Tentang Sekolah</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
                        🚀 Fitur Utama Website
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
                            <div className="text-4xl mb-4">🏫</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">Profil Sekolah</h4>
                            <p className="text-green-700">Informasi lengkap tentang sejarah, visi, misi, dan nilai-nilai sekolah</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
                            <div className="text-4xl mb-4">📰</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">Berita & Pengumuman</h4>
                            <p className="text-green-700">Sistem berita dinamis yang dapat dikelola melalui CMS</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
                            <div className="text-4xl mb-4">🖼️</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">Galeri Media</h4>
                            <p className="text-green-700">Koleksi foto dan video kegiatan sekolah yang terorganisir</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
                            <div className="text-4xl mb-4">👨‍🏫</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">Data Guru</h4>
                            <p className="text-green-700">Profil lengkap tenaga pengajar dengan sistem manajemen yang mudah</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
                            <div className="text-4xl mb-4">🏢</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">Fasilitas</h4>
                            <p className="text-green-700">Informasi fasilitas sekolah yang dapat dikelola secara digital</p>
                        </div>
                        <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
                            <div className="text-4xl mb-4">📋</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">PPDB Online</h4>
                            <p className="text-green-700">Sistem pendaftaran siswa baru online yang terintegrasi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            {latestNews.length > 0 && (
                <section className="py-16 bg-green-50">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-12">
                            <h3 className="text-3xl font-bold text-green-800">📰 Berita Terbaru</h3>
                            <Button asChild variant="outline" className="border-green-600 text-green-600">
                                <Link href="/news">Lihat Semua</Link>
                            </Button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {latestNews.map((news) => (
                                <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    {news.image && (
                                        <img 
                                            src={news.image} 
                                            alt={news.title}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold text-green-800 mb-2 line-clamp-2">
                                            {news.title}
                                        </h4>
                                        {news.excerpt && (
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {news.excerpt}
                                            </p>
                                        )}
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-green-600">
                                                {new Date(news.published_at).toLocaleDateString('id-ID')}
                                            </span>
                                            <Button asChild size="sm" variant="outline">
                                                <Link href={`/news/${news.slug}`}>Baca</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Teachers Preview */}
            {featuredTeachers.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-12">
                            <h3 className="text-3xl font-bold text-green-800">👨‍🏫 Tenaga Pendidik</h3>
                            <Button asChild variant="outline" className="border-green-600 text-green-600">
                                <Link href="/about">Lihat Semua</Link>
                            </Button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredTeachers.map((teacher) => (
                                <div key={teacher.id} className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                                    <div className="w-20 h-20 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
                                        {teacher.photo ? (
                                            <img 
                                                src={teacher.photo} 
                                                alt={teacher.name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        ) : (
                                            <span className="text-2xl text-gray-600">👤</span>
                                        )}
                                    </div>
                                    <h4 className="font-semibold text-green-800 mb-1">{teacher.name}</h4>
                                    <p className="text-sm text-green-600">{teacher.subject}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Facilities Preview */}
            {facilities.length > 0 && (
                <section className="py-16 bg-green-50">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-12">
                            <h3 className="text-3xl font-bold text-green-800">🏢 Fasilitas Sekolah</h3>
                            <Button asChild variant="outline" className="border-green-600 text-green-600">
                                <Link href="/about">Lihat Semua</Link>
                            </Button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {facilities.map((facility) => (
                                <div key={facility.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="h-32 bg-gray-200 flex items-center justify-center">
                                        {facility.image ? (
                                            <img 
                                                src={facility.image} 
                                                alt={facility.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-3xl text-gray-600">🏢</span>
                                        )}
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-semibold text-green-800 mb-2 text-sm">{facility.name}</h4>
                                        <p className="text-xs text-gray-600 line-clamp-2">{facility.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Preview */}
            {featuredGallery.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center mb-12">
                            <h3 className="text-3xl font-bold text-green-800">🖼️ Galeri Sekolah</h3>
                            <Button asChild variant="outline" className="border-green-600 text-green-600">
                                <Link href="/gallery">Lihat Semua</Link>
                            </Button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {featuredGallery.map((item) => (
                                <div key={item.id} className="aspect-square rounded-lg overflow-hidden bg-green-100">
                                    {item.type === 'image' ? (
                                        <img 
                                            src={item.file_path} 
                                            alt={item.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-green-600">
                                            <div className="text-center">
                                                <div className="text-2xl mb-2">🎥</div>
                                                <p className="text-xs">{item.title}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CMS Features Section */}
            <section className="py-16 bg-green-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">⚙️ Sistem CMS Terintegrasi</h3>
                        <p className="text-xl text-green-100 max-w-3xl mx-auto">
                            Platform dilengkapi Content Management System yang memungkinkan pengelolaan konten website secara mudah dan efisien
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-green-700 rounded-lg">
                            <div className="text-3xl mb-3">🔧</div>
                            <h4 className="font-semibold mb-2">Kelola Profil Sekolah</h4>
                            <p className="text-sm text-green-100">Atur nama, logo, visi, misi sekolah</p>
                        </div>
                        <div className="text-center p-6 bg-green-700 rounded-lg">
                            <div className="text-3xl mb-3">📝</div>
                            <h4 className="font-semibold mb-2">Manajemen Berita</h4>
                            <p className="text-sm text-green-100">Buat, edit, dan publikasikan artikel</p>
                        </div>
                        <div className="text-center p-6 bg-green-700 rounded-lg">
                            <div className="text-3xl mb-3">📊</div>
                            <h4 className="font-semibold mb-2">Data PPDB</h4>
                            <p className="text-sm text-green-100">Kelola pendaftaran siswa baru</p>
                        </div>
                        <div className="text-center p-6 bg-green-700 rounded-lg">
                            <div className="text-3xl mb-3">👥</div>
                            <h4 className="font-semibold mb-2">Manajemen Guru</h4>
                            <p className="text-sm text-green-100">Atur profil dan data tenaga pengajar</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                            <Link href="/login">🔐 Masuk ke CMS</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-green-800 mb-4">📞 Hubungi Kami</h3>
                        <p className="text-green-700 max-w-2xl mx-auto">
                            Butuh informasi lebih lanjut? Jangan ragu untuk menghubungi kami
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl text-green-600 mb-4">📍</div>
                            <h4 className="font-semibold text-green-800 mb-2">Alamat</h4>
                            <p className="text-green-700">
                                {schoolProfile?.address || 'Alamat sekolah akan ditampilkan di sini'}
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl text-green-600 mb-4">📞</div>
                            <h4 className="font-semibold text-green-800 mb-2">Telepon</h4>
                            <p className="text-green-700">
                                {schoolProfile?.phone || '(021) 123-4567'}
                            </p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl text-green-600 mb-4">✉️</div>
                            <h4 className="font-semibold text-green-800 mb-2">Email</h4>
                            <p className="text-green-700">
                                {schoolProfile?.email || 'info@sekolah.sch.id'}
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                            <Link href="/contact">💬 Kirim Pesan</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h5 className="font-bold text-lg mb-4">
                                {schoolProfile?.name || 'Sekolah Contoh'}
                            </h5>
                            <p className="text-green-200 text-sm">
                                Website sekolah modern dengan sistem CMS terintegrasi untuk pengelolaan konten yang efisien.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4">Menu Utama</h5>
                            <div className="space-y-2 text-sm">
                                <Link href="/about" className="block text-green-200 hover:text-white transition-colors">Tentang Sekolah</Link>
                                <Link href="/news" className="block text-green-200 hover:text-white transition-colors">Berita</Link>
                                <Link href="/gallery" className="block text-green-200 hover:text-white transition-colors">Galeri</Link>
                                <Link href="/ppdb" className="block text-green-200 hover:text-white transition-colors">PPDB</Link>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-4">Kontak</h5>
                            <div className="space-y-2 text-sm text-green-200">
                                <p>📍 {schoolProfile?.address || 'Alamat Sekolah'}</p>
                                <p>📞 {schoolProfile?.phone || '(021) 123-4567'}</p>
                                <p>✉️ {schoolProfile?.email || 'info@sekolah.sch.id'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200 text-sm">
                        <p>&copy; 2024 {schoolProfile?.name || 'Sekolah Contoh'}. Semua hak cipta dilindungi.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}