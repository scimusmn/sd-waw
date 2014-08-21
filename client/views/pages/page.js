Template.pagePage.rendered = function() {
    /**
     * Animate objects once the page is rendered
     */
    $('.container-map').addClass('animated fadeIn');
    if ( $('.body-copy.rare-climate-zone').length || $('.body-copy.our-wetlands').length ) {
        $('.body-copy').addClass('animated fadeInUp');
        //$('.body-text').wrapInner('<div class="row"></div>');
        //$('.body-text p.eng').replaceWith(function(){
            //return $("<div />", {html: $(this).html()}).addClass('riparian');
        //});

    }
    else {
        $('.body-copy').addClass('animated fadeInLeft');
    }

    $('.body-copy').css('-webkit-animation-duration', '400ms');
    $('.body-copy').css('animation-duration', '400ms');
    $('.subpage-button, h3').addClass('animated fadeInDown ');
    $('.subpage-button ').css('animation-duration', '300ms');
    $('.canyoneer-natural-walks').css('animation-duration', '400ms');
    $('h3').css('animation-duration', '500ms');

    //var canvas = $('.marker canvas');
    var markerOrder = $('.marker .order').text();

    /**
     * Marker dot
     */
    $('.marker .marker-dot canvas').each(function(index, element) {
        var arrowLeft = $('.marker-dot').attr('arrow-left');
        var arrowTop = $('.marker-dot').attr('arrow-top');
        var context = element.getContext('2d');
        var context = element.getContext('2d');
        var centerX = element.width / 2;
        var centerY = element.height / 2;
        var radius = 30;
        context.beginPath();
        strokeWidth = 4
        context.lineWidth = strokeWidth;
        context.arc(35 , 100, radius, 0, 2 * Math.PI, false);
        //context.arc(element.width - radius - strokeWidth, radius + strokeWidth, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'transparent';
        context.fill();
        context.strokeStyle = '#527193';
        context.stroke();
        context.beginPath();
        context.moveTo(46, 74);

        context.lineTo(arrowLeft, arrowTop);
        context.lineWidth = 4;
        context.strokeStyle = '#527193';
        context.stroke();
    });

    /**
     * Marker line
     */
    //$('.marker .marker-arrow canvas').each(function(index, element) {
        //var context = element.getContext('2d');
        //var context = element.getContext('2d');
        //context.beginPath();
        //context.moveTo(20, 20);
        //context.lineTo(40, 0);
        //context.lineWidth = 4;
        //context.strokeStyle = '#527193';
        //context.stroke();
    //});

};

Template.pagePage.events({
    /**
     * Custom actions for page links
     */
    'click .subpage-button': function(e) {
        e.preventDefault();
        destination = this._id;

        /**
         * Animate the page before we leave. We're mostly removing
         * the layers on top of the map
         *
         * TODO - Make this more DRY
         */
        var animateContentOut = function() {
            if ($('.subpage-selector').length) {
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
                $('.container-map').addClass('animated fadeOut');
            }
        }
        animateContentOut();

        window.setTimeout(function() {
            goDestination();
        }, 600);
        function goDestination() {
            Router.go('subPagePage', {_id: destination});
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
