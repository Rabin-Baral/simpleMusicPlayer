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
let i = 2

console.log()

loadMusic(musicList)

function loadMusic(){
    music.src = musicList[i].path
    title.innerText = musicList[i].name
}

function previouXong(){
    i--
    if(i<0){
        i = musicList.length -1
    }
    loadMusic(musicList[i])
    playMusic()
}
prevBtn.addEventListener('click', previouXong)


function nextSong(){
    i++
    if(i > (musicList.length -1)){
        i = 0
    }
    loadMusic(musicList[i])
    playMusic()
}
nextBtn.addEventListener('click', nextSong)


function playMusic(){
    isSongPlaying = true
    music.play()
    playPauseBtn.innerHTML = '<i class="fa-regular fa-circle-pause"></i>'
}

function pauseMusic(){
    isSongPlaying = false
    music.pause()
    playPauseBtn.innerHTML = '<i class="fa-regular fa-circle-play"></i>'

}

playPauseBtn.addEventListener('click', () =>{
    isSongPlaying ? pauseMusic() : playMusic()
})
