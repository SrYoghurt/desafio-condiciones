let num1 = document.querySelector('#numero1');
let num2 = document.querySelector('#numero2');
let num3 = document.querySelector('#numero3');
let verificarBtn = document.querySelector('#verificar');
let evaluacionP = document.querySelector('.evaluacion');

verificarBtn.addEventListener('click', () => {
    password = num1.value + num2.value + num3.value;
    if (password == '911') {
        evaluacionP.textContent = 'Password 1 correcto';
    } else if (password == '714') {
        evaluacionP.textContent = 'Password 2 correcto';
    } else {
        evaluacionP.textContent = 'Password incorrecto';
    }
});