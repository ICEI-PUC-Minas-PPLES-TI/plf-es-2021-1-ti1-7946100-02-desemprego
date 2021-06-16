function leDados(){
    let strDados = localStorage.getItem('cadastroVagas');
    let objDados = {};
    if (strDados){
        objDados = JSON.parse(strDados);
    }
    else{
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
                data: "19/12/2021"
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
                data: "25/12/2021"
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
                data: "19/12/2021"
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
                data: "19/12/2021"
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
                data: "19/10/2021"
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
                data: "19/10/2021"
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
                data: "19/08/2021"
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
                data: "19/07/2021"
            }
        ]
    }
    return objDados;
}
function salvaDados(dados){
    localStorage.setItem('cadastroVagas', JSON.stringify(dados));
}
function imprimeDados(){
    let objDados = leDados();
    let card_info = document.getElementById('card_info');
    let strTexto = '';
    let filtro_info = document.getElementById('filtro_info').value;
    
    
    for (i = 0; i < objDados.length; i++){
        const vaga = objDados[i];
        if (vaga.filtro == filtro_info){
            strTexto += 
            `<div class="row">
                <div class="card container vagas_info">
                    <div class="row">
                        <div class="">
                            <h5><a class="titulo_vaga" href="#">${vaga.funcao}</a></h5>
                            <p class="empresa">${vaga.empresa}<br>Requisitos: ${vaga.requisitos}</p>
                            <p class="descricao_vaga">
                                ${vaga.atividades}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-3">
                            <i class="fas fa-map-marker-alt"> ${vaga.localidade}</i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="fas fa-search-dollar"> R$${vaga.salario}</i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="fas fa-filter"> ${vaga.filtro}</i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="far fa-clock"><strong> ${vaga.data}</strong></i>
                        </div>
                    </div>
                </div>
            </div>`;            
        }
    }
    card_info.innerHTML = strTexto;
}
function imprimeVagas(){
    let objDados = leDados();
    let card_info = document.getElementById('card_info');
    let strTexto = '';
    let filtro_info = "Geral"
    
    for (i = 0; i < objDados.length; i++){
        const vaga = objDados[i];
        if (vaga.filtro == filtro_info){
            strTexto += 
            `<div class="row">
                <div class="card container vagas_info">
                    <div class="row">
                        <div class="">
                            <h5><a class="titulo_vaga" href="#">${vaga.funcao}</a></h5>
                            <p class="empresa">${vaga.empresa}<br>Requisitos: ${vaga.requisitos}</p>
                            <p class="descricao_vaga">
                                ${vaga.atividades}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-3">
                            <i class="fas fa-map-marker-alt"> ${vaga.localidade}</i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="fas fa-search-dollar"> R$${vaga.salario}</i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="fas fa-filter"> ${vaga.filtro}</i>
                        </div>
                        <div class="col-6 col-md-3">
                            <i class="far fa-clock"><strong> ${vaga.data}</strong></i>
                        </div>
                    </div>
                </div>
            </div>`;            
        }
    }
    card_info.innerHTML = strTexto;
}


// function incluirVaga(){
//     // Ler dados localStorage
//     let objDados = leDados();

// }
document.getElementById('filtro_info').addEventListener('change', imprimeDados);

onload = () => {
    const usuarioSession = JSON.parse(sessionStorage.getItem('usuario-login'));
    imprimeVagas();
    
    menuUsuario(usuarioSession);
    exibirCampoVagas();
}

function menuUsuario(usuarioSession) {
    const btnPerfil = document.querySelector('.confirma-login');
    const alertLogin = document.querySelector('.alert-login');
    const dropdowMenuNavbar = document.querySelector('.dropdown-menu-navbar');
    if(usuarioSession) {
        btnPerfil.innerHTML = `
        <i class="ni ni-circle-08"></i>
        <span class="nav-link-inner--text">${usuarioSession.nome}</span>`;
    }
    btnPerfil.onclick = () => {
        if(!usuarioSession) {
            dropdowMenuNavbar.classList.add('d-none');
            alertLogin.classList.remove('d-none');
        }
    }
}

function exibirCampoVagas() {
    const campoVagas = document.querySelector('.campo-vagas');
    const arrayVagas = JSON.parse(localStorage.getItem('cadastroVagas'));
    const div = criarDiv();
    campoVagas.appendChild(div);

    for(let vaga of arrayVagas) {
        const a = criarA();
        a.setAttribute('class', 'card p-4 mb-3');
        a.innerHTML = `
        <h3 class="text-primary">${vaga.funcao}</h3>
        <p class="text-default">Nome empresa -> Endereço</p>
        `;
        div.appendChild(a);
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