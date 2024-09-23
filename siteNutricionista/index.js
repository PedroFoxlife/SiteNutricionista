function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    if (altura > 0 && peso > 0) {
        const imc = peso / (altura * altura);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        document.getElementById('resultadoIMC').innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    } else {
        document.getElementById('resultadoIMC').innerText = 'Por favor, insira valores válidos.';
    }
}

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        const text = slide.querySelector('.slide-text');
        if (i === index) {
            slide.classList.add('active');
            text.style.opacity = '1'; // Apresenta o texto
        } else {
            text.style.opacity = '0'; // Esconde o texto
        }
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

// Mostra o primeiro slide ao iniciar
showSlide(currentSlide);
