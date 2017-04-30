<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!--

 _   _ _     _                              
| | | (_)   (_)                             
| | | |_ ___ _  ___  _ __   __ _ _ __ _   _ 
| | | | / __| |/ _ \| '_ \ / _` | '__| | | |
\ \_/ / \__ \ | (_) | | | | (_| | |  | |_| |
 \___/|_|___/_|\___/|_| |_|\__,_|_|   \__, |
                                       __/ |
                                      |___/ 

Visionary! Web Client 2017 Ryan Magliola

-->
<head>
<link rel="stylesheet" href="style.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/css?family=Amatic+SC:700" rel="stylesheet">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Visionary</title>
</head>
<body>
<div class="window">
	<h1>Visionary</h1>
    <form id="guess">
        <p>Lobby ID: <input id="lobbyidPost" name="lobbyidPost" type="text" value="" placeholder="ABCD"/></p>
        <p>Your Name: <input id="playeridPost" name="playeridPost" type="text" value="" placeholder="Will"/></p>
        <p>Your Guess: <input id="wordPost" name="wordPost" type="text" value="" placeholder="Apple"/></p>
        <p><input id="servernamePost" name="servernamePost" type="hidden" value="69.176.135.94" /></p>
        <p><input type="submit" value="Submit Guess!" /></p>
    </form>
    
    <div id='response'></div>
</div>
</body>
</html>
<script>
console.log("Visionary Web Client - (c) Ryan Magliola 2017");
$(document).ready(function(){
    $('#guess').submit(function(){
     
        // show that something is loading
        $('#response').html("<b>Sending Guess...</b>");
         
		/* Get from elements values */
		var values = $(this).serialize();
		//console.log(values);
        /*
         * 'post_receiver.php' - where you will pass the form data
         * $(this).serialize() - to easily read form data
         * function(data){... - data contains the response from post_receiver.php
         */
        $.ajax({
            type: 'POST',
            url: 'http://69.176.135.94/visionary/selectgamewhere.php', 
            data: values,
			success: function (response) {
			   // you will get response from your php page (what you echo or print)                 
	
			},
			error: function(jqXHR, textStatus, errorThrown) {
				//console.log(jqXHR);
				
				if(jqXHR.responseText === ''){
					$('#response').html('Lobby ID is incorrect');
				}else if(jqXHR.responseText.toUpperCase() !== $('#wordPost').val().toUpperCase()){
					$('#response').html('Your guess is incorrect');
					insertGuess(values);
				}else if(jqXHR.responseText.toUpperCase() === $('#wordPost').val().toUpperCase()){
					$('#response').html('Your guess was correct!');
					insertGuess(values);
					setGameWinner(values);
				}
				//$('#response').html(jqXHR.responseText);
				//console.log(jqXHR.responseText.toUpperCase());
			}
        });
 
        // to prevent refreshing the whole page page
        return false;
 
    });
});

function insertGuess(values) {
	//console.log("insert Guess");
	$.ajax({
		type: 'POST',
		url: 'http://69.176.135.94/visionary/insertguess.php', 
		data: values,
		success: function (response) {
		},
		error: function(jqXHR, textStatus, errorThrown) {
			//console.log("Guess Sent");
		}
	});

	// to prevent refreshing the whole page page
	return false;
}

function setGameWinner(values) {
	//console.log("setting Winner");
	$.ajax({
		type: 'POST',
		url: 'http://69.176.135.94/visionary/updategamewhere.php', 
		data: values,
		success: function (response) {
		},
		error: function(jqXHR, textStatus, errorThrown) {
			//console.log("Winner Set");
		}
	});

	// to prevent refreshing the whole page page
	return false;
}

</script>