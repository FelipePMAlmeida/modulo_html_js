const form = document.getElementById('form-comparador');
let numeroA = document.getElementById('primeiro-numero');
let numeroB = document.getElementById('segundo-numero');

console.log(numeroA.value);
console.log(numeroB.value);

function comparaNumeros(numero1, numero2){
    return parseInt(numero1.value) < parseInt(numero2.value);
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.style.display = 'none';
    const containerMensagemErro = document.querySelector('.error-message');
    containerMensagemErro.style.display = 'none';

    const mensagemSucesso = 'O segundo número (' + numeroB.value + ') é maior que o primeiro número (' + numeroA.value + ')';
    const mensagemErro = 'O segundo número (' + numeroB.value + ') é menor que o primeiro número (' + numeroA.value + ')';

    if (comparaNumeros(numeroA, numeroB)) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    }
});

