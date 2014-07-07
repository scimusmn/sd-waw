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
    var torreyPines = Components.insert({
        title: 'Torrey Pines',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'The Torrey Pine is a rare tree. This WAW explores its natural environment.',
        componentNum: '0416',
        bodyCopy: dimsum()
    });

    var wetlands = Components.insert({
        title: 'Wetlands',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Wetlands general description.',
        componentNum: '0316',
        bodyCopy: dimsum()
    });

    var canyons = Components.insert({
        title: 'Canyons',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Canyons general description.',
        componentNum: '0516',
        bodyCopy: dimsum()
    });

    var streams = Components.insert({
        title: 'Streams',
        userId: admin._id,
        author: admin.profile.name,
        // TODO - Not sure if I need this field
        submitted: now - i * 3600 * 1000 + 1,
        description: 'Streams general description.',
        componentNum: '0616',
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
