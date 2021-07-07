const form = document.querySelector('#login');
const userForm = document.querySelector('#usuario');
const senhaForm = document.querySelector('#senha');
const alertCampo = document.querySelector('.alert-campo');
const alertUsuarioInexistente = document.querySelector('.alert-usuario-inexistente');
const userLocalStorage = JSON.parse(localStorage.getItem('usuario-cadastro'));

sessionStorage.clear();

onload = () => {
    form.onsubmit = (e) => {
        e.preventDefault();

        if(!verificarCamposLogin(userForm, senhaForm)) return;

        if(!userLocalStorage) return;

        if(!logar(userForm, senhaForm)) return;
        
        location.href = "./index.html";
    }
}

function logar(usuario, senha) {
    let ctr = true;
    for(let usuarioCadastrado of userLocalStorage) {
        console.log(typeof senha.value, typeof usuarioCadastrado.senha);
        if(usuario.value !== usuarioCadastrado.email || senha.value !== usuarioCadastrado.senha) {
            alertCampo.setAttribute('style', 'display: block !important');
            alertCampo.innerHTML = '<strong>Usuário ou senha inválido</strong>';
            usuario.classList.add('is-invalid');
            usuario.parentElement.parentElement.classList.add('has-danger');
            usuario.classList.add('is-invalid');
            usuario.parentElement.parentElement.classList.add('has-danger');
            ctr = false;
        }
        if(usuario.value === usuarioCadastrado.email && senha.value === usuarioCadastrado.senha) {
            criarSession(usuarioCadastrado.nome, senha.value, usuarioCadastrado.id);
            return ctr = true;
        }
    }
    return ctr;
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

function verificarCamposLogin(usuario, senha) {
    if(usuario.value.length === 0 || senha.value.length === 0) {
        alertCampo.setAttribute('style', 'display: block !important');
        alertCampo.innerHTML = '<strong>Favor digitar todos os campos</strong>';
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