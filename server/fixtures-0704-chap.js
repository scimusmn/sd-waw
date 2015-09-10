/**
 * Chaparral
 */
var colorPalate = 'chaparral';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    var chaparral = Components.insert({
        colorPalate: colorPalate,
        link: 'chaparral',
        title: 'The Chaparral',
        titleEsp: 'El Chaparral',
        componentNum: '0704',
        order: 6,
        mural: 'chaparral-mural.jpg',
    });

    Pages.insert({
        colorPalate: colorPalate,
        componentId: chaparral,
        link: 'where-is-it',
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        order: 1,
        bodyCopy: '<p>Chapa<span class=\"space-out\">r</span>ral grows almost everywhere in southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia.</p><p>Early Spanish visitors to the region called this extensive plant habitat chapa<span class=\"space-out\">r</span>ro ("short one") because of its abundance of shrubs and short oaks.</p>',
        espBodyCopy: '<p>El chapa<span class=\"space-out\">r</span>ral crece casi por todas partes en el sur de Califo<span class=\"space-out\">r</span>nia.</p><p>Los primeros españoles en visitar la región llamaron a este extenso hábitat de plantas chapa<span class=\"space-out\">r</span>ro ("bajo en estatura") debido a sus abundantes arbustos y robles bajos.</p>',
        backgroundMapClass: 'map-chaparral-where',
        bodyImages: [
            {fileName: 'chaparral-where.jpg'},
        ],
    });

    Pages.insert({
        colorPalate: colorPalate,
        link: 'tough-habitat',
        componentId: chaparral,
        buttonTitle: 'Tough habitat',
        espButtonTitle: 'Hábitat resistente',
        order: 2,
        bodyCopy: '<p> Chapa<span class=\"space-out\">r</span>ral is no stranger to long, dry summers and mild, wet winters. The various plants that make up this habitat must tolerate long periods of drought and natural wildfires.  </p><p> Chapa<span class=\"space-out\">r</span>ral plants typically have woody roots and branches and thick, leathery leaves. Chamise is one of the most common plant species here.  </p>',
        espBodyCopy: '<p> El chapa<span class=\"space-out\">r</span>ral conoce muy bien los largos y secos veranos y los invie<span class=\"space-out\">r</span>nos templados y lluviosos. Las varias plantas que componen este hábitat deben tolerar largos períodos de sequía e incendios naturales.  </p><p> Las plantas del chapa<span class=\"space-out\">r</span>ral típicamente tienen raíces y tallos leñosos y hojas gruesas y co<span class=\"space-out\">r</span>reosas. Aquí el chamizo es una de las especies de plantas más comunes.  </p>',
        bodyImages: [ {
            fileName: 'chaparral-chamise.jpg',
            zoom: 'zoom-true',
            imageCaption: 'Chamise',
            imageCaptionEsp: 'Chamizo',
            imageCaptionLatin: 'Adenostoma fasciculatum'
        } ],
        backgroundMapClass: 'map-chaparral-tough-habitat',
    });

    Pages.insert({
        colorPalate: colorPalate,
        link: 'rare-climate',
        componentId: chaparral,
        buttonTitle: 'Rare climate zone',
        espButtonTitle: 'Zona climática inusual',
        order: 3,
        bodyCopyLayout: 'horizontal',
        bodyCopy: '<p> Coastal Califo<span class=\"space-out\">r</span>nia is one of only five places on Earth known as a Medite<span class=\"space-out\">r</span>ranean climate zone.</p><p> The mild, wet winters and long, dry summers typical of this climate zone are ideal for the xerophilous (pronounced ze-RA-fe-les, meaning “dry-loving”) chapa<span class=\"space-out\">r</span>ral plants.</p>',
        espBodyCopy: '<p> La costa de Califo<span class=\"space-out\">r</span>nia es sólo uno de cinco lugares en la Tie<span class=\"space-out\">r</span>ra que se conocen como zonas climáticas medite<span class=\"space-out\">r</span>ráneas.</p><p>Los templados y lluviosos invie<span class=\"space-out\">r</span>nos y los veranos largos y secos típicos de esta zona climática son ideales para las plantas de chapa<span class=\"space-out\">r</span>ral xerófilas (pronunciado ce-RO-fi-las, lo que significa que les gusta la sequedad).  </p>',
        backgroundMapClass: 'map-tp-med',
    });

    Pages.insert({
        colorPalate: colorPalate,
        link: 'fire',
        componentId: chaparral,
        buttonTitle: 'Fire-prone habitat',
        espButtonTitle: 'Hábitat con proclividad a incendiarse',
        order: 4,
        //bodyCopyLayout: 'horizontal',
        bodyCopy: '<p> Fire is part of the natural life cycle in the chapa<span class=\"space-out\">r</span>ral habitat. Planning for fires is a necessary part of life in southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia.  </p><p>Move the timeline to see the places in southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia where fires have bu<span class=\"space-out\">r</span>ned during the past century. </p>',
        espBodyCopy: '<p> Los incendios son una parte del ciclo natural de vida del hábitat del chapa<span class=\"space-out\">r</span>ral.  La planificación para casos de incendio es un aspecto necesario de la vida en el sur de Califo<span class=\"space-out\">r</span>nia.  </p><p>Desplaza el cronograma para ver en qué lugares del sur de  Califo<span class=\"space-out\">r</span>nia han habido incendios en el último siglo. </p>',
        backgroundMapClass: 'map-chaparral-fire'
    });

    var chaparralExplore = Pages.insert({
        colorPalate: colorPalate,
        link: 'explore',
        componentId: chaparral,
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
        link: 'chino-hills',
        componentId: chaparral,
        parentId: chaparralExplore,
        buttonTitle: 'Chino Hills State Park ',
        espButtonTitle: 'Parque Estatal Chino Hills',
        buttonImage: 'chaparral-explore-chino-hills-button.jpg',
        bodyImages: [ { fileName: 'chaparral-explore-chino-hills.jpg', zoom: 'zoom-true'} ],
        order: 1,
        bodyCopy: 'Visit Chino Hills State Park for a day hike or an ove<span class=\"space-out\">r</span>night stay amid chapa<span class=\"space-out\">r</span>ral and coastal sage scrub habitats.',
        espBodyCopy: 'Visita el Parque Estatal Chino Hills para dar una caminata de día o pasar la noche entre los hábitats de chapa<span class=\"space-out\">r</span>ral y mato<span class=\"space-out\">r</span>ral costero de salvia.',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'parks.ca.gov',
        backgroundMapClass: 'map-chaparral-explore-chino-hills',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'daley-ranch',
        componentId: chaparral,
        parentId: chaparralExplore,
        buttonTitle: 'Daley Ranch (Boulder Loop)',
        espButtonTitle: 'Daley Ranch (Circuito Boulder) ',
        buttonImage: 'chaparral-explore-daley-ranch-button.jpg',
        bodyImages: [ { fileName: 'chaparral-explore-daley-ranch.jpg', zoom: 'zoom-true'} ],
        order: 2,
        bodyCopy: '<p>Climb a steep trail to the top of a ridge, where you’ll take in sweeping views of hills covered in chapa<span class=\"space-out\">r</span>ral and coastal sage scrub. </p><p>Join the Canyoneers for this and other guided hikes in southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia.</p>',
        espBodyCopy: '<p>Escala por un sendero empinado hasta la cima de una cresta donde podrás apreciar vistas panorámicas de colinas cubiertas de chapa<span class=\"space-out\">r</span>ral y mato<span class=\"space-out\">r</span>ral costero de salvia.</p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de Califo<span class=\"space-out\">r</span>nia.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-chaparral-explore-daley-ranch',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'green-valley',
        componentId: chaparral,
        parentId: chaparralExplore,
        buttonTitle: 'Oakoasis County Open Space Preserve',
        espButtonTitle: 'Reserva de Espacio Abierto Oakoasis en el Condado de San Diego',
        buttonImage: 'chaparral-explore-green-valley-button.jpg',
        bodyImages: [ { fileName: 'chaparral-explore-green-valley.jpg', zoom: 'zoom-true' } ],
        order: 3,
        bodyCopy: '<p> Hike up boulder-studded hillsides on this gentle trail, which leads to a spot overlooking the San Vicente Reservoir. </p><p>Join the Canyoneers for this and other guided hikes in southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia.</p>',
        espBodyCopy: '<p>Camina subiendo por laderas tachonadas de peñascos a lo largo de este sendero fácil de transitar que lleva a un sitio con vista al embalse San Vicente.  </p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de Califo<span class=\"space-out\">r</span>nia.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-chaparral-explore-green-valley',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'iron-mountain',
        componentId: chaparral,
        parentId: chaparralExplore,
        buttonTitle: 'Iron Mountain (Ellie Lane Loop Trail)',
        espButtonTitle: 'Iron Mountain (Sendero del Circuito Ellie Lane)',
        buttonImage: 'chaparral-explore-iron-mountain-button.jpg',
        bodyImages: [ { fileName: 'chaparral-explore-iron-mountain.jpg', zoom: 'zoom-true' } ],
        order: 4,
        bodyCopy: '<p> Enjoy a challenging but rewarding hike through the chapa<span class=\"space-out\">r</span>ral and on up to the peak of Iron Mountain.</p><p>Join the Canyoneers for this and other guided hikes in southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia.</p>',
        espBodyCopy: '<p>Disfruta de una caminata ardua pero gratificante por el chapa<span class=\"space-out\">r</span>ral y hasta la cima de Iron Mountain. </p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de Califo<span class=\"space-out\">r</span>nia.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-chaparral-explore-iron-mountain',
    });

    var chaparralScienceStories = Pages.insert({
        colorPalate: colorPalate,
        link: 'science',
        componentId: chaparral,
        buttonTitle: 'Science spotlight',
        espButtonTitle: 'Enfoque científico',
        order: 6,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-stories',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'science',
        link: 'laura-kabes',
        componentId: chaparral,
        parentId: chaparralScienceStories,
        buttonTitle: 'Laura Kabes<br>Herpetologist',
        espButtonTitle: 'Herpetóloga',
        buttonImage: 'sci-kabes-laura-button.jpg',
        bodyImages: [ {fileName: 'sci-kabes-laura.jpg'} ],
        order: 1,
        bodyCopy: '"I think Granite Night Lizards are the coolest lizards in San Diego County. You can find them in various habitats—but only in southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia and northe<span class=\"space-out\">r</span>n Baja Califo<span class=\"space-out\">r</span>nia. They live in the tiniest cracks of granite boulders. And check out those eyes!"',
        espBodyCopy: '"Yo creo que las lagartijas noctu<span class=\"space-out\">r</span>nas de granito son las lagartijas más interesantes del condado de San Diego. Puedes encontrarlas en varios hábitats, pero únicamente en el sur de Califo<span class=\"space-out\">r</span>nia y el norte de Baja Califo<span class=\"space-out\">r</span>nia. Viven dentro de las grietas más pequeñas de las rocas de granito. ¡Y fíjate en esos ojos!".',
        backgroundMapClass: 'sci-chaparral-lizard',
        backgroundCaption: 'Granite Night Lizard',
        backgroundCaptionEsp: 'Lagartija noctu<span class=\"space-out\">r</span>na de granito',
        backgroundCaptionLatin: 'Xantusia henshawi'
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'science',
        link: 'drew-stokes',
        componentId: chaparral,
        parentId: chaparralScienceStories,
        buttonTitle: 'Drew Stokes<br>Wildlife biologist',
        espButtonTitle: 'Biólogo de vida silvestre',
        buttonImage: 'sci-stokes-drew-button.jpg',
        bodyImages: [ {fileName: 'sci-stokes-drew.jpg'} ],
        order: 2,
        bodyCopy: '"The Weste<span class=\"space-out\">r</span>n Mastiff Bat is so cool! It is North America’s largest bat species, with a wingspan of almost two feet. It is well adapted to southe<span class=\"space-out\">r</span>n Califo<span class=\"space-out\">r</span>nia’s Medite<span class=\"space-out\">r</span>ranean-like landscape, roosting deep in rock fractures in high, steep cliffs above the chapa<span class=\"space-out\">r</span>ral vegetation—where it is safe from wildfires."',
        espBodyCopy: '"¡El murciélago con bonete mayor es tan interesante! Es la especie más grande de los murciélagos norteamericanos, con una envergadura de casi dos pies. Está bien adaptado al paisaje medite<span class=\"space-out\">r</span>ráneao del sur de Califo<span class=\"space-out\">r</span>nia, y se aposenta dentro de las rocas en profundas fracturas en acantilados altos y empinados sobre la vegetación del chapa<span class=\"space-out\">r</span>ral, donde encuentra resguardo de los incendios naturales".',
        backgroundMapClass: 'sci-chaparral-bat',
        backgroundCaption: 'Weste<span class=\"space-out\">r</span>n Mastiff Bat',
        backgroundCaptionEsp: 'Murciélago con bonete mayor',
        backgroundCaptionLatin: 'Eumops perotis'
    });

}

