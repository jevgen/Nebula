jQuery.noConflict();

/*==========================
 DOM Ready (After main.js is loaded)
 ===========================*/

jQuery(document).on('ready', function(){

	//Prevent child theme events from sending before the pageview. Do not add custom event tracking here- add it where noted below!
	if ( isGoogleAnalyticsReady() ){
		supplementalEventTracking();
	}


}); //End Document Ready


/*==========================
 Window Load
 ===========================*/

jQuery(window).on('load', function(){

	supplementalEventTracking();

}); //End Window Load


/*==========================
 Window Resize
 ===========================*/

jQuery(window).on('resize', function(){
	debounce(function(){

	}, 500);
}); //End Window Resize



/*==========================
 Child Functions
 To override a parent function, simply redefine it here.
 ===========================*/

//Child theme event tracking.
function supplementalEventTracking(){
	once(function(){
		//In-Depth example Event Tracker (Category and Action are required. If including a Value, it should be a rational number and not a string. Value could be an object of parameters like {'nonInteraction': true, 'dimension1': 'Something', 'metric1': 82} Tip: use deferred selectors if possible.)
		//nebula.dom.document.on('mousedown', '.selector', function(e){
		//  eventIntent = ( e.which >= 2 )? 'Intent' : 'Explicit';
		//	ga('set', gaCustomDimensions['eventIntent'], eventIntent);
		//	ga('set', gaCustomDimensions['timestamp'], localTimestamp());
		//	ga('send', 'event', 'Category', 'Action', 'Label', Value, {'object_name_here': object_value_here}); //Object names include 'hitCallback', 'nonInteraction', and others
		//});

		//Simple example:
		//nebula.dom.document.on('click touch tap', '.selector', function(){
		//	ga('send', 'event', 'Category', 'Action', 'Label');
		//});

		//Add your custom event tracking here!

	}, 'supplemental event tracking');
}
