/**
 * Fixture data
 *
 * This sets up the Mongo DB database
 */
var now = new Date().getTime();
dimsum.configure({ flavor: 'jabberwocky' });

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Setup admin user
 */
if ( Meteor.users.find().count() === 0 ) {
    // Create the admin account
    var adminId = Accounts.createUser({
        username: 'admin',
        email: 'admin@example.com',
        password: 'Password123',
        profile: {
            name: 'SMM Admin',
        }
    });
    // Get the admin account object for use in creating dummy posts
    var admin = Meteor.users.findOne(adminId);
}

/**
 * Setup default content
 */
if (Components.find().count() === 0) {

    i = getRandomInt(0, 10);

    /**
     **************************************************************************
     * Wetlands
     **************************************************************************
     */
    var wetlands = Components.insert({
        colorPalate: 'wetlands',
        link: 'wetlands',
        title: 'Los Peñasquitos Lagoon',
        titleEsp: 'Laguna Los Peñasquitos',
        description: 'Los Peñasquitos Marsh Natural Preserve and Lagoon is a coastal marsh in San Diego County',
        componentNum: '0316',
        order: 1,
        mural: 'wet-mural.jpg',
    });

    var wetWhere = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        link: 'where-is-it',
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        userId: admin._id,
        order: 1,
        author: admin.profile.name,
        bodyCopy: 'Los Peñasquitos Lagoon, the setting for the scene in front of you, is just 18 miles from the Museum. ',
        espBodyCopy: 'Los Peñasquitos Lagoon, the setting for the scene in front of you, is just 18 miles from the Museum.',
        backgroundMapClass: 'map-wet-where',
        bodyImages: [
            {fileName: 'wet-where.jpg', imageCredit: 'TBD - Bill Evarts Photograph, Torrey Pines Landscape and Legacy p.1' },
        ],
    });

    var wetOur = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        colorPalate: 'wetlands',
        buttonTitle: 'Our wetlands',
        espButtonTitle: 'Nuestros humedales',
        userId: admin._id,
        order: 2,
        author: admin.profile.name,
        bodyCopy: 'Southern California has 28 wetlands that line the coast from Santa Barbara south to Mexico.',
        bodyCopyLayout: 'horizontal',
        espBodyCopy: 'Sur de California cuenta con 28 humedales que bordean la costa de Santa Barbara al sur de México.',
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

    var wetThen = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        buttonTitle: 'Then and Now',
        espButtonTitle: 'Antes y ahora',
        userId: admin._id,
        order: 3,
        author: admin.profile.name,
        bodyCopy: '<p>More than 90% of southern California’s wetland habitat has disappeared due to continuing real estate development.</p><p>Drag your finger across this map to compare how much habitat has been lost.</p>',
        espBodyCopy: '<p>Más del 90% del hábitat de los humedales del sur de California ha desaparecido debido al continuo desarrollo de bienes raíces.</p><p>Compare estos mapas para ver cuánto hábitat se ha perdido.</p>',
        backgroundMapClass: 'map-wet-then-now',
        bottomImage: 'wet-map-compare-historic.png',
        bottomImageLabel: 'Historic<br>wetlands',
        topImage: 'wet-map-compare-present.png',
        topImageLabel: 'Present day<br>wetlands',
    });

    var wetFlyway = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        buttonTitle: 'The Pacific Flyway',
        espButtonTitle: 'La ruta del Pacífico',
        userId: admin._id,
        order: 4,
        author: admin.profile.name,
        bodyCopy: '<p>Each year more than a billion birds use the Pacific Flyway–a series of wetlands along North America’s west coast–on the migratory journey between their seasonal northern and southern homes.</p><p>Touch the locations to meet some of the birds that travel the Pacific Flyway</p>',
        espBodyCopy: 'Cada año, más de mil millones de aves utilizan la ruta migratoria del Pacífico-una serie de humedales a lo largo de costa en el oeste de América del Norte el viaje migratorio entre sus hogares del norte y sur de temporada.',
        markers: [
            {
                order: 1, label: 'Black-bellied Plovers', dotLeft: '744', dotTop: '286', arrowLeft: '841', arrowTop: '162',
                bodyCopy: 'After nesting in Alaska, Black-bellied Plovers migrate south on the Pacific Flyway to winter in southern California.',
                espBodyCopy: 'Después de anidar en Alaska, chorlitos vientre negro migran hacia el sur por la ruta del Pacífico para el invierno en el sur de California.'
            },
            {
                order: 2, label: 'Western Sandpiper', dotLeft: '835', dotTop: '429', arrowLeft: '1004', arrowTop: '254',
                bodyCopy: 'Western Sandpipers endure long journeys between their northern breeding grounds in Alaska and winter homes along the coasts of southern California, Mexico, and South America.',
                espBodyCopy: 'Calidris mauri soportar viajes largos entre sus áreas de reproducción del norte de Alaska y casas de invierno a lo largo de las costas del sur de California, México, y América del Sur.'
            },
            {
                order: 3, label: 'Marbled Godwit', dotLeft: '922', dotTop: '503', arrowLeft: '1060', arrowTop: '356',
                bodyCopy: 'Immediately after nesting, Marbled Godwits escape cold winters in the northern Great Plains by migrating to milder climates along the west coast.',
                espBodyCopy: 'Inmediatamente después de anidar, Jaspeado Limosa escapar inviernos fríos en el norte de las Grandes Planicies de migrar a climas más suaves a lo largo de la costa oeste.'
            }
        ],
        backgroundMapClass: 'map-wet-migration',
    });

    var wetExplore = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        buttonTitle: 'Explore',
        espButtonTitle: 'Explorá',
        userId: admin._id,
        order: 5,
        author: admin.profile.name,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-explore',
    });

    var wetExploreBolsa = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetExplore,
        buttonTitle: 'Bolsa Chica<br>Ecological Reserve',
        espButtonTitle: 'Bolsa Chica <br> Reserva Ecológica',
        buttonImage: 'wet-explore-bolsa.jpg',
        bodyImages: [
            {fileName: 'wet-explore-bolsa-full.jpg', imageCredit: 'credit', imageCaption: 'captions' },
        ],
        order: 1,
        bodyCopy: 'Visit Bolsa Chica Ecological Reserve to experience the largest saltwater wetland in southern California. For more information visit [TBD - website link].',
        espBodyCopy: 'Visita la Reserva Ecológica Bolsa Chica para experimentar el mayor humedal de agua salada en el sur de California. Para obtener más información, visite [TBD - enlace al sitio web].',
        backgroundMapClass: 'map-wet-explore-bolsa',
    });

    var wetExploreElijo = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetExplore,
        buttonTitle: 'San Elijo Lagoon<br>County Ecological Preserve',
        espButtonTitle: 'Laguna de San Elijo<br>Condado Reserva Ecológica',
        buttonImage: 'wet-explore-elijo.jpg',
        bodyImages: [
            {fileName: 'wet-explore-elijo-full.jpg', imageCredit: 'credit', imageCaption: 'captions' },
        ],
        order: 2,
        bodyCopy: '<p>Glimpse some of the more than 700 plant and animal species that inhabit this county preserve. Bring your binoculars!</p><p>Join the Canyoneers for guided hikes in southern California. For more information visit [website link].</p>',
        espBodyCopy: '<p> Glimpse algunas de las más de 700 especies de plantas y animales que habitan en este municipio a preservar. Traiga sus binoculares!</p><p>Únete a los cañoneros para caminatas guiadas en el sur de California. Para obtener más información, visite [enlace al sitio web]. </p>',
        backgroundMapClass: 'map-wet-explore-elijo',
    });

    var wetExploreDelMar = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetExplore,
        buttonTitle: 'Coast to Crest Trail – <br>Del Mar, San Dieguito River Park',
        espButtonTitle: 'Costa de Crest Trail - <br> Del Mar, San Dieguito River Park',
        buttonImage: 'wet-explore-delmar.jpg',
        bodyImages: [
            {fileName: 'wet-explore-delmar-full.jpg', imageCredit: 'credit', imageCaption: 'captions' },
        ],
        order: 3,
        bodyCopy: '<p>Hike the western-most section of the Coast to Crest Trail, which will soon extend 55 miles from the ocean at Del Mar to Volcan Mountain just north of Julian.</p><p>Join the Canyoneers for guided hikes in southern California. For more information visit [website link].</p>',
        espBodyCopy: '<p>Camine por el más occidental sección de la costa de Crest Trail, que pronto se extenderá a 55 millas del océano en Del Mar a Volcán Montaña justo al norte de Julian.</p><p>Únete a los cañoneros para caminatas guiadas en el sur de California. Para obtener más información, visite [enlace al sitio web].</p>',
        backgroundMapClass: 'map-wet-explore-delmar',
    });

    var wetExploreNorthBeach = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetExplore,
        buttonTitle: 'North Beach Trail,<br>Tijuana Estuary',
        espButtonTitle: 'North Beach Trail,<br>Estuario de Tijuana',
        buttonImage: 'wet-explore-northbeach.jpg',
        bodyImages: [
            {fileName: 'wet-explore-northbeach-full.jpg', imageCredit: 'credit', imageCaption: 'captions' },
        ],
        order: 3,
        bodyCopy: '<p>Enjoy the ocean breeze and hike alongside one of the few remaining coastal wetlands in southern California.</p><p>Join the Canyoneers for guided hikes in southern California. For more information visit [website link].</p>',
        espBodyCopy: '<p>Disfrute de la brisa del mar y caminar junto a uno de los pocos humedales costeros que quedan en el sur de California.</p><p>Únete a los cañoneros para caminatas guiadas en el sur de California. Para obtener más información, visite [enlace al sitio web].</p>',
        backgroundMapClass: 'map-wet-explore-northbeach',
    });

    var wetScienceStories = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        buttonTitle: 'Science stories',
        espButtonTitle: 'Historias de ciencia',
        userId: admin._id,
        order: 6,
        author: admin.profile.name,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-stories',
    });

    var wetScienceStoriesOne = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetScienceStories,
        buttonTitle: 'Susan on sehll middens',
        espButtonTitle: 'Susan en basureros sehll',
        buttonImage: 'wet-story-01.jpg',
        bodyImages: [
            {fileName: 'wet-story-01-full.jpg', imageCredit: '', imageCaption: '' },
        ],
        order: 1,
        bodyCopy: 'Lorem ipsum',
        espBodyCopy: 'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
        backgroundMapClass: 'map-wet-explore-miners',
    });

    var wetScienceStoriesTwo = Pages.insert({
        colorPalate: 'wetlands',
        componentId: wetlands,
        parentId: wetScienceStories,
        buttonTitle: 'Jon on Short-leaved Dudleya',
        espButtonTitle: 'Jon on-Short hojas Dudleya',
        buttonImage: 'wet-story-02.jpg',
        bodyImages: [
            {fileName: 'wet-story-02-full.jpg', imageCredit: '', imageCaption: 'Jon Rebman, Curator of Botany' },
            {fileName: 'wet-story-02-dudleya.jpg', imageCredit: '', imageCaption: 'Short-leaved Dudleya<br>Spanish Common Name<br><i>Dudleya blochmaniae</i><i>subsp.</i><i>brevifolia</i>' },
        ],
        order: 2,
        bodyCopy: '"I like the Short-leaved Dudleya because it is a tiny, but resilient succulent. It can be easily overlooked because of its size and rarity, but is a particularly unique plant because it needs a type of soil found only in limited undeveloped areas around souther California."<br>-Jon Rebman, Curator of Botany',
        espBodyCopy: '"Me gusta la Dudleya-Short hojas, ya que es una pequeña, pero resistente suculenta. Puede ser fácilmente pasado por alto debido a su tamaño y rareza, pero es una planta particularmente único, ya que necesita un tipo de suelo sólo se encuentran en zonas no desarrolladas limitados alrededor viento del sur de California. "<br> -Jon Rebman, Curador de Botánica',
        backgroundMapClass: 'map-wet-explore-miners',
    });

    /**
     **************************************************************************
     * Torrey Pines
     **************************************************************************
     */
    var torreyPines = Components.insert({
        colorPalate: 'torrey-pines',
        link: 'torrey-pines',
        title: 'Welcome to Torrey Pines',
        titleEsp: 'Bienvenido a Torrey Pines',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'The Torrey Pine is a rare tree. This WAW explores its natural environment.',
        componentNum: '0416',
        order: 2,
        mural: 'tp-mural.jpg',
        bodyCopy: dimsum()
    });

    var tpWhere = Pages.insert({
        colorPalate: 'torrey-pines',
        componentId: torreyPines,
        link: 'where-is-it',
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        userId: admin._id,
        order: 1,
        bodyCopy: 'Torrey Pines State Natural Reserve, the setting for the scene in front of you, is just 18 miles from the Museum.',
        espBodyCopy: 'La Reserva Natural Estatal de Torrey Pines, el marco de la escena delante de ti, está apenas a 18 millas del Museo.',
        backgroundMapClass: 'map-tp-park',
        bodyImages: [
            {fileName: 'tp-where.jpg'},
        ],
    });

    var tpRareTree = Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'rare-tree',
        componentId: torreyPines,
        buttonTitle: 'Rare tree',
        espButtonTitle: 'Árbol inusual',
        userId: admin._id,
        order: 2,
        author: admin.profile.name,
        bodyCopy: '<p>The Torrey Pine is found in only two places: Torrey Pines State Natural Reserve and Santa Rosa Island.</p><p>There are two distinct varieties of Torrey Pine, each only existing in one location. That makes this tree in coastal San Diego even more unique.</p>',
        espBodyCopy: '<p>El pino Torrey se encuentra en sólo dos lugares:  La Reserva Natural Estatal de Torrey Pines y en la Isla de Santa Rosa.</p><p>Hay dos variedades distintas de pinos Torrey; cada una existe en un solo lugar, lo cual hace que este árbol de la costa de San Diego sea aun más especial.</p>',
        backgroundMapClass: 'map-tp-extent',
        bodyImages: [
            {fileName: 'tp-tree-rare.jpg', imageCredit: '' },
        ],
    });

    var tpRareHabitat = Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'rare-habitat',
        componentId: torreyPines,
        buttonTitle: 'Rare habitat',
        espButtonTitle: 'Hábitat inusual',
        userId: admin._id,
        order: 3,
        author: admin.profile.name,
        bodyCopy: '<p>Torrey Pines State Natural Reserve is one<br>of the last places where you can see coastal<br>sage scrub habitat.</p><p>Coastal sage scrub plants are usually<br>soft-leaved and fragrant. You will often<br>find California Sagebrush and<br>Coast Prickly-pear here.</p>',
        espBodyCopy: '<p>La Reserva Natural Estatal de Torrey Pines es<br>uno de los últimos lugares que quedan donde puedes ver el hábitat del matorral costero de salvia.</p><p>Las plantas del matorral costero de salvia son generalmente de hojas suaves y aromáticas. Frecuentemente puedes encontrar aquí<br>el chamizo y el nopal.</p>',
        backgroundMapClass: 'map-tp-floristic',
        bodyImages: [
            {fileName: 'tp-habitat-sagebrush.png', imageCredit: '', imageCaption: 'California Sagebrush', imageCaptionEsp: 'Chamizo', imageCaptionLatin: 'Artemisia californica'},
            {fileName: 'tp-habitat-cactus.png', imageCredit: '', imageCaption: 'Coast Prickly-pear', imageCaptionEsp: 'Nopal', imageCaptionLatin: 'Opuntia littoralis'}
        ],
    });

    var tpRareClimate = Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'rare-climate',
        componentId: torreyPines,
        buttonTitle: 'Rare climate zone',
        espButtonTitle: 'Zona climática inusual',
        userId: admin._id,
        order: 4,
        author: admin.profile.name,
        bodyCopyLayout: 'horizontal',
        bodyCopy: '<p>Coastal California is one of only five places in the world<br>known as a Mediterranean climate zone</p><p>Coastal sage scrub plants are specially adapted for the<br>mild winters and long, dry summers typical of these climate zones. </p>',
        espBodyCopy: '<p>La costa de California es uno de sólo cinco lugares en el mundo que<br>tiene lo que se conoce como zona de clima Mediterráneo.</p><p>Las plantas del matorral costero de salvia están adaptadas<br>especialmente para los inviernos templados y veranos largos y secos,<br>típicos de estas zonas climáticas.</p>',
        backgroundMapClass: 'map-tp-med',
    });

    var tpExplore = Pages.insert({
        colorPalate: 'torrey-pines',
        link: 'explore',
        componentId: torreyPines,
        buttonTitle: 'Explore',
        espButtonTitle: 'Explorá',
        userId: admin._id,
        order: 5,
        author: admin.profile.name,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-explore',
    });

    var tpExploreReserve = Pages.insert({
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
        websiteURL: 'www.example.com',
        backgroundMapClass: 'map-tp-explore-tp',
    });

    var tpExploreCrest = Pages.insert({
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

    var tpExploreBayside = Pages.insert({
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

    var tpExploreMiners = Pages.insert({
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
        buttonTitle: 'Science stories',
        espButtonTitle: 'Historias de ciencia',
        userId: admin._id,
        order: 6,
        author: admin.profile.name,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-stories',
    });

    var tpScienceStoriesOne = Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'science',
        link: 'susie-arter',
        componentId: torreyPines,
        parentId: tpScienceStories,
        buttonTitle: 'Susie Arter<br>co-director of zooarchaeology lab',
        espButtonTitle: 'co-directora del laboratorio de arqueología zoológica',
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

    var tpScienceStoriesTwo = Pages.insert({
        colorPalate: 'torrey-pines',
        subPageType: 'science',
        link: 'jon-rebman',
        componentId: torreyPines,
        parentId: tpScienceStories,
        buttonTitle: 'Jon Rebman<br>curator of botany',
        espButtonTitle: 'curador de botánica',
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

    var canyons = Components.insert({
        title: 'Canyons',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Canyons general description.',
        componentNum: '0516',
        order: 3,
        bodyCopy: dimsum()
    });

    var cWhere = Pages.insert({
        componentId: canyons,
        title: 'Canyons Where',
        userId: admin._id,
        order: 2,
        author: admin.profile.name,
        pageCopy: dimsum()
    });

    var streams = Components.insert({
        title: 'Streams',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Streams general description.',
        componentNum: '0616',
        order: 4,
        bodyCopy: dimsum()
    });

    var chaparral = Components.insert({
        title: 'Chaparral',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Chaparral general description.',
        componentNum: '0704',
        order: 5,
        bodyCopy: dimsum()
    });

    var oakTree = Components.insert({
        title: 'Oak Tree',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Oak Tree general description.',
        componentNum: '0813',
        order: 6,
        bodyCopy: dimsum()
    });

    var mountains = Components.insert({
        title: 'Mountains',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Mountains general description.',
        componentNum: '0816',
        order: 7,
        bodyCopy: dimsum()
    });

    var desert = Components.insert({
        title: 'Desert',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Desert general description.',
        componentNum: '0916',
        order: 8,
        bodyCopy: dimsum()
    });

}
