

function ImageLoader() {
	console.log("Welcome to Ryan Maglio.la");
	
	//var imgTelevision = new Image();
	//var imgStatic = new Image();
	window.onload = function() {
		document.getElementById("body").style.backgroundImage = "url(images/tvstatic.gif)";
		document.getElementById("body").style.backgroundRepeat = "repeat";
		console.log("The website has completed loading. Thank you for your patience");
	}
	//imgTelevision.src = "images/background.png";
	//imgStatic.src = "images/tvstatic.gif";
	//if (imgTelevision.complete) imgTelevision.onload();
	
	//document.getElementById("content").style.backgroundImage = "url("+imgTelevision.src+")";
	//document.getElementById("content").style.backgroundRepeat = "no-repeat";
	//document.getElementById("content").style.backgroundPosition = "center";
	//document.getElementById("content").style.backgroundClip = "center";
	//document.getElementById("content").style.backgroundAttachment = "fixed";
}