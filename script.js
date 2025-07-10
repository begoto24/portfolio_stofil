// Menu responsive
const toggleBtn = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

if (toggleBtn && navbar) {
  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Scroll to top
const scrollBtn = document.getElementById('scrollTopBtn');

if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// NAVBAR hide on scroll down, show on scroll up
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down → hide navbar
    header.style.top = "-100px";
  } else {
    // Scrolling up → show navbar
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


const popup = document.getElementById('popup-success');
if (popup) {
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 4000);
}
