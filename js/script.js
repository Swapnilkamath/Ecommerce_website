const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));
window.addEventListener("scroll", () => {
    // Check if the menu is open, and if so, close it
    if (navMenu.classList.contains("active")) {
      closeMenu();
    }
  });
  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }