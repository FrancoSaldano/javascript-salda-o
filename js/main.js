let usuarios = [];
const alerts = new Alert();
const userList = document.querySelector('ol.ol--userlist');
let fragmento = document.createDocumentFragment();
let inputpass = document.getElementById('input--pass');
let toggle = document.querySelector('.check')




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

const agregarFetchToUsuarios = () => {
    fetch("JSON/info.JSON")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((user) => {
                usuarios.push(user)
            })
            updateLocal()
        })
        .catch((error) => console.warn(error))

}
const agregarUsuario = (object) => {
    usuarios.push(object)
    console.log(`se agregó el usuario ${object.nick}`)
}
const verificarUsuario = () => {
    if (getFromLocal('usuarios') == null) {
        verifyLocalStorageContent()
    } else if (getFromLocal('usuarios').length == 0) {
        console.log("no hay usuarios registrados")
        alerts.UserNotExist()
    } else {
        console.log("hay usuarios registrados procede a logear")
        alertDeLogeo()
    }
}

///  DOM

toggle.addEventListener('change', (e) => {
    inputpass.type = e.target.checked ? "text" : "password"
})

function getFormularioData() {
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener("submit", registrarData)
    function registrarData(eventObject) {
        eventObject.preventDefault();
        let inputnick = document.getElementById('input--nick').value
        let inputpass = document.getElementById('input--pass').value
        usuarioNuevo = new User(inputnick, inputpass)
        agregarUsuario(usuarioNuevo)
        setInLocal('usuarios', usuarios)
        updateLocal()
        formulario.addEventListener("click", alerts.Registed())
        createUsersList()
    }
}
function getLoginBtn() {
    const btnlogin = document.getElementById('btn--login')
    btnlogin.addEventListener("click", verificarUsuario)
}
function getClearBtn() {
    const btnclear = document.querySelector('#btn--clear')
    btnclear.addEventListener("click", () => {
        localStorage.clear()
        verificarUsuario()
        updateLocal()
        eliminateTitleNickname()
        eliminateUserList()
        createUsersList()
        alerts.Clear()
    })
}


function checkTitleNickname() {
    setTimeout(() => {
        return document.querySelector('.title--nick') ? true : false
    }, 0)
}
function eliminateTitleNickname() {
    document.querySelector('.title--nick') == null ? console.log("no hay titulo") : document.querySelector('.title--nick').remove()
}
function createTitleNickname(nickname) {
    let h2 = document.createElement('h2')
    h2.innerHTML = `Bienvenido! ${nickname}`
    let containerEspecial = document.querySelector('div.container--especial')
    containerEspecial.append(h2)
    h2.classList.add('p-5')
    h2.classList.add('title--nick')
}


function eliminateUserList() {
    while (userList.firstChild) {
        userList.removeChild(userList.firstChild);
    }
}
function createUsersList() {
    if (usuarios.length > 0) {
        eliminateUserList()
        usuarios.forEach((usuario) => {
            const user = document.createElement('LI')
            let { nick } = usuario
            let { pass } = usuario
            user.innerHTML = `<b>UserName:</b> ${nick}    <b>Password:</b> ${pass}`
            user.classList.add('p-2'), user.classList.add('list-group-item'), user.classList.add('usuario')
            userList.appendChild(user)
        })
    } else {
        const user = document.createElement('LI')
        user.innerHTML = "No hay usuarios"
        user.classList.add('p-2'), user.classList.add('list-group-item'), user.classList.add('no-users')
        fragmento.appendChild(user)
    }
    userList.appendChild(fragmento)
}



///promises , Async & Fetch Local
const checkTitle = () => {
    return new Promise((resolve, reject) => {
        let titulo = document.querySelector('.title--nick')
        let nick = localStorage.getItem('LOGEADO')
        titulo ? resolve(nick) : reject(nick)
    })
}

checkLoged()
    .then((nick) => {
        console.log(`Bienvenido, ${nick}`)
        createTitleNickname(nick)
    })
    .catch((error) => {
        console.log(`Habia usuarios logeados? ${error && "no"}`)
    })

fetch("JSON/info.JSON")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((user) => {
            const liuser = document.createElement('LI')
            let { nick } = user
            let { pass } = user
            liuser.innerHTML = `<b>UserName:</b> ${nick}  <b>Password:</b> ${pass}`
            liuser.classList.add('p-2'), liuser.classList.add('list-group-item'), liuser.classList.add('usuario')
            userList.appendChild(liuser)
        })
        
    })
    .catch((error) => {
        console.warn(error)
    })


//calls
agregarFetchToUsuarios()
verifyLocalStorageContent()
createUsersList()
getClearBtn()
getFormularioData()
getLoginBtn()