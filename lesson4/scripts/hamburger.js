//Hamburger Menu
//const hamburger = document.querySelector("#hamburgerBtn");
//const navItems = document.querySelector("#nav-items");

//hamburger.addEventListener("click", () => {
    //hamburger.classList.toggle("active");
    //navItems.classList.toggle("active");
//})

const hamburger = document.querySelector("#hamburgerBtn");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
