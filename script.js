// Header scroll animation and scroll-to-top button
let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Debug: Check if header exists
console.log('Header element:', header);

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Header animation
  if (header) {
    // Add shadow when scrolled
    if (scrollTop > 50) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    // Simple header hide/show logic
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down - hide header
      header.style.top = '-90px';
      console.log('Header hidden');
    } else {
      // Scrolling up - show header
      header.style.top = '0';
      console.log('Header shown');
    }
  }
  
  // Scroll-to-top button visibility
  if (scrollTopBtn) {
    if (scrollTop > 300) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.pointerEvents = 'auto';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.pointerEvents = 'none';
    }
  }
  
  lastScrollTop = scrollTop;
});

// Menu burger toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Scroll-to-top button click
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Contact section smooth scrolling
const contactLinks = document.querySelectorAll('a[href="#contact"]');
contactLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Skills circles animation
const skillCircles = document.querySelectorAll('.circle');
const animateSkills = () => {
  skillCircles.forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const inner = circle.querySelector('.inner');
    
    // Calculate the stroke-dasharray based on percentage
    const circumference = 2 * Math.PI * 45; // radius = 45
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percent / 100) * circumference;
    
    // Apply the animation
    inner.style.strokeDasharray = strokeDasharray;
    inner.style.strokeDashoffset = strokeDashoffset;
  });
};

// Trigger animation when skills section is visible
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(skillsSection);
}

// Smooth scrolling for all navigation links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


