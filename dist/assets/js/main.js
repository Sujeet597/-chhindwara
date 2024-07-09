const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let lastScrollTop = 0;
let ticking = false;
const navBar = document.querySelector('nav');

window.addEventListener('scroll', function() {
  lastScrollTop = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      if (window.scrollY > lastScrollTop) {
        // Scroll down, hide the navigation bar
        navBar.classList.add('hidden');
      } else {
        // Scroll up, show the navigation bar after 1 second delay
        setTimeout(function() {
          navBar.classList.remove('hidden');
        }, 1000);
      }
      ticking = false;
    });

    ticking = true;
  }
});


menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    content.classList.remove("hidden");
    content.classList.add("animate__animated", "animate__fadeInUp");
  });
  
  window.onload = function() {
    document.getElementById('loginModal').classList.remove('hidden');
};

// Close the modal when the close button is clicked
document.getElementById('closeModal').onclick = function() {
    document.getElementById('loginModal').classList.add('hidden');
};