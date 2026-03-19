// MUSIC CONTROL (ALL PAGE)
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

// PAGE NAVIGATION
function nextPage(){
  window.location.href="book.html";
}

// BOOK TURN
let pages=document.querySelectorAll(".page");
let current=0;

function turnPage(){
  if(current<pages.length){
    pages[current].classList.add("turn");
    current++;
  }else{
    showEnd();
  }
}

// FINAL EFFECT
function showEnd(){
  document.getElementById("end").classList.remove("hidden");

  // flower rain
  setInterval(()=>{
    let f=document.createElement("div");
    f.className="flower";
    f.innerText="🌸";
    f.style.left=Math.random()*100+"vw";
    f.style.animationDuration=(Math.random()*3+2)+"s";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),5000);
  },200);

  // curtain
  let l=document.createElement("div");
  let r=document.createElement("div");

  l.className="curtain left";
  r.className="curtain right";

  document.body.appendChild(l);
  document.body.appendChild(r);
}
