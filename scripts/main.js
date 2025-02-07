document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove("active");
        }
    });
});