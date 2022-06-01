const password = 1234
let tryPass = parseFloat(prompt("contraseña: "))
let count = 0
function alertSucces() {
    Swal.fire({
        title: 'Acceso Concedido',
        icon: 'success',
        showConfirmButton: false,
        backdrop: `rgba(145, 200, 143 , 0.6)`,
        timer: 2000000
    })
}
function alertError() {
    Swal.fire({
        title: 'Acceso Denegado',
        icon: 'error',
        showConfirmButton: false,
        backdrop: `rgba(215, 96, 96, 0.6 )`,
        timer: 2000000
    })
}
function alertTry() {
    Swal.fire({
        title: 'Atención!',
        icon: 'warning',
        text:'Solamente tiene 3 intentos',
        confirmButtonText: 'Entiendo',
        backdrop: `rgba(224, 206, 88, 0.6 )`,
        timer: 2000000
    })
}
function attemptsPassword() {
    alert("Solamente tiene 3 intentos")
    let tryPassfunc
    for (i = 0; (i <= 2) && (tryPassfunc != password); i++) {
        count += 1
        alert("Intento número: " + count)
        if (password != tryPassfunc) {
            tryPassfunc = parseFloat(prompt("Ingrese nuevamente la contraseña: es " + password))
        }
    } return tryPassfunc
}
function login() {
    if (tryPass === password) {
        alertSucces()
    } else if (attemptsPassword() === password) {
        alertSucces()
    } else {
        alertError()
    }
}
login()