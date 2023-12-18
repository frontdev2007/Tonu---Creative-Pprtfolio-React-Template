let search = document.querySelector(".search-box");

// biziki

var toggle = document.querySelectorAll('.toggle');
var column = document.querySelectorAll('.show-more');

function showmore() {
    column.forEach((item) =>
        item.classList.add('action'));
        toggle.forEach((item) =>
        item.classList.add('hide'));
}
toggle.forEach((item) =>
    item.addEventListener('click', showmore));

// biziki end

var toggle_p = document.querySelectorAll('.toggle-p');
var column_p = document.querySelectorAll('.show-more-p');

function showmore_p() {
    column_p.forEach((item) =>
        item.classList.add('action'));
    toggle_p.forEach((item) =>
        item.classList.add('hide'));
}
toggle_p.forEach((item) =>
    item.addEventListener('click', showmore_p));

// biziki end

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle("active");
    menu.classList.remove("active");
};

let menu = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    menu.classList.toggle("active");
    search.classList.remove("active");
};

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove("active");
    search.classList.remove("active");
}

// Header
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// function myFunction() {
//     var x = document.getElementById("None");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//         x.style.display = "flex"
//     } else {
//         x.style.display = "none";
//     }
// }