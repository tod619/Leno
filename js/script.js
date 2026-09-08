document.addEventListener("DOMContentLoaded", function () {
  // Navbar mobile
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Modal Funcitonality
  const modal = document.getElementById("videoModal");
  const videoButton = document.querySelector(".preview__video-button");
  const closeButton = document.querySelector(".modal__close-button");

  // Open modal
  videoButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Close Modal
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
