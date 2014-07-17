Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('notifications')]
  }
});

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
 */
NewComponentsListController = ComponentsListController.extend({
  sort: {order: 1, _id: -1},
});

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

  this.route('postPage', {
    path: '/posts/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singlePost', this.params._id),
        Meteor.subscribe('comments', this.params._id)
      ];
    },
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    waitOn: function() {
      return Meteor.subscribe('singlePost', this.params._id);
    },
    data: function() { return Posts.findOne(this.params._id); }
  });

  this.route('postSubmit', {
    path: '/submit',
    progress: {enabled: false}
  });

});


var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');

    pause();
  }
}

var IR_AfterHooks = {
    fadeContentOut: function() {
        $('#content').addClass("page-animation fadeOut");
    }
};

//Router.onBeforeAction(IR_AfterHooks.fadeContentOut);
Router.onBeforeAction('loading');
Router.onBeforeAction(function() { clearErrors() });
