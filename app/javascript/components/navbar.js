function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector(".navbar-lewagon");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight / 2) {
        navbar.classList.add("navbar-lewagon-white");
      } else {
        navbar.classList.remove("navbar-lewagon-white");
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
