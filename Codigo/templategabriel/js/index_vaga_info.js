function exibirVaga() {
    const vagaId = Number(JSON.parse(sessionStorage.getItem("vaga-info")).slice(-2));
    const vagasInfos = JSON.parse(localStorage.getItem("cadastroVagas"));
    const conteudoPagina = document.querySelector(".conteudo-pagina");
    let str = '';
    for(let vagaInfo of vagasInfos) {
        if(vagaInfo.id === vagaId) {
            str += 
            `
                <div class="p-3 rounded">
                    <h3 class="text-primary">${vagaInfo.funcao}</h3>
                    <h5 class="text-secondary">${vagaInfo.atividades}</h5>
                    <div class="">
                    
                    </div>
                </div>
            `;
        }
    }
    conteudoPagina.innerHTML = str;
}
exibirVaga();