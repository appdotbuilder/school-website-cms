import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    schoolProfile?: {
        name: string;
        vision?: string;
        mission?: string;
        history?: string;
        values?: string;
        logo?: string;
    };
    teachers?: Array<{
        id: number;
        name: string;
        subject: string;
        photo?: string;
        qualification?: string;
        experience_years?: number;
    }>;
    facilities?: Array<{
        id: number;
        name: string;
        description: string;
        image?: string;
        category?: string;
        capacity?: number;
    }>;
    [key: string]: unknown;
}

export default function About({ schoolProfile, teachers = [], facilities = [] }: Props) {
    return (
        <>
            <Head title="Tentang Sekolah" />
            
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
                            <Link href="/about" className="text-green-200 font-medium">Tentang</Link>
                            <Link href="/news" className="hover:text-green-200 transition-colors">Berita</Link>
                            <Link href="/gallery" className="hover:text-green-200 transition-colors">Galeri</Link>
                            <Link href="/ppdb" className="hover:text-green-200 transition-colors">PPDB</Link>
                            <Link href="/contact" className="hover:text-green-200 transition-colors">Kontak</Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                        🏫 Tentang Sekolah Kami
                    </h2>
                    <p className="text-xl text-green-700 max-w-3xl mx-auto">
                        Mengenal lebih dekat profil, visi, misi, dan fasilitas sekolah kami
                    </p>
                </div>
            </section>

            {/* School Profile */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Vision */}
                        {schoolProfile?.vision && (
                            <div className="mb-12 text-center">
                                <h3 className="text-3xl font-bold text-green-800 mb-6">🎯 Visi</h3>
                                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                                    <p className="text-lg text-green-800 italic">
                                        "{schoolProfile.vision}"
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Mission */}
                        {schoolProfile?.mission && (
                            <div className="mb-12">
                                <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">🚀 Misi</h3>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <div className="prose prose-lg max-w-none text-green-800">
                                        <p>{schoolProfile.mission}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* History */}
                        {schoolProfile?.history && (
                            <div className="mb-12">
                                <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">📚 Sejarah</h3>
                                <div className="bg-white border border-green-200 p-6 rounded-lg shadow-sm">
                                    <div className="prose prose-lg max-w-none text-gray-700">
                                        <p>{schoolProfile.history}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Values */}
                        {schoolProfile?.values && (
                            <div className="mb-12">
                                <h3 className="text-3xl font-bold text-green-800 mb-6 text-center">⭐ Nilai-Nilai</h3>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <div className="prose prose-lg max-w-none text-green-800">
                                        <p>{schoolProfile.values}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Teachers Section */}
            {teachers.length > 0 && (
                <section className="py-16 bg-green-50">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
                            👨‍🏫 Tenaga Pendidik
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {teachers.map((teacher) => (
                                <div key={teacher.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="aspect-square bg-gray-200 flex items-center justify-center">
                                        {teacher.photo ? (
                                            <img 
                                                src={teacher.photo} 
                                                alt={teacher.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-6xl text-gray-400">👤</div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold text-green-800 mb-2">
                                            {teacher.name}
                                        </h4>
                                        <p className="text-green-600 font-medium mb-2">
                                            {teacher.subject}
                                        </p>
                                        {teacher.qualification && (
                                            <p className="text-sm text-gray-600 mb-2">
                                                📚 {teacher.qualification}
                                            </p>
                                        )}
                                        {teacher.experience_years && (
                                            <p className="text-sm text-gray-600">
                                                ⏰ {teacher.experience_years} tahun pengalaman
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Facilities Section */}
            {facilities.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center text-green-800 mb-12">
                            🏢 Fasilitas Sekolah
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {facilities.map((facility) => (
                                <div key={facility.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        {facility.image ? (
                                            <img 
                                                src={facility.image} 
                                                alt={facility.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-6xl text-gray-400">🏢</div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-semibold text-green-800">
                                                {facility.name}
                                            </h4>
                                            {facility.category && (
                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                                    {facility.category}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {facility.description}
                                        </p>
                                        {facility.capacity && (
                                            <p className="text-sm text-green-600">
                                                👥 Kapasitas: {facility.capacity} orang
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-green-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-6">📞 Tertarik Bergabung?</h3>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Hubungi kami untuk informasi lebih lanjut atau daftarkan putra-putri Anda melalui PPDB online
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                            <Link href="/ppdb">📝 Daftar PPDB</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                            <Link href="/contact">💬 Hubungi Kami</Link>
                        </Button>
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