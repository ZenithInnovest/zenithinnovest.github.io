var aboutSec = document.getElementById('about');
var testingSec = document.getElementById('testing');
var tradingSec = document.getElementById('trading');

var aboutStartLoc = 0;
var tesingStartLoc = aboutSec.scrollHeight - screen.height + 350;
var tradingStartLoc = aboutSec.scrollHeight + testingSec.scrollHeight - screen.height + 350;

function runAnimation(sec) {
	var divForAnimations = sec.children[0].children;
	for (var i = 1; i < divForAnimations.length; i++) {
		if (!divForAnimations[i].classList.contains('animated')) {
			divForAnimations[i].classList.add('fadeInUp');
			divForAnimations[i].classList.add('animated');
		}
	}
}

runAnimation(aboutSec);

document.addEventListener("scroll", (event) => {
	lastKnownScrollPosition = window.scrollY;

	if (lastKnownScrollPosition >= tesingStartLoc) {
		runAnimation(testingSec);
	}
	if (lastKnownScrollPosition >= tradingStartLoc) {
		runAnimation(tradingSec);
	}
});