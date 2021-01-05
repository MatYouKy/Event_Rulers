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
let windowWidth = 1100;
let bar = 10;
let wellcomeText = 1000; // Delay miliseconds



const main = ()=>{
    prepareDomElements();
    prepareDomEvents();
    helloText();
}
const prepareDomElements = () => {
    list = [...document.querySelectorAll("nav ul li a")];
    tableElements = document.querySelector("#cont");
    heroText = document.querySelector(".hero-text");
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


const helloText = () => {
    setTimeout(() =>{
        heroText.style.marginLeft = "10%";
    }, wellcomeText);
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
    nav.children[2].classList.add("mobile-social");
    nav.children[1].classList.add('nav-block');
    span.style.opacity = 0;
    span.style.transition = ".3s"
    list.forEach(e=>{
        e.parentElement.style.display = "block";
        e.parentElement.style.marginTop = "50px";
        e.parentElement.style.marginLeft = "75px";
        
    })
}
const clear =() => {
    menuOpen = false;
    line0.style.transition = ".2s"
    line0.classList.remove("showMenu0");
    line1.style.opacity = 1;
    line2.style.transition = ".2s"
    line2.classList.remove("showMenu2");
    nav.classList.remove("open-menu")
    nav.children[2].classList.remove("mobile-social");
    nav.children[1].classList.remove('nav-block');
    span.style.opacity = 1;
    span.style.transition = ".3s"
    
    list.forEach(e=>{
        e.parentElement.style.display = "";
        e.parentElement.style.marginTop = "";
        e.parentElement.style.marginLeft = "";
    })
}
const onPage = () => {

    let windo = window.pageYOffset.toFixed(0) /100;
    let aboutfix = aboutus.offsetTop.toFixed(0) /100;
    let artistfix = artist.offsetTop.toFixed(0)/100;
    let servicefix = service.offsetTop.toFixed(0)/100;
    let atractionfix = atraction.offsetTop.toFixed(0) /100;
    let extrasfix = extras.offsetTop.toFixed(0) /100;
    let contactfix = contact.offsetTop.toFixed(0) /100;


    console.log(windo)
    if(windo > bar){
        nav.classList.add('bar');
        nav.style.transition = ".3s";
    }else{
        nav.classList.remove('bar');
    }
    if(aboutfix <= windo && artistfix >windo){
        removeAcClass(list)
        list[0].classList.add("ac")
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