/**
* waypoint
* https://github.com/imakewebthings/waypoints
*/
var $head = $( '.geo-header' );
$('.waypoint').each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );
	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'geo-header ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$head.attr('class', 'geo-header ' + animClassUp);
		}
	}, { offset: '-1px' } );
});


/**
* parallax.js
* https://github.com/pixelcog/parallax.js
*/
// $(document).ready(function() {
// 	if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
// 		$('#ios-notice').removeClass('hidden');
// 		$('.parallax-container').height( $(window).height() * 0.5 | 0 );
// 	} else {
// 		$(window).resize(function(){
// 			var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
// 			$('.parallax-container').height(parallaxHeight);
// 		}).trigger('resize');
// 	}
// });


/**
* isotope with imagesloaded
* https://github.com/metafizzy/isotope
* https://github.com/desandro/imagesloaded
*/
var $container = $('.isotope-container');
var $containerGrid = $('.isotope-container-grid');
$(document).ready(function() {
	$container.imagesLoaded( function() {
		// Grid
		$containerGrid.isotope({
			itemSelector: '.isotope-item',
			layoutMode: 'fitRows',
		});
		// All
		$container.isotope({
			itemSelector: '.isotope-item',
		});
		var filterFns = {
		};
		$('.portfoliofilter').on( 'click', 'a', function() {
			var filterValue = $( this ).attr('data-filter');
			filterValue = filterFns[ filterValue ] || filterValue;
			$container.isotope({ filter: filterValue });
		});
		$('.portfoliofilter').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'a', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
			});
		});
	});
});


// Search
$(document).ready(function() {
	var submitIcon = $('.geo-searchbox-icon');
	var inputBox = $('.geo-searchbox-input');
	var searchBox = $('.geo-searchbox');
	var isOpen = false;
	submitIcon.click(function() {
		if (isOpen == false) {
			searchBox.addClass('geo-searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('geo-searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});
	submitIcon.mouseup(function() {
		return false;
	});
	searchBox.mouseup(function() {
		return false;
	});
	$(document).mouseup(function() {
		if (isOpen == true) {
			$('.geo-searchbox-icon').css('display', 'block');
			submitIcon.click();
		}
	});
});
function buttonUp() {
	var inputVal = $('.geo-searchbox-input').val();
	inputVal = $.trim(inputVal).length;
	if (inputVal !== 0) {
		$('.geo-searchbox-icon').css('display', 'none');
	} else {
		$('.geo-searchbox-input').val('');
		$('.geo-searchbox-icon').css('display', 'block');
	}
}

/**
* jquery
* https://jquery.com
*/
$(document).ready(function(){

	// Add review
	$('.reviews>button').click(function(){
			$('.addreview').toggleClass('addreview-add');
	});

	// Show more
	$('.gbtn-showmore').click(function(){
			$('.gbtn-showmore').toggleClass('gbtn-loading active');
	});

	// Cart Full/Empty
	$('a.js-empty-cart').click(function(){
		 $('body').toggleClass('emptyCart');
	});

});


// /**
// * flickity
// * http://flickity.metafizzy.co/
// */
// // flickity
// $('.main-gallery').flickity({
//  cellAlign: 'left',
//  contain: true
// });


/**
* FlexSlider
* https://github.com/woothemes/FlexSlider
*/
$(window).load(function() {

	// Slider without anything
	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
	});

	// Slider without anything (used at basic-landing)
	$('#slider-2').flexslider({
		animation: "slide",
		controlNav: true,
	});

	// Slider without anything (used at basic-landing)
	$('#slider-blogs').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false,
	});

	// Slider with Carousel Slider as Navigation
	$('#carousel-nav').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 150,
		itemMargin: 0,
		asNavFor: '#slider-with-carousel'
	});
	$('#slider-with-carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel-nav"
	});

});


/**
* OwlCarousel
* http://owlgraphic.com/owlcarousel/
*/
$(document).ready(function() {


	// Default
	var owlDefault = $(".similar-default #similar-default");

	owlDefault.owlCarousel({
		items : 4,
		pagination: false,
		lazyLoad : true,
	});

	$(".similar-default a.next").click(function(){
		owlDefault.trigger('owl.next');
	})
	$(".similar-default a.prev").click(function(){
		owlDefault.trigger('owl.prev');
	})


	// Unborder
	var owlUnborder = $(".similar-unborder #similar-unborder");

	owlUnborder.owlCarousel({
		items : 4,
		pagination: false,
		lazyLoad : true,
	});

	$(".similar-unborder a.next").click(function(){
		owlUnborder.trigger('owl.next');
	})
	$(".similar-unborder a.prev").click(function(){
		owlUnborder.trigger('owl.prev');
	})


	// Sync
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");

	sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: true,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
	});

	sync2.owlCarousel({
		items : 4,
		itemsDesktop      : [1199,4],
		itemsDesktopSmall : [979,4],
		itemsTablet       : [768,4],
		itemsMobile       : [479,4],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
			el.find(".owl-item").eq(0).addClass("synced");
		}
	});

	function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
			.find(".owl-item")
			.removeClass("synced")
			.eq(current)
			.addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
			center(current)
		}
	}

	$("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});

	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
			if(num === sync2visible[i]){
				var found = true;
			}
		}

		if(found===false){
			if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			}else{
				if(num - 1 === -1){
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if(num === sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
			sync2.trigger("owl.goTo", num-1)
		}
	}

});


/**
* input price range
*
*/
$(function() {
	$( ".input-price-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		step: 50,
		values: [ 150, 850 ],
		slide: function( event, ui ) {
			$( ".active-min" ).val( ui.values[ 0 ] );
			$( ".disabled-min" ).val( "€" + ui.values[ 0 ] );
			$( ".active-max" ).val( ui.values[ 1 ] );
			$( ".disabled-max" ).val( "€" + ui.values[ 1 ] );
		}
	});
	$( ".active-min" ).val( $( ".input-price-range" ).slider( "values", 0 ) );
	$( ".disabled-min" ).val( "€" + $( ".input-price-range" ).slider( "values", 0 ) );
	$( ".active-max" ).val( $( ".input-price-range" ).slider( "values", 1 ) );
	$( ".disabled-max" ).val( "€" + $( ".input-price-range" ).slider( "values", 1 ) );
});


/**
* selectBox
* https://github.com/marcj/jquery-selectBox
*/
$('select').selectBox();


/**
* Wow
* https://github.com/matthieua/WOW
*/
new WOW().init();


/**
* Counter Up
* https://github.com/bfintal/Counter-Up
*/
$(document).ready(function() {
	$('.number-counter').counterUp({
			delay: 10,
			time: 1200
	});
});


/**
* Slider Revolution
* http://themes.themepunch.com/
*/
$(document).ready(function() {
	$('#bloglist-slider1').revolution({
		delay:2000,
		startwidth:1200,
		startheight:675,
		hideThumbs:10,
		hideTimerBar:"on",
		touchenabled:"on",
		navigationType:"none",
		soloArrowLeftHOffset:0,
		soloArrowRightHOffset:0,
	});
	$('#bloglist-slider2').revolution({
		delay:2000,
		startwidth:1200,
		startheight:675,
		hideThumbs:10,
		hideTimerBar:"on",
		touchenabled:"on",
		navigationType:"none",
		soloArrowLeftHOffset:0,
		soloArrowRightHOffset:0,
	});
	$('#blogitem-slider').revolution({
		delay:2000,
		startwidth:1200,
		startheight:675,
		hideThumbs:10,
		hideTimerBar:"on",
		touchenabled:"on",
		navigationType:"none",
		soloArrowLeftHOffset:0,
		soloArrowRightHOffset:0,
	});
});


/**
* Increment/Decrement Input Number
* http://codepen.io/ihororlovskyi/pen/PqyPyB
*/
$(document).ready(function() {
	$('.quantity-plus').click(function(e) {
		e.preventDefault();
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name=' + fieldName + ']').val());
		if (!isNaN(currentVal)) {
			$('input[name=' + fieldName + ']').val(currentVal + 1);
		} else {
			$('input[name=' + fieldName + ']').val(0);
		}
	});
	$(".quantity-minus").click(function(e) {
		e.preventDefault();
		fieldName = $(this).attr('field');
		var currentVal = parseInt($('input[name=' + fieldName + ']').val());
		if (!isNaN(currentVal) && currentVal > 1) {
			$('input[name=' + fieldName + ']').val(currentVal - 1);
		} else {
			$('input[name=' + fieldName + ']').val(1);
		}
	});
});

$(':input[type=number]').on('mousewheel', function(e) {
	e.preventDefault();
});


/**
* Fresco Lightbox
* http://www.frescojs.com
*/
