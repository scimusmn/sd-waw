/**
 * Iron Router Common templates
 */
Router.configure({

    /**
     * Primary layout template
     */
    layoutTemplate: 'layout',

    /**
     * Page not found template
     */
     notFoundTemplate: 'notFound',

    /**
     * Loading template
     *
     * Displays while waitOn calls are waiting
     */
    loadingTemplate: 'loading',

    /**
     * Wait for global subscriptions
     *
     * Put global waits in here for things like notifications, e.g.
     * waitOn: function() {
     *     return [Meteor.subscribe('notifications')]
     * }
     *
     * In our app there aren't any global subscriptions right now.
     */

});


/**
 * Build a controller for showing components
 */
ComponentsListController = RouteController.extend({
    template: 'componentsList',
    increment: 10,
    limit: function() {
        return parseInt(this.params.componentsLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: this.sort, limit: this.limit()};
    },
    waitOn: function() {
        return Meteor.subscribe('components', this.findOptions());
    },
    components: function() {
        return Components.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.components().count() === this.limit();
        return {
            components: this.components(),
        };
    }
});


/**
 * Collect the newest components
 *
 * TODO: sort this with more meaningful information
 */
NewComponentsListController = ComponentsListController.extend({
    sort: {order: 1, _id: -1},
});


/**
 * Map URLs to templates
 */
Router.map(function() {

    /**
     * List all component on the homepage
     *
     * Useful in the dev stage
     */
    this.route('home', {
        path: '/',
        controller: NewComponentsListController
    });

    /**
     * Specific component homepage
     *
     * Show the component information and links to the pages in that component
     */
    this.route('componentPage', {
        path: '/:link',
        waitOn: function() {
            var result = Components.findOne( { 'link': this.params.link } );
            return [
                Meteor.subscribe('singleComponent', this.params.link),
                Meteor.subscribe('pages', result._id)
            ];
        },
        data: function() {
            var result = Components.findOne( { 'link': this.params.link } );
            return result;
        },
    });

    /**
     * Each top level page in the component
     */
    this.route('page', {
        path: '/:colorPalate/:link',
        waitOn: function() {
            return [
                Meteor.subscribe('singlePage', this.params.colorPalate, this.params.link)
            ];
        },
        data: function() {
            var result = Pages.findOne( { 'link': this.params.link } );
            return result;
        }
    });

    this.route('subPage', {
        path: '/:colorPalate/:subPageType/:link',
        waitOn: function() {
            console.log('link - ', this.params.link);
            console.log('colorPalate - ', this.params.colorPalate);
            return [
                Meteor.subscribe('singlePage', this.params.colorPalate, this.params.link)
            ];
        },
        data: function() {
            var result = Pages.findOne( { 'link': this.params.link } );
            return result;
        }
    });

});


/**
 * Hook for requiring a login
 *
 * For the future. We could make a feature that would allow people to edit
 * the database on the system
 */
var requireLogin = function(pause) {
    if (! Meteor.user()) {
        if (Meteor.loggingIn())
            this.render(this.loadingTemplate);
        else
            this.render('accessDenied');

        pause();
    }
}

/**
 * Animation control on route change (page navigation)
 */
var IR_AfterHooks = {
    fadeContentOut: function() {
        $('#content').addClass("page-animation fadeOut");
    }
};

/**
 * Call the loading template while waiting for the page
 */
Router.onBeforeAction('loading');

/**
 * After actions
 */
animateContentIn = function() {
    return $('#content').addClass("animated fadeIn");
}
