// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

window.onload = function onLoad() {

	var bar = new ProgressBar.Line('#openingline', {
	  strokeWidth: 2,
	  easing: 'easeInOut',
	  duration: 1800,
	  color: '#ff7800',
	  trailColor: '#eee',
	  trailWidth: 1,
	  svgStyle: {width: '100%', height: '100%'}
	});

	bar.animate(1.0);  // Number from 0.0 to 1.0

	var bar = new ProgressBar.Circle('#css', {

	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2200,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff7800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});

	//bar.text.style.fontFamily = 'Helvetica, sans-serif';
	//bar.text.style.fontSize = '2em';

	bar.animate(1.0);  // Number from 0.0 to 1.0
	
	var bar = new ProgressBar.Circle('#jscript', {

	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2200,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff7800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
	
	var bar = new ProgressBar.Circle('#ruby', {

	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2200,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff7800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
	
	var bar = new ProgressBar.Circle('#uxd', {

	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 4,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 2200,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#ff7800', width: 4 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});
}
