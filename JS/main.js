const iconLink = document.querySelector(".icon-link");
const nav = document.querySelector(".icon");
const navList = document.querySelector(".nav-list");

iconLink.addEventListener("click", () =>{
    iconLink.classList.toggle("active");
    icon.classList.toggle("active");
    navList.classList.toggle("active");
})