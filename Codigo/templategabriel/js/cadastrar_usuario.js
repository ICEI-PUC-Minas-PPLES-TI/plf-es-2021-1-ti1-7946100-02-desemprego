const form = document.querySelector('#cadastro-usuario');
const userForm = document.querySelector('#usuario');
const emailForm = document.querySelector('#email');
const senhaForm = document.querySelector('#senha');
const repetirSenhaForm = document.querySelector('#confirmar-senha');
db_cadastrar_usuario = [];

onload = () => {
    form.onsubmit = (e) => {
        e.preventDefault();

        if(!verificarCamposVazios(userForm, emailForm, senhaForm, repetirSenhaForm)) return;
        if(!verificarSenhas(senhaForm, repetirSenhaForm)) return;

        const usuarioLogin = JSON.parse(localStorage.getItem('usuario-cadastro'));
        
        if(usuarioLogin) db_cadastrar_usuario = [...usuarioLogin];
        
        if(!existeUsuario(emailForm, db_cadastrar_usuario)) return;

        db_cadastrar_usuario.push(cadastrarUsuarios(userForm, emailForm, senhaForm, db_cadastrar_usuario.length));
        const usuarioJSON = JSON.stringify(db_cadastrar_usuario);
        localStorage.setItem('usuario-cadastro', usuarioJSON);

        // const usuarioSession = db_cadastrar_usuario.splice(-1, 1);
        // const usuarioSessionJSON = JSON.stringify(usuarioSession);
        // sessionStorage.setItem('usuario-login', usuarioSessionJSON);
        location.href = './login.html';
    }
}

function existeUsuario(emailForm, db_cadastrar_usuario) {
    const alertUsuarioExistente = document.querySelector('.alert-usuario-existente');
    for(let usuarioCadastrado of db_cadastrar_usuario) {
        if(emailForm.value === usuarioCadastrado.email) {
            email.classList.add('is-invalid');
            email.parentElement.parentElement.classList.add('has-danger');
            alertUsuarioExistente.setAttribute('style', 'display: block !important');
            return false;
        }
    }
    return true;
}

function cadastrarUsuarios(user, email, senha, db_length) {
    return {
        id: db_length++,
        nome: user.value,
        email: email.value,
        senha: senha.value,
    }
}

function verificarCamposVazios(usuario, email, senha, repetirSenha) {
    const alertCampoVazio = document.querySelector('.alert-campo-vazio');
    if(usuario.value.length === 0 || email.value.length === 0 || senha.value.length === 0 || repetirSenha.value.length === 0) {
        alertCampoVazio.setAttribute('style', 'display: block !important');
        if(usuario.value.length === 0) {
            usuario.classList.add('is-invalid');
            usuario.parentElement.parentElement.classList.add('has-danger');
        }
        if(email.value.length === 0) {
            email.classList.add('is-invalid');
            email.parentElement.parentElement.classList.add('has-danger');
        }
        if(senha.value.length === 0) {
            senha.classList.add('is-invalid');
            senha.parentElement.parentElement.classList.add('has-danger');
        }
        if(repetirSenha.value.length === 0) {
            repetirSenha.classList.add('is-invalid');
            repetirSenha.parentElement.parentElement.classList.add('has-danger');
        }
        return false;
    }
    return true;
}

function verificarSenhas(senha, repetirSenha) {
    const alertSenhaDiferente = document.querySelector('.alert-senha-diferente');
    if(senha.value !== repetirSenha.value) {
        senha.classList.add('is-invalid');
        senha.parentElement.parentElement.classList.add('has-danger');
        repetirSenha.classList.add('is-invalid');
        repetirSenha.parentElement.parentElement.classList.add('has-danger');
        alertSenhaDiferente.setAttribute('style', 'display: block !important');
        return false;
    }
    return true;
}