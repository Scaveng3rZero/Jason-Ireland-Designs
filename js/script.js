const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const header = document.querySelector(".site-header");

/* =========================================================
   MOBILE NAV TOGGLE
========================================================= */
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   STICKY HEADER SHRINK
========================================================= */
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* =========================================================
   PORTFOLIO IMAGE LIGHTBOX
========================================================= */
const imageButtons = document.querySelectorAll(".image-button");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

if (imageButtons.length && lightbox && lightboxImage && lightboxClose) {
  imageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const fullImage = button.getAttribute("data-full");
      const altText = button.getAttribute("data-alt") || "";

      lightboxImage.src = fullImage;
      lightboxImage.alt = altText;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.style.overflow = "";
  };

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}
