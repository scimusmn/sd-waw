Template.page.helpers({
    attributes: function() {
        pageId = this.buttonTitle;
        //pageClass = pageId.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        pageClass = pageId.replace(/\s+/g, '-').toLowerCase();

        order = this.order;
        var attributes = {};
        var delta = 50;
        delay = ((order * 50) + 0);
        attributes.style = [
            'transition-duration: 300ms;',
            //'transition-timing-function: linear;',
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
    var $item = $(this.find('.btn'));
    Meteor.defer(function() {
        $item.removeClass('loading');
    });
};
