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

let currentSongIndex = 1;

const audio = new Audio(songs[currentSongIndex].src);
const container = document.querySelector(".container");

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



























// function nextSong() {
//   // Add next button implementation
// }

// function prevSong() {
//   // Add previous button implementation
// }

// function loadSong(index) {
//   // Add load song implementation
// }

// function updateProgressBar() {
//   // Handle when progress bar is updated
// }

// document.getElementById("progressBar").addEventListener("input", function () {
//   audio.currentTime = (this.value / 100) * audio.duration;
// });

// // Initial load
// loadSong(currentSongIndex);








// document.getElementById("nextButton").addEventListener("click", nextSong);
// document.getElementById("prevButton").addEventListener("click", prevSong);
// audio.addEventListener("timeupdate", updateProgressBar);
