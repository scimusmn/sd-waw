Meteor.publish('components', function(options) {
  return Components.find({}, options);
});

Meteor.publish('singleComponent', function(id) {
  return id && Components.find(id);
});

Meteor.publish('posts', function(options) {
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});


Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});
