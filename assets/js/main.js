// Header menu FX
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

// Parallax
$(function() {
	if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
		$('#ios-notice').removeClass('hidden');
		$('.parallax-container').height( $(window).height() * 0.5 | 0 );
	} else {
		$(window).resize(function(){
			var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
			$('.parallax-container').height(parallaxHeight);
		}).trigger('resize');
	}
});

// Isotope
var $container = $('.isotope-container');
$(document).ready(function() {
	$container.imagesLoaded( function() {
		$container.isotope({
			itemSelector: '.isotope-item',
		});
		var filterFns = {
		};
		$('#filters').on( 'click', 'a', function() {
			var filterValue = $( this ).attr('data-filter');
			filterValue = filterFns[ filterValue ] || filterValue;
			$container.isotope({ filter: filterValue });
		});
		$('.geo-portfolio-filter').each( function( i, buttonGroup ) {
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

// Add review
$(document).ready(function(){
		$('.addreview>button').click(function(){
				$('.addreview').toggleClass('addreview--add');
		});
});
