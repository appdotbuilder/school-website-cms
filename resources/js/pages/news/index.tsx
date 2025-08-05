import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    news: {
        data: Array<{
            id: number;
            title: string;
            slug: string;
            excerpt?: string;
            image?: string;
            published_at: string;
            author: {
                name: string;
            };
        }>;
        current_page: number;
        last_page: number;
        prev_page_url?: string;
        next_page_url?: string;
    };
    [key: string]: unknown;
}

export default function NewsIndex({ news }: Props) {
    return (
        <>
            <Head title="Berita & Pengumuman" />
            
            {/* Header */}
            <header className="bg-green-600 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold hover:text-green-200">
                            🏫 Sekolah
                        </Link>
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/" className="hover:text-green-200 transition-colors">Beranda</Link>
                            <Link href="/about" className="hover:text-green-200 transition-colors">Tentang</Link>
                            <Link href="/news" className="text-green-200 font-medium">Berita</Link>
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
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                        📰 Berita & Pengumuman
                    </h1>
                    <p className="text-xl text-green-700 max-w-3xl mx-auto">
                        Informasi terkini tentang kegiatan, prestasi, dan pengumuman penting sekolah
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    {news.data.length > 0 ? (
                        <>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {news.data.map((article) => (
                                    <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                                            {article.image ? (
                                                <img 
                                                    src={article.image} 
                                                    alt={article.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="text-6xl text-gray-400">📰</div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-xl font-semibold text-green-800 mb-3 line-clamp-2">
                                                {article.title}
                                            </h2>
                                            {article.excerpt && (
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                    {article.excerpt}
                                                </p>
                                            )}
                                            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                                <span>📅 {new Date(article.published_at).toLocaleDateString('id-ID')}</span>
                                                <span>✍️ {article.author.name}</span>
                                            </div>
                                            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                                                <Link href={`/news/${article.slug}`}>
                                                    Baca Selengkapnya
                                                </Link>
                                            </Button>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {news.last_page > 1 && (
                                <div className="flex justify-center items-center space-x-4">
                                    {news.prev_page_url && (
                                        <Button asChild variant="outline" className="border-green-600 text-green-600">
                                            <Link href={news.prev_page_url}>← Sebelumnya</Link>
                                        </Button>
                                    )}
                                    <span className="text-gray-600">
                                        Halaman {news.current_page} dari {news.last_page}
                                    </span>
                                    {news.next_page_url && (
                                        <Button asChild variant="outline" className="border-green-600 text-green-600">
                                            <Link href={news.next_page_url}>Selanjutnya →</Link>
                                        </Button>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl text-gray-400 mb-4">📰</div>
                            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                                Belum Ada Berita
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Berita dan pengumuman akan ditampilkan di sini
                            </p>
                            <Button asChild className="bg-green-600 hover:bg-green-700">
                                <Link href="/">Kembali ke Beranda</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Sekolah. Semua hak cipta dilindungi.</p>
                </div>
            </footer>
        </>
    );
}