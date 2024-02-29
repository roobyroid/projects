window.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add(getOS());
	document.body.classList.add('loaded');

	animateTextOnload();
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
