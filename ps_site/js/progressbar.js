// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var orange = "#ff7800";

window.onload = function onLoad() {

	var bar = new ProgressBar.Line('#openingline', {
	  strokeWidth: 2,
	  easing: 'easeInOut',
	  duration: 1800,
	  color: orange,
	  trailColor: '#eee',
	  trailWidth: 1,
	  svgStyle: {width: '100%', height: '100%'}
	});

	bar.animate(1.0);  // Number from 0.0 to 1.0

	var bars = ['#uxd', '#research', '#dev', '#pair'].map(function (id) {
		return new ProgressBar.Circle(id, {

			color: '#aaa',
			// This has to be the same size as the maximum width to
			// prevent clipping
			strokeWidth: 2,
			trailWidth: 10,
			easing: 'easeInOut',
			duration: 1400,
			text: {
				autoStyleContainer: false
			},
			from: { color: '#aaa', width: 2 },
			to: { color: orange, width: 10 },
			// Set default step function for all animate calls
			step: function step(state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value + '%');
				}
			}

		});
	});

	bars.forEach(function (bar) {
		return bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	});
	bars.forEach(function (bar) {
		return bar.text.style.fontSize = '1.6rem';
	});
	bars.forEach(function (bar) {
		return bar.text.style.color = "#555";
	});

	bars.forEach(function (bar) {
		return bar.animate(1);
	});
	
}
