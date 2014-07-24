Template.pagePage.rendered = function() {
    /**
     * Animate objects once the page is rendered
     */
    $('.container-map').addClass('animated fadeIn');
    $('.body-copy').addClass('animated fadeInLeft');
    $('.body-copy').css('-webkit-animation-duration', '400ms');
    $('.body-copy').css('animation-duration', '400ms');
};

Template.pagePage.events({
    /**
     * Custom actions for page links
     */
    'click .btn-home': function(e) {

        e.preventDefault();
        destination = this.componentId;
        console.log(destination);

        /**
         * Animate the page before we leave. We're mostly removing
         * the layers on top of the map
         */
        var animateContentOut = function() {
            // Animate all overlays
            $('.body-copy').addClass('animated fadeOutLeft');
            $('.container-map').addClass('animated fadeOut');
        }
        animateContentOut();

        window.setTimeout(function() {
            goDestination();
        }, 600);
        function goDestination() {
            Router.go('componentPage', {_id: destination});
        }
    }
});
