/*$(document).ready(function () {
	//BURGER
	$('.header-menu__icon').click(function (event) {
		$('.header-menu__icon,.header-top-lang,.header-bottom-menu').toggleClass('active');
		$('body').toggleClass('lock')
	});



//CHECKBOX

	$.each($('.checkbox'), function(index, val){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.checkbox', function(event){
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('active');


		return false;
	});

	//RADIO
	$.each($('.radiobuttons__item'), function(event){
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	})
	$(document).on('click', '.radiobuttons__item', function(event){
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);
		return false;
	})


//IMAGES
	$.each($('.-ibg'), function (index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	})
	ibg()
});

//Убирает или добавляет Class для BURGER
$('.icon-menu').click(function(event){
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});






//Paralax___________________________________________________________________
$(document).ready(function() {
	$(window).scroll(function(event) {
			var s=$(this).scrollTop();
			var w=$(this).outerWidth();
			var h=$('.content').outerHeight();
			var h_b = $('.parallax').outerHeight();
			var p=s/h*100;
			var p_b = s / h_b * 100;
			var o=1-1/100*p_b;


			var z_1=1+(w/10000*p_b);
		$('.parallax__fog').css('transform','scale('+z_1+')');	
		$('.parallax__fog').css('opacity', o);	

			var z_2=1+(w/5000000*p);
		$('.parallax__montain-1').css('transform', 'scale(' + z_2 + ')');

			var hr=w/2000*p_b;
			var z_3=1+(w*0.000005*p_b);
		$('.parallax__montain-2').css('transform','translate3d('+hr+'px,0,0) scale(' + z_3 + ')');

		var hr_2 = w / 1500 * p_b;
		var z_4 = 1 + (w * 0.00001 * p_b);
		$('.parallax__montain-3').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + z_4 + ')');
	});
});
*/
//-----------------------------------------------------------------------------------------




//OPEN (CLOSE) ICON-----------------------------------------------------------------------
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function(e){
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});
//----------------------------------------------------------------------------------------
//BURGER-----------------------------------------------------------------------------------
$('.icon-menu').click(function (event) {
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('-active');
	$('body').toggleClass('lock');
});
//------------------------------------------------------------------------------------------
//CLICK for CLOSE ICON--------------------------------------------------------------------
document.documentElement.addEventListener("click", function (e){
	if(!e.target.closest('.user-header')){
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
})
//--------------------------------------------------------------------------------------------

//IMAGES-------------------------------------------------------------------------------------
$.each($('.-ibg'), function (index, val) {
	if ($(this).find('img').length > 0) {
		$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
//-------------------------------------------------------------------------------------------





//SLIDER-----------------------------------------------------------------------------------
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if(!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items){
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {

		}
	}
	slider_bild_callback();
}

function slider_bild_callback(params) { }

let main_slider = new Swiper('.main-slider__body', {

	observer: true,
	observePerents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	loop: true,
	navigation: {
		nextEl: '.control-main-slider__arrow-next',
		prevEl: '.control-main-slider__arrow-prev',
	},
	breakpoints: {
		320: {
			autoHeight: true,
		},
		768: {
			autoHeight: false,
		}
	},
	on: {
		lazyImageReady: function(){
			ImageBitmap();
		},
	}
});



let main_sliders = new Swiper('.slider-lots__body', {

	observer: true,
	observePerents: true,
	slidesPerView: 3,
	spaceBetween: 0,
	speed: 800,
	loop: true,
	navigation: {
		nextEl: '.control-slider-lots__arrow-r',
		prevEl: '.control-slider-lots__arrow',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		}
	},
	
	on: {
		lazyImageReady: function () {
			ImageBitmap();
		},
	}
});



let quotes_sliders = new Swiper('.slider-quotes__body', {

	effect: 'fade',

	observer: true,
	observePerents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	loop: true,
	navigation: {
		nextEl: '.control-slider-quotes__circle',
	},
	breakpoints: { 
		320: {
			autoHeight: true,
		},
		570: {
			autoHeight: false,
		}
	},

	on: {
		lazyImageReady: function () {
			ImageBitmap();
		},
	}
});






































