  class Register {
    constructor(nickdata, passdata) {
        this.datauser = []
        this.datauser.push(nickdata)
        this.datauser.push(passdata)
        this.enviar = function () {
            return this.datauser
        }
    }
}

class Login {
    constructor(tryNick, tryPass,fn) {
        this.datalogin = []
        this.user = fn
        this.datalogin.push(tryNick)
        this.datalogin.push(tryPass)
        this.userr = ["admin", 1234]
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
    attemptsPassword() {
        let count = 0
        let tryPassfunc
        let tryNickfunc
        let result=[]
        alert("Solamente tiene 3 intentos")
        for (let i = 0; (i <= 2) && (tryPassfunc != this.user[1]) && (tryNickfunc != this.user[0]); i++) {
            count += 1
            alert("Intento número: " + count)
            if (this.user[1] != tryPassfunc && this.user[0] != tryNickfunc) {
                tryNickfunc = prompt("Ingrese el nick:  " + this.user[0]).toString()
                tryPassfunc = prompt("Ingrese la contraseña: " + this.user[1]).toString()
            }
        } result.push(tryNickfunc),result.push(tryPassfunc)
        return result
    }
    compareArray (array1, array2) {
        var i = array1.length;
        if (i != array2.length) return false;

        while (i--) {
          if (array1[i] !== array2[i]) return false;
        }
        return true;
      }
    login() {
        if (this.datalogin[0] == this.user[0] && this.datalogin[1] == this.user[1]) {
            this.alertSucces()
        } else if (this.compareArray(this.attemptsPassword(),this.user)) {
            this.alertSucces()
        } else {
            this.alertError()
        }
    }
}


var registrar= new Register(prompt("registra este nick: "),prompt("registra esta contraseña: "))
var logeo = new Login(prompt("nick: "), prompt("contraseña: "), registrar.enviar())
logeo.login()
