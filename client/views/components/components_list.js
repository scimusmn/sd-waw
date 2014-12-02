/**
 * Helpers for the Component item
 */
Template.componentItem.helpers({
    /**
     * Set component item styles to cascafe-fade in
     */
    attributes: function() {
        order = this.order;
        var attributes = {};
        var delta = 50;
        // Add an expanding delay to achieve cascade effect
        delay = ((order * 100) + 0);
        attributes.style = [
            'transition-duration: 400ms;',
            'transition-timing-function: linear;',
            'transition-delay: ' + delay + 'ms;'
        ];
        attributes.class = 'component loading'
        return attributes;
    }
});

Template.componentItem.rendered = function() {
    /**
     * Start the animation once the page is rendered.
     *
     * We start the animation by removing the loading style. The loading style
     * has opacity set to zero and the other styles will overrride this once
     * loading is removed.
     */
    var $item = $(this.find('.component'));
    Meteor.defer(function() {
        $item.removeClass('loading');
    });
}

Template.componentItem.events({
    /**
     * Custom actions for page links
     */
    'click .component-current': function(e) {

        e.preventDefault();
        destination = this;
        clicked = e.target;

        /**
         * Animate the page before we leave. We're mostly removing
         * the layers on top of the map
         */
        var animateContentOut = function() {
            // Animate all overlays
            $(".component").has(clicked).addClass('animated');
            $(".component").has(clicked).addClass('clickDown');
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
            ga('send', 'event', 'page', 'click', 'admin', '1');
            Router.go('componentPage', destination);
        }
    }
})

