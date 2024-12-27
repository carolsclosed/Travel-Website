// Seleciona o elemento de header da página
const header = document.querySelector("header");

// Adiciona um event listener  que será acionado quando a janela der "scroll"
window.addEventListener("scroll", function() {
    // Alterna a classe "sticky" no header baseado na posição de "scroll"
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Seleciona o ícone do menu e a barra de navegação
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Adiciona um onclick ao ícone do menu
menu.onclick = () => {
    // Alterna a classe 'bx-x' no ícone do menu
    menu.classList.toggle('bx-x');
    // Alterna a classe 'open' na barra de navegação
    navbar.classList.toggle('open');
}

// Adiciona um event listener  que será acionado quando a janela der "scroll"
window.onscroll = () => {
    // Remove a classe 'bx-x' do ícone do menu
    menu.classList.remove('bx-x');
    // Remove a classe 'open' da barra de navegação
    navbar.classList.remove('open');
}
