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
    }

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
