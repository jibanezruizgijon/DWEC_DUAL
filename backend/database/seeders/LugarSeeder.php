<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Lugar;
class LugarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lugares = [
            [
                'nombre' => 'Madrid',
                'pais' => 'España',
                'descripcion' => 'Capital de España, famosa por sus museos y vida nocturna.',
                'imagen_url' => 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=500'
            ],
            [
                'nombre' => 'Paris',
                'pais' => 'Francia',
                'descripcion' => 'La ciudad del amor y de la Torre Eiffel.',
                'imagen_url' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=500'
            ],
            [
                'nombre' => 'Londres',
                'pais' => 'Reino Unido',
                'descripcion' => 'Hogar del Big Ben y una cultura cosmopolita increíble.',
                'imagen_url' => 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=500'
            ],
            [
                'nombre' => 'Roma',
                'pais' => 'Italia',
                'descripcion' => 'Historia viva en cada esquina y gastronomía insuperable.',
                'imagen_url' => 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=500'
            ],
            [
                'nombre' => 'Tokio',
                'pais' => 'Japón',
                'descripcion' => 'Una mezcla perfecta entre tradición milenaria y tecnología futurista.',
                'imagen_url' => 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=500'
            ]
        ];

        foreach ($lugares as $lugar) {
            Lugar::create($lugar);
        }
    }
}
