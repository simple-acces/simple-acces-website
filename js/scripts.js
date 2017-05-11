(function($) {
    "use strict";

    /* -------------------
    Revolution Sliders
    ---------------------*/
    $('.tp-banner').show().revolution({
        delay: 16000,
        startwidth: 1170,
        startheight: 700,
        hideThumbs: 200,
        dottedOverlay: "none",
	     hideTimerBar: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,
        navigationType: "none",
        navigationArrows: "solo",
        navigationStyle: "preview4",
        touchenabled: "on",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        fullWidth: "off",
        fullScreen: "on",
        spinner: "spinner1",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "off",
        hideThumbsOnMobile: "off",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off"
    });

    /* -------------------
    Owl Slider callings
    ---------------------*/

    $("#client-slider").owlCarousel({
        autoPlay : true,
        minSlides: 1,
        maxSlides: 5,
        moveSlides:1,
        responsive:true,
        controls: false,
        pagination: false,
        navigation: false
    });
    $("#quote-slider").owlCarousel({
        autoPlay : false,
        singleItem : true,
        pagination: false,
        navigation: false
    });
    $("#owl-testimonials").owlCarousel({
        autoPlay : true,
        singleItem : true,
        pagination: true,
        navigation: false
    });
    // AJAX project slider
    $(document).ajaxComplete(function(){
        $("#project-slider").owlCarousel({
            autoPlay : true,
            singleItem : true,
            pagination: true,
            navigation: false,
        });
    });
    $("#owl-slider").owlCarousel({
        autoPlay : true,
        singleItem : true,
        pagination: true,
        navigation: false,
        navigationText : ['<i class="icon ion-chevron-left"></i>','<i class="icon ion-chevron-right"></i>'],
    });
    /* -------------------
    Parallax Sections
    ---------------------*/
    if(!Modernizr.touch){
        $('#home-parallax-fullscreen').parallax("50%", 0.5);
        $('#home-parallax-fullwidth').parallax("50%", 0.5);
        $('.parallax-section-1').parallax("50%", 0.5);
        $('.parallax-section-2').parallax("50%", 0.5);
        $('.parallax-section-3').parallax("50%", 0.5);
        $('.parallax-section-4').parallax("50%", 0.5);
        $('.parallax-section-5').parallax("50%", 0.5);
        $('.parallax-section-6').parallax("50%", 0.5);
        $('.parallax-section-7').parallax("50%", 0.5);
        $('.parallax-section-8').parallax("50%", 0.5);
        $('.parallax-section-9').parallax("50%", 0.5);
        $('#home-landing').parallax("50%", 0.5);

        /* -------------------
        Animation.css calling
        ---------------------*/
        new WOW().init();
    }
    /* -------------------
    Animated progress bars
    ---------------------*/
    $('.progress-bars').waypoint(function() {
       $('.progress').each(function(){
            $(this).find('.progress-bar').animate({
                width:$(this).attr('data-percent')
            },800);
        });
        }, { offset: '100%',
             triggerOnce: true
    });
    /* -------------------
    Fun facts counter
    ---------------------*/
    $('.counter').counterUp({
        delay: 8,
        time: 1400
    });
    /* -------------------
    Video section lightbox
    ---------------------*/
    $('#video-lightbox').cubeportfolio({
        gridAdjustment: 'alignCenter',
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxShowCounter: false
    });
    /* -------------------
    Scroll functions
    ---------------------*/
    var backToTop = function() {
        if($(window).scrollTop() > 400){
            $("#back-to-top").stop().animate({ bottom:'16px' },300,'easeInOutCubic')
        }
        else{
            $("#back-to-top").stop().animate({ bottom:'-50px' },300,'easeInOutCubic')
        }
    }
    $(window).scroll(function(){
        parallax();
        /* -------------------
        Header Animation
        ---------------------
        if ($(this).scrollTop() > 5){
            $('nav').addClass("navbar-small")
        }
        else{
            $('nav').removeClass("navbar-small")
        }*/
        /* -------------------
        Back to top button popup
        ---------------------*/
        backToTop()
    });
    backToTop()
    /* -------------------
    Preloader
    ---------------------*/
    $(window).load(function(){
        // Preloader
        $('#loader').fadeOut('slow');
        $('.spinner').fadeOut('slow');
    }); // End Window Load
    /* -------------------
    Page Hero Parallax
    ---------------------*/
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.hero').css('top',-(scrolled*0.0515)+'rem');
        $('.home-container').css('bottom',-(scrolled*0.0515)+'rem');
        $('.op-1,.op-2,.op-3').css('opacity',1-(scrolled*.00110));
    };
    /* -------------------
    Smooth scrolling to anchor
    ---------------------*/
    $('.to-section a,.btn-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 54
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
    /* -------------------
    Back to top button function
    ---------------------*/
    $('#back-to-top,.to-top').click(function() {
        $('html, body').animate({ scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });
    /* -------------------
    Active menu item on page scroll
    ---------------------*/
    var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('current');
          sections.removeClass('current');
          $(this).addClass('current');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
        }
      });
    });
    /* -------------------
    Auto-close responsive navbar
    ---------------------*/
    function close_toggle() {
        if ($(window).width() <= 992) {
          $('.navbar-collapse a').on('click', function(){
              $('.navbar-collapse').collapse('hide')
          });
        }
        else {
         $('.navbar .navbar-default a').off('click')
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
    /* -------------------
    Contact form
    ---------------------*/
    $('#contactform').submit(function(){
		var action = $(this).attr('data-action');
		$("#message").slideUp(250,function() {

            if ($('#username').val()) {
                $('#message').html('sorry mister robot !!!');
                $('#message').slideDown(250);
                return
            }
            $('#message').hide();

            $('#submit')
                .after('<img src="img/assets/contact-form-loader.gif" class="loader" />')
                .attr('disabled','disabled');

            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                subject: $('#subject').val(),
                comments: $('#comments').val(),
            },
                function(data){
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown(250);
                    $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                    $('#submit').removeAttr('disabled');
                    if(data.match('success') != null) $('#contactform').slideUp(850, 'easeInOutExpo');
                }
            );
		});
		return false;
	});
    /* -------------------
    Subscribe form
    ---------------------*/
    $( document ).on( 'ready', function() {
        $( '#subscribe-form' ).on( 'submit', function( e ) {
            e.preventDefault();
            var $el = $( this ),
                $alert = $el.find( '.form-validation' ),
                $submit = $el.find( 'button' ),
                action = $el.attr( 'action' );
            $submit.button( 'loading' );
            $alert.removeClass( 'alert-danger alert-success' );
            $alert.html( '' );
            $.ajax({
                type     : 'POST',
                url      : action,
                data     : $el.serialize() + '&ajax=1',
                dataType : 'JSON',
                success  : function( response ) {
                    if ( response.status == 'error' ) {
                        $alert.html( response.message );
                        $alert.addClass( 'alert-danger' ).fadeIn( 500 );
                    }
                    else {
                        $el.trigger( 'reset' );
                        $alert.html( response.message );
                        $alert.addClass( 'alert-success' ).fadeIn( 500 );
                    }
                    $submit.button( 'reset' );
                },
            })
        });
    });
    /* -------------------
    Bootstrap Tooltip, Alert, Tabs
    ---------------------*/
    $(function () { $("[data-toggle='tooltip']").tooltip();
        $(".alert").alert()
    });
    $(function () {
        var active = true;
        $('#collapse-init').click(function () {
            if (active) {
                active = false;
                $('.panel-collapse').collapse('show');
                $('.panel-title').attr('data-toggle', '');
                $(this).text('Close All');
            } else {
                active = true;
                $('.panel-collapse').collapse('hide');
                $('.panel-title').attr('data-toggle', 'collapse');
                $(this).text('Open All');
            }
        });
        $('#accordion').on('show.bs.collapse', function () {
            if (active) $('#accordion .in').collapse('hide');
        });
    });
    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

})(jQuery);


/* -------------------
Portfolio
 ---------------------*/
(function($, window, document, undefined) {
    "use strict";

    var gridContainer = $('#grid-container-fullwidth'),
        filtersContainer = $('#filters-container-fullwidth'),
        wrap, filtersCallback;

    gridContainer.cubeportfolio({
        defaultFilter: '*',
        animationType: 'fadeOut',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,
        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage("Error! Please refresh the page!");
                });
        },
        // single page inline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePage Inline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });
    /* add listener for filters */
    if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
        wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');
        wrap.on({
            'mouseover.cbp': function() {
                wrap.addClass('cbp-l-filters-dropdownWrap-open');
            },
            'mouseleave.cbp': function() {
                wrap.removeClass('cbp-l-filters-dropdownWrap-open');
            }
        });
        filtersCallback = function(me) {
            wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
            wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
            me.addClass('cbp-filter-item-active');
            wrap.trigger('mouseleave.cbp');
        };
    } else {
        filtersCallback = function(me) {
            me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
        };
    }
    filtersContainer.on('click.cbp', '.cbp-filter-item', function() {
        var me = $(this);
        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }
        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }
        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function() {});
    });
    /* activate counter for filters */
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'), function() {
        // read from url and change filter active
        var match = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href),
            item;
        if (match !== null) {
            item = filtersContainer.find('.cbp-filter-item').filter('[data-filter="' + match[1] + '"]');
            if (item.length) {
                filtersCallback.call(null, item);
            }
        }
    });
    /* add listener for load more */
    $('.cbp-l-loadMore-button-link').on('click.cbp', function(e) {
        e.preventDefault();
        var clicks, me = $(this),
            oMsg;
        if (me.hasClass('cbp-l-loadMore-button-stop')) {
            return;
        }
        // get the number of times the loadMore link has been clicked
        clicks = $.data(this, 'numberOfClicks');
        clicks = (clicks) ? ++clicks : 1;
        $.data(this, 'numberOfClicks', clicks);
        // set loading status
        oMsg = me.text();
        me.text('LOADING...');
        // perform ajax request
        $.ajax({
            url: me.attr('href'),
            type: 'GET',
            dataType: 'HTML'
        }).done(function(result) {
            var items, itemsNext;
            // find current container
            items = $(result).filter(function() {
                return $(this).is('div' + '.cbp-loadMore-block' + clicks);
            });
            gridContainer.cubeportfolio('appendItems', items.html(),
                function() {
                    // put the original message back
                    me.text(oMsg);
                    // check if we have more works
                    itemsNext = $(result).filter(function() {
                        return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
                    });

                    if (itemsNext.length === 0) {
                        me.text('NO MORE WORKS');
                        me.addClass('cbp-l-loadMore-button-stop');
                    }
                });
        }).fail(function() {
            // error
        });
    });

    window.octoboot_before_save = function(done) {
        window.scrollTo(0,0)
        $('*.animated').removeClass('animated')
        $('html').get(0).className = ""
        $('.parallax').each(function(i, e) {
            e.style = ""
        })
        $('.wow.fadeInUp').each(function(i, e) {
            e.style = ""
        })
        $('#loader, .spinner').css('display', 'block')
        setTimeout(done, 500)
    }

    // ANIM INTRO
   var canvas = document.querySelector("#canvas_intro")
   canvas.width = window.innerWidth
   canvas.height = window.innerHeight

   var context = canvas.getContext("2d"),
       width = window.innerWidth,
       height = canvas.height;

   var isocontext = isometric(context);
   isocontext.scale3d(30, 30, 30);
   var num = Math.ceil((window.innerWidth * 10) / Math.min(window.innerWidth,960))
   var delay = Math.ceil((window.innerWidth * 3.3) / Math.min(window.innerWidth,960))

   if (window.top === window) {
       var animTimer = d3_timer.timer(function(elapsed) {
         context.save();
         context.clearRect(0, 0, width, height);
         context.fillStyle = "#0098b0";
         context.translate(width / 2, height * 0.6);
         for (var x = num, d, t = (elapsed / 5000) % 1; x >= -num; --x) {
           for (var y = num; y >= -num; --y) {
             if ((d = distanceManhattan(x, y)) > num) continue;
             var te = d3_ease.easeCubic(Math.max(0, Math.min(1, t * delay - distanceCartesian(x, y) / 4)));
             drawCube((d & 1 ? -1 : +1) * (Math.PI / 4 - te * Math.PI / 2), x * 2, y * 2, 2 * te);
           }
         }
         // stop anim after one rotation
         if ((elapsed / 5000) >= 1) {
            animTimer.stop()
         }
         context.restore();
       });
   }

   function distanceCartesian(x, y) {
     return Math.sqrt(x * x + y * y);
   }

   function distanceManhattan(x, y) {
     return Math.abs(x) + Math.abs(y);
   }

   function drawCube(angle, x, y, z) {
     if ((angle %= Math.PI / 2) < 0) angle += Math.PI / 2;

     isocontext.save();
     isocontext.translate3d(x, y, z);
     isocontext.rotateZ(angle - Math.PI / 4);

     context.beginPath();
     isocontext.moveTo(+0.5, -0.5, +0.5);
     isocontext.lineTo(+0.5, +0.5, +0.5);
     isocontext.lineTo(-0.5, +0.5, +0.5);
     isocontext.lineTo(-0.5, +0.5, -0.5);
     isocontext.lineTo(-0.5, -0.5, -0.5);
     isocontext.lineTo(+0.5, -0.5, -0.5);
     isocontext.closePath();
     context.fill();
     context.lineWidth = 1.5;
     context.strokeStyle = "#c1c1c1"
     context.stroke();

     context.beginPath();
     isocontext.moveTo(-0.5, -0.5, +0.5);
     isocontext.lineTo(+0.5, -0.5, +0.5);
     isocontext.moveTo(-0.5, -0.5, +0.5);
     isocontext.lineTo(-0.5, +0.5, +0.5);
     isocontext.moveTo(-0.5, -0.5, +0.5);
     isocontext.lineTo(-0.5, -0.5, -0.5);
     context.lineWidth = 0.75;
     context.stroke();

     isocontext.restore();
   }
})(jQuery, window, document);
