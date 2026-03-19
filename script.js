// MUSIC
let music = document.getElementById("music");

if(music){
  if(localStorage.getItem("playMusic")=="yes"){
    music.play();
  }
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

// NAVIGATION
function goNext(){
  window.location.href="book.html";
}

// BOOK LOGIC SAFE FIX
let pages = document.querySelectorAll(".page");
let currentPage = 0;

function turnPage(){
  if(pages.length > 0){
    if(currentPage < pages.length){
      pages[currentPage].classList.add("flipped");
      currentPage++;
    } else {
      showOutro();
    }
  }
}

// TYPE EFFECT
function typeWriter(text, i=0){
  let el = document.getElementById("typingText");
  if(!el) return;

  if(i < text.length){
    el.innerHTML += text.charAt(i);
    setTimeout(()=>typeWriter(text, i+1), 50);
  }
}

// OUTRO
function showOutro(){
  let outro = document.getElementById("outro");
  if(outro){
    outro.classList.remove("hidden");

    typeWriter("Thank You For Loving Me 💖 You Are My Forever ❤️");

    setInterval(()=>{
      let f=document.createElement("div");
      f.className="flower";
      f.innerText="🌸";
      f.style.left=Math.random()*100+"vw";
      f.style.animationDuration=(Math.random()*3+2)+"s";

      document.body.appendChild(f);
      setTimeout(()=>f.remove(),5000);
    },200);
  }
}
