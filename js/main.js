class Register {
    constructor(nickdata, passdata) {
        this.nickdata = nickdata
        this.passdata = passdata
        this.datauser = []
        this.datauser.push(this.nickdata)
        this.datauser.push(this.passdata)
    }
    enviar() {
        return this.datauser
    }
    alertRegisted() {
        const btnRegist = document.getElementById('btn--register')
        btnRegist.addEventListener("click",
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: 'success',
                title: 'Signed in successfully'
            })
        )
    }
}
class Login {
    constructor(tryNick, tryPass) {
        this.datalogin = []
        this.tryNick = tryNick
        this.tryPass = tryPass
        this.datalogin.push(tryNick)
        this.datalogin.push(tryPass)
    }
    get getNickname() {
        return this.user[0]
    }
    alertSucces() {
        Swal.fire({
            title: 'Acceso Concedido',
            icon: 'success',
            showConfirmButton: false,
            backdrop: `rgba(145, 200, 143 , 0.6)`,
            timer: 2000000
        })
    }
    alertError() {
        Swal.fire({
            title: 'Acceso Denegado',
            icon: 'error',
            showConfirmButton: false,
            backdrop: `rgba(215, 96, 96, 0.6 )`,
            timer: 2000000
        })
    }
    alertTry() {
        Swal.fire({
            toast: true,
            title: 'Solamente tiene 3 intentos',
            position: 'top-end',
            showConfirmButton: true,
            timerProgressBar: true,
            icon: 'success',
            confirmButtonText: 'Entiendo',
            timer: 10000,
        })
    }
    alertInputs() {
        Swal.fire({
            title: 'Multiple inputs',
            backdrop: `rgb(127, 179, 213 )`,
            showCloseButton: true,
            html:
                '<input id="swal-input1" class="swal2-input">' +
                '<input id="swal-input2" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return console.log([
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ])
            }
        })
    }
    compareArray(array1, array2) {
        var i = array1.length;
        if (i != array2.length) return false;

        while (i--) {
            if (array1[i] !== array2[i]) return false;
        }
        return true;
    }
    attemptsPasswordNew() {
        let count = 0
        let tryPackage = []
        let tryPassfunc = this.tryPass
        let tryNickfunc = this.tryNick
        alert("Solamente tiene 3 intentos")
        for (let i = 0; (i <= 2); i++) {
            count += 1
            alert("Intento número: " + count)
            tryNickfunc = prompt("Ingrese el nick:  ").toString()
            tryPassfunc = prompt("Ingrese la contraseña: ").toString()
            if (buscarLocal(tryNickfunc, tryPassfunc)) {
                return true
            } else {
                continue
            }
        } buscarLocal(tryNickfunc, tryPassfunc)
    }
    loginNew(nick, pass) {
        if (buscarLocal(nick, pass)) {
            this.alertSucces(), createTitleNickname(`${nick}`)
        } else if (this.attemptsPasswordNew()) {
            this.alertSucces(), createTitleNickname("aca va el nickname")
        } else {
            this.alertError()
        }
    }
}
class User {
    constructor(nick, pass) {
        this.nick = nick
        this.pass = pass
    }
}
class Alert {
    alertUserNotExist() {
        Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: true,
            timer: 20000,
            timerProgressBar: true,
            icon: 'warning',
            title: 'Debe registrar un usuario primero'
        })
    }
    alertRegisted() {
        const btnRegist = document.getElementById('btn--register')
        btnRegist.addEventListener("click",
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: 'success',
                title: 'Signed in successfully'
            })
        )
    }
    alertDeLogeo() {
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
    alertSucces() {
        Swal.fire({
            title: 'Acceso Concedido',
            icon: 'success',
            showConfirmButton: false,
            backdrop: `rgba(145, 200, 143 , 0.6)`,
            timer: 2000000
        })
    }
    alertError() {
        Swal.fire({
            title: 'Acceso Denegado',
            icon: 'error',
            showConfirmButton: false,
            backdrop: `rgba(215, 96, 96, 0.6 )`,
            timer: 2000000
        })
    }
    alertTry() {
        Swal.fire({
            title: 'Atención!',
            icon: 'warning',
            text: 'Solamente tiene 3 intentos',
            confirmButtonText: 'Entiendo',
            backdrop: `rgba(224, 206, 88, 0.6 )`,
            timer: 2000000
        })
    }
    alertInputs() {
        Swal.fire({
            title: 'Multiple inputs',
            backdrop: `rgb(127, 179, 213 )`,
            showCloseButton: true,
            html:
                '<input id="swal-input1" class="swal2-input">' +
                '<input id="swal-input2" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ]
            }
        })
    }
    alertClear() {
        Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            timer: 20000,
            timerProgressBar: true,
            icon: 'info',
            title: 'se eliminaron todos los usuarios'
        })
    }
}

let usuarios = []

const alerta = new Alert()

const buscarLocal = (nick, pass) => {
    let datos = takeFromLocal('usuarios')
    let hayIgual = false
    for (let usuario of datos) {
        if (usuario.nick == nick && usuario.pass == pass) {
            hayIgual = true
            break
        }
    } return hayIgual
}
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
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
}
const agregarUsuario = (object) => {
    usuarios.push(object)
    console.log(`se agregó el usuario ${object.nick}`)
}
const takeFromLocal = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
const actualizarLocal = () => {
    localStorage.clear()
    let key = 1
    for (const usuario of usuarios) {
        guardarLocal(key, JSON.stringify(usuario))
        key++
    }
    guardarLocal('usuarios', JSON.stringify(usuarios))
    console.log("contenido actualizado")
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
const verificarContenidoLocal = () => {
    let usuariosEnLS = takeFromLocal('usuarios')
    if (usuariosEnLS == null) {
        console.log("En el local storage no hay nada")
        usuarios = []
        guardarLocal('usuarios', JSON.stringify(usuarios))
    } else {
        usuarios = usuariosEnLS.slice()
        console.log("hay algo en el local storage", usuarios)
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
        createUsersList()
        document.querySelector('h2.title--nick').remove()
    })
}
// function checkTitleNickname() {
//     let title = document.querySelector('title--nick')
//     return title !== null
// }
function createTitleNickname(nickname) {
    let h2 = document.createElement('h2')
    h2.innerHTML = `Bienvenido! ${nickname}`
    let containerEspecial = document.querySelector('div.container--especial')
    containerEspecial.append(h2)
    h2.classList.add('p-5')
    h2.classList.add('title--nick')
}
function createUsersList() {
    let userList = document.querySelector('div.container--userlist')
    let user = document.createElement('h4')
    let key = 0
    if (usuarios.length != 0) {
        for (const usuario of usuarios) {
            let { nick } = usuario
            user.innerHTML = `${key}° ${nick}`
            userList.append(user)
            user.classList.add('p-2'), user.classList.add('usuario')
            key++
        }
    } else {
        user.innerHTML = "No hay usuarios"
        userList.append(user)
        user.classList.add('p-2'), user.classList.add('usuario')
        key == 0
    }
}

getClearBtn()
verificarContenidoLocal()
getFormularioData()
getActionBtn()
