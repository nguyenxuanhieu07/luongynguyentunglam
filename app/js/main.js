var slide_init={
	init: function() {
		slide_init.home_banner();
		slide_init.stories_youtube();
		slide_init.list_treatment();
		slide_init.list_therapy();
		slide_init.list_therapy2();
		slide_init.list_feeling();
		slide_init.list_trilieu();
		slide_init.list_sick();
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
				autoplay: false,
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
							arrows: true,
						},
					},
				],
			});
		}
	},
	list_treatment: function() {
		var list_slide=$('.list-treatment'),
			item=$('.list-treatment .box-treatment');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				autoplay: false,
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
							arrows: true,
						},
					},
				],
			});
		}
	},
	list_therapy: function() {
		var list_slide=$('.list-therapy'),
			item=$('.list-therapy .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				autoplay: false,
				autoplaySpeed: 5000,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: true,
						},
					},
				],
			});
		}
	},
	list_therapy2: function() {
		var list_slide=$('.list-therapy2'),
			item=$('.list-therapy2 .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				autoplay: false,
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
							arrows: true,
						},
					},
				],
			});
		}
	},
	list_feeling: function() {
		var list_slide=$('.list-feeling'),
			item=$('.list-feeling .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				dots: false,
				arrow: true,
				speed: 1000,
				autoplay: false,
				autoplaySpeed: 5000,
				slidesToShow: 3,
				slidesToScroll: 3,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
							dots: false,
							centerMode: false,
							arrows: true,
						},
					},
				],
			});
		}
	},
	list_trilieu: function() {
		var list_slide=$('.list-trilieu'),
			item=$('.list-trilieu .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				mobileFirst: true,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 575,
						settings: "unslick",
					},
				],
			});
		}
	},
	list_sick: function() {
		var list_slide=$('.section-sick .list-sick'),
			item=$('.section-sick .list-sick .inner');
		if(list_slide.length>0&&item.length>1) {
			list_slide.slick({
				slidesToShow: 2,
				slidesToScroll: 2,
				mobileFirst: true,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 575,
						settings: "unslick",
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

