
document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    /* ==============  MOBILE DROPDOWNS ===== */

    const dropdownToggles = document.querySelectorAll(
        ".mobile-dropdown-toggle",
    );

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            const container = toggle.closest(".mobile-dropdown-container");

            if (!container) return;

            const dropdown = container.querySelector(".mobile-dropdown");

            if (!dropdown) return;

            const alreadyOpen = dropdown.classList.contains("open");

            document
                .querySelectorAll(".mobile-dropdown.open")
                .forEach((item) => {
                    if (item !== dropdown) {
                        item.classList.remove("open");
                    }
                });

            dropdown.classList.toggle("open", !alreadyOpen);

            toggle.classList.toggle("open", !alreadyOpen);
        });
    });

    /* =====================================================
   CONTADORES
===================================================== */

    const counters = document.querySelectorAll("[data-counter]");

    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(counter.dataset.counter);

                let current = 0;

                const duration = 1800;

                const startTime = performance.now();

                function animateCounter(now) {
                    const progress = Math.min((now - startTime) / duration, 1);

                    const eased = 1 - Math.pow(1 - progress, 3);

                    current = Math.floor(target * eased);

                    counter.textContent = current.toLocaleString("es-PE");

                    if (progress < 1) {
                        requestAnimationFrame(animateCounter);
                    } else {
                        counter.textContent = target.toLocaleString("es-PE");
                    }
                }

                requestAnimationFrame(animateCounter);

                counterObserver.unobserve(counter);
            });
        },
        {
            threshold: 0.6,
        },
    );

    counters.forEach((counter) => {
        counterObserver.observe(counter);
    });

    /* =====================================================
   REVEAL ON SCROLL
===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
        },
    );

    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;

        revealObserver.observe(element);
    });

    /* =====================================================
   FILTROS
===================================================== */

    const filterButtons = document.querySelectorAll(".filter-btn");

    const projectCards = document.querySelectorAll(".project-card");

    const emptyMessage = document.getElementById("projectsEmpty");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach((btn) => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            let visibleCount = 0;

            projectCards.forEach((card) => {
                const category = card.dataset.category;

                const matches = filter === "all" || category === filter;

                card.classList.remove("is-filtering");

                if (matches) {
                    card.classList.remove("is-hidden");

                    void card.offsetWidth;

                    card.classList.add("is-filtering");

                    visibleCount++;
                } else {
                    card.classList.add("is-hidden");
                }
            });

            if (emptyMessage) {
                emptyMessage.classList.toggle("show", visibleCount === 0);
            }
        });
    });

    /* =====================================================
   DATA PROYECTOS
===================================================== */

    const projects = [
        {
            number: "01",
            category: "EDIFICACIONES",
            year: "2026",
            title: "Complejo Empresarial Moderno",
            description:
                "Proyecto de edificación orientado a crear espacios empresariales modernos, funcionales y eficientes, integrando criterios arquitectónicos y técnicos para responder a las necesidades del usuario.",
            location: "Perú",
            type: "Edificación",
            image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90",
        },

        {
            number: "02",
            category: "OBRAS CIVILES",
            year: "2025",
            title: "Desarrollo Estructural",
            description:
                "Solución constructiva enfocada en estructuras, planificación de obra y ejecución técnica bajo criterios de precisión y control.",
            location: "Perú",
            type: "Obra civil",
            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=90",
        },

        {
            number: "03",
            category: "ARQUITECTURA",
            year: "2025",
            title: "Residencia Contemporánea",
            description:
                "Diseño arquitectónico residencial que combina funcionalidad, estética y aprovechamiento inteligente de los espacios.",
            location: "Perú",
            type: "Arquitectura",
            image:
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
        },

        {
            number: "04",
            category: "INFRAESTRUCTURA",
            year: "2024",
            title: "Infraestructura Integral",
            description:
                "Desarrollo de infraestructura con planificación, coordinación y ejecución orientada a soluciones duraderas y eficientes.",
            location: "Perú",
            type: "Infraestructura",
            image:
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90",
        },

        {
            number: "05",
            category: "REMODELACIÓN",
            year: "2024",
            title: "Renovación de Espacios",
            description:
                "Transformación integral de espacios existentes mediante intervención arquitectónica, técnica y constructiva.",
            location: "Perú",
            type: "Remodelación",
            image:
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90",
        },

        {
            number: "06",
            category: "EDIFICACIONES",
            year: "2023",
            title: "Edificación Corporativa",
            description:
                "Desarrollo de infraestructura corporativa con enfoque en funcionalidad, presencia arquitectónica y eficiencia.",
            location: "Perú",
            type: "Edificación",
            image:
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=90",
        },
    ];

    /* =====================================================
   MODAL
===================================================== */

    const modal = document.getElementById("projectModal");

    const modalClose = document.getElementById("modalClose");

    const modalMainImage = document.getElementById("modalMainImage");

    const modalNumber = document.getElementById("modalNumber");

    const modalCategory = document.getElementById("modalCategory");

    const modalYear = document.getElementById("modalYear");

    const modalTitle = document.getElementById("modalTitle");

    const modalDescription = document.getElementById("modalDescription");

    const modalLocation = document.getElementById("modalLocation");

    const modalType = document.getElementById("modalType");

    const modalYearDetail = document.getElementById("modalYearDetail");

    function openProject(index) {
        const project = projects[index];

        if (!project || !modal) return;

        modalMainImage.src = project.image;

        modalMainImage.alt = project.title;

        modalNumber.textContent = project.number;

        modalCategory.textContent = project.category;

        modalYear.textContent = project.year;

        modalTitle.textContent = project.title;

        modalDescription.textContent = project.description;

        modalLocation.textContent = project.location;

        modalType.textContent = project.type;

        modalYearDetail.textContent = project.year;

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");
    }

    function closeProject() {
        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");
    }

    projectCards.forEach((card) => {
        const openButton = card.querySelector(".project-open");

        if (!openButton) return;

        openButton.addEventListener("click", (event) => {
            event.preventDefault();

            event.stopPropagation();

            const index = Number(card.dataset.project);

            openProject(index);
        });
    });

    if (modalClose) {
        modalClose.addEventListener("click", closeProject);
    }

    const backdrop = document.querySelector(".modal-backdrop");

    if (backdrop) {
        backdrop.addEventListener("click", closeProject);
    }

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {
            closeProject();
        }
    });

    /* =====================================================
   PARALLAX HERO
===================================================== */

    const hero = document.querySelector(".projects-hero");

    const heroBackground = document.querySelector(".projects-hero-bg");

    if (
        hero &&
        heroBackground &&
        window.matchMedia("(min-width: 901px)").matches
    ) {
        window.addEventListener(
            "scroll",
            () => {
                const scroll = window.scrollY;

                if (scroll > hero.offsetHeight) {
                    return;
                }

                heroBackground.style.transform = `translateY(${scroll * 0.15}px) scale(1.02)`;
            },
            {
                passive: true,
            },
        );
    }

    /* =====================================================
   HEADER SCROLL
===================================================== */

    const header = document.getElementById("header");

    if (header) {
        let lastScroll = 0;

        window.addEventListener(
            "scroll",
            () => {
                const current = window.scrollY;

                if (current > 80) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }

                lastScroll = current;
            },
            {
                passive: true,
            },
        );
    }

    /* =====================================================
   IMAGE ERROR FALLBACK
===================================================== */

    document.querySelectorAll("img").forEach((image) => {
        image.addEventListener("error", () => {
            image.style.opacity = "0";

            image.parentElement.classList.add("image-error");
        });
    });
});
