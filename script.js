const botao = document.querySelector('input#botao');

botao.addEventListener("mouseover", mouseOver);

function mouseOver(){
    botao.style.top = Math.floor(Math.random() * 90) + '%';
    botao.style.left = Math.floor(Math.random() * 90) + '%';
}