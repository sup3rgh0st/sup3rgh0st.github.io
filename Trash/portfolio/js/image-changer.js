// JavaScript Document
function ImageChanger() {
	var imgGame = new Image();
	imgGame.src = "images/tvGame.gif";
	var imgProjects = new Image();
	imgProjects.src = "images/tvProjects.gif";
	var imgResume = new Image();
	imgResume.src = "images/tvResume.gif";
	
	$("#navGame").mouseover(function(e) {
        document.getElementById("midtent").style.backgroundImage = "url("+imgGame.src+")";
		document.getElementById("midtent").style.backgroundRepeat = "repeat";
    });
	$("#navGame").mouseleave(function(e) {
        document.getElementById("midtent").style.backgroundImage = "url()";
		document.getElementById("midtent").style.backgroundRepeat = "repeat";
    });
	
	$("#navProj").mouseover(function(e) {
        document.getElementById("midtent").style.backgroundImage = "url("+imgProjects.src+")";
		document.getElementById("midtent").style.backgroundRepeat = "repeat";
    });
	$("#navProj").mouseleave(function(e) {
        document.getElementById("midtent").style.backgroundImage = "url()";
		document.getElementById("midtent").style.backgroundRepeat = "repeat";
    });
	
	$("#navResume").mouseover(function(e) {
        document.getElementById("midtent").style.backgroundImage = "url("+imgResume.src+")";
		document.getElementById("midtent").style.backgroundRepeat = "repeat";
    });
	$("#navResume").mouseleave(function(e) {
        document.getElementById("midtent").style.backgroundImage = "url()";
		document.getElementById("midtent").style.backgroundRepeat = "repeat";
    });
}