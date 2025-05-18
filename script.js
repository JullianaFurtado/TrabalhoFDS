
function mostrarConteudo() {
    let conteudo = document.getElementById('conteudo')
    conteudo.textContent = 'Se você tem coragem para correr os riscos...A vista do outro lado é espetacular!';
    conteudo.style.display = 'block';
}

let botao = document.getElementById('botao');
botao.addEventListener('click', mostrarConteudo);