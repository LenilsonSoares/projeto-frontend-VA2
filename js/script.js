document.addEventListener('DOMContentLoaded', function() {
    // Lógica para a página inicial
    if (document.querySelector('body.index')) {
        // Lógica específica para a página inicial, se necessário
    }

    // Lógica para a página "Experimente Agora"
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

    // Lógica para a página "Estudos de Caso"
    if (document.querySelector('body.estudos-de-caso')) {
        // Lógica específica para a página de "Estudos de Caso", se necessário
    }

    // Lógica para a página "FAQ - Perguntas Frequentes"
    if (document.querySelector('body.faq-perguntas-frequentes')) {
        // Lógica específica para a página de "FAQ - Perguntas Frequentes", se necessário
    }

    // Lógica para a página "Garantia de Segurança"
    if (document.querySelector('body.garantia-de-seguranca')) {
        // Lógica específica para a página de "Garantia de Segurança", se necessário
    }
});

