const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songBar = document.getElementById("progress-bar")

const playButton = document.getElementById("pause-song")


const song = [
    {
        image: "../assets/images/albumpic.png",
        name: "Loverboy",
        artist: "A-Wall",
        audio: "../assets/audio/Shiloh-Dynasty-Sex-For-Breakfast-CHILL-PLEX-_youtube_.ogg"
    }
]


const audio = document.createElement("audio");
let currentSongIndex = 0;

playSong();

playButton.addEventListener("click", function() {
    if (!audio.paused) {
        audio.pause();
        playButton.classList.remove("fa-circle-pause")
    } else {
        audio.play();
        playButton.classList.add("fa-circle-pause")
    }
});

function playSong() {
const songIndex = song[currentSongIndex];
songImage.src = songIndex.image;
songName.innerText = songIndex.name;
songArtist.innerText = songIndex.artist;
audio.src = songIndex.audio;

audio.onloadedmetadata = function() {
    songBar.value = 0;
    songBar.max = audio.duration;
}

function moveBar() {
    songBar.value = audio.currentTime;

}

songBar.addEventListener("input", () => {
    audio.currentTime = songBar.value;
});

setInterval(moveBar, 1000);
}
