let usuarios = []
const alerta = new Alert()

let inputpass = document.getElementById('input--pass')
let toggle = document.querySelector('.check')
toggle.addEventListener('change',(e) => {
    inputpass.type = e.target.checked ? "text" : "password"
})


function alertDeLogeo() {
    Swal.fire({
        title: 'Hora de logearse!!!',
        html:
            '<label for="InputText" class="form-label m-1">Ingresa tu nombre de usuario</label>' +
            '<input id="swal-input1" class="swal2-input" placeholder="usuario">' +
            '<label for="InputText" class="form-label m-1">Ingresa tu contraseña</label>' +
            '<input id="swal-input2" class="swal2-input" placeholder="contraseña">',
        focusConfirm: false,
        preConfirm: () => {
            return [
                valueinputnick = document.getElementById('swal-input1').value, valueinputpass = document.getElementById('swal-input2').value,

                logeo = new Login(valueinputnick, valueinputpass),
                console.log(`se envio a comparar usuario: ${valueinputnick} pass: ${valueinputpass}`),
                logeo.loginNew(valueinputnick, valueinputpass)
            ]
        }
    })
}

function alertUserNotExist() {
    const btnRegist = document.getElementById('btn--register')
    btnRegist.addEventListener("click",
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: true,
            timer: 20000,
            timerProgressBar: true,
            icon: 'warning',
            title: 'Debe registrar un usuario primero'
        })
    )
}

const agregarUsuario = (object) => {
    usuarios.push(object)
    console.log(`se agregó el usuario ${object.nick}`)
}

const verificarUsuario = () => {
    if (takeFromLocal('usuarios') == null) {
        verificarContenidoLocal()
    } else if (takeFromLocal('usuarios').length == 0) {
        console.log("no hay usuarios registrados")
        alertUserNotExist()
    } else {
        console.log("hay usuarios registrados procede a logear")
        alertDeLogeo()
    }
}

function getFormularioData() {
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener("submit", registrarData)
    let registrar
    function registrarData(eventObject) {
        eventObject.preventDefault();
        let inputnick = document.getElementById('input--nick').value
        let inputpass = document.getElementById('input--pass').value
        usuarioNuevo = new User(inputnick, inputpass)
        registrar = new Register(inputnick, inputpass)
        agregarUsuario(usuarioNuevo)
        guardarLocal('usuarios', usuarios)
        actualizarLocal()
        createUsersList()
        formulario.addEventListener("click", registrar.alertRegisted())
    }
}

function getActionBtn() {
    const btnlogin = document.getElementById('btn--login')
    btnlogin.addEventListener("click", verificarUsuario)
}

function getClearBtn() {
    const btnclear = document.querySelector('#btn--clear')
    btnclear.addEventListener("click", () => {
        localStorage.clear()
        verificarUsuario()
        actualizarLocal()
        alerta.alertClear()
        document.querySelector('h2.title--nick') != null ? this.remove() : false ;
        createUsersList()
    })
}

function createTitleNickname(nickname) {
    let h2 = document.createElement('h2')
    h2.innerHTML = `Bienvenido! ${nickname}`
    let containerEspecial = document.querySelector('div.container--especial')
    containerEspecial.append(h2)
    h2.classList.add('p-5')
    h2.classList.add('title--nick')
}

function createUsersList() {
    let userList = document.querySelector('ol.ol--userlist')
    let user = document.createElement('li')
    if (usuarios.length != 0) {
        for (const usuario of usuarios) {
            let { nick } = usuario
            user.innerHTML = `${nick}`
            userList.append(user)
            user.classList.add('p-2'), user.classList.add('list-group-item'), user.classList.add('usuario')
        }
    } else {
        user.innerHTML = "No hay usuarios"
        userList.append(user)
        user.classList.add('p-2'), user.classList.add('list-group-item'), user.classList.add('usuario')
    }
}

getClearBtn()
verificarContenidoLocal()
getFormularioData()
getActionBtn()
