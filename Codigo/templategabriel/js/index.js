onload = () => {
    const btnPerfil = document.querySelector('.confirma-login');
    const alertLogin = document.querySelector('.alert-login');
    const dropdowMenuNavbar = document.querySelector('.dropdown-menu-navbar');
    btnPerfil.onclick = () => {
        const usuarioSession = sessionStorage.getItem('usuario-login');
        if(!usuarioSession) {
            dropdowMenuNavbar.classList.add('d-none');
            alertLogin.classList.remove('d-none');
        }
    }
}