Template.componentPage.rendered = function() {
    /**
     * Define without the var to make this accessible across the events
     */
    saverEnabled = Router.current().params.query.saver;
    if (saverEnabled) {
        $('#screensaver').removeClass('animated fadeOut');
        $('#screensaver').addClass('animated fadeIn');
        $('#screensaver').show();
    }
};

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
    pages: function() {
        /**
         * Return only top level pages, no sub-pages (aka pages with defined parentIds)
         */
        return Pages.find({
            $and: [
                { componentId: this._id },
                { parentId: {$exists: false} }
            ],
        },
        {
            sort: {order: 1}
        });
    }
});
