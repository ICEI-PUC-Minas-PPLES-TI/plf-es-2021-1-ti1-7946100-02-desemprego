const form = document.querySelector('#login');
const userForm = document.querySelector('#usuario');
const senhaForm = document.querySelector('#senha');
const alertCampoVazio = document.querySelector('.alert-campo-vazio');
const alertUsuarioInexistente = document.querySelector('.alert-usuario-inexistente');

sessionStorage.clear();



onload = () => {
    form.onsubmit = (e) => {
        e.preventDefault();

        if(!verificarCamposLogin(userForm, senhaForm, alertCampoVazio)) return;

        const userLocalStorage = JSON.parse(localStorage.getItem('usuario-cadastro'));

        if(!userLocalStorage) return;

        criarSession(userLocalStorage);

        if(!logar(userForm, senhaForm, alertUsuarioInexistente, userLocalStorage)) return;
        
        location.href = "./index.html";
    }
}

function logar(usuario, senha, alertUsuarioInexistente, userLocalStorage) {
    console.log('oi');
    for(let usuarioCadastrado of userLocalStorage) {
        if((usuario.value !== usuarioCadastrado.nome || usuario.value !== usuarioCadastrado.email) && senha.value !== usuarioCadastrado.senha) {
            alertUsuarioInexistente.setAttribute('style', 'display: block !important');
            usuario.classList.add('is-invalid');
            usuario.parentElement.parentElement.classList.add('has-danger');
            usuario.classList.add('is-invalid');
            usuario.parentElement.parentElement.classList.add('has-danger');
            return false;
        }
        if((usuario.value === usuarioCadastrado.nome || usuario.value === usuarioCadastrado.email) && senha.value === usuarioCadastrado.senha) {
            criarSession(usuarioCadastrado.nome, senha.value, usuarioCadastrado.id);
        }
    }
    return true;
}

function criarSession(nome, senha, id) {
    const userObject = {
        id: id,
        nome: nome,
        senha: senha
    }
    const userJSON = JSON.stringify(userObject);
    sessionStorage.setItem('usuario-login', userJSON);
}

function verificarCamposLogin(usuario, senha, alertCampoVazio) {
    if(usuario.value.length === 0 || senha.value.length === 0) {
        alertCampoVazio.setAttribute('style', 'display: block !important');
        if(usuario.value.length === 0) {
            usuario.classList.add('is-invalid');
            usuario.parentElement.parentElement.classList.add('has-danger');
        }
        if(senha.value.length === 0) {
            senha.classList.add('is-invalid');
            senha.parentElement.parentElement.classList.add('has-danger');
        }
        return false;
    }
    return true;
}