// Verifica se a página tem a classe 'experimente-agora' no corpo
if (document.querySelector('body.experimente-agora')) {
    // Seleciona o formulário dentro da seção 'experimente-agora'
    var form = document.querySelector('.experimente-agora form');

    // Adiciona um ouvinte de evento para o evento de envio do formulário
    form.addEventListener('submit', function(event) {
        // Obtém os valores dos campos nome, email e telefone
        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefone = document.getElementById('telefone').value.trim();

        // Verifica se algum dos campos obrigatórios está vazio
        if (nome === '' || email === '' || telefone === '') {
            // Exibe um alerta e impede o envio do formulário
            alert('Por favor, preencha todos os campos obrigatórios.');
            event.preventDefault();
        }
    });
}

// Função para rolar para o topo da página suavemente
function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// Função para destacar um ponto
function destacarPonto(id) {
    console.log(`Ponto ${id} destacado.`);
}

// Aguarda o DOM ser completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Dados para o gráfico
    const dados = {
        labels: ["Rastreamento", "Manutenção", "Rotas", "Eficiência", "Custos", "Satisfação"],
        datasets: [{
            label: "Pontos",
            backgroundColor: "rgba(255, 69, 0, 0.8)",
            data: [90, 80, 80, 100, 90, 100],
        }],
    };

    // Obtém o contexto do gráfico
    const contexto = document.getElementById("meuGrafico").getContext("2d");

    // Cria uma nova instância do gráfico usando Chart.js
    const meuGrafico = new Chart(contexto, {
        type: "bar",
        data: dados,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});

// Função para alternar a visibilidade do menu em telas menores
function toggleMenu() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('show');
}


// Adicione este código no final do seu arquivo JS ou dentro da tag <script> no HTML
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostra ou oculta o botão dependendo da posição da página
window.onscroll = function() {
    var topButton = document.getElementById('topButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // ... (seu código existente)

    // Função para fechar o menu
    function fecharMenu() {
        var nav = document.getElementById('nav');
        nav.classList.remove('show');
    }

    // Adicionar um event listener para clicar fora do menu
    document.addEventListener('click', function (event) {
        var nav = document.getElementById('nav');
        var menuIcon = document.querySelector('.menu-icon');

        // Verificar se o clique foi fora do menu e do ícone do menu
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            fecharMenu();
        }
    });

    // ... (seu código existente)
});
