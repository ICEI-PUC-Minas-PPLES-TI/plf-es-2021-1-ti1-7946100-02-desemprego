onload = () => {
    const listaFavoritos = JSON.parse(localStorage.getItem('favoritos'));
    const id_usuario = JSON.parse(sessionStorage.getItem('usuario-login')).id;
    imprimirFavoritos(listaFavoritos, id_usuario);
}

function imprimirFavoritos(listaFavoritos, id_usuario) {
    const pageContent = document.querySelector('.page_content');
    let str = '';
    for(let favorito of listaFavoritos) {
        if(id_usuario === favorito.id_usuario) {
            str += 
            `
                <div class="card p-3 w-100 mb-4">
                    <div class="row">
                        <div class="">
                        <h5><a class="titulo_vaga" id="id-vaga-0${favorito.id}">${favorito.funcao}</a></h5>
                        <p class="empresa">Requisitos: ${favorito.requisitos}</p>
                        <p class="descricao_vaga">
                            ${favorito.atividades}
                        </p>
                    </div>
                    </div>
                    <div class="row">
                        <!--<div class="col-6 col-md-3">
                            <i class="fas fa-map-marker-alt"><span class="info_vagas"> ${favorito.localidade}</span></i>
                        </div>-->
                        <div class="col-6 col-md-3">
                            <i class="fas fa-search-dollar"><span class="info_vagas"> R$ ${favorito.salario}</span></i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="fas fa-filter"><span class="info_vagas"> ${favorito.filtro}</span></i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="far fa-clock"><span class="info_vagas"> ${favorito.data}</span></i>
                        </div>
                    </div>
                </div>
            </div>
        `
        }
    }
    pageContent.innerHTML = str;
    selecionarVaga();
}

function selecionarVaga() {
    const linkVagas = document.querySelectorAll('.titulo_vaga');
    for (let linkVaga of linkVagas) {
        linkVaga.addEventListener("click", function (e) {
            sessionStorage.setItem("vaga-info", JSON.stringify(linkVaga.id));
            location.href = "index_vaga_info.html";
        });
    }
}

function criarDiv() {
    const div = document.createElement('div');
    return div;
}

function criarA() {
    const a = document.createElement('a');
    return a;
}

function menuUsuario(usuarioSession) {
    console.log(1);
    const btnPerfil = document.querySelector('.confirma-login');
    if (usuarioSession) {
        btnPerfil.innerHTML = `
        Perfil ->  
        <span class="nav-link-inner--text">${usuarioSession.nome}</span>`;
    }
}