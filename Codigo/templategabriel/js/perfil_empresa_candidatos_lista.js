const conteudoPagina = document.querySelector('.candidatos-interessados');
const vagasInfos = JSON.parse(localStorage.getItem('cadastroVagas'));
const candidatosInfos = JSON.parse(localStorage.getItem('dbCandidato'));
const userId = JSON.parse(sessionStorage.getItem("usuario-login")).id;

function criarString(candidatoInfo) {
    return `
        <div class="card p-3 mb-3">
            <h3>${candidatoInfo.first_name} -> ${candidatoInfo.candidato_id_sessao}</h3>
        </div>
    `
}

function iterarVagas() {
    for(let vagaInfo of vagasInfos) {
        if(userId === vagaInfo.empresa_id) {
            for(let idCandidato of vagaInfo.candidatosIds) {
                console.log(idCandidato);
            }
        }
        
    }
}
iterarVagas();

function exibirCandidato() {
    let str = '';
    
    for(let candidatoInfo of candidatosInfos.usuarios_candidato) {
        str += criarString(candidatoInfo);

    }
    conteudoPagina.innerHTML = str;
}

document.addEventListener('click', (e) => {
    const linkVagas = document.querySelectorAll('.link-candidatos'); 
    const el = e.target;
    for(let linkVaga of linkVagas) {
        sessionStorage.setItem('perfilEmpresaLinkVagasCandidatos', JSON.stringify(linkVaga.id));
        location.href = './perfil_empresa_candidatos_lista.html';
    }
});

exibirCandidato();
