Template.layout.helpers({
    highlightedImage: function() {
      return Session.get('highlightedImage');
    },
    highlightedImageWidth: function() {
      return (Session.get('highlightedImageWidth'));
    },
    highlightedImageHeight: function() {
      return (Session.get('highlightedImageHeight'));
    },
    highlightedImageBoxWidth: function() {
      return (Session.get('highlightedImageWidth') + 30);
    },
    highlightedImageBoxHeight: function() {
      return (Session.get('highlightedImageHeight') + 30);
    },
    highlightedImageTopMargin: function() {
      return ((768 - Session.get('highlightedImageHeight') - 30) / 2);
    }
});

Template.layout.rendered = function() {
    /**
     * Define without the var to make this accessible across the events
     *
     * 3 minute screen saver
     */
    sSaverTimeout = 180000;
    // Dev timeout
    //sSaverTimeout = 5000;
    saverEnabled = Router.current().params.query.saver;
    if (!saverEnabled) {
        saveScreen(sSaverTimeout);
    }
};

/**
 * Reset the screensaver everytime we get a mouse (touch) event
 */
Template.layout.events({
    'click #screensaver': function(event, template) {
        $('#screensaver').removeClass('animated fadeIn');
        $('#screensaver').addClass('animated fadeOut');
        setTimeout(function(){
            $('#screensaver').hide();
        }, 600);
    },

    'click': function(event, template) {
        // Reset the screensaver timer
        clearTimeout(sSaver);
        // Start the screensaver timer
        saveScreen(sSaverTimeout);
    },

    'dragstart': function(e) {
        e.preventDefault();
    },

    'click img.zoom-true': function(e) {
      var clickedImage  = $(e.currentTarget);
      console.log('clickedImage - ', clickedImage);

      var imageNaturalWidth = clickedImage[0].naturalWidth;
      var imageNaturalHeight = clickedImage[0].naturalHeight;
      var aspectRatio = imageNaturalWidth / imageNaturalHeight;
      var targetHeight = 668;
      var targetWidth = 1266;
      var imageHeight;
      var imageWidth;
      if( imageNaturalWidth > targetWidth || imageNaturalHeight > targetHeight) {
        console.log('Resizing');
        if (aspectRatio < 1) {
          // Tall
          imageHeight = targetHeight;
          imageWidth = imageNaturalWidth - ((imageNaturalHeight - targetHeight) * aspectRatio);
          console.log('Tall image');
        } else {
          // Wide
          imageWidth = targetWidth;
          imageHeight = imageNaturalHeight - ((imageNaturalWidth - targetWidth) / aspectRatio);
          if (imageHeight > targetHeight) {
            imageHeight = targetHeight;
            imageWidth = imageNaturalWidth - ((imageNaturalHeight - targetHeight) * aspectRatio);
          }
          console.log('Wide image');
        }
      } else {
        imageWidth = imageNaturalWidth;
        imageHeight = imageNaturalHeight;
      }

      Session.set('highlightedImage', clickedImage[0].currentSrc);
      Session.set('highlightedImageWidth', imageWidth);
      Session.set('highlightedImageHeight', imageHeight);

      $('.image-overlay-cover').removeClass('animated fadeOut');
      $('.image-overlay-cover').addClass('animated fadeIn');
      $('.image-overlay-cover').show();
    },

    'click .close-img': function() {
      console.log('Hide the overlay');
      $('.image-overlay-cover').removeClass('animated fadeIn');
      $('.image-overlay-cover').addClass('animated fadeOut');
      setTimeout(function(){
        $('.image-overlay-cover').hide();
      }, 500);
    },
    'click .image-overlay-cover': function() {
      console.log('Hide the overlay');
      $('.image-overlay-cover').removeClass('animated fadeIn');
      $('.image-overlay-cover').addClass('animated fadeOut');
      setTimeout(function(){
        $('.image-overlay-cover').hide();
      }, 500);
    },

    'click .image-overlay-cover img': function() {
      return false;
    },

    'mousedown .marker-pop-up .btn-close': function() {
        $('.marker-pop-up.popActive').removeClass('fadeInLeft popActive').addClass('animated fadeOutLeft');
        d3.selectAll('.marker-clicked').classed('marker-clicked', false);
    },


});

/**
 * Set a timeout.
 *
 * If it elapses, go back to the homepage
 */
function saveScreen(sSaverTimeout) {
    sSaver = setTimeout(function(){

        // If you're not on the homepage,
        // go there and send a flag to turn on the screensaver
        var componentHome = Meteor.settings.public.homeItem;
        if (Router.current().params.link != componentHome) {
            Router.go(
                'componentPage',
                {link: componentHome},
                {query: {saver: 'true'}}
            );
        }
        // If you're already on the homepage,
        // just go ahead and show the screensaver
        else {
            $('#screensaver').removeClass('animated fadeOut');
            $('#screensaver').addClass('animated fadeIn');
            $('#screensaver').show();
        }
    }, sSaverTimeout);
}
