/**
 * Show and hide the map layers
 */
Template.componentPage.events({
    'click .container-map': function(e, template) {
        if ($(e.target).hasClass('natural')) {
            $(e.target).removeClass('natural');
        } else {
            $(e.target).addClass('natural');
        }
    }
});

Template.componentPage.helpers({
    dork: function() {
        return 'whort';
    },
    pages: function() {
        return Pages.find({componentId: this._id});
    }
});
