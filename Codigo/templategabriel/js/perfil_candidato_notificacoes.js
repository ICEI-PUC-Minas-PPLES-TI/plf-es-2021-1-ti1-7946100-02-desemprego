onload = () => {
    const usuarioSession = JSON.parse(sessionStorage.getItem('usuario-login'));
    
    menuUsuario(usuarioSession);
    exibirCampoVagas();
}

function menuUsuario(usuarioSession) {
    const btnPerfil = document.querySelector('.confirma-login');
    const alertLogin = document.querySelector('.alert-login');
    const dropdowMenuNavbar = document.querySelector('.dropdown-menu-navbar');
    if(usuarioSession) {
        btnPerfil.innerHTML = `
        <i class="ni ni-circle-08"></i>
        <span class="nav-link-inner--text">${usuarioSession.nome}</span>`;
    }
    btnPerfil.onclick = () => {
        if(!usuarioSession) {
            dropdowMenuNavbar.classList.add('d-none');
            alertLogin.classList.remove('d-none');
        }
    }
}

function exibirCampoVagas() {
    const campoVagas = document.querySelector('.campo-vagas');
    const arrayVagas = JSON.parse(localStorage.getItem('cadastroVagas'));
    const div = criarDiv();
    campoVagas.appendChild(div);

    for(let vaga of arrayVagas) {
        const a = criarA();
        a.setAttribute('class', 'card p-4 mb-3');
        a.innerHTML = `
        <h3 class="text-primary">${vaga.funcao}</h3>
        <p class="text-default">Nome empresa -> Endereço</p>
        `;
        div.appendChild(a);
    }
}

function criarDiv() {
    const div = document.createElement('div');
    return div;
}

function criarA() {
    const a = document.createElement('a');
    return a;
}