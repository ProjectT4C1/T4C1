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
	//2014.05.02 ADD START DUC-CNV
	
	var popupContact = new PopupMaster('#popupContact');
    $(".button_order").bind('click', function () {											 
        popupContact.showModal(true);
    });
	$('#etalage').etalage({
					thumb_image_width: 300,
					thumb_image_height: 250,
					source_image_width: 1200,
					source_image_height: 600,
					show_hint: true,
					click_callback: function(image_anchor, instance_id){
						alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
					}
				});
	//2014.05.02 ADD END
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

function PopupMaster(element) {
    var that = this;
    that.mask = document.getElementById('popupMask');
    if (that.mask == null) {
        var mask = document.createElement('div');
        mask.id = 'popupMask';
        mask.className = 'full-screen-mask';
        document.body.appendChild(mask);
        that.mask = mask;
    }
    that.modal = typeof element === 'object' ? element : $(element)
   
    // public Method
    that.showModal = function (flag) {
        if (flag) {
            that.modal.fadeIn(500);
            $(that.mask).fadeIn(500);
        }
        else {
            that.modal.fadeOut(500);
            $(that.mask).fadeOut(500);
        }
    }
    that.eventHandle = function () {
        // handle Close event
        var closeButton = that.modal.find('#dismiss');
        
        closeButton.bind('click', function () {
            // hide modal, mask
            that.showModal(false);
        });
    }
    that.eventHandle();
}