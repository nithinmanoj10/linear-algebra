//////////////////////////////////
// MENU - MOBILE
const menuButton = document.getElementById("menuButton");
const sideMenuBar = document.querySelector(".side-menu");
const content = document.querySelector(".content");
console.log(sideMenuBar);
console.log(menuButton);

menuButton.addEventListener("click",function(){
    menuButton.classList.toggle("buttonActive");
    if(menuButton.classList.contains("buttonActive")){
        sideMenuBar.classList.add("expand")
        sideMenuBar.scrollTop = 0;
        content.style.opacity = "0.7";
    }
    else{
        sideMenuBar.classList.remove("expand");
        content.style.opacity = "1";
    }
})

content.addEventListener("click",function(){
    sideMenuBar.classList.remove("expand");
    content.style.opacity = "1";
    menuButton.classList.remove("buttonActive");
})