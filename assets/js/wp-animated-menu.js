(function($){
    $.animatedMenu = function(settings){   
  		
  		/*default settings for menu*/
        var config = {
            'type': 'slideUp',
            'width': '180',
            'height': '80'
        };

        /*extend custom settings from admin*/
        if (settings){$.extend(config, settings);}
 		var _width = config.width;
 		var _height = config.height;
        $type = config.type;  

        $('.animated-item').css({
        		'width': _width+'px',
        		'height': _height+'px'        		
        	});

        /*function effect slide box down*/
        var slideDown = function(){        	
        	var $menu =	 $(this);  
        	var _topBefore = parseInt(_height)+10+'px';
        	var _topAfter = parseInt(_height)+'px';
        	
			$menu.find('.item-image').show()
				.animate({top: _topBefore,width: "100%", leaveTransforms:true }, 300, function() {
					$(this).animate({top: _topAfter,opacity: "1", leaveTransforms:true }, 300);					
			});
			$menu.find('.item-caption').animate({marginTop: "+=10px", leaveTransforms:true }, 300, function() {
					$(this).animate({marginTop: "-=10px", leaveTransforms:true }, 500);										
			});				
	  	}

	  	/*slide down effect mouse leave*/
	  	var slideDownLeave = function(){
	  		var $menu = $(this);
	  		$menu.find('.item-image')
	  				.animate({top: "0",width: "0", leaveTransforms:true }, 300, function() {	  					
	  				})
	  				.fadeIn(100).hide();
	  	}

	  	/*slide up effect*/
	  	var slideUp = function(){
	  		var $menu  = $(this);
	  		var _topBefore = parseInt(_height)-20+'px';
        	var _topAfter =  0 - parseInt(_height)+1+'px';
        	var _captionTopBefore = parseInt(_height)-10+'px';
        	var _captionTopAfter = parseInt(_height) +'px';        	
			$menu.find('.item-image')
				.animate({top: _topBefore,width: "100%", leaveTransforms:true }, 300, function() {
					$(this).animate({top: _topAfter,opacity: "1", leaveTransforms:true }, 300);
						
			});
			$menu.find('.item-caption').addClass("menu-mouse-enter")
					.animate({top: _captionTopBefore, leaveTransforms:true }, 300, function() {
					$(this).animate({top: _captionTopAfter, leaveTransforms:true }, 500);					
			});	
	  	}

	  	/*slide up mouse leave effect*/
	  	var slideUpLeave = function(){
	  		var $menu = $(this);
	  		$menu.find('.item-image')
	  				.animate({top: "0",width: "0", leaveTransforms:true }, 300, function() {
	  					$(this).find('img').css('transform','scale(1,1)');
	  				});	 
	  		$menu.find('.item-caption').removeClass("menu-mouse-enter")
					.animate({top: "-10px", leaveTransforms:true }, 300, function() {
					$(this).animate({top: "+=20px", leaveTransforms:true }, 500);					
			});	 				
	  	}



	  	/*check type*/
        switch($type){
        	case 'slideDown':
        		$('.animated-item').bind('mouseenter',slideDown);
        		$('.animated-item').bind('mouseleave',slideDownLeave);
        		break;
        	case 'slideUp':
        		$('.animated-item').bind('mouseenter',slideUp);
        		$('.animated-item').bind('mouseleave',slideUpLeave);
        		break;

        }
 
        return this;
    };
})(jQuery);