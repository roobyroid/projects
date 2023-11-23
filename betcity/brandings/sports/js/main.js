window.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add(getOS());
	autobet.promise.then(data => {
		runautobet(data)
	})
})

function getOS() {
	var userAgent = window.navigator.userAgent,
	platform = window.navigator.platform,
	macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	iosPlatforms = ['iPhone', 'iPad', 'iPod'],
	os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
	  os = 'MacOS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
	  os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
	  os = 'Windows';
	} else if (/Android/.test(userAgent)) {
	  os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
	  os = 'Linux';
	}

	return os;
}

let animations = {};
function runautobet(event) {
	const ev = event // for prod 
	const elements = document.querySelectorAll(`[data-autobet]`)
	const data = {...ev, ...autobet.fields};
	// console.log(data)
	let = eventAnimationDuration;
	let = wowCoinAnimationDuration = 5;
	let firstTime = true;

	const tl = gsap.timeline();
	tl.set('.aside__frame--second', {opacity: 0});
	tl.set('.header-frame-second', {opacity: 0});
	// data.EVENT = null
	
	init();
	changeAsideHeight('.aside__frame--first');
	// hasPromocode();
	hasEvent();
	// animateWowCoin().play();
	
	document.body.classList.add('loaded')
	animateTextOnload();
	

	// debug
	// changeAsideHeight('.aside__frame--second');
	// tl.set('.aside__frame--first', {opacity: 0});
	// tl.set('.header-frame-first', {opacity: 0});
	// tl.set('.aside__frame--second', {opacity: 1});
	// tl.set('.header-frame-second', {opacity: 1});
	
	function init(){
		[...elements].forEach(el => {
			if(el.tagName == 'SPAN' || el.tagName == 'DIV'){
				data[el.dataset.autobet] ? el.innerText = data[el.dataset.autobet] : null;
			}

			if(el.tagName == "IMG"){
				data[el.dataset.autobet] ? el.src = data[el.dataset.autobet] : null;
			}
		})

	}

	// function hasPromocode(){
	// 	if(!data.PROMOCODE){
	// 		document.body.classList.add('has-no-promocode');
	// 		return
	// 	}

	// 	document.body.classList.add('has-promocode');
	// 	changeAsideHeight('.aside__frame--first');
	// }

	function hasEvent(){
		if(!data.EVENT){
			animateWowCoin().play();
			
			setInterval(() => {
				setTimeout(() => {
					animateWowCoin().reset();
				}, 10000);
				animateWowCoin().play();
			}, 15000)
			return
		}

		document.body.classList.add('has-event');
		if(data.LIVE){
			document.querySelector('.ev__live').classList.remove('hidden');
		}
		animateWowCoin().play();
		animate(['.aside__frame--first', '.aside__frame--second']);
		animate(['.header-frame-first', '.header-frame-second']);
		

		function animate(elements){
			const tl = gsap.timeline({repeat: -1});
			// tl.timeScale(3)
			tl.set(elements, {opacity: 0});
			tl.set(elements[0], {opacity: 1});
			tl.to(elements[0], {
				opacity: 0,
				delay: wowCoinAnimationDuration,
				duration: .3,
				onStart: function(){
					changeAsideHeight('.aside__frame--first');
					animateWowCoin().reset();
				},
				onComplete: function(){
					animations.event.restart();
				}
			},'>')
			tl.to(elements[1], {
				opacity: 1,
				duration: .3,
				onStart: function(){
					changeAsideHeight('.aside__frame--second');
					document
					.querySelector('.js_header')
					.classList.add('header--second-frame');			
				}
			},'<')
			tl.to(elements[1], {
				opacity: 0,
				delay: eventAnimationDuration,
				duration: .3,
				onStart: function(){
					document
              .querySelector('.js_header')
              .classList.remove('header--second-frame');
					animateWowCoin().play();
					changeAsideHeight('.aside__frame--first');
				},
			},'>')
		}
	}

	
	function changeAsideHeight(selector){
		const calc = () => {
			const el = document.querySelector(selector);
			const aside = document.querySelectorAll('.aside-mid');
			function getAbsoluteHeight(el) {
				el = (typeof el === 'string') ? document.querySelector(el) : el; 
				
				const styles = window.getComputedStyle(el);
				const margin = parseFloat(styles['marginTop']) +
				parseFloat(styles['marginBottom']);
				return el.offsetHeight + margin;
			};
			
			const h = getAbsoluteHeight(el);


			if(firstTime){
				gsap.set(aside, {
					height: h,
				})
				firstTime = false;
				return
			}

			gsap.to(aside, {
				height: h,
			})
		}
		calc();
		window.addEventListener('resize', calc);
	}
	
}


function animateWowCoin () {
	const wow = document.querySelectorAll('.header__abanner__wow');
	const ball = document.querySelectorAll('.header__abanner__wow__ball');
	const coin = document.querySelectorAll('.header__abanner__wow__coin');
	const lines = document.querySelectorAll('.header__abanner__wow__lines');
	const items = [
		...wow,
		...ball,
		...coin,
		...lines
	];
	
	return {
		play: function () {
			items.forEach(el => {
				el.classList.add("js-active");
			})
		},
		reset: function () {
			items.forEach(el => {
				el.classList.remove("js-active");
			})
		}
	}
	
}

const topBannerAnimation = () => {
	const tl = new gsap.timeline({ paused: true });
	tl.timeScale(1)
	animations.event = tl;
	const eventOutDelay = 2;

	// tl.from('.top-t1', {
	// 	opacity: 0,
	// 	y: -40,
	// 	ease: "bounce.out",
	// 	duration: .4,
	// })
	// tl.from('.top-t2', {
	// 	opacity: 0,
	// 	y: -20,
	// 	duration: .3,
	// 	ease: "bounce.out",
	// })

	// tl.to('.top-t1', {
	// 	y: 0,
	// 	duration: .2,
	// 	opacity: 1,
	// }, '<')
	// tl.to('.top-t2', {
	// 	y: 0,
	// 	duration: .2,
	// }, '-=.1')


	// tl.from('.top-b1', {
	// 	opacity: 0,
	// 	y: -20,
	// 	// ease: "none.none",
	// 	ease: "bounce.out",
	// 	duration: .2,
	// }, '<')
	// tl.from('.top-b2', {
	// 	opacity: 0,
	// 	y: -60,
	// 	duration: .5,
	// 	// ease: "none.none",
	// 	ease: "bounce.out",
	// }, '<')


	// tl.to('.header-top__b', {
	// 	opacity: 0,
	// 	y: 40,
	// 	duration: .2,
	// 	delay: 1.7,
	// 	ease: "power1.in",
	// }, )
	// tl.to('.header-top__t', {
	// 	opacity: 0,
	// 	y: 40,
	// 	duration: .2,
	// 	ease: "power1.in",
	// }, '-=.1')

	//second
	tl.from('.ev__left', {
		opacity: 0,
		x: -30,
		duration: .5,
		ease: "power1.in",
	}, )
	tl.from('.ev__right', {
		opacity: 0,
		x: 30,
		duration: .5,
		ease: "power1.in",
	}, '<' )
	tl.from('.ev__title', {
		opacity: 0,
		y: -40,
		duration: .5,
		ease: "power1.in",
	}, '<')
	tl.from('.ev__desc', {
		opacity: 0,
		duration: .7,
		ease: "power1.in",
	}, '<')
	tl.from('.ev-desc-dl span', {
		delay: .1,
		xPercent: 100,
		duration: .5,
	}, '<')
	tl.from('.ev-desc-dr span', {
		xPercent: -100,
		duration: .5,
	}, '<')
	tl.from('.ev__live', {
		opacity: 0,
		duration: .1,
	}, '<')

	tl.to('.ev__desc', {
		opacity: 1,
		duration: .5,
	},)
	
	tl.to('.ev__left', {
		opacity: 1,
		x: 0,
		duration: .5,
	},)
	tl.to('.ev__right', {
		opacity: 1,
		x: 0,
		duration: .5,
	},)
	tl.to('.ev__title', {
		opacity: 1,
		x: 0,
		duration: .5,
	},)
	tl.to('.ev__live', {
		opacity: 1,
		duration: .5,
		ease: "power1.in",
	})

	tl.from('.ev-team__f', {
		opacity: 0,
		x: -60,
		duration: .5,
	}, '-=600%' )
	tl.from('.ev-team__s', {
		opacity: 0,
		x: 60,
		duration: .5,
	}, '<')
	tl.to('.ev-team__f', {
		opacity: 1,
		x: 0,
		duration: .5,
	},)
	tl.to('.ev-team__s', {
		opacity: 1,
		x:  0,
		duration: .5,
	},)

	tl.from('.ev-nums', {
		opacity: 0,
		y: 60,
		duration: .5,
		ease: "power1.in",
	}, '-=800%')
	tl.to('.ev-nums', {
		opacity: 1,
		y: 0,
		duration: .5,
		ease: "power1.in",
	},)

	tl.from('.ev-nums div span', {
		opacity: 0,
		y: 60,
		duration: .7,
		
	},'-=620%')
	tl.to('.ev-nums div span', {
		opacity: 1,
		y: 0,
		duration: .7,
		ease: "power1.in",
	},)
	// out
	tl.to('.ev-nums', {
		opacity: 0,
		y: 20,
		duration: .4,
		ease: "power1.in",
		delay: eventOutDelay,
	},'<')
	tl.to('.ev-nums div span', {
		opacity: 1,
		y: 60,
		duration: .7,
		ease: "power1.in",
	}, '-=50%')


	tl.to('.ev__left', {
		opacity: 0,
		x: -30,
		duration: .5,
	},'<')
	tl.to('.ev__right', {
		opacity: 0,
		x: 30,
		duration: .5,
	},'<')
	tl.to('.ev__title', {
		opacity: 0,
		y: -40,
		duration: .5,
	},'<')

	tl.to('.ev-team__f', {
		opacity: 0,
		x: -60,
		duration: .5,
	},'<')
	tl.to('.ev-team__s', {
		opacity: 0,
		x:  60,
		duration: .5,
	},'<')
	tl.to('.ev__desc', {
		opacity: 0,
		duration: .5,
	},'<')
	tl.to('.ev__live', {
		opacity: 0,
		duration: .5,
		ease: "power1.in",
	}, '<')

	tl.to('.ev-desc-dl span', {
		delay: .1,
		xPercent: 100,
		duration: .5,
	}, '<')
	tl.to('.ev-desc-dr span', {
		xPercent: -100,
		duration: .5,
	}, '<')

	
	eventAnimationDuration = tl._dur - .3;
}

topBannerAnimation();

function animateTextOnload () {
	const tl = gsap.timeline();
	const texts = document.querySelectorAll('.m-text');
	texts.forEach(text => {
		tl.from(text.children[0], {
			y: '-80%',
			duration: .3,
			opacity: 0,
		},'<')
		tl.from(text.children[1], {
			delay: .2,
			y: '-80%',
			duration: .3,
			opacity: 0,
		},'<')
	})
}