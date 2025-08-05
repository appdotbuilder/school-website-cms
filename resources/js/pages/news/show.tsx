import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    news: {
        id: number;
        title: string;
        slug: string;
        content: string;
        image?: string;
        published_at: string;
        author: {
            name: string;
        };
    };
    relatedNews?: Array<{
        id: number;
        title: string;
        slug: string;
        excerpt?: string;
        published_at: string;
    }>;
    [key: string]: unknown;
}

export default function NewsShow({ news, relatedNews = [] }: Props) {
    return (
        <>
            <Head title={news.title} />
            
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

            {/* Breadcrumb */}
            <section className="bg-green-50 py-4">
                <div className="container mx-auto px-4">
                    <nav className="text-sm text-green-700">
                        <Link href="/" className="hover:text-green-800">Beranda</Link>
                        <span className="mx-2">›</span>
                        <Link href="/news" className="hover:text-green-800">Berita</Link>
                        <span className="mx-2">›</span>
                        <span className="text-green-600">{news.title}</span>
                    </nav>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Article Header */}
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                                {news.title}
                            </h1>
                            <div className="flex items-center text-gray-600 text-sm mb-6">
                                <span className="mr-4">📅 {new Date(news.published_at).toLocaleDateString('id-ID', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                                <span>✍️ {news.author.name}</span>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {news.image && (
                            <div className="mb-8">
                                <img 
                                    src={news.image} 
                                    alt={news.title}
                                    className="w-full rounded-lg shadow-md"
                                />
                            </div>
                        )}

                        {/* Article Body */}
                        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                            {news.content.split('\n').map((paragraph, index) => (
                                paragraph.trim() && (
                                    <p key={index} className="mb-4">
                                        {paragraph}
                                    </p>
                                )
                            ))}
                        </div>

                        {/* Social Share & Navigation */}
                        <div className="border-t border-gray-200 pt-8 mb-8">
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <div className="mb-4 sm:mb-0">
                                    <p className="text-gray-600 text-sm mb-2">Bagikan artikel ini:</p>
                                    <div className="flex space-x-2">
                                        <Button 
                                            size="sm" 
                                            variant="outline"
                                            onClick={() => {
                                                const url = window.location.href;
                                                const text = encodeURIComponent(news.title);
                                                window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
                                            }}
                                        >
                                            WhatsApp
                                        </Button>
                                        <Button 
                                            size="sm" 
                                            variant="outline"
                                            onClick={() => {
                                                navigator.clipboard.writeText(window.location.href);
                                                alert('Link berhasil disalin!');
                                            }}
                                        >
                                            Salin Link
                                        </Button>
                                    </div>
                                </div>
                                <Button asChild className="bg-green-600 hover:bg-green-700">
                                    <Link href="/news">← Kembali ke Berita</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related News */}
            {relatedNews.length > 0 && (
                <section className="py-16 bg-green-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
                            📰 Berita Terkait
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {relatedNews.map((article) => (
                                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-green-800 mb-2 line-clamp-2">
                                            {article.title}
                                        </h3>
                                        {article.excerpt && (
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                                {article.excerpt}
                                            </p>
                                        )}
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-green-600">
                                                {new Date(article.published_at).toLocaleDateString('id-ID')}
                                            </span>
                                            <Button asChild size="sm" variant="outline" className="border-green-600 text-green-600">
                                                <Link href={`/news/${article.slug}`}>Baca</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Sekolah. Semua hak cipta dilindungi.</p>
                </div>
            </footer>
        </>
    );
}