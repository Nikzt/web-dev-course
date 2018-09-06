var age = prompt("How old are you?");
age = parseInt(age);
var daysAlive = (age * 365) - (age / 4);
	alert("You have been alive for " + daysAlive + " days.");
