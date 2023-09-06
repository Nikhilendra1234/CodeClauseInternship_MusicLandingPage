// code for accessing the  elements for nav bar designing
const hamberg=document.getElementById("hamberg");
const menus=document.getElementById("hlinks2");
const close=document.getElementById("close");

// code for start music player when click play button
const mplay=document.getElementById("mplay");
const mstop=document.getElementById("mstop");
const music=document.getElementById("music");
const musictext=document.getElementById("musictext");
const musicmusic=document.getElementById("musicmusic");

// acceesing the progress bar to show the songs progression
const progress=document.getElementById("progress");

// accessing music player control ,image and audio player
const ctrl=document.getElementById("ctrl");
const songs=document.getElementById("songs");
const mimg=document.getElementById("mimg");
const next=document.getElementById("next");
const prev=document.getElementById("prev");

// accessing the artist  and title of the songs
const artist=document.getElementById("artist");
const title=document.getElementById("title");


// code for working of hamberger menu
hamberg.addEventListener("click",()=>{
    menus.style.display="block";
    hamberg.style.visibility="hidden";
})
// code for clicking cross button
close.addEventListener("click",()=>{
    menus.style.display="none";
    hamberg.style.visibility="visible";
})
// code for event of resize of the screen
window.addEventListener("resize",()=>{
    if(window.innerWidth>=950)
    {
        menus.style.display="none";
        
    }
    if(window.innerWidth<=950){
        hamberg.style.display="inline";
    }
})
// code when the page loads effect on button
window.onload=function(){
    mplay.classList.add("bounce");
}
// code for show the music player

mplay.addEventListener("click",()=>{
 musictext.style.display="none";   
 musicmusic.style.display="block";
 songs.play();
 ctrl.classList.replace("fa-play","fa-pause");
 mimg.classList.add("animation");
 musicmusic.classList.add("djstyle");
 mplay.classList.remove("bounce")
 mstop.classList.add("bounce");
})
mstop.addEventListener("click",()=>{
    musictext.style.display="inline";
    musicmusic.style.display="none";
    songs.pause();
    ctrl.classList.replace("fa-play","fa-pause");
    mimg.classList.remove("animation")
    musicmusic.classList.remove("djstyle");
    mplay.classList.add("bounce")
    mstop.classList.remove("bounce");
})

// code for adding song duration value to the progress bar

songs.onloadedmetadata=function(){
    // songs.pause();
    progress.max=songs.duration;
    progress.value=songs.currentTime;
}
//code for play music and stop music

let isPlaying=false;
// code for play music
const playMusic=()=>{
        isPlaying=true;
        songs.play();
        ctrl.classList.replace("fa-play","fa-pause");
        mimg.classList.add("animation");
        musicmusic.classList.add("djstyle");
        mplay.classList.remove("bounce");
        mstop.classList.add("bounce");
    }
// code for pause music
 const stopMusic=()=>{
        isPlaying=false;
        songs.pause();
        ctrl.classList.replace("fa-pause","fa-play");
        mimg.classList.remove("animation");
        musicmusic.classList.remove("djstyle");
        mplay.classList.add("bounce");
        mstop.classList.remove("bounce");
    }

// code to click on the play or pause button to play or stop music
ctrl.addEventListener("click",()=>{
    if(isPlaying){
        stopMusic();
    }
    else{
        playMusic();
    }
})

// code for storing all the songs list of all the songs.
const allsongs=[
    {
        title:"Daku Ek number",
        imgs:"./images/daku ek.png",
        name:"./music/Daku_320(PagalWorld.cm).mp3",
        artist:"Inderpal Moga"
    },
    {
        title:"Gadiya Uchiya",
        imgs:"./images/gadiya uchiya.png",
        name:"./music/Gaddiya Uchiya Rakhiya_320(PagalWorld.cm).mp3",
        artist:"Riar Saab"
    },
    {
        title:"kahani suno",
        imgs:"./images/kahani suno.png",
        name:"./music/Kahani Suno_320(PagalWorld.cm).mp3",
        artist:"Kaifi Khalil"
    },
    {
        title:"mann meri jaan",
        imgs:"./images/maan meri jaan.png",
        name:"./music/Maan Meri Jaan_320(PagalWorld.cm).mp3",
        artist:"King"
    },
    {
        title:"Tere seher ",
        imgs:"./images/tere seher ruka.png",
        name:"./music/Oh-Tere-Sheher-Mein-Rukka-Baje-Rao-Sahab-Ka.mp3",
        artist:"Ak Rok"
    },
    {
        title:"Tere Vaste",
        imgs:"./images/tere vaste.png",
        name:"./music/Tere Vaaste Remix - DJ Harshit Shah_320(PagalWorld.cm).mp3",
        artist:"Varun Jain"
    },
    {
        title:"Tu hai to mujhe",
        imgs:"./images/phir aur kya chahiye.png",
        name:"./music/Tu Hai To Mujhe Phir Aur Kya Chahiye_320(PagalWorld.cm).mp3",
        artist:"Arijit Singh"
    },
    {
        title:"what jhumka",
        imgs:"./images/what jhumka.png",
        name:"./music/What Jhumka_320(PagalWorld.cm).mp3",
        artist:"Arijit Singh"
    }
]
//code for functionality of the next and previous button of the music player 
function loadSongs(song){
    songs.src=song.name;
    mimg.src=song.imgs;
    artist.innerText=song.artist;
    title.innerText=song.title;
}

//code to define index of the song
let songindex=0;
// const npplayMusic=()=>{
//     isPlaying=true;
//     songs.play();
//     ctrl.classList.replace("fa-play","fa-pause");
//     mimg.classList.add("animation");
//     musicmusic.classList.add("djstyle");
// }
// code for next button to play the next song
const nextSong=()=>{
    songindex=(songindex+1) % allsongs.length;
    loadSongs(allsongs[songindex]);
    playMusic();
}
next.addEventListener("click",nextSong);

// code for previous button to play previous song
const prevSong=()=>{
    songindex= (songindex-1 + allsongs.length) % allsongs.length;
    loadSongs(allsongs[songindex]);
    playMusic();
}
prev.addEventListener("click",prevSong);

// code for set the progress bar value as song current time
if(songs.play()){
    setInterval(()=>{
        progress.value=songs.currentTime;
    },500)
}

// code for on chaning the value of the progress bar change the value of song .
progress.onchange=function(){
    songs.currentTime=progress.value;
}