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

    var wetlands = Components.insert({
        title: 'Wetlands',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Wetlands general description.',
        componentNum: '0316',
        order: 1,
        bodyCopy: dimsum()
    });

    var torreyPines = Components.insert({
        title: 'Welcome to Torrey Pines',
        espTitle: 'Bienvenido a Torrey Pines',
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
        componentId: torreyPines,
        buttonTitle: 'Where is it?',
        espButtonTitle: '¿Dónde está?',
        userId: admin._id,
        order: 1,
        author: admin.profile.name,
        bodyCopy: 'Torrey Pines State Natural Reserve, the setting for the scene in front of you, is just 18 miles from the Museum.',
        espBodyCopy: 'Reserva Natural Torrey Pines State, el escenario de la escena delante de usted, está a sólo 18 km del Museo.',
        backgroundMapClass: 'map-tp-park',
        bodyImages: [
            {fileName: 'torrey-pines-photo.jpg', imageCredit: 'TBD - Bill Evarts Photograph, Torrey Pines Landscape and Legacy p.1' },
        ],
    });

    var tpRareTree = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare tree',
        espButtonTitle: 'Árbol raro',
        userId: admin._id,
        order: 2,
        author: admin.profile.name,
        bodyCopy: 'The Torrey Pine is found in only two places: Torrey Pines State Natural Reserve and Santa Rosa Island.',
        espBodyCopy: 'El pino de Torrey se encuentra solamente en dos lugares: Torrey Pines Reserva Natural del Estado y la isla de Santa Rosa.',
        backgroundMapClass: 'map-tp-extent',
        bodyImages: [
            {fileName: 'tp-tree-rare.jpg', imageCredit: 'TBD - Bill Evarts Photograph, Torrey Pines Landscape and Legacy p. 64' },
        ],
    });

    var tpRareHabitat = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare habitat',
        espButtonTitle: 'Hábitat raros',
        userId: admin._id,
        order: 3,
        author: admin.profile.name,
        bodyCopy: '<p>Torrey Pines State Reserve is one of the last places where you can see coastal sage scrub habitat. Land development and the introduction of non-native species have eliminated over __% of this habitat in southern California.</p><p>Coastal sage scrub is characterized by soft-leaved, fragrant shrubs. You will often find California Sagebrush and California Buckwheat here.</p>',
        espBodyCopy: '<p>Torrey Pines State Reserve es uno de los últimos lugares donde se puede ver el hábitat de matorrales de salvia costera. Desarrollo de la tierra y la introducción de especies no nativas se han eliminado más de ___% de este hábitat en el sur de California.</p><p>Matorral costero se caracteriza por arbustos de hojas suaves y fragantes. Usted encontrará a menudo California Artemisa y California alforfón aquí.</p>',
        backgroundMapClass: 'map-tp-floristic',
        bodyImages: [
            {fileName: 'tp-habitat-sagebrush.png', imageCredit: 'TBD - Stonebird', imageCaption: 'California Sagebrush<br><i>Artemisia californica</i>' },
            {fileName: 'tp-habitat-cactus.png', imageCredit: 'TBD - Melli', imageCaption: 'Coast Prickly-pear<br><i>Opuntia littoralis</i>'  },
        ],
    });

    var tpRareClimate = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare climate zone',
        espButtonTitle: 'Zona de clima raro',
        userId: admin._id,
        order: 4,
        author: admin.profile.name,
        bodyCopyLayout: 'horizontal',
        bodyCopy: '<p>Coastal California is one of only five places in the world known as a Mediterranean climate zones.</p><p>Coastal sage scrub plants are specially adapted to surviving the mild winters and dry, hot summers typical of these Mediterranean climate zones.</p>',
        espBodyCopy: '<p>Costera de California es uno de los cinco lugares en el mundo conocidos como zonas de clima mediterráneo.</p><p>Plantas de matorral costero están especialmente adaptados para sobrevivir a los inviernos suaves y veranos secos y calientes típicos de estas zonas de clima mediterráneo.</p>',
        backgroundMapClass: 'map-tp-med',
    });

    var tpExplore = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Explore',
        espButtonTitle: 'Explorá',
        userId: admin._id,
        order: 5,
        author: admin.profile.name,
        bodyCopy: '',
        espBodyCopy: '',
        backgroundMapClass: 'map-tp-explore',
    });

    var tpExploreReserve = Pages.insert({
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Torrey Pines<br>State Natural Reserve',
        espButtonTitle: 'Torrey Pines<br>State Natural Reserve',
        buttonImage: 'tp-explore-reserve.jpg',
        bodyImages: [
            {fileName: 'tp-explore-reserve-full.jpg', imageCredit: 'credit', imageCaption: 'captions' },
        ],
        order: 1,
        bodyCopy: 'Visit Torrey Pines State Natural Reserve—one of the last places where you can find coastal sage scrub habitat, which is disappearing due to real estate development. For more information, visit [TBD - website link].',
        espBodyCopy: 'Reserva uno Natural Visita Torrey Pines State de los últimos lugares donde se puede encontrar hábitat de matorrales de salvia costera, que está desapareciendo debido al desarrollo inmobiliario. Para obtener más información, visite [TBD - enlace al sitio web].',
        backgroundMapClass: 'map-tp-park',
    });

    var tpExploreCrest = Pages.insert({
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Crest Canyon<br>Open Space Park Preserve',
        espButtonTitle: 'Cresta Canyon<br>Abrir Space Park Preserve',
        buttonImage: 'tp-explore-crest.png',
        bodyImages: [
            {fileName: 'tp-explore-crest-full.png', imageCredit: '', imageCaption: '' },
        ],
        order: 2,
        bodyCopy: '<p>Stroll through this coastal canyon, south of San Dieguito Lagoon, and you’ll behold a tapestry of native and non-native plants.</p><p>Join the Canyoneers for this and other guided hikes in southern California. For more information, visit [TBD website link].</p>',
        espBodyCopy: '<p>paseo por este cañón costero, al sur de la Laguna San Dieguito, y te he aquí un tapiz de plantas nativas y no nativas. </p><p> Únete a los cañoneros para esta y otras caminatas guiadas en el sur de California. Para obtener más información, visite [TBD enlace al sitio web].</p>',
        backgroundMapClass: 'map-tp-explore-crest',
    });

    var tpExploreBayside = Pages.insert({
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Bayside Trail,<br>Cabrillo National Monument',
        espButtonTitle: 'Bayside Trail,<br>Monumento Nacional Cabrillo',
        buttonImage: 'tp-explore-bayside.png',
        bodyImages: [
            {fileName: 'tp-explore-bayside-full.png', imageCredit: '', imageCaption: '' },
        ],
        order: 3,
        bodyCopy: '<p>Encounter windswept chaparral and coastal sage scrub clinging to the cliffs that overlook San Diego harbor.</p><p>Join the Canyoneers for this and other guided hikes in southern California. For more information, visit [TBD - website link].</p>',
        espBodyCopy: '<p> Encuentro chaparral costero azotado por el viento y el apego de matorrales de salvia a los acantilados que dan a puerto de San Diego. </p> <p> Ingreso de los cañoneros para esta y otras caminatas guiadas en el sur de California. Para obtener más información, visite [TBD - enlace al sitio web]. </p>',
        backgroundMapClass: 'map-tp-explore-bayside',
    });

    var tpExploreMiners = Pages.insert({
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Miner\'s Loop,<br>Black Mountain Open Space Park',
        espButtonTitle: 'Loop de minero,<br>Cerro Negro Abrir Space Park',
        buttonImage: 'tp-explore-miners.png',
        bodyImages: [
            {fileName: 'tp-explore-miners-full.png', imageCredit: '', imageCaption: '' },
        ],
        order: 4,
        bodyCopy: '<p>Hike through coastal sage scrub and chaparral and see the remains of an old arsenic mine. If you’re lucky, you might spot a quail! </p><p>Join the Canyoneers for this and other guided hikes in southern California. For more information, visit [TBD - website link].</p>',
        espBodyCopy: '<p> Caminata a través de matorral costero y chaparral y ver los restos de una antigua mina de arsénico. Si tienes suerte, se podrá encontrar con una codorniz! </p> <p> Únete a los cañoneros por esta y otras caminatas guiadas en el sur de California. Para obtener más información, visite [TBD - enlace al sitio web]. </p>',
        backgroundMapClass: 'map-tp-explore-miners',
    });

    var tpScienceStories = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Science stories',
        espButtonTitle: 'Historias de ciencia',
        userId: admin._id,
        order: 6,
        author: admin.profile.name,
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
