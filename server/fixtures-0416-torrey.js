/**
 * Torrey Pines
 */
var colorPalate = 'torrey-pines';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {
    var torreyPines = Components.insert({
        colorPalate: colorPalate,
        link: 'torrey-pines',
        title: 'Torrey Pines',
        titleEsp: 'Torrey Pines',
        componentNum: '0416',
        order: 2,
        mural: 'tp-mural.jpg',
    });

    Pages.insert({
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
        link: 'rare-tree',
        componentId: torreyPines,
        buttonTitle: 'Rare tree',
        espButtonTitle: 'Árbol inusual',
        order: 2,
        bodyCopy: '<p>The Torrey Pine is found in only two places: Torrey Pines State Natural Reserve and Santa Rosa Island.</p><p>There are two distinct varieties of Torrey Pine, each only existing in one location. That makes this tree in coastal San Diego even more unique.</p>',
        espBodyCopy: '<p>El pino Torrey se encuentra en sólo dos lugares:  La Reserva Natural Estatal de Torrey Pines y en la Isla de Santa Rosa.</p><p>Hay dos variedades distintas de pinos Torrey; cada una existe en un solo lugar, lo cual hace que este árbol de la costa de San Diego sea aun más especial.</p>',
        backgroundMapClass: 'map-tp-extent',
        bodyImages: [
            {
                fileName: 'tp-tree-rare.jpg',
                imageCaption: 'Torrey Pine',
                imageCaptionEsp: 'Pino de Torrey',
                imageCaptionLatin: 'Pinus torreyana ssp. torreyana'
            }
        ],
    });

    Pages.insert({
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'torrey-pines-reserve',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Torrey Pines<br>State Natural Reserve',
        espButtonTitle: 'Reserva Natural<br>Estatal de Torrey Pines',
        buttonImage: 'tp-explore-reserve.jpg',
        bodyImages: [
            {fileName: 'tp-explore-reserve-full.jpg' },
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
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'crest-canyon',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Crest Canyon<br>Open Space Park Preserve',
        espButtonTitle: 'Reserva de Espacio<br>Abierto Crest Canyon',
        buttonImage: 'tp-explore-crest.jpg',
        bodyImages: [
            {fileName: 'tp-explore-crest-full.jpg'},
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
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'cabrillo',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Cabrillo National Monument<br>(Bayside Trail)',
        espButtonTitle: 'Monumento Nacional Cabrillo<br>(Sendero Bayside)',
        buttonImage: 'tp-explore-bayside.jpg',
        bodyImages: [
            {fileName: 'tp-explore-bayside-full.jpg'},
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
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'black-mountain',
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Black Mountain Open Space Park<br>(Miner’s Loop)',
        espButtonTitle: 'Parque de Espacio Abierto<br>Black Mountain (Miner’s Loop)',
        buttonImage: 'tp-explore-miners.jpg',
        bodyImages: [
            {fileName: 'tp-explore-miners-full.jpg'},
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
        colorPalate: colorPalate,
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
}
