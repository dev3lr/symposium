

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", (event) => {
        navLinks.classList.toggle("show");
        event.stopPropagation(); // Prevent click from propagating to document
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("show");
        }
    });
});
