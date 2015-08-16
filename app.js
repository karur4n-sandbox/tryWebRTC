var requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
        return window.setTimeout(function() {
            return callback();
        }, 1000 / 60);
    };
})();

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;
window.URL = window.URL || window.webkitURL;
var i = 0;

var video = document.getElementById('myVideo');
var localStream = null;

navigator.getUserMedia({video: true, audio: false},
   function(stream) { // for success case
       window.requestAnimationFrame(step);
       video.src = window.URL.createObjectURL(stream);
   }, function(err) { // for error case
       console.log(err);
   }
);

var captureFrame = function(){
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d')
    canvas.width = video.width;
    canvas.height = video.height;
    ctx.drawImage(video, 0, 0, 400, 300);
    var dataURL = canvas.toDataURL('image/jpeg');
    return dataURL;
};

function step(timestamp) {
    i++;
    console.log(i);
    if ((i % 1000) === 0) {
        var img = captureFrame();
        $('body').append($('<img></img>').attr('src', img));
    }

    requestAnimationFrame(step);
}

