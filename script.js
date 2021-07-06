//////////////////////////////////
// MENU - MOBILE
const menuButton = document.getElementById("menuButton");
const sideMenuBar = document.querySelector(".side-menu");
const content = document.querySelector(".content");
console.log(sideMenuBar);
console.log(menuButton);

menuButton.addEventListener("click",function(){
    menuButton.classList.toggle(".buttonActive");
    if(menuButton.classList.contains(".buttonActive")){
        sideMenuBar.style.transform = "translateX(0)";
        sideMenuBar.scrollTop = 0;
        content.style.opacity = "0";
    }
    else{
        sideMenuBar.style.transform = "translateX(-100%)";
        content.style.opacity = "1";
    }
})