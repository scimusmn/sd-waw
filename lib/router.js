Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('notifications')]
  }
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
    data: function() { return Components.findOne(this.params._id); }
  });

  this.route('pagePage', {
    path: '/pages/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singlePage', this.params._id)
      ];
    },
    data: function() { return Pages.findOne(this.params._id); }
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

Router.onBeforeAction('loading');
Router.onBeforeAction(function() { clearErrors() });
