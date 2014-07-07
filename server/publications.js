/**
 * Pages
 */
Meteor.publish('pages', function(options) {
  return Comments.find({componentId: componentId});
});

Meteor.publish('singlePage', function(id) {
  return id && Pages.find(id);
});

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
