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
                'nombre' => 'Tokyo',
                'pais' => 'Japón',
                'descripcion' => 'Una mezcla perfecta entre tradición milenaria y tecnología futurista.',
                'imagen_url' => 'img/lugares/tokyo.jpg'
            ],
            [
                'nombre' => 'Varsovia',
                'pais' => 'Polonia',
                'descripcion' => 'Ciudad histórica e incansable, con un casco antiguo impresionantemente reconstruido.',
                'imagen_url' => 'img/lugares/varsovia.jpg'
            ],
            [
                'nombre' => 'Barcelona',
                'pais' => 'España',
                'descripcion' => 'Ciudad cosmopolita a orillas del Mediterráneo, mundialmente famosa por la inigualable arquitectura de Gaudí, como la Sagrada Familia y el Parque Güell.',
                'imagen_url' => 'img/lugares/barcelona.jpg'
            ],
            [
                'nombre' => 'Sevilla',
                'pais' => 'España',
                'descripcion' => 'El corazón de Andalucía. Una ciudad mágica conocida por la Giralda, el vibrante arte del flamenco, el aroma a azahar y su rica historia monumental.',
                'imagen_url' => 'img/lugares/sevilla.jpg'
            ],
            [
                'nombre' => 'Madrid',
                'pais' => 'España',
                'descripcion' => 'Capital vibrante que nunca duerme. Destaca por sus museos de prestigio mundial como el Prado, sus amplios bulevares y una oferta gastronómica espectacular.',
                'imagen_url' => 'img/lugares/madrid.jpg'
            ],
            [
                'nombre' => 'Granada',
                'pais' => 'España',
                'descripcion' => 'Hogar de la impresionante Alhambra, un palacio árabe coronado por las montañas de Sierra Nevada, y famosa por su generosa cultura de las tapas.',
                'imagen_url' => 'img/lugares/granada.jpg'
            ],
            [
                'nombre' => 'Buenos Aires',
                'pais' => 'Argentina',
                'descripcion' => 'Conocida como la "París de Sudamérica", es la cuna del tango, llena de arquitectura de estilo europeo, barrios coloridos como La Boca y la mejor carne del mundo.',
                'imagen_url' => 'img/lugares/buenos-aires.jpg'
            ],
            [
                'nombre' => 'Cusco',
                'pais' => 'Perú',
                'descripcion' => 'La antigua capital del Imperio Inca. Una ciudad fascinante en los Andes que sirve como puerta de entrada al majestuoso santuario de Machu Picchu.',
                'imagen_url' => 'img/lugares/cusco.jpg'
            ],
            [
                'nombre' => 'Río de Janeiro',
                'pais' => 'Brasil',
                'descripcion' => 'Famosa por sus impresionantes paisajes, las icónicas playas de Copacabana e Ipanema, y el gigantesco Cristo Redentor que vigila la ciudad desde el cerro del Corcovado.',
                'imagen_url' => 'img/lugares/rio-janeiro.jpg'
            ],
            [
                'nombre' => 'Ciudad de México',
                'pais' => 'México',
                'descripcion' => 'Una megalópolis fascinante donde conviven antiguas ruinas aztecas, majestuosa arquitectura colonial y una de las gastronomías callejeras más ricas del planeta.',
                'imagen_url' => 'img/lugares/mexico.jpg'
            ],
            [
                'nombre' => 'Kioto',
                'pais' => 'Japón',
                'descripcion' => 'El alma tradicional de Japón. Una ciudad de paz y belleza famosa por sus miles de templos budistas, santuarios sintoístas, geishas y hermosos jardines zen.',
                'imagen_url' => 'img/lugares/kyoto.jpg'
            ],
            [
                'nombre' => 'El Cairo',
                'pais' => 'Egipto',
                'descripcion' => 'Una metrópolis caótica y apasionante a orillas del río Nilo, custodia de las milenarias Pirámides de Guiza y tesoros de los antiguos faraones.',
                'imagen_url' => 'img/lugares/cairo.jpg'
            ],
            [
                'nombre' => 'Bangkok',
                'pais' => 'Tailandia',
                'descripcion' => 'Una ciudad de contrastes donde los relucientes templos ornamentados y los serenos monjes conviven con mercados flotantes y una vibrante y moderna vida nocturna.',
                'imagen_url' => 'img/lugares/bangkok.jpg'
            ],
            [
                'nombre' => 'Ciudad del Cabo',
                'pais' => 'Sudáfrica',
                'descripcion' => 'Considerada una de las ciudades más bellas del mundo, situada a los pies de la imponente Montaña de la Mesa y rodeada de costas salvajes y pingüinos.',
                'imagen_url' => 'img/lugares/cabo.jpg'
            ],
            [
                'nombre' => 'Disneyland París',
                'pais' => 'Francia',
                'descripcion' => 'El parque temático más visitado de Europa. Un lugar mágico donde los cuentos de hadas cobran vida, con el icónico Castillo de la Bella Durmiente y emocionantes atracciones para toda la familia.',
                'imagen_url' => 'img/lugares/disney.jpg',
                'tipo' => 'parque'
            ],
            [
                'nombre' => 'PortAventura',
                'pais' => 'España',
                'descripcion' => 'Situado en la Costa Dorada, es uno de los principales destinos de ocio de Europa. Te permite viajar por el mundo a través de sus áreas temáticas: Mediterrània, Polynesia, China, México, Far West y SésamoAventura.',
                'imagen_url' => 'img/lugares/portAventura.jpg',
                'tipo' => 'parque'
            ],
            [
                'nombre' => 'Parque Warner',
                'pais' => 'España',
                'descripcion' => 'Ubicado en Madrid, este parque te sumerge en el mundo del cine y la animación. Disfruta de montañas rusas de infarto junto a los superhéroes de DC Comics y diviértete con los clásicos Looney Tunes.',
                'imagen_url' => 'img/lugares/parqueWarner.jpeg',
                'tipo' => 'parque'
            ],
            [
                'nombre' => 'Universal Studios',
                'pais' => 'Estados Unidos',
                'descripcion' => 'El paraíso para los amantes del cine. Un espectacular complejo donde puedes atravesar la pantalla y vivir en primera persona atracciones basadas en las películas y series más famosas de Hollywood.',
                'imagen_url' => 'img/lugares/universal.jpg',
                'tipo' => 'parque'
            ],
            [
                'nombre' => 'Isla Mágica',
                'pais' => 'España',
                'descripcion' => 'Un parque temático situado en Sevilla y ambientado en el descubrimiento de América durante el siglo XVI. Ofrece refrescantes atracciones de agua, espectáculos piratas y una atmósfera histórica única.',
                'imagen_url' => 'img/lugares/islaMagica.jpg',
                'tipo' => 'parque'
            ],
            [
                'nombre' => 'Siam Park',
                'pais' => 'España',
                'descripcion' => 'Ubicado en Tenerife, ha sido galardonado repetidas veces como el mejor parque acuático del mundo. Destaca por su exuberante arquitectura tailandesa, piscinas de olas gigantes y vertiginosos toboganes.',
                'imagen_url' => 'img/lugares/siam-park.jpeg',
                'tipo' => 'parque'
            ],
            [
                'nombre' => 'Terra Mítica',
                'pais' => 'España',
                'descripcion' => 'Parque situado en Benidorm que te invita a descubrir las antiguas civilizaciones del Mediterráneo. Atracciones épicas y grandes espectáculos repartidos en áreas inspiradas en Egipto, Grecia y Roma.',
                'imagen_url' => 'img/lugares/terra_mitica.webp',
                'tipo' => 'parque'
            ],
            [
                'nombre' => 'Super Nintendo World',
                'pais' => 'Japón',
                'descripcion' => 'Un área temática inmersiva e interactiva donde los videojuegos de Mario Bros se vuelven realidad. Podrás golpear bloques de monedas, recorrer el castillo de Bowser y competir en una carrera de Mario Kart en la vida real.',
                'imagen_url' => 'img/lugares/nintendo.webp',
                'tipo' => 'parque'
            ]

        ];
        foreach ($lugares as $lugar) {
            Lugar::create($lugar);
        }
    }
}
