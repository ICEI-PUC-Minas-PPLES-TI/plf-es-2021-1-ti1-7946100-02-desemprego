function exibirVaga() {
    const vagaId = Number(JSON.parse(sessionStorage.getItem("vaga-info")).slice(-2));
    const vagasInfos = JSON.parse(localStorage.getItem("cadastroVagas"));
    const conteudoPagina = document.querySelector(".conteudo-pagina");
    let str = '';
    for(let vagaInfo of vagasInfos) {
        if(vagaInfo.id === vagaId) {
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

            if(vagaInfo.status === "Aberta") {
                str +=
                `
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary">Candidatar-se</button>
                    </div>
                `
            }

            if(vagaInfo.status !== "Aberta") {
                str +=
                `
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-secondary" disabled>Fechado</button>
                    </div>
                `
            }
        } 
    }

    conteudoPagina.innerHTML = str;
}
exibirVaga();