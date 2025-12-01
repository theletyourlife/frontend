function init() {
    navUl = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        navUl.innerHTML += `
        <li><h2>Usuário: ${user.name}</h2></li>
        <li><button>Sair</button></li>
        `

        return
    }

    navUl.innerHTML += `
        <li>
          <a href="./pages/usuarios/usuarios.html">Lista de Usuários</a>
        </li>
        <li>
          <a href="./pages/login/login.html">Login</a>
        </li>
    `    
}


init()