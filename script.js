let bar = document.getElementById("bar");
let nav = document.getElementById("nav");

if (bar) {
    bar.onclick = function () {
        nav.classList.toggle("active");
    };
}

