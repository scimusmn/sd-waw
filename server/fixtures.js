/**
 * Fixture data
 *
 * This sets up the Mongo DB database
 */
var now = new Date().getTime();
dimsum.configure({ flavor: 'jabberwocky' });

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
 * Setup admin user
 */
if (Components.find().count() === 0) {

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
        bodyCopy: 'Torrey Pines State Reserve is only 18 miles from theNat and is the setting for the scene you are looking at.',
        espBodyCopy: 'Torrey Pines State Reserve está a sólo 18 millas de theNat y es el escenario de la escena que está viendo.'
    });

    var tpRareTree = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare tree',
        espButtonTitle: 'Árbol raro',
        userId: admin._id,
        order: 2,
        author: admin.profile.name,
    });

    var tpRareHabitat = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare habitat',
        espButtonTitle: 'Hábitat raros',
        userId: admin._id,
        order: 3,
        author: admin.profile.name,
    });

    var tpRareClimate = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Rare climate zone',
        espButtonTitle: 'Zona de clima raro',
        userId: admin._id,
        order: 4,
        author: admin.profile.name,
    });

    var tpExplore = Pages.insert({
        componentId: torreyPines,
        buttonTitle: 'Explore',
        espButtonTitle: 'Explorá',
        userId: admin._id,
        order: 5,
        author: admin.profile.name,
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

if (Posts.find().count() === 0) {
    for (var i = 0; i < 10; i++) {
        Posts.insert({
            title: 'Test post #' + i,
            author: admin.profile.name,
            userId: admin._id,
            url: 'http://google.com/?q=test-' + i,
            submitted: now - i * 3600 * 1000 + 1,
            commentsCount: 0,
            upvoters: [], votes: 0
        });
    }

}
