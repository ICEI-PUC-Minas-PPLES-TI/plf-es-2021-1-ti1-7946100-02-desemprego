let vagasInfos = JSON.parse(localStorage.getItem("cadastroVagas"));
const vagaId = Number(JSON.parse(sessionStorage.getItem("vaga-info")).slice(-2));
const conteudoPagina = document.querySelector(".conteudo-pagina");
let novoVagasInfos = [];
let vagaSelecionada;

function adicionarCandidatosIds() {
    const userId = JSON.parse(sessionStorage.getItem("usuario-login")).id;
    const candidatosIds = vagaSelecionada.candidatosIds;
    let controle = true;

    if (candidatosIds.length === 0) {
        candidatosIds.push(userId);
    } else {
        for(let candidatoId of candidatosIds) {
            if(candidatoId === userId) controle = false;
        }
    
        if (controle) candidatosIds.push(userId);
    }

    localStorage.setItem("cadastroVagas", JSON.stringify(novoVagasInfos));
}

function existeUsuario() {
    let controleUserId = true;
    if (!sessionStorage.getItem("usuario-login")) controleUserId = false;
    return controleUserId;
}

function adicionarString(vagaInfo) {    
    let str = '';
    str +=
        `
        <div class="d-flex justify-content-between align-items-end">
            <h2 class="text-primary">${vagaInfo.funcao}</h2>
            <h5 class="bg-primary text-white p-2 rounded">${vagaInfo.status}</h5>
        </div>
        
        <h5 class="mb-4">${vagaInfo.empresa}</h5>

        <div class="mb-2">
            <label class="bold"><strong>Atividades: </strong></label>
            <p class="text-secondary text-justify">${vagaInfo.atividades}</p>
        </div>

        <div class="mb-2">
            <label class="bold"><strong>Requisitos: </strong></label>
            <p class="text-secondary text-justify">${vagaInfo.requisitos}</p>
        </div>

        <div class="d-flex flex-column mb-2">
            <span><strong>Salario: </strong>${vagaInfo.salario}</span>
            <span><strong>Filtro: </strong>${vagaInfo.filtro}</span>
            <span><strong>Escolaridade: </strong>${vagaInfo.escolaridade}</span>
            <span><strong>Localidade: </strong>${vagaInfo.localidade}</span>
            <span><strong>Data: </strong>${vagaInfo.data}</span>
        </div>
    `;

    if (vagaInfo.status === "Aberta") {
        str +=
            `
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary btn-candidatar">Candidatar-se</button>
            </div>
        `
    }

    if (vagaInfo.status !== "Aberta") {
        str +=
            `
            <div class="d-flex justify-content-end">
                <button class="btn btn-secondary" disabled>Fechado</button>
            </div>
        `
    }

    return str;
}

function exibirVaga() {
    let str = '';
    for (let vagaInfo of vagasInfos) {
        if(vagaInfo.id === vagaId) {
            str = adicionarString(vagaInfo);
            conteudoPagina.innerHTML = str;
            vagaSelecionada = {...vagaInfo};
        }
        
        novoVagasInfos.push(vagaInfo);
    }
}

exibirVaga();

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('btn-candidatar')) {
        switch(existeUsuario()) {
            case true:
                return adicionarCandidatosIds();
            case false:
                return alert('Faça login para se candidatar');
            default:
                alert('Caso inválido');
                break;
        }
    }
});