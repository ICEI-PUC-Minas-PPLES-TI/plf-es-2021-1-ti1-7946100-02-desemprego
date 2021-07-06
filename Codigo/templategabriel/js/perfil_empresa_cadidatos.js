const conteudoPagina = document.querySelector('.candidatos-interessados');
const vagasInfos = JSON.parse(localStorage.getItem('cadastroVagas'));
const userId = JSON.parse(sessionStorage.getItem("usuario-login")).id;

function exibirVagas() {
    for(let vagaInfo of vagasInfos) {
        console.log(vagaInfo);
    }
}

exibirVagas();
