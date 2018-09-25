function switchCollapse(id) {
	var element = document.getElementById(id);
	var indicator = element.childNodes[0];
	if (element.getAttribute("aria-expanded") === "false") {
		indicator.innerHTML = "&minus;";	
		window.scrollTo(0, element.getBoundingClientRect().top);
	}	else {
		indicator.innerHTML = "+";	
	}
}
