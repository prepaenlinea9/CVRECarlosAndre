document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const revealSections = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) { // Ajusta cuando aparece
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Ejecutar al cargar por si ya están en pantalla
});


