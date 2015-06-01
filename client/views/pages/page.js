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
    if (
        $('.map-mount-rare+.body-copy.rare-habitat').length ||
        $('.body-copy.rare-climate-zone').length ||
        $('.body-copy.our-wetlands').length ||
        $('.body-copy.watersheds').length) {

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
        var markerLabel = $(this).data('marker-label');

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
        var markerCircle = svg
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

        // Click area
        //
        // We don't use this on some maps because of overlap.
        var clickArea = svg
            .append('circle')
            .attr('fill', 'transparent')
            .attr('class', 'marker-click-area')
            .attr('data-dot-left', arrowX)
            .attr('data-dot-top', arrowY)
            .attr('data-marker-number', markerNumber)
            .attr('data-marker-label', markerLabel)
            .attr('cx', centerX)
            .attr('cy', centerY);
        if ($('.map-wet-migration').length) {
            clickArea.attr('r', 50);
        }
        else {
            clickArea.attr('r', 20);
        }

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

};

/**
 * Custom actions for page links
 */
Template.page.events({
    /**
     * Close button for popup layers
     */
    'mousedown .marker-pop-up .btn-close': function() {
        $('.marker-pop-up.popActive').removeClass('fadeInLeft popActive').addClass('animated fadeOutLeft');
        d3.selectAll('.marker-clicked').classed('marker-clicked', false);
    },

    // Swap out marker states
    'mousedown .marker-svg circle.marker-click-area': function(e) {
        var clickedImage  = $(e.currentTarget).data('marker-number');
        d3.selectAll('.marker-clicked').classed('marker-clicked', false);
        d3.selectAll('.marker-circle-' + clickedImage).classed('marker-clicked', true);
    },

    // Wetlands data toggling
    'mousedown .map-wet-wetlands .marker-svg circle.marker-click-area': function(e) {
        var clickedLeft  = $(e.currentTarget).data('dot-left');
        console.log('clickedLeft - ', clickedLeft);
        var clickedTop  = $(e.currentTarget).data('dot-top');
        console.log('clickedTop - ', clickedTop);
        var clickedImage  = $(e.currentTarget).data('marker-number');
        var clickedLabel  = $(e.currentTarget).data('marker-label');
        $('.wetland-name').remove();
        $('.map-wet-wetlands').append( '<div class="wetland-name">' + clickedLabel + '</div>' );
        $('.wetland-name').css({
            'left': (clickedLeft + 4),
            'top': clickedTop - 50});
        console.log('clickedImage - ', clickedImage);
        console.log('clickedLabel - ', clickedLabel);
    },

    // Pacific Flyway toggling
    'mousedown .map-wet-migration .marker-svg circle.marker-click-area': function(e) {
        var clickedImage  = $(e.currentTarget).data('marker-number');
        $('.marker-pop-up.popActive').removeClass('fadeInLeft popActive').addClass('animated fadeOutLeft');
        $('.marker-pop-up.' + clickedImage ).removeClass('fadeOutLeft popActive').addClass('animated fadeInLeft popActive');
    },

    'mousedown .marker-order': function(e) {
        e.preventDefault();

        var fadeMarkersOut = function() {
            $('.clicked').siblings('canvas').removeClass('fadeMarkerIn');
            $('.clicked').siblings('canvas').addClass('animated fadeMarkerOut');
            $('.clicked').removeClass('fadeIn');
            $('.clicked').addClass('animated fadeOut');
        };

        var fadeMarkerIn = function() {
            $('.clicked').removeClass('fadeOut clicked');
            $(e.target).siblings('.marker-label').addClass('clicked animated fadeIn');
            $(e.target).siblings('canvas').addClass('animated fadeMarkerIn');
        };

        fadeMarkersOut();
        window.setTimeout(function() {
            fadeMarkerIn();
        }, 300);
    },

    /**
     * Subpage buttons
     *
     * Explore and scientists pages
     */
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

    /**
     * Home button
     */
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
