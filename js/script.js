// Ambil elemen penting
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// Ketika hamburger diklik
hamburger.addEventListener('click', function(e) {
  e.preventDefault(); // Cegah scroll ke atas
  e.stopPropagation(); // ⛔ Cegah klik ini dihitung sebagai "klik di luar"
    navbarNav.classList.toggle('active');
});

// Klik di luar navbar-nav untuk menutup
document.addEventListener('click', function(e) {
    if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


// agar teks navbar berubah agar contrast dengan bg
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");
    
    if (window.scrollY > hero.offsetHeight - 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// agar hamburgermenu berubah warna
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    
    // Ketika user scroll melewati tinggi hero section
    if (window.scrollY > hero.offsetHeight - 80) {
        navbar.classList.add("scrolled");
        hamburgerMenu.classList.add("scrolled"); // tambahkan class ke icon
    } else {
        navbar.classList.remove("scrolled");
        hamburgerMenu.classList.remove("scrolled");
    }
});
