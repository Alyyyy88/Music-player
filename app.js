const songs = [
  {
    title: "Lost in City Lights",
    author: "Cosmo Sheldrake",
    src: "./resources/lost-in-city-lights-145038.mp3",
    img: "./resources/cover-1.jpg",
  },
  {
    title: "Forest Lullaby",
    author: "Lesfm",
    src: "./resources/forest-lullaby-110624.mp3",
    img: "./resources/cover-2.jpg",
  },
];

let currentSongIndex = 0;

const audio = new Audio(songs[currentSongIndex].src);
const container = document.querySelector(".con_details");
const songDuartion = document.querySelector(".total_time");
const remainTime = document.querySelector(".remain_time");
const progressBar = document.querySelector(".music__progress");


const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};


audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progressPercent}%`; 
      remainTime.textContent = formatTime(audio.currentTime);
  }
});




const playBtn = document.querySelector(".play_btn");
const pauseBtn = document.querySelector(".pause_btn");
playBtn.addEventListener("click" ,()=>{
  audio.play();
  playBtn.classList.add("nonactive");
  pauseBtn.classList.add("active");
});


pauseBtn.addEventListener("click",()=>{
  audio.pause();
  playBtn.classList.remove("nonactive");
  pauseBtn.classList.remove("active");
})


const nextSong = document.querySelector(".next_btn");
const prevSong = document.querySelector(".prev_btn");

nextSong.addEventListener("click",()=>{
  loadSong(currentSongIndex + 1);
  playBtn.classList.remove("nonactive");
  pauseBtn.classList.remove("active");

})

prevSong.addEventListener("click",()=>{
  loadSong(currentSongIndex - 1);
  playBtn.classList.remove("nonactive");
  pauseBtn.classList.remove("active");

})


const loadSong = (index)=>{

  if (index >= songs.length) {
    currentSongIndex = 0; 
  } else if (index < 0) {
    currentSongIndex = songs.length - 1; 
  } else {
    currentSongIndex = index;
  }

  container.innerHTML = '';

   const songHTML = `<div class="img-con">
        <img src="${songs[currentSongIndex].img}" alt="imgcover" class="img_cover" width="120px">
      </div>
      <div class="title-con">
        <p class="song_name">
          ${songs[currentSongIndex].title}
        </p>
        <p class="artist_name">
          ${songs[currentSongIndex].author}
        </p>
      </div>`;

    container.insertAdjacentHTML("afterbegin",songHTML);
    audio.src = songs[currentSongIndex].src;
    audio.load();

    if (!audio.paused) {
      audio.play();
    }
    audio.addEventListener("loadedmetadata", ()=>{
      songDuartion.textContent = formatTime(audio.duration);
      remainTime.textContent = formatTime(audio.duration);
    });


  
};

audio.addEventListener("timeupdate", () => {
  remainTime.textContent = formatTime(audio.duration - audio.currentTime);
});

document.querySelector(".music_progress_container").addEventListener("click", (e) => {
  const containerWidth = e.currentTarget.clientWidth;
  const clickX = e.offsetX;
  const newTime = (clickX / containerWidth) * audio.duration;
  audio.currentTime = newTime;
});

loadSong(currentSongIndex);
