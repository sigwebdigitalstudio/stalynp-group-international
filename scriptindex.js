

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const heroTitle = document.getElementById("heroTitle");
const heroDescription = document.getElementById("heroDescription");
const heroInfo = document.getElementById("heroInfo");
const heroTag = document.getElementById("heroTag");
const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");


const slideContent = [
    {
        tag: "STALYNP · GRUPO INTERNACIONAL",
        title: "Construimos ideas, desarrollamos proyectos",
        description:
            "Soluciones profesionales para proyectos que buscan calidad, innovación y confianza.",
        info: "Diseño, planificación y ejecución de proyectos con una visión integral.",
    },
    {
        tag: "DISEÑO · INNOVACIÓN · CALIDAD",
        title: "Creamos espacios pensados para el futuro",
        description:
            "Transformamos conceptos en proyectos funcionales, modernos y preparados para trascender.",
        info: "Cada proyecto comienza con una idea y se convierte en una solución.",
    },
    {
        tag: "STALYNP · VISIÓN INTERNACIONAL",
        title: "Experiencia que transforma cada proyecto",
        description:
            "Integramos experiencia, tecnología y compromiso para desarrollar proyectos de alto nivel.",
        info: "Nuestro objetivo es construir relaciones duraderas y resultados excepcionales.",
    },
];


let currentSlide = 0;
let sliderInterval;
const slideTime = 4000;


function animateText(element) {
    element.classList.remove("text-changing");
    /* Forzamos al navegador a recalcular la animación para que pueda repetirse */
    void element.offsetWidth;
    element.classList.add("text-changing");
}

function showSlide(index) {
    /* Controlar límites */
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    /* Cambiar imágenes activas */
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    /* Cambiar indicadores activos */
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });

    /* Obtener contenido del slide actual */
    const content = slideContent[currentSlide];

    /* Cambiar textos */
    heroTag.textContent = content.tag;
    heroTitle.textContent = content.title;
    heroDescription.textContent = content.description;
    heroInfo.textContent = content.info;

    /* Animar textos */
    animateText(heroTag);
    animateText(heroTitle);
    animateText(heroDescription);
    animateText(heroInfo);
}


function nextSlide() {
    showSlide(currentSlide + 1);
    restartSlider();
}

function previousSlide() {
    showSlide(currentSlide - 1);
    restartSlider();
}


if (nextButton) nextButton.addEventListener("click", nextSlide);
if (prevButton) prevButton.addEventListener("click", previousSlide);

/* Indicadores (Dots) */
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        const index = Number(dot.dataset.slide);
        showSlide(index);
        restartSlider();
    });
});

function startSlider() {
    sliderInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, slideTime);
}

function restartSlider() {
    clearInterval(sliderInterval);
    startSlider();
}


showSlide(0);
startSlider();


document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        clearInterval(sliderInterval);
    } else {
        restartSlider();
    }
});