const home = document.querySelector("#home");
const aboutus = document.querySelector("#about");
const artist = document.querySelector("#artist");
const service = document.querySelector("#service");
const atraction = document.querySelector("#atraction");
const extras = document.querySelector("#extras");
const contact = document.querySelector("#contact");
const nav = document.querySelector("nav");
const list = [...document.querySelectorAll("nav ul li a")];


window.addEventListener("scroll", ()=>{
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
    else if(extras.offsetTop <= windo && contact.offsetTop >windo){
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
    else
    {
        list[0].classList.remove("ac")
        list[1].classList.remove("ac");
        list[2].classList.remove("ac");
        list[3].classList.remove("ac");
        list[4].classList.remove("ac");
        list[5].classList.remove("ac");

    }
})