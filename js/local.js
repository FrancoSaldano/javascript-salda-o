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
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
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
