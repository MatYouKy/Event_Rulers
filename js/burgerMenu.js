const burgerMenu = document.querySelector(".burger-menu");
let menuOpen = false;
const line0 = document.querySelector("#line0");
const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const spanMenu = burgerMenu.querySelector('.txt-container');





const showMenu = () => {



    line1.style.opacity = 0;
    line1.style.top = "30px";
    line1.style.transition = ".3s";
    spanMenu.style.height = "17px";
    spanMenu.style.top = "12px";
    spanMenu.style.transition = ".3s";
    
    
    
}


const hideMenu = () => {
    line1.style.opacity = 1;
    line1.style.top = "20px";
    spanMenu.style.height = "0px";
    spanMenu.style.top = "30px";
    
    
}

const clickMenu = () => {
    
    
}
const menu = () =>{
    
    
    
    
    
    
}



burgerMenu.addEventListener('mouseover', () =>);

// burgerMenu.addEventListener('mouseleave', hideMenu);
burgerMenu.addEventListener('click', () => {
    
    if(!menuOpen){
        menuOpen = true;
        line0.style.transform = "rotate(45deg)"
        line2.style.transform = "rotate(-45deg)"
        
    }
    else{
        line0.style.transform = "rotate(0)"
        line2.style.transform = "rotate(0)"
        menuOpen = false;
    }

}) 


