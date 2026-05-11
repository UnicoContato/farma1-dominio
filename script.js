const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 120) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');

openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

const closePrivacyModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

closeModalBtn.addEventListener('click', closePrivacyModal);
modalOverlay.addEventListener('click', closePrivacyModal);

document.getElementById('ano-atual').textContent = new Date().getFullYear();