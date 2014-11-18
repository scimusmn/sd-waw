Template.layout.rendered = function() {
    /**
     * Define without the var to make this accessible across the events
     */
    //
    // Set the screensaver
    //
    // 6 min = 360 sec = 360000 msec
    // Longer than normal since we've got some long-ish videos
    //
    // sSaverTimeout = 360000;
    //
    // Debug screensaver length
    sSaverTimeout = 5000;
    saveScreen(sSaverTimeout);
};

/**
 * Reset the screensaver everytime we get a mouse (touch) event
 */
Template.layout.events({
    'mousemove': function(event, template) {
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
        console.log('Screen saved');
        Router.go('/' + Meteor.settings.public.homeItem);
    }, sSaverTimeout);
}

