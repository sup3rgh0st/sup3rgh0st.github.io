// JavaScript Document
function HomeSlide(){
	console.log("Ryan Magliola - maglio.la - 2016");
	
	var bgIndex = 1;
	/*
	var bgImages = [];
	bgImages[0] = "../images/auditoriumHammerIcon.png";
	bgImages[1] = "../images/caveGameIcon.png";
	bgImages[2] = "../images/goingRogueIcon.png";
	bgImages[3] = "../images/kartRacingIcon.png";
	bgImages[4] = "../images/yozakuraIcon.png";
	*/
	var infoTitle = [];
	infoTitle[0] = "Chroma Cannon Anthology";
	infoTitle[1] = "Going Rogue";
	
	var infoDetail = [];
	infoDetail[0] = ["2013-2015 :: Chroma Cannon I,II,III,IV developed for a whole palette of environments","#"];
	infoDetail[1] = ["2016 :: Roguelike dungeons willed with randomly generated fun and adventure","#"];
	
	var infoDir = [];
	infoDir[0] = "cc";
	infoDir[1] = "gr";
	
	function changeBackground(){
		var index = bgIndex++ % infoTitle.length;
		
		$('.content').fadeOut(500);
		window.setTimeout(function() {
			/*
			<video autoplay="" loop="" poster="blank.png" id="bgvid">
				<source src="slideshow/cc/clip.mp4" type="video/mp4">
				<source src="slideshow/cc/clip.ogg" type="video/ogg">
    		</video>
			*/
			//$('.content').css("background-image","url('"+ bgImages[index] +"')");
			var inhtml = '<video autoplay="" loop="" poster="images/blank.png" id="bgvid">';
			inhtml += '<source src="slideshow/'+infoDir[index]+'/clip.mp4" type="video/mp4">';
			inhtml += '<source src="slideshow/'+infoDir[index]+'/clip.ogg" type="video/ogg">';
			inhtml += '</video>';
			$('.content').html(inhtml);
			$('.content').fadeIn(500);
		}, 500);  
		
		$('.ssDetails').fadeOut(500);
		window.setTimeout(function() {
			
			var inhtml = '<p>' + infoTitle[index] + '</p>';
			inhtml += '<p class="subtext">' + infoDetail[index][0] + ' - <a href="' + infoDetail[index][1] + '">More Info</a>' + '</p>';
			$('.ssDetails').html(inhtml);
			$('.ssDetails').fadeIn(500);
		}, 500); 
		    
	}
	
	//Initial Page View//
	var inhtml = '<p>' + infoTitle[0] + '</p>';
	inhtml += '<p class="subtext">' + infoDetail[0][0] + ' - <a href="' + infoDetail[0][1] + '">More Info</a>' + '</p>';
	$('.ssDetails').html(inhtml);
	inhtml = '<video autoplay="" loop="" poster="images/blank.png" id="bgvid">';
	inhtml += '<source src="slideshow/'+infoDir[0]+'/clip.mp4" type="video/mp4">';
	inhtml += '<source src="slideshow/'+infoDir[0]+'/clip.ogg" type="video/ogg">';
	inhtml += '</video>';
	$('.content').html(inhtml);
	
	//*****************//

	$(document).ready(function() {
	  setInterval(changeBackground, 13400);
	});

}

























