function alertDeLogeo() {
    Swal.fire({
        footer: ALERTLOGFOOTER,
        background: '#343a40',
        color: '#fff',
        input: 'checkbox',
        inputValue: 0,
        inputPlaceholder: ALERTLOGPLACEHOLDER,
        inputValidator: (result) => { return !result && 'Tienes que estar de acuerdo con Términos y Condiciones' },
        html: ALERTALOGDOM,
        focusConfirm: false,
        preConfirm: () => {
            const valueinputnick = Swal.getPopup().querySelector('#swal-input1').value
            const valueinputpass = Swal.getPopup().querySelector('#swal-input2').value
            if (!valueinputpass || !valueinputnick) {
                Swal.showValidationMessage(`Porfavor ingrese su usuario y su contraseña`)
            } else if (!searchInLocal(valueinputnick, valueinputpass)) {
                Swal.showValidationMessage(`Este usuario y/o contraseña no existe`)
            } else {
                return [
                    logeo = new Login(valueinputnick, valueinputpass),
                    console.log(`se envio a comparar usuario: ${valueinputnick} pass: ${valueinputpass}`),
                    logeo.loginNew(valueinputnick, valueinputpass)
                ]
            }
        }
    })
}
function alertDeRegistrar() {
    Swal.fire({
        footer: ALERTREGFOOTER,
        background: '#343a40',
        color: '#fff',
        input: 'checkbox',
        inputValue: 0,
        inputPlaceholder: ALERTPLACEHOLDERREG,
        inputValidator: (result) => { return !result && 'Tienes que estar de acuerdo con Términos y Condiciones' },
        html: ALERTAREGDOM,
        confirmButtonText: 'OK',
        focusConfirm: false,
        preConfirm: () => {
            const valueinputnick = Swal.getPopup().querySelector('#input--nick').value
            const valueinputpass = Swal.getPopup().querySelector('#input--pass').value
            if (!valueinputpass || !valueinputnick) {
                Swal.showValidationMessage(`Porfavor elija su usuario y una contraseña`)
            } else {
                return [
                    usuarioNuevo = new User(valueinputnick, valueinputpass),
                    agregarUsuario(usuarioNuevo),
                    setInLocal('usuarios', usuarios),
                    updateLocal(),
                    createUsersList(),
                    alerts.Registed()
                ]
            }
        }
    })

}
const checkFetch = () => {
    return getFromLocal('fetch') ? true : false
}
const agregarFetchToUsuarios = () => {
    if (!checkFetch()) {
        fetch("JSON/info.JSON")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((user) => {
                    usuarios.push(user)
                })
                updateLocal()
                setInLocal('fetch', true)
                createUsersList()
                console.log("se agrego el fetch")
            })
            .catch((error) => console.warn(error))
    } else {
        console.log("ya hay un fetch")
    }
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


function getRegisterBtn() {
    const btnlogin = document.getElementById('btn--register')
    btnlogin.addEventListener("click", alertDeRegistrar)
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
        setInLocal('fetch', false)
        updateLocal()
        eliminateTitleNickname()
        eliminateUserList()
        createUsersList()
        alerts.Clear()
    })
}

///DOM
function checkTitleNickname() {
    setTimeout(() => {
        return document.querySelector('.title--nick') ? true : false
    }, 0)
}
function eliminateTitleNickname() {
    document.querySelector('.title--nick') == null ? console.log("no hay titulo") : document.querySelector('.title--nick').remove()
}
function createTitleNickname(nickname) {
    let h2 = document.createElement('h5')
    h2.innerHTML = `&#10731 ${nickname}`
    let containerEspecial = document.querySelector('div.container--especial')
    containerEspecial.append(h2)
    h2.classList.add('px-2'), h2.classList.add('mb-1'), h2.classList.add('title--nick')
}

const checkUserList = () => {
    return getFromLocal('userlist') ? true : false
}
function eliminateUserList() {
    while (userList.firstChild) {
        userList.removeChild(userList.firstChild);
    } setInLocal('userlist', false)
}
function createUsersList() {
    if ((usuarios.length > 0) && (!checkUserList())) {
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
    setInLocal('userlist', true)
}


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
async function asyncCall(){
    createUsersList() = await agregarFetchToUsuarios()
}

getClearBtn()
getLoginBtn()
getRegisterBtn()