function switchCollapse(id) {
	var element = document.getElementById(id);
	var indicator = element.childNodes[0];
	if (element.getAttribute("aria-expanded") === "false") {
		indicator.innerHTML = "&minus;";	
		window.setTimeout(function() {switchCollapseScroll(element)}, 100);
	}	else {
		indicator.innerHTML = "+";	
	}
}

function switchCollapseScroll(element) {
//		window.scrollTo(0, element.offsetTop + 150);
		element.scrollIntoView({block: 'start', behavior: 'smooth'});
}
