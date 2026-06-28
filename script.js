const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const topBtn = document.querySelector(".top-btn");
const searchInput = document.querySelector(".search-box input");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navbar.classList.remove("active");
        }
    });
});

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
    } else {
        header.style.background = "#111";
    }

});

topBtn.addEventListener("click", e => {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(value)
            ? "block"
            : "none";

    });

});

document.querySelectorAll(".product-card button").forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Thank you for choosing Uswa Nazish Luxury Shopping Mall!");

    });

});

window.addEventListener("load", () => {

    topBtn.style.display = "none";

});
