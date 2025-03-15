const mobileMenu = document.getElementById("mobile");
const nav = document.getElementById("nav");

mobileMenu.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
