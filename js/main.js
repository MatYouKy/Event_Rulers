let container;
let tableElements;
let menuOpen = false;

let home;
let aboutus;
let artist;
let service;
let atraction;
let extras;
let contact;
let nav;
let list;
let heroText;
let span;
let line0;
let line1;
let line2;
let h1;
let p1;
let btn1;
let windowWidth = 992;
let bar = 1;
let heroTime = 500; // Delay miliseconds
let square;



const main = ()=>{
    prepareDomElements();
    prepareDomEvents();


}
const prepareDomElements = () => {
    list = [...document.querySelectorAll("nav ul li a")];
    tableElements = document.querySelector("#cont");
    heroText = document.querySelector(".hero-text");
    h1 = heroText.querySelector("h1");
    p1 = heroText.querySelector("p");
    btn1 = heroText.querySelector("button");

    nav = document.querySelector("nav");
    contact = document.querySelector("#contact");
    extras = document.querySelector("#extras");
    atraction = document.querySelector("#atraction");
    service = document.querySelector("#service");
    artist = document.querySelector("#artist");
    aboutus = document.querySelector("#about");
    home = document.querySelector("#home");
    span = (tableElements.lastChild.previousSibling).firstElementChild;
    line0 = tableElements.firstChild.nextElementSibling;
    line1 = line0.nextElementSibling;
    line2 = line1.nextElementSibling;
    ul = nav.children[1]
    liList = ul.querySelectorAll("li");
    socialMobile = nav.children[2];
    square = document.querySelectorAll(".square");
    animations(h1,  500);
    animations(p1, 500);
    animations(btn1, 800);

}
const prepareDomEvents = () => {
    tableElements.parentElement.addEventListener('click', showMenu);
    window.addEventListener("scroll", onPage);
    nav.children[0].addEventListener('click', clear)
    chosen();
    window.addEventListener('resize', function(){
        if(window.innerWidth > windowWidth){
            clear();
        }
    })

}


const animations = (element, delay) => {
    setTimeout(() =>{
        element.style.opacity = "1";

        element.classList.add("anime")


    }, delay);
}


const showMenu = () =>{
    if(!menuOpen){
        addElement();
    }else{
        clear();
    }
}
const addElement = () => {

    menuOpen = true;
    line0.classList.add("showMenu0");
    line1.style.opacity = 0;
    line2.classList.add("showMenu2");
    nav.classList.add("open-menu")

    socialMobile.classList.add("mobile-social");
    ul.classList.add('nav-block');
    span.style.opacity = 0;
    span.style.transition = ".3s"
    ul.classList.add("nav-block");
    addDisplay(liList);
}

const addDisplay = li => {
    for(let el of li){
        el.classList.add("li-block") ;
    }
    
    
}

const clear =() => {
    menuOpen = false;
    line0.style.transition = ".2s"
    line0.classList.remove("showMenu0");
    line1.style.opacity = 1;
    line2.style.transition = ".2s"
    line2.classList.remove("showMenu2");
    nav.classList.remove("open-menu")
    socialMobile.classList.remove("mobile-social");
    span.style.opacity = 1;
    span.style.transition = ".3s"
    ul.classList.remove("nav-block");
    removeDisplay(liList);
    

}

const removeDisplay = li => {
    for(let el of li){
        el.classList.remove("li-block");
    }
    

}

const onPage = () => {

    let windo = window.pageYOffset.toFixed(0) /100;
    let aboutfix = aboutus.offsetTop.toFixed(0) /100;
    let artistfix = artist.offsetTop.toFixed(0)/100;
    let servicefix = service.offsetTop.toFixed(0)/100;
    let atractionfix = atraction.offsetTop.toFixed(0) /100;
    let extrasfix = extras.offsetTop.toFixed(0) /100;
    let contactfix = contact.offsetTop.toFixed(0) /100;

    if(windo > bar){
        nav.classList.add('bar');
        nav.style.transition = ".3s";
    }else{
        nav.classList.remove('bar');
    }
    if(aboutfix <= windo && artistfix >windo){
        removeAcClass(list)
        list[0].classList.add("ac")
        animations(square[0], 100);
        animations(square[1], 400);
        animations(square[2], 600);
        animations(square[3], 800);
        animations(square[4], 1000);
        animations(square[5], 1200);

    }
    else if(artistfix <= windo && servicefix >windo){
        removeAcClass(list);
        list[1].classList.add("ac");
        
    }
    else if(servicefix <= windo && atractionfix >windo){
        removeAcClass(list);
        list[2].classList.add("ac");
        
    }
    else if(atractionfix <= windo && extrasfix >windo){
        removeAcClass(list);
        list[3].classList.add("ac");
    }
    else if(extrasfix <= windo && contactfix >windo){
        removeAcClass(list)
        list[4].classList.add("ac");
    }
    else if(contactfix < windo + 1){
        removeAcClass(list)
        list[5].classList.add("ac");
    }
    else{
        removeAcClass(list)
    }
}
const removeAcClass = (list) =>{
    for(const el of list){
        el.classList.remove("ac");
    }
}

const chosen = () =>{
    for(const el of list){
        el.addEventListener('click', function (){
            clear();
            console.log(this.innerText)
        })
    }

}
document.addEventListener("DOMContentLoaded", main)