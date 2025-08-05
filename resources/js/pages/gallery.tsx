import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    images: Array<{
        id: number;
        title: string;
        description?: string;
        file_path: string;
        category?: string;
    }>;
    videos: Array<{
        id: number;
        title: string;
        description?: string;
        file_path: string;
        category?: string;
    }>;
    categories: string[];
    [key: string]: unknown;
}

export default function Gallery({ images, videos, categories }: Props) {
    const [activeTab, setActiveTab] = useState<'all' | 'images' | 'videos'>('all');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredImages = selectedCategory 
        ? images.filter(img => img.category === selectedCategory)
        : images;

    const filteredVideos = selectedCategory
        ? videos.filter(vid => vid.category === selectedCategory)
        : videos;

    const allItems = [...filteredImages, ...filteredVideos];

    const getDisplayItems = () => {
        switch (activeTab) {
            case 'images':
                return filteredImages;
            case 'videos':
                return filteredVideos;
            default:
                return allItems;
        }
    };

    return (
        <>
            <Head title="Galeri Sekolah" />
            
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
                            <Link href="/news" className="hover:text-green-200 transition-colors">Berita</Link>
                            <Link href="/gallery" className="text-green-200 font-medium">Galeri</Link>
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
                        🖼️ Galeri Sekolah
                    </h1>
                    <p className="text-xl text-green-700 max-w-3xl mx-auto">
                        Dokumentasi kegiatan, prestasi, dan momen berharga di sekolah kami
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        {/* Type Filter */}
                        <div className="flex space-x-2">
                            <Button
                                variant={activeTab === 'all' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('all')}
                                className={activeTab === 'all' ? 'bg-green-600 hover:bg-green-700' : 'border-green-600 text-green-600'}
                            >
                                🗂️ Semua ({allItems.length})
                            </Button>
                            <Button
                                variant={activeTab === 'images' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('images')}
                                className={activeTab === 'images' ? 'bg-green-600 hover:bg-green-700' : 'border-green-600 text-green-600'}
                            >
                                🖼️ Foto ({filteredImages.length})
                            </Button>
                            <Button
                                variant={activeTab === 'videos' ? 'default' : 'outline'}
                                onClick={() => setActiveTab('videos')}
                                className={activeTab === 'videos' ? 'bg-green-600 hover:bg-green-700' : 'border-green-600 text-green-600'}
                            >
                                🎥 Video ({filteredVideos.length})
                            </Button>
                        </div>

                        {/* Category Filter */}
                        {categories.length > 0 && (
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600 text-sm">Kategori:</span>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="">Semua Kategori</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    {getDisplayItems().length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {getDisplayItems().map((item) => (
                                <div key={`${item.id}-${item.file_path}`} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="aspect-square bg-gray-200 flex items-center justify-center overflow-hidden">
                                        {'file_path' in item && item.file_path.includes('mp4') ? (
                                            // Video item
                                            <div className="w-full h-full bg-green-100 flex flex-col items-center justify-center text-green-600 hover:bg-green-200 transition-colors cursor-pointer">
                                                <div className="text-4xl mb-2">🎥</div>
                                                <p className="text-sm font-medium text-center px-2 line-clamp-2">
                                                    {item.title}
                                                </p>
                                            </div>
                                        ) : (
                                            // Image item
                                            <img 
                                                src={item.file_path} 
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform cursor-pointer"
                                                onClick={() => setSelectedImage(item.file_path)}
                                            />
                                        )}
                                    </div>
                                    
                                    {/* Overlay with title and category */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                            <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                                                {item.title}
                                            </h3>
                                            {item.category && (
                                                <span className="text-xs bg-green-600 px-2 py-1 rounded-full">
                                                    {item.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl text-gray-400 mb-4">🖼️</div>
                            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                                Belum Ada Konten
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Foto dan video kegiatan sekolah akan ditampilkan di sini
                            </p>
                            <Button asChild className="bg-green-600 hover:bg-green-700">
                                <Link href="/">Kembali ke Beranda</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <img 
                            src={selectedImage} 
                            alt="Gallery preview"
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
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