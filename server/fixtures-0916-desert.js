/**
* Desert
*/
var colorPalate = 'desert';

Components.remove({ 'colorPalate': colorPalate });
Pages.remove({ 'colorPalate': colorPalate });

if (Components.find( { 'colorPalate': colorPalate } ).count() === 0) {

  var desert = Components.insert({
    colorPalate: colorPalate,
    link: 'desert',
    title: 'The Colorado Desert',
    titleEsp: 'El Desierto del Colorado',
    componentNum: '0916',
    order: 8,
    mural: 'desert-mural.jpg',
  });

  Pages.insert({
    colorPalate: colorPalate,
    componentId: desert,
    link: 'where-is-it',
    buttonTitle: 'Where is it?',
    espButtonTitle: '¿Dónde está?',
    order: 1,
    bodyCopy: 'The Colorado Desert (also known as the Lower Colorado River Valley) begins just 80 miles east of the Museum and is part of the larger Sonoran Desert, which extends across parts of the American Southwest and northwestern Mexico. ',
    espBodyCopy: 'El Desierto del Colorado  (también conocido como el Valle del Río Colorado) comienza apenas ochenta millas al este del Museo y forma parte del Desierto de Sonora que lo abarca, el cual se extiende a lo largo de partes del sudoeste norteamericano y el noroeste de México.',
    backgroundMapClass: 'map-desert-where',
    bodyImages: [
      {fileName: 'desert-where.jpg'},
    ],
  });

  Pages.insert({
    colorPalate: colorPalate,
    componentId: desert,
    link: 'our-desert',
    buttonTitle: 'Our deserts',
    espButtonTitle: 'Nuestros desiertos',
    order: 2,
    bodyCopy: '<p>Southern California’s two deserts showcase different environments.</p><p>The Mojave Desert is at a higher elevation, making its climate cooler and wetter than that of its lower, warmer, and drier neighbor, the Sonoran Desert. These differences produce two distinct but equally diverse habitats.</p>',
    espBodyCopy: '<p>Los dos desiertos del sur de California exhiben ambientes naturales diferentes.</p><p>El Desierto de Mojave está a una mayor elevación, lo cual hace que su clima sea más fresco y húmedo al del Desierto de Sonora, su vecino más cálido y seco que se encuentra a meno elevación.  Estas diferencias producen dos hábitats distintos pero igualmente diversos.</p>',
    bodyImages: [
      {
        fileName: 'desert-mojave.jpg',
        imageCaption: 'Mojave Desert',
        imageCaptionEsp: 'El Desierto de Mojave',
        zoom: 'zoom-true'

      },
      {
        fileName: 'desert-sonoran.jpg',
        imageCaption: 'Sonoran Desert',
        imageCaptionEsp: 'El Desierto de Sonora',
        zoom: 'zoom-true'
      },
    ],
    backgroundMapClass: 'map-desert-our',
  });

  Pages.insert({
    colorPalate: colorPalate,
    componentId: desert,
    link: 'dry-climate',
    buttonTitle: 'Dry climate',
    espButtonTitle: 'Clima seco',
    order: 4,
    bodyCopyLayout: 'horizontal',
    bodyCopy: '<p>Although every desert has its own distinguishing features, deserts worldwide share one common trait: a scarcity of rain.',
    espBodyCopy: '<p>Si bien cada desierto tiene sus propias características que lo distinguen, los desiertos a lo largo del mundo comparten un rasgo en común: la escasez de lluvia.<p>',
    backgroundMapClass: 'map-desert-dry-climate',
  });

  var desertExplore = Pages.insert({
    colorPalate: colorPalate,
    componentId: desert,
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
    componentId: desert,
    parentId: desertExplore,
    link: 'joshua',
    buttonTitle: 'Joshua Tree National Park ',
    espButtonTitle: 'Parque Nacional Joshua Tree ',
    buttonImage: 'desert-explore-joshua-button.jpg',
    bodyImages: [
      {
        fileName: 'desert-explore-joshua.jpg',
        zoom: 'zoom-true'
      },
    ],
    order: 1,
    bodyCopy: 'Visit Joshua Tree National Park, where you can spend the day rock climbing or enjoying a leisurely hike among the spiky, fanciful Joshua Trees.',
    espBodyCopy: 'Visita el Parque Nacional Joshua Tree, donde puedes pasar el día escalando formaciones rocosas o disfrutando de una caminata tranquila entre los árboles espinosos y extraños que llevan el nombre de Joshua Tree.',
    websiteCall: 'For more information, visit:',
    websiteCallEsp: 'Para más información, visita:',
    websiteURL: 'parks.ca.gov',
    backgroundMapClass: 'map-desert-explore-joshua',
  });

  Pages.insert({
    colorPalate: colorPalate,
    subPageType: 'explore',
    componentId: desert,
    parentId: desertExplore,
    link: 'hellhole',
    buttonTitle: 'Anza-Borrego Desert State Park<br>(Hellhole Canyon/Maidenhair Falls)',
    espButtonTitle: 'Parque Estatal del Desierto Anza-Borrego<br>(Cañón Hellhole / Cascada Maidenhair)',
    buttonImage: 'desert-explore-hellhole-button.jpg',
    bodyImages: [
      {
        fileName: 'desert-explore-hellhole.jpg',
        zoom: 'zoom-true'
      },
    ],
    order: 2,
    bodyCopy: '<p> On this challenging hike, explore a hidden oasis that’s fed by a year-round spring.  </p><p>Join the Canyoneers for guided hikes in southern California.</p>',
    espBodyCopy: '<p> En esta caminata ardua, explora un oasis oculto que se alimenta de un manantial que fluye todo el año.  </p><p>Únete a los canyoneers para caminatas guiadas en el sur de California.</p>',
    websiteCall: 'For more information, visit:',
    websiteCallEsp: 'Para más información, visita:',
    websiteURL: 'sdnat.org/canyoneers',
    backgroundMapClass: 'map-desert-explore-hellhole',
  });

  Pages.insert({
    colorPalate: colorPalate,
    subPageType: 'explore',
    componentId: desert,
    parentId: desertExplore,
    link: 'morteros',
    buttonTitle: 'Anza-Borrego Desert State Park (Morteros Trail)',
    espButtonTitle: 'Parque Estatal del Desierto Anza-Borrego (Sendero Morteros)',
    buttonImage: 'desert-explore-morteros-button.jpg',
    bodyImages: [
      {
        fileName: 'desert-explore-morteros.jpg',
        zoom: 'zoom-true'
      },
    ],
    order: 3,
    bodyCopy: '<p> Hike alongside a variety of cacti and depressions in the rocks—called morteros—where native people ground up plant materials that they gathered nearby.   </p><p>Join the Canyoneers for guided hikes in southern California.</p>',
    espBodyCopy: '<p> Camina a lo largo de una variedad de cactus y depresiones en las rocas llamadas morteros donde los nativos molían plantas que recolectaban en los alrededores.  </p><p>Únete a los canyoneers para caminatas guiadas en el sur de California.</p>',
    websiteCall: 'For more information, visit:',
    websiteCallEsp: 'Para más información, visita:',
    websiteURL: 'sdnat.org/canyoneers',
    backgroundMapClass: 'map-desert-explore-morteros',
  });

  Pages.insert({
    colorPalate: colorPalate,
    subPageType: 'explore',
    componentId: desert,
    parentId: desertExplore,
    link: 'mine',
    buttonTitle: 'Anza-Borrego Desert State Park (Mine Canyon)',
    espButtonTitle: 'Parque Estatal del Desierto Anza-Borrego (Mine Canyon) ',
    buttonImage: 'desert-explore-mine-button.jpg',
    bodyImages: [
      {
        fileName: 'desert-explore-mine.jpg',
        zoom: 'zoom-true'
      },
    ],
    order: 4,
    bodyCopy: '<p> On this desert adventure, you’ll encounter abandoned gold mines and the Teddy-bear Cholla. Don’t be fooled by its name: this snuggly looking cactus is anything but cuddly!  </p><p>Join the Canyoneers for guided hikes in southern California.</p>',
    espBodyCopy: '<p> En esta aventura en el desierto te toparás con minas de oro abandonadas y el cactus oso de peluche. No te dejes engañar por su nombre: ¡este cactus al cual dan ganas de abrazar no es para nada afectuoso, así que no lo hagas!  </p><p>Únete a los canyoneers para caminatas guiadas en el sur de California.</p>',
    websiteCall: 'For more information, visit:',
    websiteCallEsp: 'Para más información, visita:',
    websiteURL: 'sdnat.org/canyoneers',
    backgroundMapClass: 'map-desert-explore-mine',
  });

  var desertScienceStories = Pages.insert({
    colorPalate: colorPalate,
    link: 'science',
    componentId: desert,
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
    link: 'margi-dykens',
    componentId: desert,
    parentId: desertScienceStories,
    buttonTitle: 'Margi Dykens<br>Registrar and director of research library',
    espButtonTitle: 'Directora de registro y de la biblioteca de investigación',
    buttonImage: 'sci-dykens-margi-button.jpg',
    bodyImages: [
      {fileName: 'sci-dykens-margi-full.jpg'},
    ],
    order: 1,
    bodyCopy: '"Cacti are very challenging subjects for illustrators. The Teddy-bear Cholla may appear soft and cuddly, but it is covered with tiny hair-like spines—called glochids—that are almost invisible. It will cling to any animal or person brushing up against it, making it difficult to examine closely and draw."',
    espBodyCopy: '"Los cactus son un tema que siempre presenta un reto a los dibujantes. Cholla del oso quizás parezca suave y mimoso pero está cubierto de pequeños vellos espinosos—llamados gloquidios—que son casi invisibles. Se adhieren a cualquier animal o persona que los roza, lo cual dificulta el poder examinarlo y dibujar cuidadosamente al cactus".',
    backgroundMapClass: 'sci-desert-cholla',
    backgroundCaption: 'Teddy-bear Cholla',
    backgroundCaptionEsp: 'Cholla del oso',
    backgroundCaptionLatin: 'Cylindropuntia bigeloviii var. bigelovii'
  });

  Pages.insert({
    colorPalate: colorPalate,
    subPageType: 'science',
    link: 'brad-hollingsworth',
    componentId: desert,
    parentId: desertScienceStories,
    buttonTitle: 'Brad Hollingsworth<br>Curator of herpetology',
    espButtonTitle: 'Curador de herpetología',
    buttonImage: 'sci-hollingsworth-brad-button.jpg',
    bodyImages: [
      {fileName: 'sci-hollingsworth-brad-full.jpg'},
    ],
    order: 2,
    bodyCopy: '"The Desert Iguana, one of my favorite lizards, is among the most heat-adapted animals in the world. It can tolerate body temperatures above 110˚F, making it perfect for the blazing desert heat. It gets most of its moisture from desert plants and likes to eat yellow flowers when they’re in bloom."',
    espBodyCopy: '"La iguana del desierto, una de mis lagartijas favoritas, es uno de los animales mejor adaptados al calor en el mundo. Puede tolerar temperaturas corporales superiores a los 110 grados Fahrenheit, y esto hace que sea perfecta para el abrasador calor del desierto.  Recibe la mayor parte de su humedad de las plantas del desierto y le gusta comer flores amarillas cuando éstas brotan".',
    backgroundMapClass: 'sci-desert-iguana',
    backgroundCaption: 'Desert Iguana',
    backgroundCaptionEsp: 'Iguana del desierto',
    backgroundCaptionLatin: 'Dipsosaurus dorsalis'
  });

}
