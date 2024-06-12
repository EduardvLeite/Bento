const menu = document.querySelector(".arco"); 
const torre = document.querySelector(".torre")
const catedral = document.querySelector(".catedral")
const luvre = document.querySelector(".luvre")
const sacre = document.querySelector(".sacre")
const museu = document.querySelector(".museu")

const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");


function Infoarco() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

function Infoluvre() {
    if (luvre.classList.contains("showMenu")) {
    luvre.classList.remove("showMenu");
    } else {
    luvre.classList.add("showMenu");
    }
  }

  function Infosacre() {
    if (sacre.classList.contains("showMenu")) {
    sacre.classList.remove("showMenu");
    } else {
    sacre.classList.add("showMenu");
    }
  }

  function Infomuseu() {
    if (museu.classList.contains("showMenu")) {
      museu.classList.remove("showMenu");
    } else {
      museu.classList.add("showMenu");
    }
  }
  
  function Infocatedral() {
    if (catedral.classList.contains("showMenu")) {
      catedral.classList.remove("showMenu");
    } else {
      catedral.classList.add("showMenu");
    }
  }

function Infotorre() {
    if (torre.classList.contains("showMenu")) {
    torre.classList.remove("showMenu");
    } else {
    torre.classList.add("showMenu");
    }
  }  


hamburger.addEventListener("click", Infotorre);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", Infotorre);
  }
)