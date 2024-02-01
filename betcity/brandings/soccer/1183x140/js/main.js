window.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add(getOS());
	document.body.classList.add('loaded');

	animateTextOnload();

	animateWowCoin().play();

	setTimeout(() => {
		animateWowCoin().reset();
	}, 5000);

	setInterval(() => {
		setTimeout(() => {
			animateWowCoin().reset();
		}, 6000);
		animateWowCoin().play();
	}, 8000);
});

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

function animateWowCoin() {
	const wow = document.querySelectorAll('.header__abanner__wow');
	const ball = document.querySelectorAll('.header__abanner__wow__ball');
	const coin = document.querySelectorAll('.header__abanner__wow__coin');
	const lines = document.querySelectorAll('.header__abanner__wow__lines');
	const items = [...wow, ...ball, ...coin, ...lines];

	return {
		play: function () {
			items.forEach((el) => {
				el.classList.add('js-active');
			});
		},
		reset: function () {
			items.forEach((el) => {
				el.classList.remove('js-active');
			});
		},
	};
}

function animateTextOnload() {
	const tl = gsap.timeline();
	const texts = document.querySelectorAll('.m-text');
	texts.forEach((text) => {
		tl.from(
			text.children[0],
			{
				y: '-80%',
				duration: 0.3,
				opacity: 0,
			},
			'<'
		);
		tl.from(
			text.children[1],
			{
				delay: 0.2,
				y: '-80%',
				duration: 0.3,
				opacity: 0,
			},
			'<'
		);
	});
}
