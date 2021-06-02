onload = () => {
    const btnPerfil = document.querySelector('.confirma-login');
    const dropMenu = document.querySelector('.dropdown-menu-navbar');
    const alertLogin = document.querySelector('.alert-login');
    const usuarioSession = JSON.parse(sessionStorage.getItem('usuario-login'));
    btnPerfil.onclick = () => {
        if(!usuarioSession) {
            dropMenu.classList.add('d-none');
            alertLogin.classList.remove('d-none');
        }
    }
    btnPerfil.innerHTML = `
        <i class="ni ni-circle-08"></i>
        <span class="nav-link-inner--text">${usuarioSession.nome}</span>`;
}