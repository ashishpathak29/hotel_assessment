// JavaScript Document
//Accordian
$( document ).ready(function() {
	$('.accordion').each(function () {
	    var $accordian = $(this);
	    $accordian.find('.accordion-head').on('click', function () {
            $(this).parent().find(".accordion-head").removeClass('open close');
            $(this).removeClass('open').addClass('close');
	        $accordian.find('.accordion-body').slideUp();
	        if (!$(this).next().is(':visible')) {
                $(this).removeClass('close').addClass('open');
	            $(this).next().slideDown();
	        }
	    });
	});
});