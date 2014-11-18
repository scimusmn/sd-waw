Template.subPage.rendered = function() {
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

Template.subPage.events({
    'click .btn-home': function(e) {

        e.preventDefault();
        var colorPalate = this.colorPalate;
        var link = this.subPageType;

        /**
         * Animate the page before we leave. We're mostly removing
         * the layers on top of the map
         */
        var animateContentOut = function() {
            // Animate all overlays
            $('.container-map').addClass('animated fadeOut');
            if ($('.body-copy.horizontal').length) {
                $('.body-copy').addClass('animated fadeOutDownCustom');
            }
            else if ($('.subpage-selector').length) {
                $('.subpage-selector-header h3').addClass('animated fadeOutUp');
                $('.subpage-button-1').css('-webkit-animation-delay', '.15s');
                $('.subpage-button-2').css('-webkit-animation-delay', '.1s');
                $('.subpage-button-3').css('-webkit-animation-delay', '.05s');
                $('.subpage-button-4').css('-webkit-animation-delay', '.0s');
                $('.subpage-button').addClass('animated fadeOutUp');
                $('.subpage-selector-header h3').addClass('animated fadeOutUp');
                $('.btn-home').addClass('animated fadeOutDownCustom');
            }
            else {
                $('.body-copy').addClass('animated fadeOutLeft');
            }
        }
        animateContentOut();

        window.setTimeout(function() {
            goDestination();
        }, 600);
        function goDestination() {
            Router.go('page', {colorPalate: colorPalate, link: link});
        }
    }
});
