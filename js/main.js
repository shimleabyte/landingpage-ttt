// ==========================================================
// Navbar interactions
// - sticky visual state on scroll
// - mobile menu toggle
// ==========================================================

const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

function updateHeaderOnScroll() {
  if (!siteHeader) return;

  if (window.scrollY > 8) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
}

function toggleMobileMenu(forceOpen) {
  if (!mobileMenu || !siteHeader || !menuToggle) return;

  const shouldOpen =
    typeof forceOpen === "boolean"
      ? forceOpen
      : !mobileMenu.classList.contains("is-open");

  mobileMenu.classList.toggle("is-open", shouldOpen);
  siteHeader.classList.toggle("mobile-open", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => toggleMobileMenu());
}

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => toggleMobileMenu(false));
});

window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
updateHeaderOnScroll();
