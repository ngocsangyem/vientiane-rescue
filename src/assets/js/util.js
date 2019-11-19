// Utility function
function Util() {}

/* 
	Smooth Scroll
*/

Util.scrollTo = function(final, duration, cb, scrollEl) {
	var element = scrollEl || window;
	var start = element.scrollTop || document.documentElement.scrollTop,
		currentTime = null;

	if (!scrollEl) start = window.scrollY || document.documentElement.scrollTop;

	var animateScroll = function(timestamp) {
		if (!currentTime) currentTime = timestamp;
		var progress = timestamp - currentTime;
		if (progress > duration) progress = duration;
		var val = Math.easeInOutQuad(progress, start, final - start, duration);
		element.scrollTo(0, val);
		if (progress < duration) {
			window.requestAnimationFrame(animateScroll);
		} else {
			cb && cb();
		}
	};

	window.requestAnimationFrame(animateScroll);
};

/* 
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function(element) {
	if (!element) element = document.getElementsByTagName('body')[0];
	element.focus();
	if (document.activeElement !== element) {
		element.setAttribute('tabindex', '-1');
		element.focus();
	}
};

Util.cssSupports = function(property, value) {
	if ('CSS' in window) {
		return CSS.supports(property, value);
	} else {
		var jsProperty = property.replace(/-([a-z])/g, function(g) {
			return g[1].toUpperCase();
		});
		return jsProperty in document.body.style;
	}
};
