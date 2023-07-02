//Hamburger Menu
//const hamburger = document.querySelector("#hamburgerBtn");
//const navItems = document.querySelector("#nav-items");

//hamburger.addEventListener("click", () => {
    //hamburger.classList.toggle("active");
    //navItems.classList.toggle("active");
//})

const hamburger = document.querySelector("#hamburgerBtn");
const navigation = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
	navigation.classList.toggle("responsive");
});
