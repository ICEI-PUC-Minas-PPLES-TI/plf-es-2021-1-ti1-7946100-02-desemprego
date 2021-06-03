onload = () => {
    const form = document.querySelector('#login');
    form.onsubmit = (e) => {
        const userForm = document.querySelector('#usuario');
        const senhaForm = document.querySelector('#senha');
        const alertCampoVazio = document.querySelector('.alert-campo-vazio');
        const alertUsuarioInexistente = document.querySelector('.alert-usuario-inexistente');
        e.preventDefault();
        if(userForm.value.length === 0 || senhaForm.value.length === 0) {
            alertCampoVazio.setAttribute('style', 'display: block !important');
            if(userForm.value.length === 0) {
                userForm.classList.add('is-invalid');
                userForm.parentElement.parentElement.classList.add('has-danger');
            }
            if(senhaForm.value.length === 0) {
                senhaForm.classList.add('is-invalid');
                senhaForm.parentElement.parentElement.classList.add('has-danger');
            }
            return;
        }
        const userSession = JSON.parse(localStorage.getItem('usuario-login'));
        if((userForm.value !== userSession.nome || userForm.value !== userSession.email) && senhaForm.value !== userSession.senha) {
            alertUsuarioInexistente.setAttribute('style', 'display: block !important');
            userForm.classList.add('is-invalid');
            userForm.parentElement.parentElement.classList.add('has-danger');
            senhaForm.classList.add('is-invalid');
            senhaForm.parentElement.parentElement.classList.add('has-danger');
            return;
        }
        location.href = "../pages/index.html";
    }
}