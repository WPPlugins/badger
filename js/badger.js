(function($){

	var origTitle = $(document).find("title").text();
	var newflag = 0;

	if ( php_vars.suffixindex == 0 ) {

		var altTitle = php_vars.alttitle;

	} else {

		var altTitle = php_vars.alttitle + origTitle;

	}

	$(window).on("focus", function(){

		clearInterval( timerSwitchTitle );
		document.title = origTitle;

	}).on("blur", function(){

		timerSwitchTitle = setInterval(function(){
			if ( newflag == 0 ) {

				document.title = altTitle;
				newflag = 1;

			} else {

				document.title = origTitle;
				newflag = 0;

			}
		}, 1000 );
	});

})(jQuery);