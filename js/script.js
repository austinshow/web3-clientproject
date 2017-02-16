$(document).ready(function(){

	$('#mobile-menu-btn').on('click',function(e) {
		e.preventDefault();
		$('#mobile-nav').slideToggle();
	})
});