onload = () => {
    const btnPerfil = document.querySelector('.confirma-login');
    const dropMenu = document.querySelector('.dropdown-menu-navbar');
    const alertLogin = document.querySelector('.alert-login');
    btnPerfil.onclick = () => {
        const usuarioSession = sessionStorage.getItem('usuario-login');
        if(!usuarioSession) {
            dropMenu.classList.add('d-none');
            alertLogin.classList.remove('d-none');
        }
    }
}