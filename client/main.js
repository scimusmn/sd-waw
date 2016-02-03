if (Meteor.isClient) {

  /**
  * Set body styles for showing or hiding the cursor based on settings
  *
  * We show the cursor in development for obvious reasons, but need to hide
  * it when the system is in production, touch-screen.
  */
  if (Meteor.settings &&
    Meteor.settings.public &&
    Meteor.settings.public.cursor) {

      Meteor.startup(function() {
        console.log('body - ', $('body'));
        $('body').addClass('show-cursor');
      });

    } else {
      Meteor.startup(function() {
        console.log('body - ', $('body'));
        $('body').addClass('hide-cursor');
      });
    }
  }
