//////////////////////////////////
// MENU - MOBILE
const menuButton = document.getElementById("menuButton");
const sideMenuBar = document.querySelector(".side-menu");
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
console.log(sideMenuBar);
console.log(menuButton);

menuButton.addEventListener("click",function(){
    menuButton.classList.toggle("buttonActive");
    if(menuButton.classList.contains("buttonActive")){
        sideMenuBar.classList.add("expand")
        sideMenuBar.scrollTop = 0;
        content.style.opacity = "0.7";
        overlay.style.display = "block";
    }
    else{
        sideMenuBar.classList.remove("expand");
        content.style.opacity = "1";
        overlay.style.display = "none";
    }
})

overlay.addEventListener("click",function(){
    sideMenuBar.classList.remove("expand");
    content.style.opacity = "1";
    menuButton.classList.remove("buttonActive");
    overlay.style.display = "none";
})