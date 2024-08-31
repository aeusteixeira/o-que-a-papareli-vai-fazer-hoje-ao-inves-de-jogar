document.getElementById('gerarAtividade').addEventListener('click', () => {

    const atividades = [
        'Jantar com desconhecidos que só falam em rimas 🎭',
        'Participar de uma competição de dança com sapatos de palhaço 🤡',
        'Assistir a uma peça teatral sobre uma travesti preta periférica almoçando com o fantasma de sua avó drag 🎭🍽️',
        'Visitar uma fábrica de cerveja e se vestir como um personagem medieval 🍺🛡️',
        'Fazer um piquenique em um cemitério durante a noite 🌙🧺',
        'Participar de um karaokê com músicas de desenhos animados 🎤🦸‍♂️',
        'Participar de uma festa de aniversário com tema de piratas em um barco no litoral 🏴‍☠️',
        'Assistir a uma maratona de filmes clássicos em uma sala de cinema retro com assentos de sofá 🎞️🛋️',
        'Fazer um curso de culinária no qual os jurados são indígenas da Amazônia 🍲🌳',
        'Fazer uma visita guiada a uma cidade abandonada com um guia fantasiado de zumbi 🧟‍♂️🏚️',
        'Assistir a um desfile de moda onde todos os trajes são feitos de material orgânico 🌱👗',
        'Participar de uma oficina de pintura corporal com tinta neon 🎨💡',
        'Fazer um tour gastronômico em um bairro periférico com comida de rua 🍢🌆',
        'Fazer uma vivência budista em um templo no interior 🧘‍♂️🏯',
    ];

    const animacaoElem = document.getElementById('animacao');
    const atividadeElem = document.getElementById('atividade');
    let intervalo;
    
    // Função para gerar uma atividade aleatória
    const gerarAtividadeAleatoria = () => {
        return atividades[Math.floor(Math.random() * atividades.length)];
    };

    // Iniciar animação de roleta
    const iniciarAnimacao = () => {
        let index = 0;
        intervalo = setInterval(() => {
            atividadeElem.textContent = atividades[index];
            index = (index + 1) % atividades.length;
        }, 50); // Velocidade da roleta (em milissegundos)
    };

    // Parar animação e exibir a atividade final
    const pararAnimacao = () => {
        clearInterval(intervalo);
        atividadeElem.textContent = gerarAtividadeAleatoria();
    };

    // Mostrar animação e iniciar o efeito de roleta
    animacaoElem.style.display = 'block';
    iniciarAnimacao();
    
    // Parar animação após 2 segundos e mostrar a atividade final
    setTimeout(() => {
        animacaoElem.style.display = 'none';
        pararAnimacao();
    }, 2000); // Tempo da animação
});
