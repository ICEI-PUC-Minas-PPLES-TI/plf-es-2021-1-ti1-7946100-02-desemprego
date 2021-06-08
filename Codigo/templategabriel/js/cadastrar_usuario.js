onload = () => {
    const form = document.querySelector('#cadastro-usuario');
    form.onsubmit = (e) => {
        const userForm = document.querySelector('#usuario');
        const emailForm = document.querySelector('#email');
        const senhaForm = document.querySelector('#senha');
        const repetirSenhaForm = document.querySelector('#confirmar-senha');
        const alertCampoVazio = document.querySelector('.alert-campo-vazio');
        const alertSenhaDiferente = document.querySelector('.alert-senha-diferente');
        e.preventDefault();
        if(userForm.value.length === 0 || emailForm.value.length === 0 || senhaForm.value.length === 0 || repetirSenhaForm.value.length === 0) {
            alertCampoVazio.setAttribute('style', 'display: block !important');
            if(userForm.value.length === 0) {
                userForm.classList.add('is-invalid');
                userForm.parentElement.parentElement.classList.add('has-danger');
            }
            if(emailForm.value.length === 0) {
                emailForm.classList.add('is-invalid');
                emailForm.parentElement.parentElement.classList.add('has-danger');
            }
            if(senhaForm.value.length === 0) {
                senhaForm.classList.add('is-invalid');
                senhaForm.parentElement.parentElement.classList.add('has-danger');
            }
            if(repetirSenhaForm.value.length === 0) {
                repetirSenhaForm.classList.add('is-invalid');
                repetirSenhaForm.parentElement.parentElement.classList.add('has-danger');
            }
            return;
        }
        if(senhaForm.value !== repetirSenhaForm.value) {
            senhaForm.classList.add('is-invalid');
            senhaForm.parentElement.parentElement.classList.add('has-danger');
            repetirSenhaForm.classList.add('is-invalid');
            repetirSenhaForm.parentElement.parentElement.classList.add('has-danger');
            alertSenhaDiferente.setAttribute('style', 'display: block !important');
            return;
        }
        const usuario = {
            nome: userForm.value,
            email: emailForm.value,
            senha: senhaForm.value
        };
        const usuarioJSON = JSON.stringify(usuario);
        localStorage.setItem('usuario-login', usuarioJSON);
        sessionStorage.setItem('usuario-login', usuarioJSON);
        location.href = './login.html';
    }
}

