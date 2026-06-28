const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            nav.style.display = "none";
        }
    });
});

const cards = document.querySelectorAll(".brand-card, .product-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

const buttons = document.querySelectorAll(".btn, .product-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Welcome to Uswa Nazish Luxury Shopping Mall!");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});

window.addEventListener("load", () => {
    nav.style.display = window.innerWidth > 768 ? "block" : "none";
});
