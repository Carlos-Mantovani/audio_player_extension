var url = 'audio/music.mp3'
var audio = new Audio(url)

var button = document.getElementById('btn')

var isPlaying = false

button.onclick = function() {
    if (!isPlaying) {
        audio.play()
        isPlaying = true
    }else {
        audio.pause()
        audio.currentTime = 0
        isPlaying = false;
    }
   
}

