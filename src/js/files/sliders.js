/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Parallax } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.idea__wrapper')) {
		new Swiper('.swiper', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, Parallax],
			effect: 'fade',
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			parallax: true,
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 1000,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.idea__pagging',
				clickable: true,
				type: 'bullets',
			},
			// Arrows
			navigation: {
				nextEl: '.idea__button-next',
				prevEl: '.idea__button-prev',
			},
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 0,
			// 		autoHeight: true,
			// 	},
			// },
			// on: {
			// },

		});
	};

	// Настройки слайдера с фото продуктов
	// Перечень слайдеров
	// if (document.querySelector('.gallery__product')) {
	// 	new Swiper('.swiper2', {
	// 		// Подключаем модули слайдера
	// 		// для конкретного случая
	// 		modules: [Navigation, Pagination, Autoplay, Parallax],
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 1000,
	// 			disableOnInteraction: false,
	// 		},
	// 		centeredSlides: true,
	// 		parallax: true,
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 4,
	// 		spaceBetween: 30,
	// 		autoHeight: true,
	// 		speed: 1000,
	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,
	// 		// Dotts
	// 		pagination: {
	// 			el: '.gallery__product--pagging',
	// 			clickable: true,
	// 			type: 'bullets',
	// 		},
	// 		// Arrows
	// 		// navigation: {
	// 		// 	nextEl: '.idea__button-next',
	// 		// 	prevEl: '.idea__button-prev',
	// 		// },
	// 		// breakpoints: {
	// 		// 	320: {
	// 		// 		slidesPerView: 4,
	// 		// 		spaceBetween: 0,
	// 		// 		autoHeight: true,
	// 		// 	},
	// 		// },
	// 	});
	// };

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});