const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const songBar = document.getElementById("progress-bar");

const playButton = document.getElementById("pause-song");

const timerStart = document.getElementById("song-start-timer");
const timerEnd = document.getElementById("song-end-timer");



const song = [
    {
        image: "/assets/images/albumpic.jpg",
        name: "Eu Te...",
        artist: "Hotelo",
        audio: "/assets/audio/Hotelo-Eu-Te...-_clipe-oficial_.ogg"
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

    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);

        if (seconds < 10) {
        timerEnd.innerHTML = minutes + ":" + "0" + seconds;
        } else {
        timerEnd.innerHTML = minutes + ":" + seconds;
    }

}


function updateTimer() {
    const currentTime = audio.currentTime

    let curmin = Math.floor(currentTime / 60);
    let cursec = Math.floor(currentTime  % 60);

    if (cursec < 10) {
        timerStart.innerHTML = curmin + ":" + "0" + cursec;
    } else {
        timerStart.innerHTML = curmin + ":" + cursec;
    }
}

function moveBar() {
    songBar.value = audio.currentTime;
}

songBar.addEventListener("input", () => {
    audio.currentTime = songBar.value;
});


audio.addEventListener("timeupdate", () => {
    songBar.value = audio.currentTime;
    updateTimer();
})

setInterval(moveBar, 1000);
}
