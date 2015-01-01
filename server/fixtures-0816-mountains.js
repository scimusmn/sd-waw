/**
 * Mountains
 */
var colorPalate = 'mountains';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    /**
     **************************************************************************
     * Mountains
     **************************************************************************
     */
    var mountains = Components.insert({
        colorPalate: colorPalate,
        link: 'mountains',
        title: 'The Cuyamaca Mountains',
        titleEsp: 'Las montañas Cuyamaca',
        componentNum: '0816',
        order: 7,
        mural: 'mtn-mural.jpg'
    });

    Pages.insert({
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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

}