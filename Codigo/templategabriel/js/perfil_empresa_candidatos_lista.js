const conteudoPagina = document.querySelector('.candidatos-interessados');
const vagaId = Number(JSON.parse(sessionStorage.getItem('perfilEmpresaLinkVagasCandidatos')));
const candidatosInfos = JSON.parse(localStorage.getItem('usuario-cadastro'));

function criarString(vagaInfo) {
    return `
        <div class="card p-3 mb-3">
            <div class="d-flex justify-content-between">
                <h3>${vagaInfo.funcao}</h3>
                ${vagaInfo.datavalidade.split('-').reverse().join('/')}
            </div>
            <p class="text-secondary">
                Há <strong>${vagaInfo.candidatosIds.length}</strong> candidato(s) interessado(s)
            </p>
        </div>
    `
}

function exibirCandidato() {
    let str = '';
    for(let candidatoInfo of candidatosInfos) {
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
