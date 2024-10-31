/*botão Menu da Home*/

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}


/*tema claro e escuro*/ 

// Seleciona o botão e o corpo do documento
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Verifica se o usuário já selecionou um tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // Aplica o tema salvo
}

// Alterna o tema ao clicar no botão
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Salva a preferência do usuário no Local Storage
    const theme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', theme);
});



