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
            background: '#343a40',
            color: '#fff',
            showConfirmButton: false,
            backdrop: `rgba(125, 168, 119,0.3)`,
            timer: 2000000
        })
    }
    loginNew(nick, pass) {
        if (searchInLocal(nick, pass)) {
            this.alertSucces(), setLoged(nick)
            checkTitle()
                .then((nick) => {
                    eliminateTitleNickname()
                    createTitleNickname(nick)
                })
                .catch((error) => {
                    console.log(`Habia usuarios logeados? ${error ? "no" : "si"}`)
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
            background: '#343a40',
            color: '#fff',
            showConfirmButton: true,
            timer: 20000,
            timerProgressBar: true,
            icon: 'warning',
            title: 'Debe registrar un usuario primero'
        })
    }
    Registed() {
        Swal.fire({
            toast: true,
            position: 'top-end',
            background: '#343a40',
            color: '#fff',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: 'success',
            title: 'Registrado con éxito!'
        })
    }
    alertSucces() {
        Swal.fire({
            title: 'Acceso Concedido',
            icon: 'success',
            background: '#343a40',
            color: '#fff',
            showConfirmButton: false,
            backdrop: `rgba(145, 200, 143 , 0.6)`,
            timer: 2000000
        })
    }
    alertError() {
        Swal.fire({
            title: 'Acceso Denegado',
            icon: 'error',
            background: '#343a40',
            color: '#fff',
            showConfirmButton: false,
            backdrop: `rgba(215, 96, 96, 0.6 )`,
            timer: 2000000
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
