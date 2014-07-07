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
    for (var i = 0; i < 10; i++) {
        Components.insert({
            title: 'Test component #' + i,
            author: admin.profile.name,
            userId: admin._id,
            submitted: now - i * 3600 * 1000 + 1,
            bodyCopy: dimsum()
        });
    }
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
