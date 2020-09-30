console.log("ola");

document.addEventListener ('keypress', (event) => {
  if (event.keyCode == 32) {
		const AudioContext = window.AudioContext || window.webkitAudioContext;
		const audioCtx = new AudioContext();
		console.log(audioCtx);

		//better with fetch api
		const audio = new Audio("sound/plecauri.wav");
		const source = audioCtx.createMediaElementSource(audio);
		source.connect(audioCtx.destination);
		audio.play();

/*
		const audioCtx = new AudioContext();
		let buffer = null;

		const load = () => {
  	const request = new XMLHttpRequest();
  	request.open("GET", "sound/plecauri.wav");
  	request.responseType = "arraybuffer";
  	request.onload = function() {
    let undecodedAudio = request.response;
    	audioCtx.decodeAudioData(undecodedAudio, (data) => buffer = data);
  	};
  	request.send();
		};

		const play = () => {
  		const source = audioCtx.createBufferSource();
  		source.buffer = buffer;
  		source.connect(audioCtx.destination);
  		source.start();
		};


	console.log("ika");*/
	};
});
