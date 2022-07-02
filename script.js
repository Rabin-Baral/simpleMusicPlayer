//grabbing all the DOM elements
const title = document.querySelector('.title')
const prevBtn = document.querySelector('.prev')
const playPauseBtn = document.querySelector('.playPause')
const nextBtn = document.querySelector('.next')
const music = document.querySelector('audio')

//getting music
let musicList = [
    {
        name: 'sia - Unstoppable',
        path: './musicList/m1.mp3'
    },
    {
        name: 'emenim - Venom',
        path: './musicList/m2.mp3'
    },
    {
        name: 'whatever it takes',
        path: './musicList/m3.mp3'
    },
    {
        name: 'work for your Dream',
        path: './musicList/m4.mp3'
    }   
]



let isSongPlaying = false
let i = 0

//adding src and name of the music to the player
loadMusic(musicList)

function loadMusic(){
    music.src = musicList[i].path
    title.innerText = musicList[i].name
}

//changing to the previous music
function previouXong(){
    i-- //music index should be decrease-
    if(i<0){
        i = musicList.length -1 
    }
    loadMusic(musicList[i])
    playMusic() //if you click on precious btn, previous music will be played
}
prevBtn.addEventListener('click', previouXong)

//changing to the next music
function nextSong(){
    i++     //music index should be increase
    if(i > (musicList.length -1)){
        i = 0
    }
    loadMusic(musicList[i])
    playMusic() //if you click on next btn, next music will be played
}
nextBtn.addEventListener('click', nextSong)

//playing music
function playMusic(){
    isSongPlaying = true
    music.play()
    playPauseBtn.innerHTML = '<i class="active fa-solid fa-pause"></i>' //swapping the play/pause icon
}

function pauseMusic(){
    isSongPlaying = false
    music.pause()
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>' ////swapping the play/pause icon

}

playPauseBtn.addEventListener('click', () =>{
    isSongPlaying ? pauseMusic() : playMusic()
})
