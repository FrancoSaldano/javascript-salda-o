class Register {
    constructor(nickdata, passdata) {
        this.nickdata = nickdata
        this.passdata = passdata
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
    attemptsPasswordNew() {
        let count = 0
        let tryPassfunc = this.tryPass
        let tryNickfunc = this.tryNick
        alert("Solamente tiene 3 intentos")
        for (let i = 0; (i <= 2); i++) {
            count += 1
            alert("Intento número: " + count)
            tryNickfunc = prompt("Ingrese el nick:  ").toString()
            tryPassfunc = prompt("Ingrese la contraseña: ").toString()
            if (searchInLocal(tryNickfunc, tryPassfunc)) {
                return true
            } else {
                continue
            }
        } searchInLocal(tryNickfunc, tryPassfunc)
    }
    loginNew(nick, pass) {
        if (searchInLocal(nick, pass)) {
            this.alertSucces()
            setLoged(nick)
            checkTitle()
                .then((nick) => {
                    eliminateTitleNickname()
                    createTitleNickname(nick)
                })
                .catch((error) => {
                    console.log(`Habia usuarios logeados? ${error ? "no": "si"}`)
                    createTitleNickname(nick)
                })
        } else if (this.attemptsPasswordNew()) {
            this.alertSucces()
            setLoged(nick)
            checkTitle()
                .then((nick) => {
                    eliminateTitleNickname()
                    createTitleNickname(nick)
                })
                .catch((error) => {
                    console.log(`Habia usuarios logeados? ${error ? "no": "si"}`)
                    createTitleNickname(nick)
                })
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
    UserNotExist() {
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
    Registed() {
        const btnRegist = document.getElementById('btn--register')
        btnRegist.addEventListener("click",
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: 'success',
                title: 'Registrado con éxito!'
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
    Clear() {
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
