Template.postsList.helpers({
  postsWithRank: function() {

    // This is throwing errors. Not sure what it does,
    // so I'm removing it for now
    //this.posts.rewind();

    return this.posts.map(function(post, index, cursor) {
      post._rank = index;
      return post;
    });
  }
});
