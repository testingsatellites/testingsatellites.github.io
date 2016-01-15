// How to Display Random News or Content with JavaScript
// Created by Extreme Design Studio

// View full tutorial and code explanation here:      http://www.extremestudio.ro/blog/?p=4273

randomNumber = Math.floor(Math.random()*4+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("quote1").style.display = "inline-block"; 
		document.getElementById("quote2").style.display = "none"; 
		document.getElementById("quote3").style.display = "none"; 
		document.getElementById("quote4").style.display = "none"; 
	}	
	if (randomNumber == 2) {
		document.getElementById("quote1").style.display = "none"; 
		document.getElementById("quote2").style.display = "block"; 
		document.getElementById("quote3").style.display = "none"; 
		document.getElementById("quote4").style.display = "none"; 
	}
	if (randomNumber == 3) {
		document.getElementById("quote1").style.display = "none"; 
		document.getElementById("quote2").style.display = "none"; 
		document.getElementById("quote3").style.display = "block"; 
		document.getElementById("quote4").style.display = "none"; 
	}
	if (randomNumber == 4) {
		document.getElementById("quote1").style.display = "none"; 
		document.getElementById("quote2").style.display = "none"; 
		document.getElementById("quote3").style.display = "none"; 
		document.getElementById("quote4").style.display = "block"; 
	}
}