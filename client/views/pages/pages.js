Template.page.helpers({
    /**
     * Define the attributes for each page link
     */
    attributes: function() {
        pageId = this.buttonTitle;
        pageClass = pageId.replace(/\s+/g, '-').toLowerCase();

        /**
         * Stagger the appearance animation for each link so that they
         * cascade in.
         */
        order = this.order;
        var attributes = {};
        var delta = 50;
        delay = ((order * 50) + 0);
        attributes.style = [
            'transition-duration: 300ms;',
            'transition-timing-function: cubic-bezier(0.330, 0.005, 0.000, 1.000);',
            'transition-delay: ' + delay + 'ms;'
        ];
        attributes.class = [
            'btn ',
            'btn-block ',
            pageClass + ' ',
            'tp-' + order + ' ',
            'loading'
        ]

        return attributes;
    },
    pageClass: function() {
    },
});

Template.page.rendered = function() {
    $('.container-map').addClass('animated fadeIn');

    var $item = $(this.find('.btn'));
    Meteor.defer(function() {
        $item.removeClass('loading');
    });
};

Template.page.events({
    /**
     * Custom actions for page links
     */
    'click .btn': function(e) {

        e.preventDefault();
        destination = this;

        /**
         * Animate the page before we leave. We're mostly removing
         * the layers on top of the map
         */
        var animateContentOut = function() {
            // Animate all overlays
            $('.postcard, .welcome-title, .menu-footer, .container-map').addClass('animated');

            // Random time for each overlay so they don't look too uniform
            $('.postcard').css('-webkit-animation-duration', '1.5s');
            $('.postcard').css('animation-duration', '1.5s');

            // Move them all off the canvas
            $('.postcard').addClass('fadeOutDownBigLeft');
            $('.welcome-title, .menu-footer').addClass('fadeOutDownBig');

            $('.container-map').css('-webkit-animation-duration', '.5s');
            $('.container-map').css('animation-duration', '.5s');
            $('.container-map').addClass('zoomInBig');

        }
        animateContentOut();

        /**
         * Wait for the animation to complete before navigating away
         *
         * We do this here instead of the router because it allows us to
         * control the navigation without hacking the router core.
         */
        window.setTimeout(function() {
            goDestination();
        }, 500);
        function goDestination() {
            Router.go('pagePage', destination);
        }
    }
})
