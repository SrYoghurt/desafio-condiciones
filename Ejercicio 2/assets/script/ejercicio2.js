let sticker1 = document.querySelector('#sticker1Count');
let sticker2 = document.querySelector('#sticker2Count');
let sticker3 = document.querySelector('#sticker3Count');
let resultado = document.querySelector('.Resultado');
let calcularBtn = document.querySelector('#calcularBtn');

calcularBtn.addEventListener('click', function() {
    let total = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value);
    if (total <= 10) {
        resultado.textContent = 'Llevas ' + total + ' stickers!';
    } else {
        resultado.textContent = 'Llevas demasiados stickers!';
    }
});
