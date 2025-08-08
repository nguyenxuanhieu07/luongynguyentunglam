var home_init={
	init: function() {
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
	}
}
jQuery(document).ready(function() {
	home_init.init();
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
	// topo
	let $list=$(".loop-item");
	let $wrapper=$(".scrollLoop");

	// Nhân đôi nội dung để tạo hiệu ứng chạy liên tục
	$list.append($list.html());

	let speed=50; // px/giây
	let left=0;
	let listWidth=$list.width()/2; // chỉ 1 nửa vì đã nhân đôi

	function loop() {
		left-=1; // mỗi bước dịch 1px
		if(Math.abs(left)>=listWidth) {
			left=0; // reset lại khi hết 1 vòng
		}
		$list.css("transform",`translateX(${left}px)`);
	}

	let timer=setInterval(loop,1000/speed);

	// Dừng khi hover
	$wrapper.on("mouseenter",function() {
		clearInterval(timer);
	});

	// Chạy lại khi rời chuột
	$wrapper.on("mouseleave",function() {
		timer=setInterval(loop,1000/speed);
	});

	var list_slide=$('.list-feedback'),
		item=$('.list-feedback .inner');
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
						arrows: false,
					},
				},
			],
		});
	}
});

