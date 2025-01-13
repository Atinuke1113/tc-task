const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const wrapper = document.querySelector('.reviews-wrapper');
const dots = document.querySelectorAll('.carousel-dot');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.review-card').length;
const cardsPerView = Math.floor(wrapper.offsetWidth / 300);

function updateCarousel(index) {
    const cardWidth = 300;
    const offset = index * cardWidth;
    wrapper.style.transform = `translateX(-${offset}px)`;
    updateActiveDot(index);
}

function updateActiveDot(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


setInterval(() => {
    currentIndex = (currentIndex + 1) % (totalCards - cardsPerView + 1);
    updateCarousel(currentIndex);
}, 3000);


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateCarousel(currentIndex);
    });
});



document.querySelectorAll('.faq-item').forEach(item => {
    const toggleIcon = item.querySelector('.toggle-icon');

    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
            faq.querySelector('.toggle-icon').textContent = '+';
        });

        if (!isActive) {
            item.classList.add('active');
            toggleIcon.textContent = '-';
        }
    });
});
