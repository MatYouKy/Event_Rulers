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



const main = ()=>{
    prepareDomElements();
    prepareDomEvents();
    helloText();
}
function prepareDomElements() {
    container = [...document.querySelectorAll(".container")];
    list = [...document.querySelectorAll("nav ul li a")];
    tableElements = container[0];
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
function prepareDomEvents() {
    tableElements.parentElement.addEventListener('click', showMenu);
    window.addEventListener("scroll", onPage);
    nav.children[0].addEventListener('click', clear)
    choosed();
    window.addEventListener('resize', function(){
            if(window.innerWidth > 1100){
            clear();
        }
    })
    
}


const helloText = () => {
    setTimeout(() =>{
        heroText.style.marginLeft = "10%";
    }, 1000);
}
const showMenu = () =>{
    if(!menuOpen){
        addElement();
    }else{
        clear();
    }
}
const addElement = () => {
    line1.style.opacity = 0;
    menuOpen = true;
    line0.classList.add("showMenu0");
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
    line2.style.transition = ".2s"
    line1.style.opacity = 1;
    line0.classList.remove("showMenu0");
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
    let windo = window.pageYOffset;
    if(windo > 10){
        nav.classList.add('bar');
        nav.style.transition = ".3s";
    }else{
        nav.classList.remove('bar');
    }
    if(aboutus.offsetTop <= windo && artist.offsetTop >windo){
        list[0].classList.add("ac")
        list[1].classList.remove("ac");
        list[2].classList.remove("ac");
        list[3].classList.remove("ac");
        list[4].classList.remove("ac");
        list[5].classList.remove("ac");
    }
    else if(artist.offsetTop <= windo && service.offsetTop >windo){
        list[0].classList.remove("ac")
        list[1].classList.add("ac");
        list[2].classList.remove("ac");
        list[3].classList.remove("ac");
        list[4].classList.remove("ac");
        list[5].classList.remove("ac");
    }
    else if(service.offsetTop <= windo && atraction.offsetTop >windo){
        list[0].classList.remove("ac")
        list[1].classList.remove("ac");
        list[2].classList.add("ac");
        list[3].classList.remove("ac");
        list[4].classList.remove("ac");
        list[5].classList.remove("ac");
    }
    else if(atraction.offsetTop <= windo && extras.offsetTop >windo){
        list[0].classList.remove("ac")
        list[1].classList.remove("ac");
        list[2].classList.remove("ac");
        list[3].classList.add("ac");
        list[4].classList.remove("ac");
        list[5].classList.remove("ac");
    }
    else if(extras.offsetTop <= (windo + 10) && contact.offsetTop >windo){
        list[0].classList.remove("ac")
        list[1].classList.remove("ac");
        list[2].classList.remove("ac");
        list[3].classList.remove("ac");
        list[4].classList.add("ac");
        list[5].classList.remove("ac");
    }
    else if(contact.offsetTop < windo){
        
        list[0].classList.remove("ac")
        list[1].classList.remove("ac");
        list[2].classList.remove("ac");
        list[3].classList.remove("ac");
        list[4].classList.remove("ac");
        list[5].classList.add("ac");
    }
    else{
        list[0].classList.remove("ac")
        list[1].classList.remove("ac");
        list[2].classList.remove("ac");
        list[3].classList.remove("ac");
        list[4].classList.remove("ac");
        list[5].classList.remove("ac");
    }
}
const choosed = () =>{
    for(const el of list){
        el.addEventListener('click', function (){
            clear();
            console.log(this.innerText)
        })
    }

}
document.addEventListener("DOMContentLoaded", main)