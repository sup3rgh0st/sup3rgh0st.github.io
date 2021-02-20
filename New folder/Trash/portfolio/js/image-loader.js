

function ImageLoader() {
	console.log("Ryan Maglio.la");
	
	var imgTelevision = new Image();
	var imgStatic = new Image();
	imgTelevision.onload = function() {
		document.getElementById("body").style.backgroundImage = "url("+imgStatic.src+")";
		document.getElementById("body").style.backgroundRepeat = "repeat";
	}
	imgTelevision.src = "images/background.png";
	imgStatic.src = "images/tvstatic.gif";
	if (imgTelevision.complete) imgTelevision.onload();
	
	document.getElementById("content").style.backgroundImage = "url("+imgTelevision.src+")";
	document.getElementById("content").style.backgroundRepeat = "no-repeat";
	document.getElementById("content").style.backgroundPosition = "center";
	document.getElementById("content").style.backgroundClip = "center";
	document.getElementById("content").style.backgroundAttachment = "fixed";
}