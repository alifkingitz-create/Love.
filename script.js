// MUSIC
let music = document.getElementById("music");

if(localStorage.getItem("playMusic")=="yes"){
  music.play();
}

function toggleMusic(){
  if(music.paused){
    music.play();
    localStorage.setItem("playMusic","yes");
  }else{
    music.pause();
    localStorage.setItem("playMusic","no");
  }
}

// BOOK FIX
let pages = document.querySelectorAll(".page");
let currentPage = 0;

function turnPage(){
  if(currentPage < pages.length){
    pages[currentPage].classList.add("flipped");
    currentPage++;
  } else {
    showOutro();
  }
}

// OUTRO (NO CURTAIN)
function showOutro(){
  document.getElementById("outro").classList.remove("hidden");

  // Flower rain
  setInterval(()=>{
    let flower = document.createElement("div");
    flower.className="flower";
    flower.innerText="🌸";
    flower.style.left = Math.random()*100 + "vw";
    flower.style.animationDuration = (Math.random()*3+2)+"s";

    document.body.appendChild(flower);

    setTimeout(()=>flower.remove(),5000);
  },200);
}
