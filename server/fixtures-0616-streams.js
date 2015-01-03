/**
 * Streams
 */
var colorPalate = 'streams';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

    /**
     **************************************************************************
     * Streams
     **************************************************************************
     */
    var streams = Components.insert({
        colorPalate: colorPalate,
        link: 'streams',
        title: 'The Rivers and Streams',
        titleEsp: 'Los Ríos y Arroyos',
        componentNum: '0616',
        order: 4,
        mural: 'streams-mural.jpg'
    });

    Pages.insert({
        colorPalate: colorPalate,
        componentId: streams,
        link: 'where-is-it',
        buttonTitle: 'Where are they?',
        espButtonTitle: '¿Dónde están?',
        order: 1,
        bodyCopy: 'There are eight major rivers running through southern California. A network of streams and creeks feeds these rivers.',
        espBodyCopy: 'Hay ocho ríos importantes que fluyen a través del sur de California. Una red de arroyos y riachuelos alimenta estos ríos.',
        backgroundMapClass: 'map-streams-where',
        bodyImages: [
            {fileName: 'streams-where.jpg'},
        ],
    });

    Pages.insert({
        colorPalate: colorPalate,
        link: 'watersheds',
        componentId: streams,
        buttonTitle: 'Watersheds',
        espButtonTitle: 'Cuencas',
        order: 2,
        bodyCopy: '<p>Each of these outlined regions represents a watershed—an area of land containing a network of creeks and streams that drain into the same river.</p><p>Water from mountaintop runoff and rainfall flows downward into nearby creeks, streams, and rivers and, eventually, into the ocean.</p>',
        espBodyCopy: '<p>Cada una de estas regiones demarcadas representa una cuenca—un área de terreno que contiene una red de riachuelos y arroyos que desembocan en el mismo río.</p><p>El agua que viene de los picos montañosos y de la lluvia fluye hacia abajo y se vierte en los riachuelos, arroyos y ríos cercanos y, eventualmente, en el océano.</p>',
        backgroundMapClass: 'map-streams-watersheds',
    });

    Pages.insert({
        colorPalate: colorPalate,
        link: 'aquifers',
        componentId: streams,
        buttonTitle: 'Aquifers',
        espButtonTitle: 'Acuíferos',
        order: 3,
        bodyCopy: '<p> Not all water from mountain run-off and rainfall reaches our rivers. Some of it seeps into pores in the ground, where it then collects in aquifers—underground water containers. </p><p> What little water makes it into these containers is sometimes pumped out for our use. </p>',
        espBodyCopy: '<p> No toda el agua de escurrimiento y lluvia alcanza nuestros ríos. Una parte de ella se filtra por los poros de la tierra donde después se congrega en acuíferos—depósitos de agua subterráneos. </p><p> Esa pequeña cantidad de agua que logra llegar a esos depósitos es a veces extraída para nuestro uso mediante bombas hidráulicas. </p>',
        backgroundMapClass: 'map-streams-aquifers'
    });

    var streamsExplore = Pages.insert({
        colorPalate: colorPalate,
        link: 'explore',
        componentId: streams,
        buttonTitle: 'Explore',
        espButtonTitle: 'Explora',
        order: 4,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-explore',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'los-angeles',
        componentId: streams,
        parentId: streamsExplore,
        buttonTitle: 'Rio de Los Angeles State Park',
        espButtonTitle: 'Parque Estatal Río de Los Ángeles',
        buttonImage: 'streams-explore-los-angeles-button.jpg',
        bodyImages: [ { fileName: 'streams-explore-los-angeles.jpg' } ],
        order: 1,
        bodyCopy: 'Visit Rio de Los Angeles State Park, where the riverbanks are being restored to create a serene, natural escape from the city.',
        espBodyCopy: 'Visita el Parque Estatal Río de Los Ángeles, donde las riberas del río están siendo restauradas para crear un escape de la ciudad sereno y natural.',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'parks.ca.gov',
        backgroundMapClass: 'map-streams-explore-la',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'blue-sky',
        componentId: streams,
        parentId: streamsExplore,
        buttonTitle: 'Blue Sky Ecological Reserve',
        espButtonTitle: 'Reserva Ecológica Blue Sky',
        buttonImage: 'streams-explore-blue-sky-button.jpg',
        bodyImages: [ { fileName: 'streams-explore-blue-sky.jpg' } ],
        order: 2,
        bodyCopy: '<p> Enjoy a leisurely stroll beneath a canopy of giant oaks while listening to water rippling over rocks in a nearby stream. </p><p>Join the Canyoneers for this and other guided hikes in southern California.</p>',
        espBodyCopy: '<p> Disfruta de una caminata relajada bajo las copas de gigantescos robles mientras escuchas el agua rizándose sobre las rocas de un arroyo cercano. </p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-streams-explore-blue-sky',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'old-coach',
        componentId: streams,
        parentId: streamsExplore,
        buttonTitle: 'San Dieguito River Park (Old Coach Staging Area – Coast to Crest Trail)',
        espButtonTitle: 'Parque del Río San Dieguito (Zona Old Coach Staging – Sendero Coast to Crest)',
        buttonImage: 'streams-explore-old-coach-button.jpg',
        bodyImages: [ { fileName: 'streams-explore-old-coach.jpg' } ],
        order: 3,
        bodyCopy: '<p> Enjoy a leisurely stroll beneath a canopy of giant oaks while listening to water rippling over rocks in a nearby stream. </p><p>Join the Canyoneers for this and other guided hikes in southern California.</p>',
        espBodyCopy: '<p> Disfruta de una caminata relajada bajo las copas de gigantescos robles mientras escuchas el agua rizándose sobre las rocas de un arroyo cercano. </p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-streams-explore-old-coach',
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'explore',
        link: 'green-valley',
        componentId: streams,
        parentId: streamsExplore,
        buttonTitle: 'Cuyamaca Rancho State Park (Green Valley Falls Loop)',
        espButtonTitle: 'Parque Estatal Cuyamaca Rancho (Circuito Green Valley Falls)',
        buttonImage: 'streams-explore-green-valley-button.jpg',
        bodyImages: [ { fileName: 'streams-explore-green-valley.jpg' } ],
        order: 4,
        bodyCopy: '<p> Start your morning wading beneath waterfall cascades and hiking alongside the Sweetwater River.  </p><p>Join the Canyoneers for this and other guided hikes in southern California.</p>',
        espBodyCopy: '<p> Empieza tu mañana vadeando debajo de cascadas y haciendo una caminata a lo largo del Río Sweetwater.  </p><p>Únete a los Canyoneers para disfrutar de ésta y otras caminatas guiadas en el sur de California.</p>',
        websiteCall: 'For more information, visit:',
        websiteCallEsp: 'Para más información, visita:',
        websiteURL: 'sdnat.org/canyoneers',
        backgroundMapClass: 'map-streams-explore-green-valley',
    });

    var streamsScienceStories = Pages.insert({
        colorPalate: colorPalate,
        link: 'science',
        componentId: streams,
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
        link: 'melissa-stepek',
        componentId: streams,
        parentId: streamsScienceStories,
        buttonTitle: 'Melissa Stepek<br>Herpetologist',
        espButtonTitle: 'Herpetóloga',
        buttonImage: 'sci-stepek-melissa-button.jpg',
        bodyImages: [
            {fileName: 'sci-stepek-melissa.jpg'},
        ],
        order: 1,
        bodyCopy: '"Only one native semi-aquatic turtle can be found in California: the Western Pond Turtle. It dives deep into ponds to escape predators, feed, and regulate its body temperature. It lays eggs and nests on the land surrounding the pond."',
        espBodyCopy: '"Hay sólo una tortuga nativa semi-acuática en California: la tortuga de charcos del Pacífico. Se sumerge profundamente dentro de estanques para escaparse de los predadores, para alimentarse y regular su temperatura corporal.  Pone sus huevos y anida sobre la tierra alrededor del estanque".',
        backgroundMapClass: 'sci-streams-turtle',
        backgroundCaption: 'Western Pond Turtle',
        backgroundCaptionEsp: 'Tortuga de charcos del Pacífico',
        backgroundCaptionLatin: 'Actinemys marmorata'
    });

    Pages.insert({
        colorPalate: colorPalate,
        subPageType: 'science',
        link: 'kevin-clark',
        componentId: streams,
        parentId: streamsScienceStories,
        buttonTitle: 'Kevin Clark<br> Ecologist',
        espButtonTitle: 'Ecologista',
        buttonImage: 'sci-clark-kevin-button.jpg',
        bodyImages: [
            {fileName: 'sci-clark-kevin.jpg'},
        ],
        order: 2,
        bodyCopy: '"The Yellow-billed Cuckoo is an amazing bird that each year travels more than 10,000 miles, round trip, from South America to the tall cottonwood riparian groves in California—and back again. Its breeding cycle is one of the fastest in the avian world: the chick leaves its nest in as soon as seven days after hatching."',
        espBodyCopy: '"El cuclillo pico amarillo es un pájaro fascinante que viaja más de 10.000 millas cada año, ida y vuelta, desde Sudamérica hasta las altas arboledas ribereñas del álamo blanco en California—para repetir el viaje otra vez. Su ciclo de reproducción es uno de los más veloces en el mundo aviario: el polluelo deja su nido apenas siete días después de nacer."',
        backgroundMapClass: 'sci-streams-cuckoo',
        backgroundCaption: 'Yellow-billed Cuckoo',
        backgroundCaptionEsp: 'Cuclillo pico amarillo',
        backgroundCaptionLatin: 'Coccyzus americanus'
    });

}
