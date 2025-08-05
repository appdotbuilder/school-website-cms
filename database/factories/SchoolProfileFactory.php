<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SchoolProfile>
 */
class SchoolProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'SMA Negeri 1 Jakarta',
            'address' => 'Jl. Pendidikan No. 123, Jakarta Pusat, DKI Jakarta 10110',
            'phone' => '(021) 123-4567',
            'email' => 'info@sman1jakarta.sch.id',
            'logo' => null,
            'motto' => 'Berprestasi, Berkarakter, Berbudaya',
            'vision' => 'Menjadi sekolah unggul yang menghasilkan lulusan berkualitas, berkarakter mulia, dan mampu bersaing di era global.',
            'mission' => 'Menyelenggarakan pendidikan berkualitas dengan kurikulum yang inovatif, mengembangkan karakter siswa yang berakhlak mulia, memfasilitasi pengembangan bakat dan minat siswa, serta membangun kemitraan dengan berbagai pihak untuk kemajuan pendidikan.',
            'history' => 'SMA Negeri 1 Jakarta didirikan pada tahun 1950 sebagai salah satu sekolah menengah atas negeri tertua di Jakarta. Selama lebih dari 70 tahun, sekolah ini telah menghasilkan ribuan alumni yang berkiprah di berbagai bidang dan berkontribusi bagi kemajuan bangsa.',
            'values' => 'Integritas, Kreativitas, Kolaborasi, Inovasi, dan Kepedulian terhadap lingkungan dan masyarakat.',
        ];
    }
}