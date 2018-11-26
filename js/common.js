$(function(){
	function navOpen(){
		var $nav = $('.nav-wrap');
		$nav.stop().fadeIn(300);
	}
	function navClose(){
		var $nav = $('.nav-wrap');
		$nav.stop().fadeOut(300);	
	}

	function navSticky(scrollTop){
		var $header = $('.site-header');
		var visualH = $('.page-visual').outerHeight(true);

		scrollTop > 0 ? $header.addClass('fixed') : $header.removeClass('fixed');
		scrollTop > visualH ? $header.addClass('scroll-over') : $header.removeClass('scroll-over');
	}

	function prevNavSticky(scrollTop){
		var $subVisual = $('.page-visual.sub');
		var $prevArrow = $('.btn-content-prev');
		var visualH = $subVisual.outerHeight(true);

		scrollTop > visualH ? $prevArrow.addClass('scroll-over') : $prevArrow.removeClass('scroll-over');	
	}

	$(window).on('scroll', function(){
		navSticky($(this).scrollTop());
		prevNavSticky($(this).scrollTop());
	});

	$(window).resize(function(){
		prevNavSticky($(this).scrollTop());
	});

	$('.btn-nav-open').on('click', function(e){
		navOpen();
		e.preventDefault();
	});
	$('.btn-nav-close').on('click', function(e){
		navClose();
		e.preventDefault();
	});

	function imageSlide(){
		var $slider = $('.image-slide');

		$slider.not('.slick-initialized').slick({
			arrows : false,
			infinite:false,
			dots:true,
			variableWidth:true,
			slidesToShow:1
		});
	}
	imageSlide();

	function gallerySlide(){
		var $slider = $('.gallery-slide');

		$slider.not('.slick-initialized').slick({
			arrows : false,
			infinite:false,
			dots:true,
			variableWidth:true,
			slidesToShow:2,
			responsive: [
				{
					breakpoint: 768,
				    settings: {
				    	arrows : false,
						slidesToShow: 1
				    }
				}
			]
		});
	}
	gallerySlide();

	function productSlide(){
		var $slider = $('.product-slide');

		$slider.not('.slick-initialized').slick({
			arrows : false,
			infinite:false,
			dots:false,
			responsive: [
				{
					breakpoint: 768,
				    settings: {
				    	dots:true
				    }
				}
			]
		});
	}
	productSlide();

	function videoPlay(){
		var $videoBox = $('.video-box');
		var $button = $('.btn-video-play');

		$videoBox.each(function(e){
			var $this = $(this);
			var $video = $this.find('video');

			$video.attr('id', 'page-video' + (e+1));

			var $curVideo = $this.find('#page-video' + (e+1));

			$curVideo.get(0).onended = function(){
				this.load();
				$this.find('.btn-video-play').removeClass('stop').stop().fadeIn(200);
			};
		});

		$videoBox.on('mouseenter', function(){
			var $this = $(this);
			var $button = $(this).find('.btn-video-play');

			$button.stop().fadeIn(200);
		}).on('mouseleave', function(){
			var $this = $(this);
			var $button = $(this).find('.btn-video-play');

			$button.stop().fadeOut(200);
		}).on('click', function(){
			var $this = $(this);
			var $button = $(this).find('.btn-video-play');

			if( $button.is(':visible') ) {
				$button.stop().fadeOut(200);
			} else {
				$button.stop().fadeIn(200);
			}
		});


		$button.on('click', function(){
			var $this = $(this);
			var $box = $this.closest('.video-box');
			var $video = $('#' + $box.find('video').attr('id'));

			if( !$this.hasClass('stop')){
				$video.get(0).play();
				$this.addClass('stop').stop().fadeOut(200);
			} else if($this.hasClass('stop')){
				$video.get(0).pause();
				$this.removeClass('stop').stop().fadeOut(200);
			}
		});
	}
	videoPlay();
});