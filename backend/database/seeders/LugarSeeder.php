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
                'nombre' => 'Ámsterdam',
                'pais' => 'Países Bajos',
                'descripcion' => 'Ciudad famosa por sus encantadores canales, bicicletas y rica historia artística.',
                'imagen_url' => 'img/lugares/amsterdam.jpg'
            ],
            [
                'nombre' => 'Atenas',
                'pais' => 'Grecia',
                'descripcion' => 'Cuna de la civilización occidental y hogar de la majestuosa Acrópolis.',
                'imagen_url' => 'img/lugares/atenas.jpg'
            ],
            [
                'nombre' => 'Berlín',
                'pais' => 'Alemania',
                'descripcion' => 'Capital vibrante, llena de historia, arte callejero y cultura moderna.',
                'imagen_url' => 'img/lugares/berlin.jpg'
            ],
            [
                'nombre' => 'Budapest',
                'pais' => 'Hungría',
                'descripcion' => 'La perla del Danubio, famosa por su impresionante parlamento y sus baños termales.',
                'imagen_url' => 'img/lugares/budapest.jpg'
            ],
            [
                'nombre' => 'Dubái',
                'pais' => 'Emiratos Árabes Unidos',
                'descripcion' => 'Lujo, arquitectura futurista y el rascacielos más alto del mundo.',
                'imagen_url' => 'img/lugares/dubai.jpg'
            ],
            [
                'nombre' => 'Estambul',
                'pais' => 'Turquía',
                'descripcion' => 'Puente mágico entre Europa y Asia, llena de bazares, mezquitas y aromas.',
                'imagen_url' => 'img/lugares/estambul.jpg'
            ],
            [
                'nombre' => 'Jerusalén',
                'pais' => 'Israel',
                'descripcion' => 'Ciudad santa para tres grandes religiones, llena de historia milenaria y misterio.',
                'imagen_url' => 'img/lugares/jerusalen.jpg'
            ],
            [
                'nombre' => 'Lisboa',
                'pais' => 'Portugal',
                'descripcion' => 'La ciudad de las siete colinas, famosa por sus tranvías, el fado y sus miradores.',
                'imagen_url' => 'img/lugares/lisboa.jpg'
            ],
            [
                'nombre' => 'Londres',
                'pais' => 'Reino Unido',
                'descripcion' => 'Hogar del Big Ben y una cultura cosmopolita increíble.',
                'imagen_url' => 'img/lugares/londres.jpg'
            ],
            [
                'nombre' => 'Marrakech',
                'pais' => 'Marruecos',
                'descripcion' => 'Ciudad imperial llena de zocos vibrantes, palacios y un ambiente mágico.',
                'imagen_url' => 'img/lugares/Marrakech.jpg'
            ],
            [
                'nombre' => 'Nápoles',
                'pais' => 'Italia',
                'descripcion' => 'Cuna de la pizza, al pie del majestuoso Monte Vesubio y llena de vida.',
                'imagen_url' => 'img/lugares/Nápoles.jpg'
            ],
            [
                'nombre' => 'Nueva York',
                'pais' => 'Estados Unidos',
                'descripcion' => 'La ciudad que nunca duerme, hogar de Times Square y rascacielos icónicos.',
                'imagen_url' => 'img/lugares/newYork.jpg'
            ],
            [
                'nombre' => 'París',
                'pais' => 'Francia',
                'descripcion' => 'La ciudad del amor, famosa por la Torre Eiffel y su ambiente bohemio.',
                'imagen_url' => 'img/lugares/paris.jpg'
            ],
            [
                'nombre' => 'Praga',
                'pais' => 'República Checa',
                'descripcion' => 'La ciudad de las cien torres, con su reloj astronómico y su puente de cuento.',
                'imagen_url' => 'img/lugares/praga.jpg'
            ],
            [
                'nombre' => 'Roma',
                'pais' => 'Italia',
                'descripcion' => 'Historia viva en cada esquina y gastronomía insuperable.',
                'imagen_url' => 'img/lugares/roma.jpg'
            ],
            [
                'nombre' => 'Sídney',
                'pais' => 'Australia',
                'descripcion' => 'Icono de Oceanía con su espectacular Casa de la Ópera y sus playas surferas.',
                'imagen_url' => 'img/lugares/sidney.jpg'
            ],
            [
                'nombre' => 'Tánger',
                'pais' => 'Marruecos',
                'descripcion' => 'Puerta de entrada a África, ciudad portuaria llena de influencias culturales.',
                'imagen_url' => 'img/lugares/Tanger.jpg'
            ],
            [
                'nombre' => 'Tokio',
                'pais' => 'Japón',
                'descripcion' => 'Una mezcla perfecta entre tradición milenaria y tecnología futurista.',
                'imagen_url' => 'img/lugares/tokyo.jpg'
            ],
            [
                'nombre' => 'Varsovia',
                'pais' => 'Polonia',
                'descripcion' => 'Ciudad histórica e incansable, con un casco antiguo impresionantemente reconstruido.',
                'imagen_url' => 'img/lugares/varsovia.jpg'
            ]
        ];

        foreach ($lugares as $lugar) {
            Lugar::create($lugar);
        }
    }
}
