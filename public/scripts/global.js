document.addEventListener("DOMContentLoaded", function(event) {
	var counter;
	var target = document.getElementById('countdown');
	setInterval(function() {
		counter = countdown( new Date(2006, 6, 30, 12, 0, 0) ).toString();
		target.innerHTML = counter;
	}, 500);
});
