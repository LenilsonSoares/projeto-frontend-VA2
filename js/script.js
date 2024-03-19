if (document.querySelector('body.experimente-agora')) {

    var form = document.querySelector('.experimente-agora form');


    form.addEventListener('submit', function(event) {
        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefone = document.getElementById('telefone').value.trim();

        if (nome === '' || email === '' || telefone === '') {

            alert('Por favor, preencha todos os campos obrigatórios.');
            event.preventDefault();
        }
    });
}

function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

function destacarPonto(id) {
    console.log(`Ponto ${id} destacado.`);
}

document.addEventListener("DOMContentLoaded", function () {

    const dados = {
        labels: ["Rastreamento", "Manutenção", "Rotas", "Eficiência", "Custos", "Satisfação"],
        datasets: [{
            label: "Pontos",
            backgroundColor: "rgba(255, 69, 0, 0.8)",
            data: [90, 80, 80, 100, 90, 100],
        }],
    };


    const contexto = document.getElementById("meuGrafico").getContext("2d");

    const meuGrafico = new Chart(contexto, {
        type: "bar",
        data: dados,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
});

function toggleMenu() {
    var nav = document.getElementById('nav');
    nav.classList.toggle('show');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    var topButton = document.getElementById('topButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', function () {

    function fecharMenu() {
        var nav = document.getElementById('nav');
        nav.classList.remove('show');
    }
    
    
    document.addEventListener('click', function (event) {
        var nav = document.getElementById('nav');
        var menuIcon = document.querySelector('.menu-icon');

        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            fecharMenu();
        }
    });

});
