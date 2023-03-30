let menu =document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList="fa-solid fa-xmark";
    navbar.classList="open";
}
