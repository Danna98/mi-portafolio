// Animaciones de scroll
function revealOnScroll() {
    var reveals = document.querySelectorAll(".scroll-reveal");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);

// Cambio de tema (modo oscuro/claro)
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Comprueba la preferencia de tema guardada
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Efecto Parallax
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botón de scroll to top
const scrollTopButton = document.createElement('div');
scrollTopButton.classList.add('scroll-top');
scrollTopButton.innerHTML = '↑';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('Gracias por tu mensaje. Te contactaré pronto.');
    this.reset();
});

// Animación de carga inicial
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Habilidades dinámicas
const skills = document.querySelectorAll('.skill-item');
skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
    });
});
