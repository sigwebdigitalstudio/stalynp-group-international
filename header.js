
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileDropdownToggles = document.querySelectorAll(
        ".mobile-dropdown-toggle",
    );

    // 1. Efecto Scroll en Header
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // 2. Abrir / Cerrar Menú Móvil
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = mobileMenu.classList.toggle("active");
            menuToggle.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }

    // 3. Desplegar Acordeón de Submenús en Móvil
    mobileDropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = toggle.nextElementSibling;
            if (dropdown && dropdown.classList.contains("mobile-dropdown")) {
                dropdown.classList.toggle("active");
            }
        });
    });

    // 4. Cerrar menú al hacer clic en un enlace de navegación
    const mobileLinks = document.querySelectorAll("#mobileMenu a");

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (menuToggle && mobileMenu) {
                menuToggle.classList.remove("active");
                mobileMenu.classList.remove("active");
                document.querySelectorAll(".mobile-dropdown").forEach((drop) => {
                    drop.classList.remove("active");
                });
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    // 5. Limpieza de clases al pasar a pantalla escritorio
    window.addEventListener("resize", () => {
        if (window.innerWidth > 850 && menuToggle && mobileMenu) {
            menuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
            document.querySelectorAll(".mobile-dropdown").forEach((drop) => {
                drop.classList.remove("active");
            });
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    // 6. Año Dinámico
    const currentYear = document.getElementById("currentYear");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // 7. Botón Volver Arriba
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 8. Partículas Footer
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
});
