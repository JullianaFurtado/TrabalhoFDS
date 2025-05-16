
function mostrarConteudo() {
    let conteudo = document.getElementById('conteudo')
    conteudo.textContent = 'Obrigada pela visita!';
    conteudo.style.display = 'block';
}

let botao = document.getElementById('botao');
botao.addEventListener('click', mostrarConteudo);