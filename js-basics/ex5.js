function isEven(num) {
	if (num % 2) {
		return false;
	} else {
		return true;
	}
}

function factorial(n) {
	fact = 1;
	if (n === 0) {
		return 1;
	} else {
		for (var i = 1; i <= n; i ++) {
			fact = fact * i;			
		}
	}
	return fact;
}

function kebabToSnake(kebab) {
	var myRegExp = /-/g;
	return kebab.replace(myRegExp, "_");
}

function printReverse(anArray) {
	for (var i = anArray.length - 1; i >= 0; i --) {
		console.log(anArray[i]);
	}
}

function isUniform(anArray) {
	firstElement = anArray[0];
	uniformity = true;
	anArray.forEach(
	function(element) {
		if (element !== firstElement) {
			uniformity = false;
		}
	});
	return uniformity;
}

function sumArray(anArray) {
	var result = 0;
	anArray.forEach(function(element) {
		result += element;
	});
	return result;
}

function max(anArray) {
	var result = -9999999;
	anArray.forEach(function(element) {
		if (element > result) {
			result = element;
		}
	});	
	return result;
}

var mov1 = {
	name: "In Bruges",
	stars: 5,
	hasWatched: true
};
var mov2 = {
	name: "Frozen",
	stars: 4.5,
	hasWatched: false
};
var mov3 = {
	name: "Max Max Fury Road",
	stars: 5,
	hasWatched: true
};
var mov4 = {
	name: "Les Miserables",
	stars: 3.5,
	hasWatched: false
};

movArray = [mov1, mov2, mov3, mov4];

function movieDB(movArray) {
	movArray.forEach(function(mov){
		var printBuf = "";
		// have you watched the movie?
		if (mov.hasWatched) {
			printBuf += "You have seen ";
		} else {
			printBuf += "You have not seen ";
		}
		
		// what is the movie called?
		printBuf += "\"" + mov.name + "\" ";

		// What is it rated out of 5?
		printBuf += "- " + mov.stars + " stars";
		
		console.log(printBuf);
	});	
}
