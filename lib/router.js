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
     *
     * TODO create this template with a link home
     * notFoundTemplate: 'notFound',
     */

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

    this.route('home', {
        path: '/',
        controller: NewComponentsListController
    });

    this.route('componentPage', {
        path: '/components/:_id',
        waitOn: function() {
            return [
                Meteor.subscribe('singleComponent', this.params._id),
                Meteor.subscribe('pages', this.params._id)
            ];
        },
        data: function() { return Components.findOne(this.params._id); },
    });

    this.route('pagePage', {
        path: '/pages/:_id',
        waitOn: function() {
            return [
                Meteor.subscribe('singlePage', this.params._id)
            ];
        },
        data: function() { return Pages.findOne(this.params._id); },
        onAfterAction: function() {
            return animateContentIn();
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

// cache the original Router.go method
//var go = Router.go;
//Router.go = function () {
    //var routeObject = this;

    //// Click
    //console.log('Route called...waiting 1 second');
    //console.log('routeObject', routeObject);

    // 1 sec later
    //timeoutID = this.setTimeout(slowAlert, 1000);
    //function slowAlert(go) {
        //console.log('slowAlert this', this);
    //}
    //setTimeout(console.log('after'), 1000);

    //var fakeRouter = function(routeObject, arguments){
        //go.apply(routeObject, arguments);
    //}


    //setTimeout(function(this, arguments){
        //console.log('Going');
        //go.apply(this, arguments);
    //}, 1000);

//};

//Router.onAfterAction(animateContentIn)
