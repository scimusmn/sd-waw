/**
 * Components
 */
Meteor.publish('components', function(options) {
  return Components.find({}, options);
});

Meteor.publish('singleComponent', function(id) {
  return id && Components.find(id);
});

/**
 * Pages
 */
// Trying simple to see if I can get it to work
//Meteor.publish('pages', function() {
  //return Pages.find();
//});

Meteor.publish('pages', function(componentId) {
  return Pages.find({componentId: componentId}, {sort: {order: 1}});
  // Works
  //return Pages.find({componentId: componentId});
});

Meteor.publish('singlePage', function(id) {
  return id && Pages.find(id);
});

/**
 * OLD - Posts
 */
Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});

/**
 * OLD - Comments
 */
Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});
