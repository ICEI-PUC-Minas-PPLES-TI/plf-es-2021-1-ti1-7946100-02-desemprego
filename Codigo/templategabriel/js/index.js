const listaFavoritos = JSON.parse(localStorage.getItem('favoritos'));
let favoritosArray = [];
if (listaFavoritos) {
    favoritosArray = [...listaFavoritos];
}


function leDados() {
    let strDados = localStorage.getItem('cadastroVagas');
    let objDados;
    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = [
            {
                id: 0,
                atividades: "Buscamos um profissional para atuar como Analista de Dados, realizando integrações de informações em sistemas e muito mais",
                empresa: "PUC Minas",
                escolaridade: "Superior completo",
                funcao: "Analista de dados",
                requisitos: "Experiência com ferramentas de BI",
                salario: "2500,00",
                status: "Aberta",
                localidade: "Belo Horizonte",
                filtro: "Mais experiente",
                data: "19/12/2021",
                candidatosIds: [],
                empresa_id: 0
            },
            {
                id: 1,
                atividades: "Buscamos um profissional para atuar como administrador de Banco de Dados, realizando integrações de informações em sistemas e muito mais, alem de criar dashbords para tomada de decisão",
                empresa: "PUC Minas",
                escolaridade: "Superior completo",
                funcao: "Administrador de banco de dados",
                requisitos: "Experiência com ferramentas de BI, SQL, Oracle (será um diferencial)",
                salario: "4000,00",
                status: "Aberta",
                localidade: "Brasil",
                filtro: "Mais experiente",
                data: "25/12/2021",
                candidatosIds: [],
                empresa_id: 1
            },
            {
                id: 2,
                atividades: "Buscamos um estagiario para atuar com UX",
                empresa: "PUC Minas",
                escolaridade: "Ensino médio",
                funcao: "Estágio de UX",
                requisitos: "Experiência com UX",
                salario: "1000,00",
                status: "Aberta",
                localidade: "Belo Horizonte",
                filtro: "Primeira Oportunidade",
                data: "19/12/2021",
                candidatosIds: [],
                empresa_id: 1
            },
            {
                id: 3,
                atividades: "Atendente de telemarketing, atendimento direto com cliente, resolução de problemas e resiliência",
                empresa: "PUC Minas",
                escolaridade: "Ensino médio",
                funcao: "Atendente de Telemarketing",
                requisitos: "Educação e análise de perfil, além de muita energia e força de vontade",
                salario: "2000,00",
                status: "Aberta",
                localidade: "São Paulo/Remoto",
                filtro: "Primeira Oportunidade",
                data: "19/12/2021",
                candidatosIds: [],
                empresa_id: 2
            },
            {
                id: 4,
                atividades: "Atendimento ao cliente, apresentação de produtos, elaboração de propostas comercias, envio para correspondente bancário, acompanhamento até aprovação de crédito, fechamento da vendas.",
                empresa: "PUC Minas",
                escolaridade: "Ensino Médio",
                funcao: "Consultor de Vendas",
                requisitos: "Experiência com vendas e com clientes",
                salario: "4000,00",
                status: "Aberta",
                localidade: "Belo Horizonte",
                filtro: "Outras Culturas",
                data: "19/10/2021",
                candidatosIds: [],
                empresa_id: 3
            },
            {
                id: 5,
                atividades: "Vendas por telefone através dos nossos canais exclusivos ativos e receptivos. Prospecções, reativações e abertura de novos clientes. Manutenção da carteira de clientes e atendimento pós-vendas.",
                empresa: "PUC Minas",
                escolaridade: "Ensino Médio",
                funcao: "Vendedor",
                requisitos: "Experiência com vendas e com clientes",
                salario: "3000,00",
                status: "Aberta",
                localidade: "Belo Horizonte",
                filtro: "Outras Culturas",
                data: "19/10/2021",
                candidatosIds: [],
                empresa_id: 3
            },
            {
                id: 6,
                atividades: "Experiência em plataformas digitais  na geração de leads para geração de vendas. Acompanhamento do fluxo de vendas de fim a fim. Conhecimento no Power BI/ Dynamics / CRM",
                empresa: "PUC Minas",
                escolaridade: "Superior",
                funcao: "Analista de Inside Sales",
                requisitos: "Conhecimento de kpis de inside sales. Senso analítico e propositivo mediante as análises destes. Kpis Excel Avançado e pacote office.",
                salario: "5000,00",
                status: "Aberta",
                localidade: "Betim",
                filtro: "Geral",
                data: "19/08/2021",
                candidatosIds: [],
                empresa_id: 4
            },
            {
                id: 7,
                atividades: "Auxiliar na gestão dos projetos corporativos. Identificar e definir escopo dos projetos. Envolver partes interessadas e alinhar expectativas. Construir e acompanhar cronogramas. Identificar e acompanhar riscos e realizar reuniões de status.",
                empresa: "PUC Minas",
                escolaridade: "Superior completo",
                funcao: "Analista de Projetos",
                requisitos: "Gestão de projetos, Microsoft Project, Pacote Office 365. ",
                salario: "3000,00",
                status: "Aberta",
                localidade: "Belo Horizonte",
                filtro: "Geral",
                data: "19/07/2021",
                candidatosIds: [],
                empresa_id: 5
            }
        ];
        localStorage.setItem('cadastroVagas', JSON.stringify(objDados));
    }
    console.log(objDados);
    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('cadastroVagas', JSON.stringify(dados));
}

function imprimeDados() {
    let objDados = leDados();
    let card_info = document.getElementById('card_info');
    let strTexto = '';
    let filtro_info = document.getElementById('filtro_info').value;


    for (i = 0; i < objDados.length; i++) {
        const vaga = objDados[i];
        if (vaga.filtro == filtro_info) {
            strTexto +=
                `<div class="row">
                <div class="card container vagas_info">
                    <div class="mb-4 d-flex justify-content-between">
                        <h5><a class="titulo_vaga" id="id-vaga-0${vaga.id}">${vaga.funcao}</a></h5>
                        <button class="btn btn-danger btn-interesse ${vaga.id}"><i class="fas fa-heart"></i></button>
                    </div>
                    <div class="mb-4">
                        <p class="empresa text-justify">Requisitos: ${vaga.requisitos}</p>
                        <p class="descricao_vaga text-justify">
                            ${vaga.atividades}
                        </p>
                    </div>
                    <div class="row">
                    <!--<div class="col-6 col-md-3">
                            <i class="fas fa-map-marker-alt"><span class="info_vagas"> ${vaga.localidade}</span></i>
                        </div>-->
                        <div class="col-6 col-md-3">
                            <i class="fas fa-search-dollar"><span class="info_vagas"> R$ ${vaga.salario}</span></i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="fas fa-filter"><span class="info_vagas"> ${vaga.filtro}</span></i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="far fa-clock"><span class="explicacao info_vagas" data-tooltip=" Data limite para inscrição! "> ${vaga.data}</span></i>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }
    card_info.innerHTML = strTexto;
    selecionarVaga();
    adicionarVagaFavorita();
}
function imprimeVagas() {
    let objDados = leDados();
    let card_info = document.getElementById('card_info');
    let strTexto = '';
    let filtro_info = "Geral"

    for (i = 0; i < objDados.length; i++) {
        const vaga = objDados[i];
        let data = new Date(vaga.datavalidade)
        if (vaga.filtro == filtro_info) {
            strTexto +=
                `<div class="row">
                <div class="card container vagas_info">
                    <div class="mb-4 d-flex justify-content-between">
                        <h5><a class="titulo_vaga" id="id-vaga-0${vaga.id}">${vaga.funcao}</a></h5>
                        <button class="btn btn-danger btn-interesse ${vaga.id}"><i class="fas fa-heart"></i></button>
                    </div>
                    <div class="mb-4">
                        <p class="empresa text-justify">Requisitos: ${vaga.requisitos}</p>
                        <p class="descricao_vaga text-justify">
                            ${vaga.atividades}
                        </p>
                    </div>
                    <div class="row">
                    <!--<div class="col-6 col-md-3">
                            <i class="fas fa-map-marker-alt"><span class="info_vagas"> ${vaga.localidade}</span></i>
                        </div>-->
                        <div class="col-6 col-md-3">
                            <i class="fas fa-search-dollar"><span class="info_vagas"> R$ ${vaga.salario}</span></i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="fas fa-filter"><span class="info_vagas"> ${vaga.filtro}</span></i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="far fa-clock"><span class="explicacao info_vagas" data-tooltip=" Data limite para inscrição! "> ${data.toLocaleDateString()}</span></i>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }
    title = `
    <div class="row titulo_vagas">
        <h1>Nossas vagas</h1>
    </div>
    `
    card_info.innerHTML = title + strTexto;
}


// function incluirVaga(){
//     // Ler dados localStorage
//     let objDados = leDados();

// }
document.getElementById('filtro_info').addEventListener('change', imprimeDados);

// onload = () => {
//     const usuarioSession = JSON.parse(sessionStorage.getItem('usuario-login'));
//     imprimeVagas();


//     menuUsuario(usuarioSession);
//     selecionarVaga();
//     adicionarVagaFavorita();
    
//     executaPesquisaCursos()
//     executaPesquisaNoticias()
    

// }


function selecionarVaga() {
    const linkVagas = document.querySelectorAll('.titulo_vaga');
    console.log(linkVagas);
    for (let linkVaga of linkVagas) {
        linkVaga.addEventListener("click", function (e) {
            sessionStorage.setItem("vaga-info", JSON.stringify(linkVaga.id));
            location.href = "index_vaga_info.html";
        });
    }
}

function menuUsuario(usuarioSession) {
    const btnPerfil = document.querySelector('.confirma-login');
    const alertLogin = document.querySelector('.alert-login');
    const dropdowMenuNavbar = document.querySelector('.dropdown-menu-navbar');
    const finalizarSessao = document.querySelector('.finalizarSessao');
    if (usuarioSession) {
        btnPerfil.innerHTML = `
        <i class="ni ni-circle-08"></i>
        <span class="nav-link-inner--text">${usuarioSession.nome}</span>`;
    }
    btnPerfil.onclick = () => {
        if (!usuarioSession) {
            dropdowMenuNavbar.classList.add('d-none');
            alertLogin.classList.remove('d-none');
        }
    }
}

function adicionarVagaFavorita() {
    const todosBtnFavorito = document.querySelectorAll('.btn-interesse');
    console.log(todosBtnFavorito);
    const usuarioSession = sessionStorage.getItem('usuario-login');
    const id_usuario = JSON.parse(usuarioSession).id;
    for (let btnFavorito of todosBtnFavorito) {
        btnFavorito.addEventListener("click", (e) => {
            const el = e.target;
            let objDados = leDados();
            for (let obj of objDados) {
                if (el.classList.contains(String(obj.id))) {
                    favoritosArray.push({ ...obj, id_usuario: id_usuario });
                    localStorage.setItem('favoritos', JSON.stringify(favoritosArray));
                }
            }
            console.log(objDados);
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


// Noticias e cursos 
// const API_KEY = 'b5d2164cdc0045ce8ca77e40d68a5555'

// function exibeNoticiasIndex(){
//     let divNoticias = document.getElementById('noticias_card')
//     let Texto = ``

//     // Mostra titulo das noticias
//     let dados = JSON.parse(this.responseText);
//     for (let i = 0; i < 4; i++){
//         let noticia = dados.articles[i]
//         Texto += `
//         <div class="card noticia">
//             <h6>${noticia.title}</h6>
//             <a class="noticia" href="${noticia.url}">Leia mais...</a>
//         </div>
//         `
//     }
//     divNoticias.innerHTML = Texto
// }
// function executaPesquisaNoticiasIndex(){
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', `https://newsapi.org/v2/everything?q=emprego&language=pt&apiKey=b5d2164cdc0045ce8ca77e40d68a5555`)
//     xhr.onload = exibeNoticiasIndex;
//     xhr.send()
// }

// function exibeCursosCard(){
//     let divCursos = document.getElementById('cursos')
//     let Texto = ``

//     let dados = JSON.parse(this.responseText)
//     for (let i = 0; i <4; i++){
//         let curso = dados.articles[i]
//         Texto += `
//         <div class="card cursos">
//             <h6>${curso.title}</h6>
//             <a class="cursos" href="${curso.url}">Leia mais...</a>
//         </div>
//         `
//     }
//     divCursos.innerHTML = Texto
// }

// function executaPesquisaCursosCard(){
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', `https://newsapi.org/v2/everything?q=cursos-mercado&language=pt&apiKey=${API_KEY}`)
//     xhr.onload = exibeCursos
//     xhr.send() 
// }

// // Pagina de noticias
// function exibeNoticiasPagina(){
//     let divNoticias = document.getElementById('card_noticias')
//     let Texto = ``

//     let dados = JSON.parse(this.responseText)
//     for (let i = 0; i < 5; i++){
//         let noticia = dados.articles[i]
//         let data = new Date (noticia.publishedAt)
//         let autor = ''
//         if (noticia.author == null){
//             autor = ''
//         }else{
//             autor = `Autor/a: ${noticia.author}`
//         }
//         Texto += `
//         <div class="row">
//             <div class="card noticia">
//                 <div class="container informativo">
//                     <div class="row">
//                         <div class="col-4 div_img">
//                             <img class="img_noticia" src="${noticia.urlToImage}" alt="Noticia">
//                         </div>
//                         <div class="col-8">
//                                 <div class="row title">
//                                     <strong>${noticia.title}</strong>
//                                 </div>
//                                 <div class="row info">
//                                     <p>${autor} | Data: ${data.toLocaleDateString()}</p>
//                                 </div>
//                                 <div class="row materia">
//                                     ${noticia.content}
//                                 </div>
//                                 <div class="row link">
//                                     <a class="noticias" href="${noticia.url}">Leia mais...</a>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         `
//     }
//     title = `
//     <div class="row titulo_noticia">
//         <h1>Notícias</h1>
//     </div>
//     `
//     divNoticias.innerHTML = title + Texto
// }

// function executaPesquisaPaginaNoticias(){
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', `https://newsapi.org/v2/everything?q=emprego&language=pt&apiKey=${API_KEY}`)
//     xhr.onload = exibeNoticiasPagina
//     xhr.send()
// }