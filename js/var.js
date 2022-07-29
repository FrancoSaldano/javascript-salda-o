let usuarios = [];
const alerts = new Alert();
const userList = document.querySelector('ol.ol--userlist');
let fragmento = document.createDocumentFragment();
let inputpass = document.getElementById('input--pass');
let toggle = document.querySelector('.check')
const ALERTALOGDOM = '<h1 class="display-4"><u>Amazing Post</u></h1>' +
    '<div class="container text-white multiply bg-grey-700">' +
    '<h5> Logeo </h5>' +
    '<hr>' +
    '<div class="container mt-3">' +
    '<label for="InputText" class="form-label mx-5">Usuario</label>' +
    '<input type="text" id="swal-input1" class="swal2-input mx-5 mt-0" maxlength="5" placeholder="Usuario">' +
    '</div>' +
    '<div class="container mt-1">' +
    '<label for="InputText" class="form-label mx-5">Contraseña</label>' +
    '<input type="password" id="swal-input2" class="swal2-input mx-5 mt-0" maxlength="11" placeholder="Contraseña">' +
    '</div>' +
    '</div>'
const ALERTLOGFOOTER ='<div class="container d-block text-center mt-3">'+
    '<p><a href="">¿Ya tienes una cuenta?</a></p>'+
    '<h6 class="py-2 text-center fst-italic text-white">From Amazing Company &reg</h6>'+
    '</div>'
const ALERTLOGPLACEHOLDER = `<p class="text-light m-0">Estoy de acuerdo con los Términos y Condiciones</p>`

const ALERTAREGDOM ='<h1 class="display-4"><u>Amazing Post </u></h1>' +
    '<div class="container text-white multiply bg-grey-700">' +
    '<h5> Registrate </h5>' +
    '<hr>' +
    '<div class="container mt-3">' +
    '<label for="InputText" class="form-label mx-5">Usuario</label>' +
    '<input type="text" id="input--nick" class="swal2-input p-1 mx-5 mt-0" maxlength="5" placeholder="usuario">' +
    '</div>' +
    '<div class="container mt-1">' +
    '<label for="InputText" class="form-label mx-5">Contraseña</label>' +
    '<input type="password" id="input--pass" class="swal2-input p-1 mx-5 mt-0" maxlength="11" placeholder="contraseña">' +
    '</div>' +
    '</div>'
const ALERTREGFOOTER ='<div class="container d-block text-center mt-3">' +
    '<p><a href="">¿Ya tienes una cuenta?</a></p>' +
    '<h6 class="py-2 text-center fst-italic text-white">From Amazing Company &reg</h6>' +
    '</div>'

const ALERTPLACEHOLDERREG = `<p class="text-light m-0">Estoy de acuerdo con los Términos y Condiciones</p>`