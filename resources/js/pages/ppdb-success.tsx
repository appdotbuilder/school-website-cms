import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    registration: {
        registration_number: string;
        full_name: string;
        email: string;
        status: string;
    };
    [key: string]: unknown;
}

export default function PpdbSuccess({ registration }: Props) {
    return (
        <>
            <Head title="Pendaftaran Berhasil - PPDB" />
            
            {/* Success Section */}
            <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        {/* Success Icon */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-600 text-white rounded-full text-4xl mb-6">
                                ✅
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                                Pendaftaran Berhasil!
                            </h1>
                            <p className="text-xl text-green-700 mb-8">
                                Terima kasih, pendaftaran PPDB Anda telah berhasil disubmit
                            </p>
                        </div>

                        {/* Registration Details */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="text-2xl font-bold text-green-800 mb-6">
                                📄 Detail Pendaftaran
                            </h2>
                            
                            <div className="space-y-4 text-left">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-medium text-gray-700">Nomor Registrasi:</span>
                                    <span className="font-bold text-green-600 text-lg">
                                        {registration.registration_number}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-medium text-gray-700">Nama Lengkap:</span>
                                    <span className="text-gray-900">{registration.full_name}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-medium text-gray-700">Email:</span>
                                    <span className="text-gray-900">{registration.email}</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-medium text-gray-700">Status:</span>
                                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {registration.status === 'pending' ? '⏳ Menunggu Verifikasi' : registration.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Important Information */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                            <h3 className="text-lg font-semibold text-blue-800 mb-4">
                                📋 Informasi Penting
                            </h3>
                            <div className="text-left text-blue-700 space-y-2">
                                <p>• Simpan nomor registrasi Anda: <strong>{registration.registration_number}</strong></p>
                                <p>• Konfirmasi pendaftaran akan dikirim ke email Anda dalam 1x24 jam</p>
                                <p>• Silakan melengkapi berkas persyaratan dan kirim ke sekolah</p>
                                <p>• Jadwal tes seleksi akan diinformasikan kemudian</p>
                                <p>• Hubungi sekolah jika ada pertanyaan lebih lanjut</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                                <Link href="/">🏠 Kembali ke Beranda</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                                <Link href="/contact">📞 Hubungi Sekolah</Link>
                            </Button>
                        </div>

                        {/* Print Button */}
                        <div className="mt-6">
                            <Button 
                                onClick={() => window.print()} 
                                variant="ghost" 
                                className="text-green-600 hover:text-green-700"
                            >
                                🖨️ Cetak Bukti Pendaftaran
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}