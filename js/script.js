const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");
const header = document.querySelector(".site-header");

/* mobile nav toggle */

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

/* sticky header shrink */

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});
