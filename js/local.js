const searchInLocal = (nick, pass) => {
    let datos = getFromLocal('usuarios')
    let hayIgual = false
    for (let usuario of datos) {
        if (usuario.nick == nick && usuario.pass == pass) {
            hayIgual = true
            break
        }
    } return hayIgual
}
const setInLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
}
const getFromLocal = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
const updateLocal = () => {
    localStorage.clear()
    let key = 1
    for (const usuario of usuarios) {
        setInLocal(key, JSON.stringify(usuario))
        key++
    }
    setInLocal('usuarios', JSON.stringify(usuarios))
    console.log("contenido actualizado")
}
const verifyLocalStorageContent = () => {
    let usuariosEnLS = getFromLocal('usuarios')
    if (usuariosEnLS == null) {
        console.log("En el local storage no hay nada")
        usuarios = []
        setInLocal('usuarios', JSON.stringify(usuarios))
    } else {
        usuarios = usuariosEnLS.slice()
        console.log("hay algo en el local storage", usuarios)
    }
}
const checkLoged = () => {
    return new Promise((resolve, reject) => {
        localStorage.getItem('LOGEADO') ? resolve(localStorage.getItem('LOGEADO')) : reject(false) 
    })
}
const setLoged = (nick) => {
    return setInLocal('LOGEADO',nick)
}
