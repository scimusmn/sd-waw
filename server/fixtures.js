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
        mural: 'tp-mural-2.jpg',
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
        bodyImages: ['torrey-pines-photo.jpg'],
        bodyImageCredits: ['FPO - Image credit']
    });

    var tpRareTree = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare tree',
        espButtonTitle: 'Árbol raro',
        userId: admin._id,
        order: 2,
        author: admin.profile.name,
        bodyCopy: 'The Torrey Pine is so rare it is found in only two places in the world—Torrey Pines State Reserve and Santa Rosa Island.',
        espBodyCopy: 'El pino de Torrey es tan raro que sólo se encuentra en dos lugares en el mundo-- Reserva Estatal Torrey Pines y la isla de Santa Rosa.',
        backgroundMapClass: 'map-tp-extent',
        bodyImage: 'tp-tree-rare.jpg'
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
        bodyImage: 'sagebrush_01.png',
        bodyImages: ['sagebrush_01.png', 'sagebrush_02.png']
    });

    var tpRareClimate = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare climate zone',
        espButtonTitle: 'Zona de clima raro',
        userId: admin._id,
        order: 4,
        author: admin.profile.name,
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
        backgroundMapClass: 'map-tp-blurred',
    });

    var tpTrails = Pages.insert({
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Torrey Pines State Reserve Trails',
        buttonImage: 'tp-explore-trails.jpg',
        espButtonTitle: 'Senderos Torrey Pines State Reserve',
        userId: admin._id,
        order: 1,
        author: admin.profile.name,
        bodyCopy: 'Torrey Pines State Reserve has X number of trails to explore on your own. Or you can try out one of many programs including docent-led children\'s programs, naturalist talks, school programs, and many more.',
        espBodyCopy: 'Torrey Pines State Reserve tiene X cantidad de senderos para explorar por su cuenta. O usted puede probar uno de los muchos programas, incluidos los niños dirigidas por maestros Programas \'s, charlas naturalistas, programas escolares, y muchos más.',
        backgroundMapClass: 'map-tp-menu-natural',
    });

    var tpTrails = Pages.insert({
        componentId: torreyPines,
        parentId: tpExplore,
        buttonTitle: 'Canyoneer Natural Walks',
        buttonImage: 'tp-explore-canyoneer.jpg',
        espButtonTitle: 'Paseos Canyoneer Natural',
        userId: admin._id,
        order: 2,
        author: admin.profile.name,
        bodyCopy: 'Begin the extension trail at the end of Del Mar Scenic Parkway. The trail forks early and turning right will follow the Margaret Fleming Nature Trail to the east side of the wide basin.',
        espBodyCopy: 'Comienza el camino de extensión al final de Del Mar Scenic Parkway. Las horquillas sendero temprano y girando a la derecha seguirán el Margaret Fleming Nature Trail hacia el lado este de la gran cuenca.',
        backgroundMapClass: 'map-tp-menu-natural',
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
