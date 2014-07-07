/**
 * Helpers for the component item
 */
Template.componentItem.helpers({
    attributes: function() {
        order = this.order;
        var attributes = {};
        var delta = 50;
        delay = ((order * 100) + 0);
        console.log(delay);
        attributes.style = [
            'transition-duration: 400ms;',
            'transition-timing-function: linear;',
            //'transition-timing-function: cubic-bezier(1.000, 0.000, 0.000, 1.000);',
            'transition-delay: ' + delay + 'ms;'
        ];
        attributes.class = 'component loading'
        return attributes;
    }
});

Template.componentItem.rendered = function() {
    var $item = $(this.find('.component'));
    Meteor.defer(function() {
        $item.removeClass('loading');
    });
}
    //Meteor.setTimeout(function(){
        //console.log('componentItem this - ', this);
    //}, 5000);

    //var $item = $(this.find('.component'));
    //Meteor.defer(function() {
        //$item.each(function(i) {
            //setTimeout(function(){
                //console.log(this);
            //});
        //});
    //});
//
