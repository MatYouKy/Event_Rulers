const burgerMenu = document.querySelector(".burger-menu");
let menuOpen = false;


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


