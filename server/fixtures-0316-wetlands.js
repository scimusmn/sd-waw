/**
 * Wetalnds
 */
var colorPalate = 'wetlands';

Components.remove({ colorPalate: colorPalate });
Pages.remove({ colorPalate: colorPalate });

if (Components.find({ colorPalate: colorPalate }).count() === 0) {

  var wetlands = Components.insert({
    colorPalate: colorPalate,
    link: 'wetlands',
    title: 'Los Peñasquitos Lagoon',
    titleEsp: 'Laguna de Los Peñasquitos',
    componentNum: '0316',
    order: 1,
    mural: 'wet-mural.jpg',
  });

  Pages.insert({
    colorPalate: colorPalate,
    componentId: wetlands,
    link: 'where-is-it',
    buttonTitle: 'Where is it?',
    espButtonTitle: '¿Dónde está?',
    order: 1,
    bodyCopy: 'Los Peñasquitos Lagoon, the setting for the scene in front of you, is just 18 miles from the Museum.',
    espBodyCopy: 'La Laguna de Los Peñasquitos, el marco de la escena delante de ti, está apenas a dieciocho millas del Museo.',
    backgroundMapClass: 'map-wet-where',
    bodyImages: [
      { fileName: 'wet-where.jpg' },
    ],
  });

  Pages.insert({
    colorPalate: colorPalate,
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
      { order: 1, label: 'Tijuana Estuary', dotLeft: '830', dotTop: '506', arrowLeft: '1055', arrowTop: '536' },
      { order: 2, label: 'Sweetwater Marsh', dotLeft: '976', dotTop: '502', arrowLeft: '1052', arrowTop: '523' },
      { order: 3, label: 'Mission Bay Marsh', dotLeft: '934.6', dotTop: '483.6', arrowLeft: '1027', arrowTop: '491' },
      { order: 4, label: 'Famosa Slough', dotLeft: '893.2', dotTop: '465.2', arrowLeft: '1027', arrowTop: '491' },
      { order: 5, label: 'Los Penasquitos Lagoon', dotLeft: '851.8', dotTop: '446.8', arrowLeft: '1023', arrowTop: '452' },
      { order: 6, label: 'San Dieguito Lagoon', dotLeft: '810.4', dotTop: '428.4', arrowLeft: '1023', arrowTop: '442' },
      { order: 7, label: 'San Elijo Lagoon', dotLeft: '769', dotTop: '410', arrowLeft: '1020', arrowTop: '430' },
      { order: 8, label: 'Batiquitos Lagoon', dotLeft: '976', dotTop: '415', arrowLeft: '1012', arrowTop: '408' },
      { order: 9, label: 'Agua Hedionda Lagoon', dotLeft: '914.5', dotTop: '398.5', arrowLeft: '1012', arrowTop: '390' },
      { order: 10, label: 'Buena Vista Lagoon', dotLeft: '853', dotTop: '382', arrowLeft: '998', arrowTop: '375' },
      { order: 11, label: 'San Luis Rey River Marsh', dotLeft: '791.5', dotTop: '365.5', arrowLeft: '984', arrowTop: '360' },
      { order: 12, label: 'Santa Margarita River Estuary', dotLeft: '730', dotTop: '349', arrowLeft: '976', arrowTop: '355' },
      { order: 13, label: 'Las Flores Lagoon', dotLeft: '914.5', dotTop: '339', arrowLeft: '950', arrowTop: '329' },
      { order: 14, label: 'San Mateo Creek Lagoon', dotLeft: '871', dotTop: '317.5', arrowLeft: '924', arrowTop: '309' },
      { order: 15, label: 'Upper Newport Bay', dotLeft: '828', dotTop: '296', arrowLeft: '883', arrowTop: '255' },
      { order: 16, label: 'Huntington Beach Wetlands', dotLeft: '779', dotTop: '296', arrowLeft: '867', arrowTop: '256' },
      { order: 17, label: 'Bolsa Chica Wetlands', dotLeft: '808', dotTop: '260', arrowLeft: '837', arrowTop: '233' },
      { order: 18, label: 'Anaheim Bay', dotLeft: '750', dotTop: '267', arrowLeft: '808', arrowTop: '227' },
      { order: 19, label: 'Los Cerritos Wetlands', dotLeft: '724', dotTop: '253', arrowLeft: '795', arrowTop: '228' },
      { order: 20, label: 'Ballona Wetlands', dotLeft: '729', dotTop: '209', arrowLeft: '753', arrowTop: '170' },
      { order: 21, label: 'Malibu Lagoon', dotLeft: '682', dotTop: '193', arrowLeft: '699', arrowTop: '152' },
      { order: 22, label: 'Mugu Lagoon', dotLeft: '596', dotTop: '183', arrowLeft: '604', arrowTop: '134' },
      { order: 23, label: 'McGrath Lake', dotLeft: '558', dotTop: '160', arrowLeft: '569', arrowTop: '98' },
      { order: 24, label: 'Santa Clara River Estuary', dotLeft: '515', dotTop: '158', arrowLeft: '567', arrowTop: '90' },
      { order: 25, label: 'Ventura River Estuary', dotLeft: '517', dotTop: '112', arrowLeft: '556', arrowTop: '86' },
      { order: 26, label: 'Carpinteria Salt Marsh', dotLeft: '473', dotTop: '94', arrowLeft: '508', arrowTop: '53' },
      { order: 27, label: 'Goleta Slough', dotLeft: '426', dotTop: '84', arrowLeft: '441', arrowTop: '46' },
      { order: 28, label: 'Devereux Slough', dotLeft: '374', dotTop: '80', arrowLeft: '429', arrowTop: '46' },
    ],
  });

  Pages.insert({
    colorPalate: colorPalate,
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
    colorPalate: colorPalate,
    componentId: wetlands,
    link: 'pacific-flyway',
    buttonTitle: 'The Pacific Flyway',
    espButtonTitle: 'La ruta migratoria del Pacífico',
    order: 4,
    bodyCopy: '<p>Each year more than a billion birds use the Pacific <br>Flyway—a series of wetlands along North America’s west coast—on the migratory journey between their seasonal northern and southern homes.</p><p>Meet some of the birds that travel the Pacific Flyway.</p>',
    espBodyCopy: '<p>Cada año más de mil millones de pájaros usan la ruta migratoria del Pacífico, una serie de marismas a lo largo de la costa oeste de Norteamérica, durante el viaje migratorio entre sus hogares norteños y sureños según la temporada.</p><p>Conoce a algunos de los pájaros que viajan a lo largo de la ruta migratoria del Pacífico.</p>',
    markers: [
      {
        order: 1,
        label: 'Black-bellied Plovers',
        labelEs: 'Chorlo gris',
        labelLat: 'Pluvialis squatarola',
        dotLeft: '1130',
        dotTop: '460',
        arrowLeft: '1130',
        arrowTop: '460',
        bodyCopy: 'After nesting in Alaska, Black-bellied Plovers migrate south on the Pacific Flyway to winter in southern California.',
        espBodyCopy: 'Después de anidar en Alaska, el chorlo gris migra hacia el sur por la ruta migratoria del Pacífico para pasar el invierno en el sur de California.',
        markerImage: 'wet-plover.jpg',
      },

      {
        order: 2,
        label: 'Western Sandpiper',
        labelEs: 'Playero occidental',
        labelLat: 'Calidris mauri',
        dotLeft: '1036',
        dotTop: '369',
        arrowLeft: '1036',
        arrowTop: '369',
        bodyCopy: 'Western Sandpipers endure long journeys between their northern breeding grounds in Alaska and winter homes in the lower 48 states, Mexico, Central and South America.',
        espBodyCopy: 'El playero occidental resiste largos viajes entre su área de apareamiento norteña en Alaska y su hogar del sur en los cuarenta y ocho estados continentales, México, Centroamérica y Sudamérica.',
        markerImage: 'wet-sandpiper.jpg',
      },

      {
        order: 3,
        label: 'Marbled Godwit',
        labelEs: 'Picopando canelo',
        labelLat: 'Limosa fedoa',
        dotLeft: '1070',
        dotTop: '265',
        arrowLeft: '1070',
        arrowTop: '265',
        bodyCopy: 'Immediately after nesting, Marbled Godwits migrate to the west coast to feed in our wetlands—escaping the cold winter in the northern Great Plains months before it arrives.',
        espBodyCopy: 'Inmediatamente después de anidar, el picopando canelo migra a la costa oeste para buscar alimento en nuestras marismas; de esta manera se escapa meses antes de la llegada del frío invierno en las Grandes Llanuras del norte.',
        markerImage: 'wet-godwit.jpg',
      },
    ],
    backgroundMapClass: 'map-wet-migration',
  });

  var wetExplore = Pages.insert({
    colorPalate: colorPalate,
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
    colorPalate: colorPalate,
    subPageType: 'explore',
    componentId: wetlands,
    parentId: wetExplore,
    link: 'bolsa-chica',
    buttonTitle: 'Bolsa Chica<br>Ecological Reserve',
    espButtonTitle: 'Reserva Ecológica Bolsa Chica',
    buttonImage: 'wet-explore-bolsa.jpg',
    bodyImages: [
      {
        fileName: 'wet-explore-bolsa-full.jpg',
        zoom: 'zoom-true',
      },
    ],
    order: 1,
    bodyCopy: 'Visit Bolsa Chica Ecological Reserve to experience the largest saltwater wetland in southern California.',
    espBodyCopy: 'Visita la Reserva Ecológica Bolsa Chica para conocer de cerca la marisma de agua salada más grande del sur de California.',
    websiteCall: 'For more information, visit:',
    websiteCallEsp: 'Para más información, visita:',
    websiteURL: 'parks.ca.gov',
    backgroundMapClass: 'map-wet-explore-bolsa',
  });

  Pages.insert({
    colorPalate: colorPalate,
    subPageType: 'explore',
    componentId: wetlands,
    parentId: wetExplore,
    link: 'san-elijo',
    buttonTitle: 'San Elijo Lagoon<br>County Ecological Preserve',
    espButtonTitle: 'Reserva Ecológica Laguna de San Elijo ',
    buttonImage: 'wet-explore-elijo.jpg',
    bodyImages: [
      {
        fileName: 'wet-explore-elijo-full.jpg',
        zoom: 'zoom-true',
      },
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
    colorPalate: colorPalate,
    subPageType: 'explore',
    componentId: wetlands,
    parentId: wetExplore,
    link: 'san-dieguito',
    buttonTitle: 'San Dieguito River Park<br>(Coast to Crest Trail – Del Mar)',
    espButtonTitle: 'Parque Río San Dieguito<br>(Sendero Coast to Crest – Del Mar)',
    buttonImage: 'wet-explore-delmar.jpg',
    bodyImages: [
      {
        fileName: 'wet-explore-delmar-full.jpg',
        zoom: 'zoom-true',
      },
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
    colorPalate: colorPalate,
    subPageType: 'explore',
    componentId: wetlands,
    parentId: wetExplore,
    link: 'tijuana-river',
    buttonTitle: 'Tijuana River National Estuarine Research Reserve (North Beach Trail)',
    espButtonTitle: 'Reserva Nacional de Investigación Estuarina del Río Tijuana (Sendero North Beach)',
    buttonImage: 'wet-explore-northbeach.jpg',
    bodyImages: [
      {
        fileName: 'wet-explore-northbeach-full.jpg',
        zoom: 'zoom-true',
      },
    ],
    order: 4,
    bodyCopy: '<p>Enjoy the ocean breeze and hike alongside one of the few remaining coastal wetlands in southern California.</p><p>Join the Canyoneers for guided hikes in southern California.</p>',
    espBodyCopy: '<p>Disfruta de la brisa marina y camina a lo largo de uno de los pocos estuarios costeros que quedan en el sur de California.</p><p>Únete a los Canyoneers para caminatas guiadas en el sur de California.</p>',
    websiteCall: 'For more information, visit:',
    websiteCallEsp: 'Para más información, visita:',
    websiteURL: 'sdnat.org/canyoneers',
    backgroundMapClass: 'map-wet-explore-northbeach',
  });

  var wetScienceStories = Pages.insert({
    colorPalate: colorPalate,
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
    colorPalate: colorPalate,
    componentId: wetlands,
    parentId: wetScienceStories,
    link: 'jon-rebman',
    subPageType: 'science',
    buttonTitle: 'Jon Rebman<br>Curator of botany',
    espButtonTitle: 'Curador de botánica ',
    buttonImage: 'sci-rebman-jon-button.jpg',
    bodyImages: [
      { fileName: 'sci-rebman-jon-full.jpg', imageCredit: '', imageCaption: '' },
    ],
    order: 1,
    bodyCopy: '"If you come across a plant in a saltwater marsh that looks like yellow-orange silly string, you’re actually looking at Saltmarsh Dodder. This plant can’t produce its own nutrients, so it sucks food and water from the plant tangled in its grasp. There are 10 kinds of dodder in San Diego County."',
    espBodyCopy: '"Si te encuentras con una planta en una marisma de agua salada que se asemeja a la serpentina en aerosol amarillo-naranja, estás en realidad viendo a la tripa de aura.  Esta planta no puede producir sus propios nutrientes, por lo que succiona el alimento y agua de la planta a la cual se enreda. Hay diez tipos de tripa de aura en el condado de San Diego".',
    backgroundMapClass: 'sci-wet-marsh',
    backgroundCaption: 'Saltmarsh Dodder',
    backgroundCaptionEsp: 'Tripa de aura',
    backgroundCaptionLatin: 'Cuscuta pacifica',
  });

  Pages.insert({
    colorPalate: colorPalate,
    componentId: wetlands,
    parentId: wetScienceStories,
    subPageType: 'science',
    link: 'phil-unitt',
    buttonTitle: 'Phil Unitt<br>Curator of birds and mammals',
    espButtonTitle: 'Curador de pájaros y mamíferos ',
    buttonImage: 'sci-unitt-phill-button.jpg',
    bodyImages: [
      { fileName: 'sci-unitt-phill-full.jpg', imageCredit: '', imageCaption: '' },
    ],
    order: 2,
    bodyCopy: '"The Marsh Wren is well named, since it’s rarely seen outside a marsh. Each male builds multiple nests—woven around tules or cattails—possibly to help advertise his territory. The female selects one nest, or builds her own, before laying her eggs. The subspecies clarkae appears only in coastal southern California."',
    espBodyCopy: '"El chivirín pantanero está aptamente nombrado, ya que pocas veces se lo ve fuera de un pantano. Cada macho construye múltiples nidos, tejidos alrededor de juncos o totoras, posiblemente para ayudarle a demarcar su territorio. La hembra elige un nido, o construye el suyo propio, antes de poner sus huevos.  La subespecie clarkae aparece únicamente en la costa del sur de California".',
    backgroundMapClass: 'sci-wet-wren',
    backgroundCaption: 'Marsh Wren',
    backgroundCaptionEsp: 'Chivirín pantanero',
    backgroundCaptionLatin: 'Cistothorus palustris',
  });

}
