function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("humburgerBtn").classList.toggle("open");
}


const x = document.getElementById("humburgerBtn");
x.onclick = toggleMenu();