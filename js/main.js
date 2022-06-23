class Register {
    constructor(nickdata, passdata) {
        this.nickdata = nickdata
        this.passdata = passdata
        this.datauser = []
        this.datauser.push(nickdata)
        this.datauser.push(passdata)
        this.enviar = function () {
            return this.datauser
        }
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
    constructor(tryNick, tryPass, dataUser) {
        this.datalogin = []
        this.user = dataUser
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
    attemptsPassword() {
        let count = 0
        let tryPassfunc
        let tryNickfunc
        let result = []
        alert("Solamente tiene 3 intentos")
        for (let i = 0; (i <= 2) && (tryPassfunc != this.user[1]) && (tryNickfunc != this.user[0]); i++) {
            count += 1
            alert("Intento número: " + count)
            if (this.user[1] != tryPassfunc && this.user[0] != tryNickfunc) {
                tryNickfunc = prompt("Ingrese el nick:  " + this.user[0]).toString()
                tryPassfunc = prompt("Ingrese la contraseña: " + this.user[1]).toString()
            }
        } result.push(tryNickfunc), result.push(tryPassfunc)
        return result
    }
    compareArray(array1, array2) {
        var i = array1.length;
        if (i != array2.length) return false;

        while (i--) {
            if (array1[i] !== array2[i]) return false;
        }
        return true;
    }
    login() {
        if (this.datalogin[0] == this.user[0] && this.datalogin[1] == this.user[1]) {
            this.alertSucces(), createTitleNickname(this.getNickname)
        } else if (this.compareArray(this.attemptsPassword(), this.user)) {
            this.alertSucces(), createTitleNickname(this.getNickname)
        } else {
            this.alertError()
        }
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
        registrar = new Register(inputnick, inputpass)
        sessionStorage.setItem("dataUser", JSON.stringify(registrar.enviar()))
        formulario.addEventListener("click",registrar.alertRegisted())
    }

}

function getActionBtn() {
    const btnlogin = document.getElementById('btn--login')
    btnlogin.addEventListener("click", alertDeLogeo)

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
                    sessionStorage.setItem("user", valueinputnick),
                    sessionStorage.setItem("pass", valueinputpass),

                    user = sessionStorage.getItem('user'), pass = sessionStorage.getItem('pass'), dataUser = JSON.parse(sessionStorage.getItem('dataUser')),
                    logeo = new Login(user, pass, dataUser),
                    console.log(`se envio a comparar usuario: ${user} pass: ${pass}`),
                    logeo.login()
                ]
            }
        })
    }
}

getFormularioData()
getActionBtn()

function createTitleNickname(nickname) {
    let userName = document.createElement('h2')
    userName.innerHTML = `Bienvenido! ${nickname}`
    let containerEspecial = document.querySelector('div.container--especial')
    containerEspecial.append(userName)
    userName.classList.add('p-5')
    userName.classList.add('title--nick')

}