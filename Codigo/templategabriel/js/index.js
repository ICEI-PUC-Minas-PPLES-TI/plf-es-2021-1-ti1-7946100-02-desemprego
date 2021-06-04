onload = () => {
    const btnPerfil = document.querySelector('.confirma-login');
    const alertLogin = document.querySelector('.alert-login');
    const dropdowMenuNavbar = document.querySelector('.dropdown-menu-navbar');
    const usuarioSession = JSON.parse(sessionStorage.getItem('usuario-login'));
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