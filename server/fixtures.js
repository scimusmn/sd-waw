/**
 * Fixture data
 *
 * This sets up the Mongo DB database
 */
dimsum.configure({ flavor: 'jabberwocky' });

/**
 * Setup default content
 */

/**
 * TODO - Remove this in production
 *
 * This erases the database on each Meteor reload.
 *
 * This makes it easier to edit content in the fixture
 */
Components.remove({});
Pages.remove({});

if (Components.find().count() === 0) {

    /**
     **************************************************************************
     * Wetlands
     **************************************************************************
     */
    var wetlands = Components.insert({
        colorPalate: 'wetlands',
        link: 'wetlands',
        title: 'Los Peñasquitos Lagoon',
        titleEsp: 'Laguna de Los Peñasquitos',
        description: 'Los Peñasquitos Marsh Natural Preserve and Lagoon is a coastal marsh in San Diego County',
        componentNum: '0316',
        order: 1,
        mural: 'wet-mural.jpg',
    });

    Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        link: 'where-is-it',
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        order: 1,
        bodyCopy: 'Los Peñasquitos Lagoon, the setting for the scene in front of you, is just 18 miles from the Museum.',
        espBodyCopy: 'La Laguna de Los Peñasquitos, el marco de la escena delante de ti, está apenas a dieciocho millas del Museo.',
        backgroundMapClass: 'map-wet-where',
        bodyImages: [
            {fileName: 'wet-where.jpg'},
        ],
    });

    Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        link: 'our-wetlands',
        buttonTitle: 'Our wetlands',
        espButtonTitle: 'Nuestras marismas',
        order: 2,
        bodyCopy: 'Southern California has 28 wetlands that line the coast from Santa Barbara south to Mexico.',
        bodyCopyLayout: 'horizontal',
        espBodyCopy: 'El sur de California tiene veintiocho marismas que bordean la costa desde Santa Bárbara hasta México en el sur.',
        backgroundMapClass: 'map-wet-wetlands',
        markers: [
            {order: 1, label: 'Tijuana Estuary', dotLeft: '830', dotTop: '506', arrowLeft: '1055', arrowTop: '536'},
            {order: 2, label: 'Sweetwater Marsh', dotLeft: '976', dotTop: '502', arrowLeft: '1052', arrowTop: '523'},
            {order: 3, label: 'Mission Bay Marsh', dotLeft: '916', dotTop: '464', arrowLeft: '1027', arrowTop: '491'},
            {order: 4, label: 'Los Penasquitos Lagoon', dotLeft: '849', dotTop: '448', arrowLeft: '1023', arrowTop: '452'},
            {order: 5, label: 'Test', dotLeft: '527', dotTop: '183', arrowLeft: '541', arrowTop: '146'},
            {order: 6, label: 'Test', dotLeft: '527', dotTop: '183', arrowLeft: '541', arrowTop: '146'},
            {order: 7, label: 'Test', dotLeft: '527', dotTop: '183', arrowLeft: '541', arrowTop: '146'},
            {order: 8, label: 'Test', dotLeft: '527', dotTop: '183', arrowLeft: '541', arrowTop: '146'},
            {order: 9, label: 'Test', dotLeft: '527', dotTop: '183', arrowLeft: '541', arrowTop: '146'},
            {order: 10, label: 'Test', dotLeft: '527', dotTop: '183', arrowLeft: '541', arrowTop: '146'},
            {order: 11, label: 'Santa Margarita River', dotLeft: '816', dotTop: '369', arrowLeft: '976', arrowTop: '355'},
            {order: 12, label: 'Las Flores Marsh', dotLeft: '882', dotTop: '339', arrowLeft: '950', arrowTop: '329'},
            {order: 13, label: 'San Mateo Marsh', dotLeft: '886', dotTop: '309', arrowLeft: '924', arrowTop: '309'},
            {order: 14, label: 'Upper Newport Bay', dotLeft: '838', dotTop: '296', arrowLeft: '863', arrowTop: '260'},
            {order: 15, label: 'Bolsa Chica Bay', dotLeft: '789', dotTop: '320', arrowLeft: '837', arrowTop: '233'},
            {order: 16, label: 'Anaheim Bay', dotLeft: '768', dotTop: '277', arrowLeft: '808', arrowTop: '227'},
            {order: 17, label: 'Alamitos bay', dotLeft: '724', dotTop: '263', arrowLeft: '795', arrowTop: '228'},
            {order: 18, label: 'Ballona Wetlands', dotLeft: '729', dotTop: '209', arrowLeft: '753', arrowTop: '170'},
            {order: 19, label: 'Malibu Creek', dotLeft: '682', dotTop: '193', arrowLeft: '699', arrowTop: '152'},
            {order: 20, label: 'Mugu Lagoon', dotLeft: '596', dotTop: '183', arrowLeft: '604', arrowTop: '134'},
            {order: 21, label: 'McGrath Lake', dotLeft: '558', dotTop: '160', arrowLeft: '569', arrowTop: '98'},
            {order: 22, label: 'Santa Clara River', dotLeft: '515', dotTop: '158', arrowLeft: '567', arrowTop: '90'},
            {order: 23, label: 'Ventura River', dotLeft: '517', dotTop: '112', arrowLeft: '556', arrowTop: '86'},
            {order: 24, label: 'Capinteria Salt Marsh', dotLeft: '473', dotTop: '94', arrowLeft: '508', arrowTop: '53'},
            {order: 25, label: 'Goleta Slough', dotLeft: '426', dotTop: '84', arrowLeft: '441', arrowTop: '46'},
            {order: 26, label: 'Deveraux Lagoon', dotLeft: '374', dotTop: '80', arrowLeft: '429', arrowTop: '46'},
        ],
    });

    Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        link: 'then-now',
        buttonTitle: 'Then and Now',
        espButtonTitle: 'En aquel entonces y hoy en día',
        order: 3,
        bodyCopy: '<p>More than 90% of southern California’s wetland habitat has disappeared due to continuing real estate development.</p><p>Compare these maps to see how much habitat has been lost.</p>',
        espBodyCopy: '<p>Más del noventa por ciento del hábitat de las marismas del sur de California ha desaparecido debido al constante desarrollo urbano.</p><p>Compare estos mapas para ver cuánto hábitat se ha perdido.</p>',
        backgroundMapClass: 'map-wet-then-now',
        bottomImage: 'wet-compare-historic-map.png',
        bottomImageLabel: 'Historic<br>wetlands',
        topImage: 'wet-compare-present-map.png',
        topImageLabel: 'Present day<br>wetlands',
    });

    Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        link: 'pacific-flyway',
        buttonTitle: 'The Pacific Flyway',
        espButtonTitle: 'La ruta migratoria del Pacífico',
        order: 4,
        bodyCopy: '<p>Each year more than a billion birds use the Pacific Flyway–a series of wetlands along North America’s west coast–on the migratory journey between their seasonal northern and southern homes.</p><p>Meet some of the birds that travel the Pacific Flyway.</p>',
        espBodyCopy: '<p>Cada año más de mil millones de pájaros usan la ruta migratoria del Pacífico, una serie de marismas a lo largo de la costa oeste de Norteamérica, durante el viaje migratorio entre sus hogares norteños y sureños según la temporada.</p><p>Conoce a algunos de los pájaros que viajan a lo largo de la ruta migratoria del Pacífico.</p>',
        markers: [
            {
                order: 1,
                label: 'Black-bellied Plovers',
                labelEs: 'Chorlo gris',
                labelLat: 'Pluvialis squatarola',
                dotLeft: '744',
                dotTop: '286',
                arrowLeft: '841',
                arrowTop: '162',
                bodyCopy: 'After nesting in Alaska, Black-bellied Plovers migrate south on the Pacific Flyway to winter in southern California.',
                espBodyCopy: 'Después de anidar en Alaska, el chorlo gris migra hacia el sur por la ruta migratoria del Pacífico para pasar el invierno en el sur de California.'
            },

            {
                order: 2,
                label: 'Western Sandpiper',
                labelEs: 'Playero occidental',
                labelLat: 'Calidris mauri',
                dotLeft: '835',
                dotTop: '429',
                arrowLeft: '1004',
                arrowTop: '254',
                bodyCopy: 'Western Sandpipers endure long journeys between their northern breeding grounds in Alaska and winter homes in the lower 48 states, Mexico, Central and South America.',
                espBodyCopy: 'El playero occidental resiste largos viajes entre su área de apareamiento norteña en Alaska y su hogar del sur en los cuarenta y ocho estados continentales, México, Centroamérica y Sudamérica.'
            },

            {
                order: 3,
                label: 'Marbled Godwit',
                labelEs: 'Picopando canelo',
                labelLat: 'Limosa fedoa',
                dotLeft: '922',
                dotTop: '503',
                arrowLeft: '1060',
                arrowTop: '356',
                bodyCopy: 'Immediately after nesting, Marbled Godwits migrate to the west coast to feed in our wetlands—escaping the cold winter in the northern Great Plains months before it arrives.',
                espBodyCopy: 'Inmediatamente después de anidar, el picopando canelo migra a la costa oeste para buscar alimento en nuestras marismas; de esta manera se escapa meses antes de la llegada del frío invierno en las Grandes Llanuras del norte.'
            }
        ],
        backgroundMapClass: 'map-wet-migration',
    });

    var wetExplore = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        link: 'explore',
        buttonTitle: 'Explore',
        espButtonTitle: 'Explora',
        order: 5,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-explore',
    });

    Pages.insert({
        colorPalate: 'wetlands',
        subPageType: 'explore',
        componentId: wetlands,
        parentId: wetExplore,
        link: 'bolsa-chica',
        buttonTitle: 'Bolsa Chica<br>Ecological Reserve',
        espButtonTitle: 'Reserva Ecológica Bolsa Chica',
        buttonImage: 'wet-explore-bolsa.jpg',
        bodyImages: [
            {fileName: 'wet-explore-bolsa-full.jpg'},
        ],
        order: 1,
        bodyCopy: 'Visit Bolsa Chica Ecological Reserve to experience the largest saltwater wetland in southern California.',
        espBodyCopy: 'Visita la Reserva Ecológica Bolsa Chica para conocer de cerca la marisma de agua salada más grande del sur de California.',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'TBD',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    Pages.insert({
        colorPalate: 'wetlands',
        subPageType: 'explore',
        componentId: wetlands,
        parentId: wetExplore,
        link: 'san-elijo',
        buttonTitle: 'San Elijo Lagoon<br>County Ecological Preserve',
        espButtonTitle: 'Reserva Ecológica Laguna de San Elijo ',
        buttonImage: 'wet-explore-elijo.jpg',
        bodyImages: [
            {fileName: 'wet-explore-elijo-full.jpg'},
        ],
        order: 2,
        bodyCopy: '<p>Glimpse some of the more than 700 plant and animal species that inhabit this county preserve. Bring your binoculars!</p><p>Join the Canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Ven a ver algunas de las más de setecientas especies de plantas y animales que habitan esta reserva del condado. ¡Trae tus largavistas!</p><p>Únete a los Canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-elijo',
    });

    Pages.insert({
        colorPalate: 'wetlands',
        subPageType: 'explore',
        componentId: wetlands,
        parentId: wetExplore,
        link: 'san-dieguito',
        buttonTitle: 'San Dieguito River Park<br>(Coast to Crest Trail – Del Mar)',
        espButtonTitle: 'Parque Río San Dieguito<br>(Sendero Coast to Crest – Del Mar)',
        buttonImage: 'wet-explore-delmar.jpg',
        bodyImages: [
            {fileName: 'wet-explore-delmar-full.jpg'},
        ],
        order: 3,
        bodyCopy: '<p>Hike the western-most section of the Coast to Crest Trail, which will extend 55 miles from the ocean at Del Mar to Volcan Mountain just north of Julian.</p><p>Join the Canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Camina por la parte más occidental del sendero Coast to Crest, el cual se extiende cincuenta y cinco millas desde el océano en Del Mar hasta la montaña Volcan justo al norte de Julian.</p><p>Únete a los Canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-delmar',
    });

    Pages.insert({
        colorPalate: 'wetlands',
        subPageType: 'explore',
        componentId: wetlands,
        parentId: wetExplore,
        link: 'tijuana-river',
        buttonTitle: 'Tijuana River National Estuarine Research Reserve (North Beach Trail)',
        espButtonTitle: 'Reserva Nacional de Investigación Estuarina del Río Tijuana (Sendero North Beach)',
        buttonImage: 'wet-explore-northbeach.jpg',
        bodyImages: [
            {fileName: 'wet-explore-northbeach-full.jpg'},
        ],
        order: 3,
        bodyCopy: '<p>Enjoy the ocean breeze and hike alongside one of the few remaining coastal wetlands in southern California.</p><p>Join the Canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Disfruta de la brisa marina y camina a lo largo de uno de los pocos estuarios costeros que quedan en el sur de California.</p><p>Únete a los Canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-northbeach',
    });

    var wetScienceStories = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        link: 'science',
        buttonTitle: 'Science spotlight',
        espButtonTitle: 'Enfoque científico',
        order: 6,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-stories',
    });

    Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetScienceStories,
        link: 'jon-rebman',
        subPageType: 'science',
        buttonTitle: 'Jon Rebman<br>Curator of botany',
        espButtonTitle: 'Curador de botánica ',
        buttonImage: 'sci-rebman-jon-button.jpg',
        bodyImages: [
            {fileName: 'sci-rebman-jon-full.jpg', imageCredit: '', imageCaption: '' },
        ],
        order: 1,
        bodyCopy: '"If you come across a plant in a saltwater marsh that looks like yellow-orange silly string, you’re actually looking at Saltmarsh Dodder. This plant can’t produce its own nutrients, so it sucks food and water from the plant tangled in its grasp. There are 10 kinds of dodder in San Diego County."',
        espBodyCopy: '"Si te encuentras con una planta en una marisma de agua salada que se asemeja a la serpentina en aerosol amarillo-naranja, estás en realidad viendo a la tripa de aura.  Esta planta no puede producir sus propios nutrientes, por lo que succiona el alimento y agua de la planta a la cual se enreda. Hay diez tipos de tripa de aura en el condado de San Diego".',
        backgroundMapClass: 'sci-wet-marsh',
        backgroundCaption: 'Saltmarsh Dodder',
        backgroundCaptionEsp: 'Tripa de aura',
        backgroundCaptionLatin: 'Cuscuta pacifica'
    });

    Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetScienceStories,
        subPageType: 'science',
        link: 'phil-unitt',
        buttonTitle: 'Phil Unitt<br>curator of birds and mammals',
        espButtonTitle: 'curador de pájaros y mamíferos ',
        buttonImage: 'sci-unitt-phill-button.jpg',
        bodyImages: [
            {fileName: 'sci-unitt-phill-full.jpg', imageCredit: '', imageCaption: '' },
        ],
        order: 2,
        bodyCopy: '"The Marsh Wren is well named, since it’s rarely seen outside a marsh. Each male builds multiple nests—woven around tules or cattails—possibly to help advertise his territory. The female selects one nest, or builds her own, before laying her eggs. The subspecies clarkae appears only in coastal southern California."',
        espBodyCopy: '"El chivirín pantanero está aptamente nombrado, ya que pocas veces se lo ve fuera de un pantano. Cada macho construye múltiples nidos, tejidos alrededor de juncos o totoras, posiblemente para ayudarle a demarcar su territorio. La hembra elige un nido, o construye el suyo propio, antes de poner sus huevos.  La subespecie clarkae aparece únicamente en la costa del sur de California".',
        backgroundMapClass: 'sci-wet-wren',
        backgroundCaption: 'Marsh Wren',
        backgroundCaptionEsp: 'Chivirín pantanero',
        backgroundCaptionLatin: 'Cistothorus palustris',
    });

    /**
     **************************************************************************
     * Torrey Pines
     **************************************************************************
     */
    var torreyPines = Components.insert({
        colorPalate: 'torrey-pines',
        link: 'torrey-pines',
        title: 'Torrey Pines',
        titleEsp: 'Torrey Pines',
        description: 'The Torrey Pine is a rare tree. This WAW explores its natural environment.',
        componentNum: '0416',
        order: 2,
        mural: 'tp-mural.jpg',
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        componentId: torreyPines,
        link: 'where-is-it',
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        order: 1,
        bodyCopy: 'Torrey Pines State Natural Reserve, the setting for the scene in front of you, is just 18 miles from the Museum.',
        espBodyCopy: 'La Reserva Natural Estatal de Torrey Pines, el marco de la escena delante de ti, está apenas a 18 millas del Museo.',
        backgroundMapClass: 'map-tp-park',
        bodyImages: [
            {fileName: 'tp-where.jpg'},
        ],
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'rare-tree',
        componentId: torreyPines,
        buttonTitle: 'Rare tree',
        espButtonTitle: 'Árbol inusual',
        order: 2,
        bodyCopy: '<p>The Torrey Pine is found in only two places: Torrey Pines State Natural Reserve and Santa Rosa Island.</p><p>There are two distinct varieties of Torrey Pine, each only existing in one location. That makes this tree in coastal San Diego even more unique.</p>',
        espBodyCopy: '<p>El pino Torrey se encuentra en sólo dos lugares:  La Reserva Natural Estatal de Torrey Pines y en la Isla de Santa Rosa.</p><p>Hay dos variedades distintas de pinos Torrey; cada una existe en un solo lugar, lo cual hace que este árbol de la costa de San Diego sea aun más especial.</p>',
        backgroundMapClass: 'map-tp-extent',
        bodyImages: [
            {fileName: 'tp-tree-rare.jpg', imageCredit: '' },
        ],
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'rare-habitat',
        componentId: torreyPines,
        buttonTitle: 'Rare habitat',
        espButtonTitle: 'Hábitat inusual',
        order: 3,
        bodyCopy: '<p>Torrey Pines State Natural Reserve is one<br>of the last places where you can see coastal<br>sage scrub habitat.</p><p>Coastal sage scrub plants are usually<br>soft-leaved and fragrant. You will often<br>find California Sagebrush and<br>Coast Prickly-pear here.</p>',
        espBodyCopy: '<p>La Reserva Natural Estatal de Torrey Pines es<br>uno de los últimos lugares que quedan donde puedes ver el hábitat del matorral costero de salvia.</p><p>Las plantas del matorral costero de salvia son generalmente de hojas suaves y aromáticas. Frecuentemente puedes encontrar aquí<br>el chamizo y el nopal.</p>',
        backgroundMapClass: 'map-tp-floristic',
        bodyImages: [
            {fileName: 'tp-habitat-sagebrush.png', imageCredit: '', imageCaption: 'California Sagebrush', imageCaptionEsp: 'Chamizo', imageCaptionLatin: 'Artemisia californica'},
            {fileName: 'tp-habitat-cactus.png', imageCredit: '', imageCaption: 'Coast Prickly-pear', imageCaptionEsp: 'Nopal', imageCaptionLatin: 'Opuntia littoralis'}
        ],
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'rare-climate',
        componentId: torreyPines,
        buttonTitle: 'Rare climate zone',
        espButtonTitle: 'Zona climática inusual',
        order: 4,
        bodyCopyLayout: 'horizontal',
        bodyCopy: '<p>Coastal California is one of only five places in the world<br>known as a Mediterranean climate zone.</p><p>Coastal sage scrub plants are specially adapted for the<br>mild winters and long, dry summers typical of these climate zones. </p>',
        espBodyCopy: '<p>La costa de California es uno de sólo cinco lugares en el mundo que<br>tiene lo que se conoce como zona de clima Mediterráneo.</p><p>Las plantas del matorral costero de salvia están adaptadas<br>especialmente para los inviernos templados y veranos largos y secos,<br>típicos de estas zonas climáticas.</p>',
        backgroundMapClass: 'map-tp-med',
    });

    var tpExplore = Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'explore',
        componentId: torreyPines,
        buttonTitle: 'Explore',
        espButtonTitle: 'Explora',
        order: 5,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-explore',
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'explore',
        link: 'torrey-pines-reserve',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Torrey Pines<br>State Natural Reserve',
        espButtonTitle: 'Reserva Natural<br>Estatal de Torrey Pines',
        buttonImage: 'tp-explore-reserve.jpg',
        bodyImages: [
            {fileName: 'tp-explore-reserve-full.jpg', imageCredit: '', imageCaption: 'Torrey Pines State Natural Reserve', imageCaptionEsp: 'Reserva Natural Estatal de Torrey Pines' },
        ],
        order: 1,
        bodyCopy: 'Visit Torrey Pines State Natural Reserve—one of the last places where you can find coastal sage scrub habitat, which is disappearing due to real estate development.',
        espBodyCopy: 'Visita la Reserva Natural Estatal de Torrey Pines—uno de los últimos lugares donde puedes encontrar un hábitat de matorral costero de salvia, un ambiente que está desapareciendo a causa de la construcción edilicia. ',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'parks.ca.gov',
        backgroundMapClass: 'map-tp-explore-tp',
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'explore',
        link: 'crest-canyon',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Crest Canyon<br>Open Space Park Preserve',
        espButtonTitle: 'Reserva de Espacio<br>Abierto Crest Canyon',
        buttonImage: 'tp-explore-crest.jpg',
        bodyImages: [
            {fileName: 'tp-explore-crest-full.jpg', imageCredit: '', imageCaption: 'Crest Canyon Open Space Park Preserve', imageCaptionEsp: 'Reserva de Espacio Abierto Crest Canyon' },
        ],
        order: 2,
        bodyCopy: '<p>Stroll through this coastal canyon, south of San Dieguito Lagoon, and you’ll behold a tapestry of native and non-native plants.</p><p>Join the Canyoneers for this and other guided hikes in southern California.</p>',
        espBodyCopy: '<p>Pasea por este cañón costero al sur de la Laguna de San Dieguito, y podrás contemplar la rica complejidad de plantas nativas y no-nativas.</p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-tp-explore-crest',
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'explore',
        link: 'cabrillo',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Cabrillo National Monument<br>(Bayside Trail)',
        espButtonTitle: 'Monumento Nacional Cabrillo<br>(Sendero Bayside)',
        buttonImage: 'tp-explore-bayside.jpg',
        bodyImages: [
            {fileName: 'tp-explore-bayside-full.jpg', imageCredit: '', imageCaption: 'Cabrillo National Monument (Bayside Trail)', imageCaptionEsp: 'Monumento Nacional Cabrillo (Sendero Bayside)' },
        ],
        order: 3,
        bodyCopy: '<p>Encounter windswept chaparral and coastal sage scrub clinging to the cliffs that overlook San Diego harbor.</p><p>Join the Canyoneers for this and other guided hikes in southern California.</p>',
        espBodyCopy: '<p>Descubre el chaparral y  matorral costero de salvia barridos por el viento, aferrándose a los acantilados que miran hacia la bahía de San Diego.</p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-tp-explore-bayside',
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'explore',
        link: 'black-mountain',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Black Mountain Open Space Park<br>(Miner’s Loop)',
        espButtonTitle: 'Parque de Espacio Abierto<br>Black Mountain (Miner’s Loop)',
        buttonImage: 'tp-explore-miners.jpg',
        bodyImages: [
            {fileName: 'tp-explore-miners-full.jpg', imageCredit: '', imageCaption: 'Black Mountain Open Space Park (Miner’s Loop)', imageCaptionEsp: 'Parque de Espacio Abierto Black Mountain (Miner’s Loop)' },
        ],
        order: 4,
        bodyCopy: '<p>Hike through coastal sage scrub and chaparral and see the remains of an old arsenic mine. If you’re lucky, you might spot a quail!</p><p>Join the Canyoneers for this and other guided hikes in southern California.</p>',
        espBodyCopy: '<p>Sal de caminata atravesando el matorral costero de salvia y el chaparral para ver los restos de una vieja mina de arsénico.  Si tienes suerte, ¡quizás llegues a ver una codorniz!</p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-tp-explore-miners',
    });

    var tpScienceStories = Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'science',
        componentId: torreyPines,
        buttonTitle: 'Science spotlight',
        espButtonTitle: 'Enfoque científico',
        order: 6,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-stories',
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'science',
        link: 'susie-arter',
        componentId: torreyPines,
        parentId: tpScienceStories,
        buttonTitle: 'Susie Arter<br>Co-director of zooarchaeology lab',
        espButtonTitle: 'Co-directora del laboratorio de arqueología zoológica',
        buttonImage: 'sci-arter-susie-button.jpg',
        bodyImages: [
            {fileName: 'sci-arter-susie-full.jpg', imageCredit: '', imageCaption: '' },
        ],
        order: 1,
        bodyCopy: '"Native people came to the<br>area that is now Torrey Pines State Natural Reserve long before Europeans arrived in California. Archaeologists have identified mounds of seafood shells, various stone tools, and numerous fire hearths that may have been used to roast plant foods and remove pine nuts from Torrey Pine cones."',
        espBodyCopy: '"Los habitantes nativos llegaron a lo que es ahora la Reserva Estatal Natural Torrey Pines mucho antes que los europeos llegaran a California.  Los arqueólogos han identificado montículos de conchas marinas, varias herramientas de piedra, y numerosos remanentes de fogatas que quizás<br>se usaron para asar comida y extraer los piñones de las piñas de los Torrey Pines".',
        backgroundMapClass: 'sci-tp-midden',
        backgroundCaption: 'Fire hearth at Torrey Pines State Natural Reserve',
        backgroundCaptionEsp: 'Fogata en la Reserva Estatal Natural Torrey Pines',
    });

    Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'science',
        link: 'jon-rebman',
        componentId: torreyPines,
        parentId: tpScienceStories,
        buttonTitle: 'Jon Rebman<br>Curator of botany',
        espButtonTitle: 'Curador de botánica',
        buttonImage: 'sci-rebman-jon-button.jpg',
        bodyImages: [
            {fileName: 'sci-rebman-jon-full.jpg', imageCredit: '', imageCaption: '' },
        ],
        order: 2,
        bodyCopy: '"Some people might call the Coast Prickly-pear the ‘Venus flytrap of the West.’ But instead of eating the bugs that land on it, the flower surrounds the bugs with its pollen-covered stamens so that the insects can transport more pollen to other flowers and help the plant reproduce."',
        espBodyCopy: '“Algunos quizás se refieran a la flor del nopal como la ‘atrapamoscas del oeste’. Pero en vez de comer los insectos que se posan sobre ella, la flor rodea a los insectos con sus estambres cubiertos de polen para que los insectos puedan transportar más polen a otras flores y ayudar a que la planta se reproduzca”.',
        backgroundMapClass: 'sci-tp-flower',
        backgroundCaption: 'Prickly-pear',
        backgroundCaptionEsp: 'Nopal',
        backgroundCaptionLatin: 'Opuntia'
    });

    /**
     **************************************************************************
     * Canyons
     **************************************************************************
     */
    var canyons = Components.insert({
        colorPalate: 'canyons',
        link: 'canyons',
        title: 'The Canyons ',
        titleEsp: 'Los cañones',
        description: dimsum.sentence(1),
        componentNum: '0516',
        order: 3,
        mural: 'can-mural.jpg'
    });

    Pages.insert({
        colorPalate: 'canyons',
        componentId: canyons,
        link: 'where-is-it',
        buttonTitle: 'Where are they?',
        espButtonTitle: '¿Dónde están?',
        order: 1,
        bodyCopy: 'Canyons are all around us. In fact, there’s one just a black from the Museum—Florida Canyon.',
        espBodyCopy: 'Los cañones nos rodean por todas partes. De hecho, hay uno apenas a una cuadra del museo—Florida Canyon.',
        backgroundMapClass: 'map-can-where',
        bodyImages: [
            {fileName: 'can-where.jpg'},
        ],
    });

    Pages.insert({
        colorPalate: 'canyons',
        componentId: canyons,
        link: 'our-canyons',
        buttonTitle: 'Our canyons',
        espButtonTitle: 'Nuestros cañones',
        order: 2,
        bodyCopy: '<p>More than 150 canyons can be found in the urban areas of San Diego County. A canyon habitat might be a mixture of coastal sage scrub and chaparral, or a creekbed with water-dependent plants, or even a sycamore grove.<p><p>These diverse habitats support a variety of plants and animals that live in and move through the canyons of San Diego County.</p>',
        espBodyCopy: '<p>Se pueden encontrar más de 150 cañones en las áreas urbanas del condado de San Diego. Un hábitat de cañón podría ser una mezcla de matorral costero de salvia, arbustos y chaparral, o un cañadón con plantas que dependen de corrientes de agua, o incluso una arboleda de sicómoros.</p>',
        backgroundMapClass: 'map-can-our',
    });

    Pages.insert({
        colorPalate: 'canyons',
        componentId: canyons,
        link: 'wildlife',
        buttonTitle: 'Wildlife corridors',
        espButtonTitle: 'Corredores de vida silvestre',
        order: 4,
        bodyCopy: '<p>Despite extensive real estate development in southern California, natural habitat still exists. Canyons and other undeveloped areas are known as wildlife corridors—passageways that enable animals to move between larger pieces of wilderness. <p>',
        espBodyCopy: '<p>A pesar del vasto desarrollo de edificaciones en el sur de California, el hábitat natural aún existe. Los cañones y otras áreas sin desarrollo urbano se conocen como corredores de vida silvestre—vías de paso que permiten a los animales desplazarse entre porciones más grandes de territorios naturales.</p>',
        backgroundMapClass: 'map-can-our',
    });

    var canExplore = Pages.insert({
        colorPalate: 'canyons',
        componentId: canyons,
        link: 'explore',
        buttonTitle: 'Explore',
        espButtonTitle: 'Explora',
        order: 3,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-explore',
    });

    Pages.insert({
        colorPalate: 'canyons',
        subPageType: 'explore',
        componentId: canyons,
        parentId: canExplore,
        link: 'placerita',
        buttonTitle: 'Placerita Canyon<br>State Park',
        espButtonTitle: 'Parque Estatal<br>Placerita Canyon',
        buttonImage: 'can-explore-placerita.jpg',
        bodyImages: [
            {fileName: 'can-explore-placerita-full.jpg'},
        ],
        order: 1,
        bodyCopy: 'Visit Placerita Canyon State Park to experience a range of habitats in one area—from cool, oak woodlands to dense, chaparral-covered hillsides.',
        espBodyCopy: 'Visita el Parque Estatal Placerita Canyon para experimentar una variedad de hábitats en una sola área—desde frescos bosques de robles hasta laderas densamente cubiertas de chaparral.',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'TBD',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    Pages.insert({
        colorPalate: 'canyons',
        subPageType: 'explore',
        componentId: canyons,
        parentId: canExplore,
        link: 'gonzales',
        buttonTitle: 'Torrey Pines State Natural Reserve<br>(Gonzales Canyon – Torrey Pines Loop)',
        espButtonTitle: 'Reserva Estatal Natural Torrey Pines<br>(Gonzalez Canyon – Circuito Torrey Pines)',
        buttonImage: 'can-explore-gonzales.jpg',
        bodyImages: [
            {fileName: 'can-explore-gonzales-full.jpg'},
        ],
        order: 2,
        bodyCopy: '<p>Explore a canyon filled with various aromatic plants including the native California Sagebrush and the non-native Fennel.</p><p>Join the Canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Explora un cañón lleno de varias plantas aromáticas, incluyendo el nativo matorral de salvia y el hinojo no-nativo.</p><p>Únete a los Canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    Pages.insert({
        colorPalate: 'canyons',
        subPageType: 'explore',
        componentId: canyons,
        parentId: canExplore,
        link: 'lopez',
        buttonTitle: 'Los Peñasquitos Canyon Preserve<br>(Lopez Canyon)',
        espButtonTitle: 'Reserva Los Peñasquitos Canyon<br>(Lopez Canyon)',
        buttonImage: 'can-explore-lopez.jpg',
        bodyImages: [
            {fileName: 'can-explore-lopez-full.jpg'},
        ],
        order: 3,
        bodyCopy: '<p>Walk past magnificent sycamores to an old creek bed, where you’ll encounter a variety of chaparral and coastal sage scrub plants.</p><p>Join the Canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Camina bordeando magníficos sicómoros hasta un viejo lecho de riachuelo, donde encontrarás una variedad de plantas de chaparral y arbustos de salvia costera. </p><p>Únete a los Canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    Pages.insert({
        colorPalate: 'canyons',
        subPageType: 'explore',
        componentId: canyons,
        parentId: canExplore,
        link: 'florida',
        buttonTitle: 'Florida Canyon',
        espButtonTitle: 'Florida Canyon',
        buttonImage: 'can-explore-florida.jpg',
        bodyImages: [
            {fileName: 'can-explore-florida-full.jpg'},
        ],
        order: 4,
        bodyCopy: '<p>Experience an urban wilderness, just steps away from the Museum, as you descend into a canyon filled with native and non-native plants and critters!</p><p>Join the Canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>¡Experimenta un área natural urbana, a sólo pasos del Museo, al descender a un cañón lleno de criaturas y plantas nativas y no-nativas!</p><p>Únete a los Canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    var canScienceStories = Pages.insert({
        colorPalate: 'canyons',
        link: 'science',
        componentId: canyons,
        buttonTitle: 'Science spotlight',
        espButtonTitle: 'Enfoque científico',
        order: 5,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-stories',
    });

    Pages.insert({
        colorPalate: 'canyons',
        subPageType: 'science',
        link: 'michael-wall',
        componentId: canyons,
        parentId: canScienceStories,
        buttonTitle: 'Michael Wall<br>Vice president of research and public programs',
        espButtonTitle: 'Vice presidente de investigaciones y programas públicos',
        buttonImage: 'sci-wall-michael-button.jpg',
        bodyImages: [
            {fileName: 'sci-wall-michael-full.jpg'},
        ],
        order: 1,
        bodyCopy: '"I always dig seeing Valley Carpenter Bees around my house. The males are large, golden in color, and like to hang out around dead wood where the females make nests. The females are black. Most people wouldn’t think that the male and female belong to the same species."',
        espBodyCopy: '"Siempre me da gusto ver la abeja carpintera alrededor de mi casa. Los machos son grandes, de color dorado, y les gusta pasar el tiempo alrededor de la madera muerta donde las hembras construyen sus nidos. Las hembras son negras. La mayoría de la gente no pensaría que el macho y la hembra pertenecen a la misma especie".',
        backgroundMapClass: 'sci-can-bees',
        backgroundCaption: 'Valley Carpenter Bee',
        backgroundCaptionEsp: 'Abeja carpintera',
        backgroundCaptionLatin: 'Xylocopa varipuncta'
    });

    Pages.insert({
        colorPalate: 'canyons',
        subPageType: 'science',
        link: 'scott-tremor',
        componentId: canyons,
        parentId: canScienceStories,
        buttonTitle: 'Scott Tremor<br>Mammalogist',
        espButtonTitle: 'Especialista en mamíferos',
        buttonImage: 'sci-tremor-scott-button.jpg',
        bodyImages: [
            {fileName: 'sci-tremor-scott-full.jpg'},
        ],
        order: 2,
        bodyCopy: '"The Long-tailed Weasel is common in southern California canyons but is rarely seen. This stealthy predator enters the maze of burrows created by Pocket Gophers and California Ground Squirrels. There, the weasel captures and devours gophers, mice, rats, squirrels, and rabbits."',
        espBodyCopy: '"La comadreja es común en los cañones del sur de California pero raras veces se la ve.  Este predador sigiloso ingresa al laberinto de madrigueras creado por las tuzas y el ardillón de California.  Allí, la comadreja de cola larga captura y devora tuzas, ratones, ratas, ardillas y conejos".',
        backgroundMapClass: 'sci-can-weasel',
        backgroundCaption: 'Long-tailed Weasel',
        backgroundCaptionEsp: 'Comadreja',
        backgroundCaptionLatin: 'Mustela frenata'
    });

    /**
     **************************************************************************
     * Mountains
     **************************************************************************
     */
    var mountains = Components.insert({
        colorPalate: 'mountains',
        link: 'mountains',
        title: 'The Cuyamaca Mountains',
        titleEsp: 'Las montañas Cuyamaca',
        description: dimsum.sentence(1),
        componentNum: '0816',
        order: 7,
        mural: 'mtn-mural.jpg'
    });

    Pages.insert({
        colorPalate: 'mountains',
        componentId: mountains,
        link: 'where-is-it',
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        order: 1,
        bodyCopy: 'The Cuyamaca Mountains, the setting for the scene in front of you, are just 50 miles from the Museum',
        espBodyCopy: 'Las montañas Cuyamaca, el marco de la escena delante de ti, están apenas a 50 millas del  Museo. ',
        backgroundMapClass: 'map-mtn-where',
        bodyImages: [
            {fileName: 'mtn-where.jpg'},
        ],
    });

    Pages.insert({
        colorPalate: 'mountains',
        componentId: mountains,
        link: 'our-mountains',
        buttonTitle: 'Our mountains',
        espButtonTitle: 'Nuestras montañas',
        order: 2,
        bodyCopy: 'Southern California has several hundred mountain peaks, including San Gorgonio Mountain, which rises to 11,503 feet.',
        espBodyCopy: 'El sur de California tiene varios centenares de cumbres, incluyendo la montaña San Gorgonio, que tiene una elevación de 11.503 pies.',
        backgroundMapClass: 'map-mtn-our',
    });

    Pages.insert({
        colorPalate: 'mountains',
        componentId: mountains,
        link: 'rare-habitat',
        buttonTitle: 'Rare habitat',
        espButtonTitle: 'Hábitat inusual',
        order: 4,
        bodyCopy: '<p>Our highest mountain peaks—the coolest and wettest areas of southern California—are home to some of the last conifer forests in the region.</p><p>Move the slider to compare southern California elevations to conifer forest locations.</p>',
        espBodyCopy: '<p>Nuestras cumbres más elevadas—las zonas más frescas y húmedas del sur de California—albergan algunos de los últimos bosques de coníferas en la región.</p><p>TBD</p>',
        backgroundMapClass: 'map-wet-then-now',
        bottomImage: 'mtn-compare-elevation-01.png',
        bottomImageLabel: 'Low elevation',
        topImage: 'mtn-compare-elevation-02.png',
        topImageLabel: 'High elevation',
    });

    var mtnExplore = Pages.insert({
        colorPalate: 'mountains',
        componentId: mountains,
        link: 'explore',
        buttonTitle: 'Explore',
        espButtonTitle: 'Explora',
        order: 3,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-explore',
    });

    Pages.insert({
        colorPalate: 'mountains',
        subPageType: 'explore',
        componentId: mountains,
        parentId: mtnExplore,
        link: 'palomar',
        buttonTitle: 'Palomar Mountain State Park',
        espButtonTitle: 'Parque Estatal Palomar Mountain',
        buttonImage: 'mtn-explore-palomar.jpg',
        bodyImages: [
            {fileName: 'mtn-explore-palomar-full.jpg'},
        ],
        order: 1,
        bodyCopy: 'Visit Palomar Mountain State Park and enjoy a panoramic view of southern California that stretches from the ocean to the desert.',
        espBodyCopy: 'Visita al Parque Estatal de la Montaña Palomar y disfruta de una vista panorámica del sur de California que abarca desde el océano hasta el desierto.',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'TBD',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    Pages.insert({
        colorPalate: 'mountains',
        subPageType: 'explore',
        componentId: mountains,
        parentId: mtnExplore,
        link: 'stonewall',
        buttonTitle: 'Cuyamaca Rancho State Park (Stonewall Peak)',
        espButtonTitle: 'Parque Estatal Cuyamaca Rancho (Pico Stonewall)',
        buttonImage: 'mtn-explore-stonewall.jpg',
        bodyImages: [
            {fileName: 'mtn-explore-stonewall-full.jpg'},
        ],
        order: 2,
        bodyCopy: '<p>Climb a switchback trail to Stonewall Peak at 5,730 feet and enjoy views of Lake Cuyamaca and nearby peaks.</p><p>Join the canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Sube por un sendero zigzagueante hasta la Cima de Stonewall a 5.730 pies y disfruta de las vistas del lago Cuyamaca y las cumbres cercanas.</p><p>Únete a los canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    Pages.insert({
        colorPalate: 'mountains',
        subPageType: 'explore',
        componentId: mountains,
        parentId: mtnExplore,
        link: 'volcan',
        buttonTitle: 'Volcan Mountain Wilderness Preserve',
        espButtonTitle: 'Reserva Silvestre Volcan Mountain',
        buttonImage: 'mtn-explore-volcan.jpg',
        bodyImages: [
            {fileName: 'mtn-explore-volcan-full.jpg'},
        ],
        order: 3,
        bodyCopy: '<p>Hike alongside beds of wildflowers and under the shade of giant oak trees straight to Volcan Peak for a view of the entire preserve. </p><p>Join the canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Camina a lo largo de campos de flores silvestres y bajo la sombra de robles gigantes hasta llegar a Volcan Peak para disfrutar de una vista que abarca toda la reserva.</p><p>Únete a los canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    Pages.insert({
        colorPalate: 'mountains',
        subPageType: 'explore',
        componentId: mountains,
        parentId: mtnExplore,
        link: 'thunder',
        buttonTitle: 'Palomar Mountain State Park (Thunder Spring/Chimney Flats)',
        espButtonTitle: 'Parque Estatal de la Montaña Palomar (Thunder Spring/Chimney Flats)',
        buttonImage: 'mtn-explore-thunder.jpg',
        bodyImages: [
            {fileName: 'mtn-explore-thunder-full.jpg'},
        ],
        order: 4,
        bodyCopy: '<p>Enjoy a picturesque trail up to Thunder Spring while hiking through oak and conifer forests. It gets a little steep, but the view is worth the climb!</p><p>Join the canyoneers for guided hikes in southern California.</p>',
        espBodyCopy: '<p>Disfruta de un sendero pintoresco hasta alcanzar Thunder Spring mientras caminas por los bosques de robles y coníferas. Se torna un poco empinado, ¡pero la vista hace que la subida valga la pena!</p><p>Únete a los canyoneers para caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    var mtnScienceStories = Pages.insert({
        colorPalate: 'mountains',
        link: 'science',
        componentId: mountains,
        buttonTitle: 'Science spotlight',
        espButtonTitle: 'Enfoque científico',
        order: 5,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-stories',
    });

    Pages.insert({
        colorPalate: 'mountains',
        subPageType: 'science',
        link: 'lori-hargrove',
        componentId: mountains,
        parentId: mtnScienceStories,
        buttonTitle: 'Lori Hargrove<br>Ecologist',
        espButtonTitle: 'Ecologista',
        buttonImage: 'sci-hargrove-lori-button.jpg',
        bodyImages: [
            {fileName: 'sci-hargrove-lori-full.jpg'},
        ],
        order: 1,
        bodyCopy: '"The White-headed Woodpecker is found only in the pine forests of western North America, from Canada south to Cuyamaca Rancho State Park in San Diego County. The Cedar Fire in 2003, which burned 95 percent of the park, destroyed this species\' southernmost habitat."',
        espBodyCopy: '"El carpintero cabeza blanca se encuentra únicamente en los bosques de pinos en el oeste de Norteamérica, desde Canadá hacia el sur en el Parque Estatal Cuyamaca Rancho en el condado de San Diego. El incendio Cedar en 2003, que quemó el noventa y cinco por ciento del parque, destruyó el hábitat más sureño de esta especie".',
        backgroundMapClass: 'sci-mtn-woodpecker',
        backgroundCaption: 'White-headed Woodpecker',
        backgroundCaptionEsp: 'Carpintero cabeza blanca',
        backgroundCaptionLatin: 'Picoides albolarvatus'
    });

    Pages.insert({
        colorPalate: 'mountains',
        subPageType: 'science',
        link: 'jim-berrian',
        componentId: mountains,
        parentId: mtnScienceStories,
        buttonTitle: 'Jim Berrian<br>Entomologist',
        espButtonTitle: 'Entomólogo',
        buttonImage: 'sci-berrian-jim-button.jpg',
        bodyImages: [
            {fileName: 'sci-berrian-jim-full.jpg'},
        ],
        order: 2,
        bodyCopy: '"This native Californian spider was discovered only recently, in 2005. It’s smaller than a grain of rice. This discovery is exciting because it shows that we still have new finds to make right here in our local mountains."',
        espBodyCopy: '"Esta araña nativa de California fue descubierta recién en 2005.  Es más pequeña que un grano de arroz.  Este descubrimiento es fascinante porque demuestra que tenemos nuevas cosas para descubrir aquí mismo en nuestras montañas locales".',
        backgroundMapClass: 'sci-can-spider',
        backgroundCaption: 'Spider',
        backgroundCaptionEsp: 'Araña',
        backgroundCaptionLatin: 'Apostenus californicus'
    });

    /**
     **************************************************************************
     * Streams
     **************************************************************************
     */
    var streams = Components.insert({
        title: 'Streams',
        description: 'Streams general description.',
        componentNum: '0616',
        order: 4,
        bodyCopy: dimsum()
    });

    /**
     **************************************************************************
     * Chaparral
     **************************************************************************
     */
    var chaparral = Components.insert({
        title: 'Chaparral',
        description: 'Chaparral general description.',
        componentNum: '0704',
        order: 5,
        bodyCopy: dimsum()
    });

    /**
     **************************************************************************
     * Oak Tree
     **************************************************************************
     */
    var oakTree = Components.insert({
        title: 'Oak Tree',
        description: 'Oak Tree general description.',
        componentNum: '0813',
        order: 6,
        bodyCopy: dimsum()
    });

    /**
     **************************************************************************
     * Desert
     **************************************************************************
     */
    var desert = Components.insert({
        title: 'Desert',
        description: 'Desert general description.',
        componentNum: '0916',
        order: 8,
        bodyCopy: dimsum()
    });

}
