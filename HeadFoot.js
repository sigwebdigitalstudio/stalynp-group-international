
const header = document.getElementById("header");

function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleHeaderScroll);

/*  MENÚ HAMBURGUESA & MOBILE DROPDOWN*/
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileDropdownToggles = document.querySelectorAll(
    ".mobile-dropdown-toggle",
);

// Abrir / Cerrar Menú Principal
menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Desplegar Submenús en Mobile (Acordeón independiente)
mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const dropdown = toggle.nextElementSibling;
        if (dropdown && dropdown.classList.contains("mobile-dropdown")) {
            dropdown.classList.toggle("active");
        }
    });
});

// Cerrar menú al hacer clic en enlaces normales, subenlaces o botones
const mobileLinks = document.querySelectorAll(
    ".mobile-link:not(.mobile-dropdown-toggle), .mobile-sublink, .mobile-button",
);

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.querySelectorAll(".mobile-dropdown").forEach((drop) => {
            drop.classList.remove("active");
        });
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Cerrar menús automáticamente si la pantalla pasa a formato escritorio
window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.querySelectorAll(".mobile-dropdown").forEach((drop) => {
            drop.classList.remove("active");
        });
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

/* BOTÓN VOLVER ARRIBA */

const backToTop = document.getElementById("backToTop");

function handleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}

window.addEventListener("scroll", handleBackToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,

        behavior: "smooth",
    });
});

/* PARTÍCULAS DINÁMICAS DEL FOOTER */

const particleContainer = document.getElementById("footerParticles");

if (particleContainer) {
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");

        particle.classList.add("footer-particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.bottom = Math.random() * 30 + "%";

        particle.style.animationDuration = 7 + Math.random() * 12 + "s";

        particle.style.animationDelay = Math.random() * 8 + "s";

        const size = 1 + Math.random() * 2;

        particle.style.width = size + "px";

        particle.style.height = size + "px";

        particleContainer.appendChild(particle);
    }
}