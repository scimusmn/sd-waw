/**
 * Canyons
 */
var colorPalate = 'canyons';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });
dimsum.configure({ flavor: 'jabberwocky' });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    var canyons = Components.insert({
        colorPalate: 'canyons',
        link: 'canyons',
        title: 'The Canyons ',
        titleEsp: 'Los cañones',
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
}
