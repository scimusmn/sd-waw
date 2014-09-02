Template.pagePage.rendered = function() {
    /**
     * Display the mouse position for dev marker placement
     */
    $(".wetlands").click(function(e){
        var parentOffset = $(this).parent().offset();
        var relX = e.pageX - parentOffset.left;
        $('.mouse-x').text(relX);
        var relY = e.pageY - parentOffset.top;
        $('.mouse-y').text(relY);
    });

    /**
     * Animate objects once the page is rendered
     */
    $('.container-map').addClass('animated fadeIn');
    $('.markers').addClass('animated fadeIn');
    if ( $('.body-copy.rare-climate-zone').length || $('.body-copy.our-wetlands').length ) {
        $('.body-copy').addClass('animated fadeInUp');
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

    /**
     * Then/Now slider for comparison pages
     */
    if ($('.map-wet-then-now').length) {
        /**
         * Starting handle position
         */
        $(".top-image").css('width', '75%');
        var canvasHeight = $('#handle').height();
        var canvasWidth = $('#handle').width();
        var canvasLeft = ((1366 / 4) * 3) - (canvasWidth / 2);
        var canvasTop = ((768 / 2) - (canvasHeight / 2));
        $('#handle').css('top', canvasTop + 'px');
        $('#handle').css('left',  canvasLeft + 'px');

        $(".before-after-slider").mousemove(
            function(e) {
            // get the mouse x (horizontal) position and offset of the div
            var offset =  $(this).offset();
            var iTopWidth = (e.pageX - offset.left);

            // set width of bottomimage div
            $(this).find(".top-image").width(iTopWidth);
            $('#handle').css('left', iTopWidth - (canvasWidth / 2));
        }
        );
        /**
         * Draw the little handle and arrows for the top image
         */
        var handleCanvas = document.getElementById('handle');
        var context = handleCanvas.getContext('2d');

        context.beginPath();
        context.moveTo(10, ((handleCanvas.height / 2) - 10));
        context.lineTo(10, ((handleCanvas.height / 2) + 10));
        context.lineTo(0, ( handleCanvas.height / 2 ));
        context.lineTo(10, ((handleCanvas.height / 2) - 10));
        context.fill();
        var boxWidth = 5.5;
        context.rect(((handleCanvas.width / 2) - (boxWidth / 2)), (handleCanvas.height / 3), boxWidth, (handleCanvas.height / 3));
        context.fillStyle = 'white';
        context.fill();
        context.moveTo((handleCanvas.width - 10), ((handleCanvas.height / 2) - 10));
        context.lineTo((handleCanvas.width - 10), ((handleCanvas.height / 2) + 10));
        context.lineTo(handleCanvas.width, ( handleCanvas.height / 2 ));
        context.lineTo((handleCanvas.width - 10), ((handleCanvas.height / 2) - 10));
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = '#888';
        context.stroke();
    }

    /**
     * Map markers
     */
    $('.marker canvas').each(function(index, element) {
        var context = element.getContext('2d');
        var strokeWidth = 2;

        /**
         * Get circle and pointer position from the database element
         *
         * This is laoded into the DOM using the Spacebars template
         * then we use jQuery to get it from there.
         *
         * TODO, see if this data is already loaded in Meteor, so that we
         * we don't need to traverse the DOM to get it.
         */
        var centerX = $(this).attr('dot-left');
        var centerY = $(this).attr('dot-top');
        var arrowX = $(this).attr('arrow-left');
        var arrowY = $(this).attr('arrow-top');

        /**
         * Draw the pointer
         */
        context.beginPath();
        // Start srawing from the center of the dot
        context.moveTo(centerX, centerY);
        context.lineTo(arrowX, arrowY);
        context.lineWidth = strokeWidth;
        context.strokeStyle = '#527193';
        context.stroke();

        /**
         * Draw the circle
         */
        context.beginPath();
        context.lineWidth = strokeWidth;
        var radius = 20;
        context.arc(centerX , centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = '#FFF';
        context.fill();
        context.stroke();

        /**
         * Position the labels
         */
        $(this).siblings('.marker-order').css({
            'left' : (centerX - 20) + 'px',
            'top' : (centerY - 20) + 'px'
        });
        var markerLabel = $(this).siblings('.marker-label')
        var labelY = parseInt(centerY) + 20;
        $(this).siblings('.marker-label').css({
            'left' : (centerX - (markerLabel.width() / 2)) + 'px',
            'top' : labelY + 'px',
        });

    });
};

Template.pagePage.events({
    /**
     * Custom actions for page links
     */
    'mousedown .marker-order': function(e) {
        e.preventDefault();
        clicked = e.target;

        var fadeMarkersOut = function() {
            $('.clicked').siblings('canvas').removeClass('fadeMarkerIn');
            $('.clicked').siblings('canvas').addClass('animated fadeMarkerOut');
            $('.clicked').removeClass('fadeIn');
            $('.clicked').addClass('animated fadeOut');
        }

        var fadeMarkerIn = function() {
            $('.clicked').removeClass('fadeOut clicked');
            $(e.target).siblings('.marker-label').addClass('clicked animated fadeIn');
            $(e.target).siblings('canvas').addClass('animated fadeMarkerIn');
        }

        fadeMarkersOut();
        window.setTimeout(function() {
            fadeMarkerIn();
        }, 300);
    },

    'mousedown canvas': function(e){
        e.preventDefault();
    },

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
            $('.markers').addClass('animated fadeOut');
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
