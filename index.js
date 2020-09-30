console.log("ola");

const btn1 = document.getElementById('btn1');

btn1.addEventListener("click", function() {
  console.log("joaquim");
  window.location.href='catalog.html'
});

const btn2 = document.getElementById('btn2');

btn2.addEventListener("click", function() {
  console.log("joaquim");
  window.location.href='augmented.html'

  //Test browser support
  const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

  if (SUPPORTS_MEDIA_DEVICES) {
    //Get the environment camera (usually the second one)
    navigator.mediaDevices.enumerateDevices().then(devices => {

      const cameras = devices.filter((device) => device.kind === 'videoinput');

      if (cameras.length === 0) {
        throw 'No camera found on this device.';
      }
      const camera = cameras[cameras.length - 1];

      // Create stream and get video track
      navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: camera.deviceId,
          facingMode: ['user', 'environment'],
          height: {ideal: 1080},
          width: {ideal: 1920}
        }
      }).then(stream => {
        const track = stream.getVideoTracks()[0];

        //Create image capture object and get camera capabilities
        const imageCapture = new ImageCapture(track)
        const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

          //todo: check if camera has a torch

          //let there be light!
          const btn = document.querySelector('.switch');
          btn.addEventListener('click', function(){
            track.applyConstraints({
              advanced: [{torch: true}]
            });
          });
        });
      });
    });

    //The light will be on as long the track exists


  }


});

const btn3 = document.getElementById('btn3');

btn3.addEventListener("click", function() {
  console.log("joaquim");
  window.location.href='virtual.html'
});
