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
        console.log(delay);
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
