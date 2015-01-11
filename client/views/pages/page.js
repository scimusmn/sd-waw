Template.page.rendered = function() {
    /**
     * Display the mouse position for dev marker placement
     */
    $('.wetlands').click(function(e){
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
     * SVG Markers for Pacific Flyway
     */
    var selector;
    if ($('.map-wet-migration').length) {
        selector = '.map-wet-migration .marker-svg';
    }
    else if ($('.map-wet-wetlands')){
        selector = '.map-wet-wetlands .marker-svg';
    }

    if ($(selector).length) {
        var svgWidth = 1366;
        var svgHeight = 768;
        var svg = d3.select(selector)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
    }

    $(selector).each(function() {

        // Get data about the marker from the DOM
        var centerX = $(this).data('dot-left');
        var centerY = $(this).data('dot-top');
        var arrowX = $(this).data('arrow-left');
        var arrowY = $(this).data('arrow-top');
        var markerNumber = $(this).data('marker-number');

        // Marker group
        var lineGroup = svg.append('g');

        // Pointer line
        var lineData = [ { 'x': centerX, 'y': centerY }, { 'x': arrowX,  'y': arrowY} ];
        var lineFunction = d3.svg.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .interpolate('linear');
        lineGroup.append('path')
            .attr('d', lineFunction(lineData))
            .attr('class', 'marker-line');

        // Marker
        svg
            .append('circle')
            .attr('r', 20)
            .attr('class', 'marker-circle marker-circle-' + markerNumber)
            .attr('cx', centerX)
            .attr('cy', centerY);

        // Text
        var textX;
        var textY;
        // One digit
        if (markerNumber.toString().length < 2) {
            textX = centerX - 6;
            textY = (centerY + 8);
        }
        // Two digits
        else {
            textX = centerX - 12;
            textY = (centerY + 8);
        }
        svg
            .append('svg:text')
            .attr('class', 'marker-numbers')
            .attr('x', textX)
            .attr('y', textY)
            .text(markerNumber);

        svg
            .append('circle')
            .attr('r', 50)
            .attr('fill', 'transparent')
            //.attr('stroke', '#527193')
            //.attr('stroke-width', 4)
            .attr('class', 'marker-click-area')
            .attr('data-marker-number', markerNumber)
            .attr('cx', centerX)
            .attr('cy', centerY);

    });

    /**
     * Then/Now slider for comparison pages
     */
    if ($('.map-wet-then-now').length) {
        selector = '.map-wet-migration .marker-svg';
        if ($(selector).length) {
            var svgWidth = 1366;
            var svgHeight = 768;
            var svg = d3.select(selector)
                .append('svg')
                .attr('width', svgWidth)
                .attr('height', svgHeight);
        }

        /**
         * Starting handle position
         */
        $('.top-image').css('width', '75%');
        var canvasHeight = $('#handle').height();
        var canvasWidth = $('#handle').width();
        var canvasLeft = ((1366 / 4) * 3) - (canvasWidth / 2);
        var canvasTop = ((768 / 2) - (canvasHeight / 2));
        $('#handle').css('top', canvasTop + 'px');
        $('#handle').css('left',  canvasLeft + 'px');

        $('.before-after-slider').mousemove(
            function(e) {
            // get the mouse x (horizontal) position and offset of the div
            var offset =  $(this).offset();
            var iTopWidth = (e.pageX - offset.left);

            // set width of bottomimage div
            $(this).find('.top-image').width(iTopWidth);
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
    //if($('.map-wet-wetlands').length) {

    //$('.marker canvas').each(function(index, element) {
        //var context = element.getContext('2d');
        //var strokeWidth = 2;

        /**
         * Get circle and pointer position from the database element
         *
         * This is laoded into the DOM using the Spacebars template
         * then we use jQuery to get it from there.
         *
         * TODO, see if this data is already loaded in Meteor, so that we
         * we don't need to traverse the DOM to get it.
         */
        //var centerX = $(this).attr('dot-left');
        //var centerY = $(this).attr('dot-top');
        //var arrowX = $(this).attr('arrow-left');
        //var arrowY = $(this).attr('arrow-top');

        /**
         * Draw the pointer
         */
        //context.beginPath();
        //// Start srawing from the center of the dot
        //context.moveTo(centerX, centerY);
        //context.lineTo(arrowX, arrowY);
        //context.lineWidth = strokeWidth;
        //context.strokeStyle = '#527193';
        //context.stroke();

        /**
         * Draw the circle
         */
        //context.beginPath();
        //context.lineWidth = strokeWidth;
        //var radius = 20;
        //context.arc(centerX , centerY, radius, 0, 2 * Math.PI, false);
        //context.fillStyle = '#FFF';
        //context.fill();
        //context.stroke();

        /**
         * Position the labels
         */
        //$(this).siblings('.marker-order').css({
            //'left' : (centerX - 20) + 'px',
            //'top' : (centerY - 18) + 'px'
        //});
        //var markerLabel = $(this).siblings('.marker-label')
        //var labelY = parseInt(centerY) - 24;
        ////var labelY = parseInt(centerY) + 20;
        //$(this).siblings('.marker-label').css({
            //'left' : (centerX - (markerLabel.width()) - 35 ) + 'px',
            ////'left' : (centerX - (markerLabel.width() / 2)) + 'px',
            //'top' : labelY + 'px',
        //});

    //});
    //}
};

Template.page.events({
    /**
     * Custom actions for page links
     */
    'mousedown .marker-pop-up .btn-close': function(e) {
        $('.marker-pop-up.popActive').removeClass('fadeInLeft popActive').addClass('animated fadeOutLeft');
        var item = d3.selectAll('.marker-circle');
        item.style('fill', '#FFF');
        item.style('stroke', '#527193');
        item.style('stroke-width', 4);
    },

    'mousedown .marker-svg circle.marker-click-area': function(e) {
        var item;
        var clicked = e.target;

        var clickedImage  = $(e.currentTarget).data('marker-number');
        $('.marker-pop-up.popActive').removeClass('fadeInLeft popActive').addClass('animated fadeOutLeft');
        $('.marker-pop-up.' + clickedImage ).removeClass('fadeOutLeft popActive').addClass('animated fadeInLeft popActive');
        item = d3.selectAll('.marker-circle');
        item.style('fill', '#FFF');
        item.style('stroke', '#527193');
        item.style('stroke-width', 4);

        item = d3.selectAll('.marker-circle-' + clickedImage);
        item.style('fill', '#527193');
        item.style('stroke', '#FFF');
        item.style('stroke-width', 4);

    },
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
        colorPalate = this.colorPalate;
        subPageType = this.subPageType;
        link = this.link;

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
            Router.go('subPage', {colorPalate: colorPalate, subPageType: subPageType, link: link});
        }
    },
    'click .btn-home': function(e) {

        e.preventDefault();
        destination = this.colorPalate;

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
            Router.go('componentPage', {link: destination});
        }
    }
});

Template.page.helpers({
    subPages: function() {
        data = Pages.find({parentId: this._id}, {sort: {order: 1}});
        if (data.count()) {
            return data;
        }
        else {
            return false;
        }
    }
});
