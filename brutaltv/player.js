var player;
var globalVideoIndex;

function onYouTubePlayerAPIReady() {
	console.log("Creating video player. Total videoIds:",videoIds.length, " Total durations", durations.length, " (these should match)");
	console.log("Total content length: >=", Math.floor(getTotalPlaylistDuration() / 60 / 60 / 24), " days");
	createVideoPlayer();
	setCurrentlyPlaying("Currently tuning Brutal TV...");
}

function getTotalPlaylistDuration() {
	const sum = durations.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return sum;
}

function getPlayerVideo() {
	const epochMilliseconds = Date.now();
	const epochSeconds = Math.floor(epochMilliseconds / 1000);
	playlistPosition = epochSeconds % getTotalPlaylistDuration();
	
	for (let i = 0; i < durations.length ;i++)
	{
		playlistPosition = playlistPosition - durations[i];
		if(playlistPosition <= 0)
		{
			globalVideoIndex = i;
			return[videoIds[i], playlistPosition + durations[i]];
		}
	}
	
	// error
	return[videoIds[0], 0];
}

function createVideoPlayer() {
	const [id, videoPosition] = getPlayerVideo();
	console.log("Playing video:",id, " index:",globalVideoIndex, " start:", videoPosition);
	player = new YT.Player('player', {
		height: '720',
		width: '1280',
		videoId: id,
		playerVars: {
			autoplay: 1,
			start: videoPosition
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange,
			'onError': onPlayerError
		}
	});
}

function setCurrentlyPlaying(name) {
	const myDiv = document.getElementById("playerCurrentlyPlaying");
	myDiv.innerText = name;
}

function onPlayerReady(event) {
	event.target.playVideo();
}

function playNextVideo() {
	globalVideoIndex++;
	console.log("Playing video:",videoIds[globalVideoIndex], " index:",globalVideoIndex);
	player.loadVideoById(videoIds[globalVideoIndex]); 
}

function onPlayerStateChange(event) {        
	if(event.data === YT.PlayerState.ENDED) {
		playNextVideo()
	}else if(event.data === YT.PlayerState.PLAYING) {
		setCurrentlyPlaying(event.target.videoTitle);
		console.log(event.target.getVideoData);
	}
}

function onPlayerError(event) {
	// TODO, while this works, it means for the duration of the unavailable video, we will start at the beginning of the next video.
	// We probably just want to somehow detect this when generating the list of IDs and not include it in the list...
	console.log("Skipping video:",videoIds[globalVideoIndex], " index:",globalVideoIndex, " a playback error was detected.");
	playNextVideo()
}