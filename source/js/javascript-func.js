$( document ).ready( function(){
	$('.blink')
		.focus(function(){
			if( $(this).attr('value') == $(this).attr('title') ) {
				$(this).attr({ 'value': '' });
			}
		})
		.blur(function(){
			if( $(this).attr('value') == '' || typeof($(this).attr('value')) == 'undefined') {
				$(this).attr({ 'value': $(this).attr('title') })
			}
		});
		
	$('.slider_holder ul').jcarousel({
		scroll: 1,
		//2014.04.29 DEL START DUC-CNV
		//wrap: 'both',
		//2014.04.29 DEL END
		initCallback: _init_carousel,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
	
	$('.tabs a').slide({
		'slide_selector' : '.tab-content'
	})
});
function _init_carousel(carousel) {
	$('.slider_nav #next').bind('click', function() {									  
		carousel.next();
		return false;
	});
	
	$('.slider_nav #prev').bind('click', function() {
		carousel.prev();
		return false;
	});
};