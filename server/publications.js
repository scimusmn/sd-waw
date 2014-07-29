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
Meteor.publish('pages', function(componentId) {
  return Pages.find({componentId: componentId}, {sort: {order: 1}});
  // Works
  //return Pages.find({componentId: componentId});
});

Meteor.publish('singlePage', function(id) {
    /**
     * Return any page with the URL ID
     * as well as any subpages with the same parentId
     */
    return id && Pages.find( { $or: [ {_id: id}, {parentId: id} ] } );
});

/**
 * OLD - Comments
 *
 * TODO - figure out why we can't remove this. This should be done with
 */
Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});
