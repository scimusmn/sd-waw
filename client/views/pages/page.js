Template.pagePage.rendered = function() {
    /**
     * Animate objects once the page is rendered
     */
    $('.container-map').addClass('animated fadeIn');
    $('.body-copy').addClass('animated fadeInLeft');
    $('.body-copy').css('-webkit-animation-duration', '400ms');
    $('.body-copy').css('animation-duration', '400ms');
    $('.subpage-button, h3').addClass('animated fadeInDown ');
    $('.subpage-button ').css('animation-duration', '300ms');
    $('.canyoneer-natural-walks').css('animation-duration', '400ms');
    $('h3').css('animation-duration', '500ms');
};

Template.pagePage.events({
    /**
     * Custom actions for page links
     */
    'click .subpage-button': function(e) {
        e.preventDefault();
        console.log("this: ", this);
        destination = this._id;

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
            Router.go('pagePage', {_id: destination});
        }
    },
    'click .btn-home': function(e) {

        e.preventDefault();
        destination = this.componentId;

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

Template.pagePage.helpers({
    doorf: function() {
        return "well of course";
    },
    subPages: function() {
        console.log("This _is", this._id);
        data = Pages.find({parentId: this._id}, {sort: {order: 1}});
        if (data.count()) {
            return data;
        }
        else {
            return false;
        }
    }
});
