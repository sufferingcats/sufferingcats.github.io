const { createApp } = Vue;

createApp({
  data() {
    return {
      isDark: localStorage.getItem('theme') === 'dark' || false
    };
  },
  mounted() {
    // Apply mode on mount
    if (this.isDark) {
      document.body.classList.add('dark');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
      document.body.classList.toggle('dark', this.isDark);
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }
  }
}).mount('body');

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