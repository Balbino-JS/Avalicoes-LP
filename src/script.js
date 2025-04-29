document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAvailacao');
    const lista = document.getElementById('lista-avaliacoes');

;    //Carrega avaliações ao iniciar
    fetch('/api/avaliacoes')
    .then(res => res.json())
    .then(data => {
        data.forEach(addAvaliacaoNaTela);
    });

});