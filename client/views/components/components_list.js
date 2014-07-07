/**
 * Helpers for the Components List
 */

//Template.componentsList.helpers({

    ////this.posts.rewind();
    ////return this.posts.map(function(post, index, cursor) {
      ////post._rank = index;
      ////return post;
    ////});
  ////}

    //components: function() {
        //this.components.rewind();
        //Meteor.setTimeout(function(){
            //console.log('components this - ', this);
        //}, 5000);
        //return this.components.map(function(components, index, cursor) {
            ////post._rank = index;
            //return components;
        //});
    //}

//});

Template.componentsList.rendered = function() {
    console.log('componentsList this - ', this);
};
