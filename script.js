// --- SLIDER LOGIC ---
const limits = {
    'dtect': 12, // dtect1.png to dtect12.png
    'burn': 7    // burn1.png to burn7.png
};

let indices = {
    'dtect': 1,
    'burn': 1
};

function changeImage(project, direction) {
    indices[project] += direction;

    if (indices[project] > limits[project]) indices[project] = 1;
    if (indices[project] < 1) indices[project] = limits[project];

    const imgElement = document.getElementById(`img-${project}`);
    if (imgElement) {
        imgElement.src = `images/${project}${indices[project]}.png`;
    }
}

// --- ANIMATION ON SCROLL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// --- HAMBURGER MENU LOGIC ---
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

function closeMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}