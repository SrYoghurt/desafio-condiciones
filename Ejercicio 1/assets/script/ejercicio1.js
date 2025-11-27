let imagen = document.querySelector('#imagen');

imagen.addEventListener('click', () => {
    if (imagen.style.border === '2px solid red') {
        imagen.style.border = 'none';
    } else {
        imagen.style.border = '2px solid red';
    }
});