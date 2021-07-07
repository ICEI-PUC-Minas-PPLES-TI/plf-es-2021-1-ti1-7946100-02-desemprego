const conteudoPagina = document.querySelector('.candidatos-interessados');
const vagasInfos = JSON.parse(localStorage.getItem('cadastroVagas'));
const candidatosInfos = JSON.parse(localStorage.getItem('dbCandidato'));
const userId = JSON.parse(sessionStorage.getItem("usuario-login")).id;

function criarString(candidatoInfo) {
    return `
        <div class="card p-3 mb-3">
            <h3 class="mb-2">${candidatoInfo.first_name} ${candidatoInfo.last_name}</h3>
            <div class="d-flex flex-column">
                <span class="text-secondary"><strong>Telefone: </strong>(${candidatoInfo.ddd}) ${candidatoInfo.phone}</span>
                <span class="text-secondary"><strong>Email: </strong>${candidatoInfo.email}</span>
                <span class="text-secondary"><strong>CPF: </strong>${candidatoInfo.cpf}</span>
                <span class="text-secondary"><strong>Endereço: </strong>${candidatoInfo.street}/${candidatoInfo.additional}</span>
                <span class="text-secondary"><strong>Area: </strong>${candidatoInfo.area}</span>
                <span class="text-secondary"><strong>Posicão: </strong>${candidatoInfo.position}</span>
                <span class="text-secondary"><strong>Senhoridade: </strong>${candidatoInfo.seniority}</span>
            </div>
        </div>
    `
}

function exibirCandidato() {
    let str = '';
    for(let vagaInfo of vagasInfos) {
        if(userId === vagaInfo.empresa_id) {
            for(let idCandidato of vagaInfo.candidatosIds) {
                for(let candidatoInfo of candidatosInfos.usuarios_candidato) {
                    if(idCandidato === candidatoInfo.candidato_id_sessao) {
                        console.log(candidatoInfo);
                        str += criarString(candidatoInfo);       
                    }
                }
            }
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

exibirCandidato();
