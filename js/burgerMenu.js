let container;
let tableElements;
let menuOpen = false;
const main = ()=>{
    prepareDomElements();
    prepareDomEvents();
}
function prepareDomElements() {
    container = [...document.querySelectorAll(".container")];
    tableElements = container[0];
    
}
function prepareDomEvents() {
    tableElements.parentElement.addEventListener('click', showMenu)
    
}

const showMenu = () =>{
    const span = (tableElements.lastChild.previousSibling).firstElementChild
    const line0 = tableElements.firstChild.nextElementSibling;
    const line1 = line0.nextElementSibling;
    const line2 = line1.nextElementSibling;
    if(!menuOpen){
        menuOpen = true;
        span.style.opacity = 0;
        line1.style.opacity = 0;
        span.style.transition = ".3s"
        line0.classList.add("showMenu0");
        line2.classList.add("showMenu2");
        
        
        
        
    }else{
        menuOpen = false;
        span.style.opacity = 1;
        line0.style.transition = ".2s"
        line2.style.transition = ".2s"
        line1.style.opacity = 1;
        line0.classList.remove("showMenu0");
        line2.classList.remove("showMenu2");


    }
}


document.addEventListener("DOMContentLoaded", main)