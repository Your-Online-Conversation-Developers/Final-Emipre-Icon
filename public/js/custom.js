"use strict";

/*global jQuery, $*/
jQuery(function(){
	
	// navigation collapse
	jQuery('.navbar-collapse').on("click", 'li', function() {
        jQuery('.navbar-collapse').collapse('hide');
    });
	
});



