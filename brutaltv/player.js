var player;
var globalVideoIndex;
var totalChannels = 4;

function onYouTubePlayerAPIReady() {
	console.log("Hello! I'm glad you're here. -sup3rgh0st")
	console.log("Creating video player. Total videoIds:",videoIds.length, " Total durations", durations.length, " Total videoNames:", videoTitles.length, " (these should match)");
	const totalPlaylistDuration = getTotalPlaylistDuration();
	console.log("Total content length: >=", Math.floor(totalPlaylistDuration / 60 / 60 / 24), " days. (",totalPlaylistDuration,"seconds)");
	createVideoPlayer();
	setCurrentlyPlaying("Currently tuning Brutal TV...");
}

function getTotalPlaylistDuration() {
	const sum = durations.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return sum;
}

function getPlayerVideo(channelNum) {
	const epochSeconds = Math.floor(Date.now() / 1000);
	const totalPlaylistDuration = getTotalPlaylistDuration();
	const channelOffset = (totalPlaylistDuration / totalChannels * channelNum);
	playlistPosition = (epochSeconds + channelOffset) % totalPlaylistDuration;
	
	console.log("Getting video from playlist, playlistPosition:", playlistPosition," channelOffset:",channelOffset);
	
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

function setCurrentlyPlaying(name) {
	const myDiv = document.getElementById("playerCurrentlyPlaying");
	myDiv.innerText = name;
}

function playNextVideo() {
	globalVideoIndex++;
	console.log("Playing video:",videoIds[globalVideoIndex], " index:",globalVideoIndex);
	player.loadVideoById(videoIds[globalVideoIndex]); 
}

function changeChannel(channelNum) {
	const [id, videoPosition] = getPlayerVideo(channelNum);
	player.loadVideoById({'videoId' : id, 'startSeconds' : videoPosition}); 
}

function createVideoPlayer() {
	const [id, videoPosition] = getPlayerVideo(0);
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

function onPlayerReady(event) {
	event.target.playVideo();
}

function onPlayerStateChange(event) {        
	if(event.data === YT.PlayerState.ENDED) {
		playNextVideo()
	}else if(event.data === YT.PlayerState.PLAYING) {
		setCurrentlyPlaying(event.target.videoTitle);
	}
}

function onPlayerError(event) {
	// TODO, while this works, it means for the duration of the unavailable video, we will start at the beginning of the next video.
	// We probably just want to somehow detect this when generating the list of IDs and not include it in the list...
	console.log("Skipping video:",videoIds[globalVideoIndex], " index:",globalVideoIndex, " a playback error was detected.");
	playNextVideo()
}