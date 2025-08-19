var slide_init={
	init: function() {
		slide_init.home_banner();
		slide_init.stories_youtube();
	},
	home_banner: function() {
		var list_slide=$('.section-banner'),
			item=$('.section-banner .item');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: false,
						},
					},
				],
			});
		}
	},
	stories_youtube: function() {
		var list_slide=$('.list-stories'),
			item=$('.list-stories .box-stories');
		if(list_slide.length>0&&item.length>4) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				autoplay: true,
				autoplaySpeed: 5000,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: false,
						},
					},
				],
			});
		}
	},
}
jQuery(document).ready(function() {
	slide_init.init();
	jQuery('.btn-mb-menu').on('click',function() {
		jQuery('.menu-header').toggleClass('open');
		console.log(jQuery(this))
		if(jQuery('.menu-header').hasClass('open')) {
			jQuery(this).find('i').removeClass('fa-bars');
			jQuery(this).find('i').addClass('fa-times');
		} else {
			jQuery(this).find('i').addClass('fa-bars');
			jQuery(this).find('i').removeClass('fa-times');
		}
	});

});

