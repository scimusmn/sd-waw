/**
 * Components
 */
Meteor.publish('components', function(options) {
    return Components.find({}, options);
});

Meteor.publish('singleComponent', function(link) {
    return Components.find( { 'link': link } );
});

/**
 * Pages
 */
Meteor.publish('pages', function(componentId) {
    return Pages.find({componentId: componentId}, {sort: {order: 1}});
});

Meteor.publish('singlePage', function(colorPalate, link) {
    /**
     * Return any page with the URL ID
     * as well as any subpages with the same parentId
     */
    return Pages.find( { $and: [ { 'colorPalate': colorPalate, 'link': link } ] } );
    //return id && Pages.find( { $or: [ {_id: id}, {parentId: id} ] } );
});
