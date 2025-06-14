const toggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const closeBtn = document.getElementById('close-menu');
const navLinks = mobileNav.querySelectorAll('a');

function closeMenu() {
  mobileNav.classList.remove('active');
}

toggle.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', closeMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
