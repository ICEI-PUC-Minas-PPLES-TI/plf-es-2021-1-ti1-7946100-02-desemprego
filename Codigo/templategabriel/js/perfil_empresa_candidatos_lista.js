const conteudoPagina = document.querySelector('.candidatos-interessados');
const vagasInfos = JSON.parse(sessionStorage.getItem('perfilEmpresaLinkVagasCandidatos'));
const candidatosInfos = JSON.parse(localStorage.getItem('dbCandidato'));

function criarString(candidatoInfo) {
    return `
        <div class="card p-3 mb-3">
            <h3>${candidatoInfo.first_name}</h3>
        </div>
    `
}

function iterarVagas() {
    for(let vagaInfo of vagasInfos) {
        for(let idCandidato of vagaInfo.candidatosIds) {
            console.log(idCandidato);
        }
    }
}

function exibirCandidato() {
    let str = '';
    console.log(candidatosInfos);
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
