
// Seletores Corrigidos (com os pontos '.')
const prevButton = document.getElementById('prev'); // ID não precisa de ponto
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item'); // Ponto para classe
const dots = document.querySelectorAll('.dot');   // Ponto para classe
const numberIndicator = document.querySelector('.numbers'); // Ponto para classe
const list = document.querySelector('.list');     // Ponto para classe

let active = 0;
const total = items.length;
let timer;

function update(direction) {
    // Remove a classe 'active' dos elementos atuais
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    // Calcula o novo índice
    if (direction > 0) {
        active = active + 1;
        if (active === total) {
            active = 0;
        }
    } else if (direction < 0) {
        active = active - 1;
        if (active < 0) {
            active = total - 1;
        }
    }

    // Adiciona a classe 'active' nos novos elementos
    items[active].classList.add("active");
    dots[active].classList.add("active");

    // Atualiza o número (ex: 01, 02...)
    if (numberIndicator) {
        numberIndicator.innerHTML = "0" + (active + 1);
    }
}

// Event Listeners (Nomes corrigidos para bater com as const lá de cima)
prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
    update(1);
});
