const conteudoPagina = document.querySelector('.candidatos-interessados');
const vagasInfos = JSON.parse(localStorage.getItem('cadastroVagas'));
const userId = JSON.parse(sessionStorage.getItem("usuario-login")).id;

function criarString(vagaInfo) {
    return `
        <div class="card p-3 mb-3">
            <div class="d-flex justify-content-between">
                <a class="h3 link-candidatos text-decoration-none" id="id-vaga-${vagaInfo.id}" style="cursor:pointer">
                ${vagaInfo.funcao}
                </a>
                ${vagaInfo.datavalidade.split('-').reverse().join('/')}
            </div>
            <p class="text-secondary">
                Há <strong>${vagaInfo.candidatosIds.length}</strong> candidato(s) interessado(s)
            </p>
        </div>
    `
}

function exibirVagas() {
    let str = '';
    for(let vagaInfo of vagasInfos) {
        if(vagaInfo.empresa_id === userId){
            str += criarString(vagaInfo);
        }
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

exibirVagas();
