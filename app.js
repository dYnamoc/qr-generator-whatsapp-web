const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

//https://api.whatsapp.com/send?phone=

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode("https://api.whatsapp.com/send?phone=" + formulario.number.value + "&text=" + formulario.text.value);
});