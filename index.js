navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

if(navigator.getUserMedia){
    navigator.getUserMedia({video:true} , handleVideo, videoError);
}

function handleVideo(stream){
document.querySelector('#videoDisplay').src = window.URL.createObjectURL(stream);
}

function videoError(e){
    alert("There has some problem ;<...")
}