// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

window.onload = function onLoad() {

	var bar = new ProgressBar.Line('#openingline', {
	  strokeWidth: 2,
	  easing: 'easeInOut',
	  duration: 1400,
	  color: '#ff7800',
	  trailColor: '#eee',
	  trailWidth: 1,
	  svgStyle: {width: '100%', height: '100%'}
	});

	bar.animate(1.0);  // Number from 0.0 to 1.0
}