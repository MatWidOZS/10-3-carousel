$(function() {

	var carouselList = $('#carousel ul');


	function changeSlide() {
		carouselList.animate({marginLeft: '-500px'}, 500, moveSlideRight);
	}

	function moveSlideRight() {
		var	firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');

		lastItem.after(firstItem);

		carouselList.css({marginLeft: '0'});
	}

	function moveSlideLeft() {
		var	firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');

		firstItem.before(lastItem);

		carouselList.css({marginLeft: '-500px'});
	}

	setInterval(changeSlide, 5000);


	$('#btnPrev').click(function() {
		carouselList.animate({marginLeft: '0'}, 500, moveSlideLeft);
	});	//previous slide

	$('#btnNext').click(function() {
		carouselList.animate({marginLeft: '-500px'}, 500, moveSlideRight);
	}); //next slide
});