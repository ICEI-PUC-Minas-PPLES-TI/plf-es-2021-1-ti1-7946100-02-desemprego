function leDados(){
    let strDados = localStorage.getItem('dbCandidato');
    let objDados = {};

    // Se tem vai dar true, pegamos dados em strig e convertemos em objeto JSON
    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else{
        objDados = { 
            usuarios_candidato: [
                /*{ 
                    id: 0,
                    email: "fulano@pucminas.br",
                    area: "- Área de atuação -",
                    first_name: "Primeiro Nome",
                    last_name: "Ultimo Nome",
                    position: "Cargo",
                    company: "Empresa",
                    business: "Profissão",
                    seniority: "Senoridade",
                    street: "Endereço",
                    additional: "Adicional",
                    estado: "UF",
                    zip: "Cep",
                    cpf: "CPF",
                    ddd: "DDD",
                    phone: "Telefone"
                },*/
                {
                    additional: "123",
                    area: "Ciências Biológicas",
                    business: "Gerente",
                    candidato_id_sessao: 8,
                    company: "PUC Minas",
                    cpf: "672.902.022-20",
                    ddd: "67",
                    email: "leticia@user.com",
                    estado: "AM",
                    first_name: "Leticia",
                    id: 0,
                    last_name: "Arruda",
                    phone: "99999-9999",
                    position: "Pessoa Diretora",
                    seniority: "Pleno",
                    street: "Rua das Abelhas",
                    zip: "999999"
                },
                {
                    additional: "345",
                    area: "Ciências Sociais Aplicadas",
                    business: "Gerente",
                    candidato_id_sessao: 9,
                    company: "PUC Minas",
                    cpf: "920.027.726-23",
                    ddd: "56",
                    email: "mariana@user.com",
                    estado: "BA",
                    first_name: "Mariana",
                    id: 1,
                    last_name: "Geovanne",
                    phone: "99999-9999",
                    position: "Analista",
                    seniority: "Pleno",
                    street: "Rua Morge",
                    zip: "9999999"
                }
            ]
        }
    }
    return objDados;
}
function salvaDados(dados){
    localStorage.setItem('dbCandidato', JSON.stringify(dados));
}
function incluirContato(){
    //Ler os dados do localStorage
    let objDados = leDados();
    const userId = JSON.parse(sessionStorage.getItem("usuario-login")).id;
    //Verificar se o id do sessionStorage e Igual a um id dentro do LocalStorage
    let dadosSession = JSON.parse(sessionStorage.getItem('usuario-login')) ;
    let idSession = dadosSession.id;
    let index = -1;
    for (i = 0; i < objDados.usuarios_candidato.length; i++){
        if (objDados.usuarios_candidato[i].id == idSession){
            index = i;            
            break;
        }
    }
    if (index != -1){
        objDados.usuarios_candidato[index].email = document.getElementById('your_email').value
        objDados.usuarios_candidato[index].area = document.getElementById('area').value
        objDados.usuarios_candidato[index].first_name = document.getElementById('first_name').value
        objDados.usuarios_candidato[index].last_name = document.getElementById('last_name').value
        objDados.usuarios_candidato[index].position = document.getElementById('position').value
        objDados.usuarios_candidato[index].company = document.getElementById('company').value
        objDados.usuarios_candidato[index].business = document.getElementById('business').value
        objDados.usuarios_candidato[index].seniority = document.getElementById('seniority').value
        objDados.usuarios_candidato[index].street = document.getElementById('street').value
        objDados.usuarios_candidato[index].additional = document.getElementById('additional').value
        objDados.usuarios_candidato[index].estado = document.getElementById('estado').value
        objDados.usuarios_candidato[index].zip = document.getElementById('zip').value
        objDados.usuarios_candidato[index].cpf = document.getElementById('cpf').value
        objDados.usuarios_candidato[index].ddd = document.getElementById('code').value
        objDados.usuarios_candidato[index].phone = document.getElementById('phone').value

        //Atualizando no localStorage
        localStorage.setItem('dbCandidato', JSON.stringify(objDados));
        
        //Atualiza os dados da tela
        imprimeDados();
        
    }
    else{
        //Incluir um novo contato
        let novoId = objDados.usuarios_candidato[objDados.usuarios_candidato.length - 1].id + 1;
        let novoemail = document.getElementById('your_email').value
        let novoarea = document.getElementById('area').value
        let novofirst_name = document.getElementById('first_name').value
        let novolast_name = document.getElementById('last_name').value
        let novoposition = document.getElementById('position').value
        let novocompany = document.getElementById('company').value
        let novobusiness = document.getElementById('business').value
        let novoseniority = document.getElementById('seniority').value
        let novostreet = document.getElementById('street').value
        let novoadditional = document.getElementById('additional').value
        let novoestado = document.getElementById('estado').value
        let novozip = document.getElementById('zip').value
        let novocpf = document.getElementById('cpf').value
        let novocode = document.getElementById('code').value
        let novophone = document.getElementById('phone').value
    
        let novoUsuario = {
            id: novoId,
            email: novoemail,
            area: novoarea,
            first_name: novofirst_name,
            last_name: novolast_name,
            position: novoposition,
            company: novocompany,
            business: novobusiness,
            seniority: novoseniority,
            street: novostreet,
            additional: novoadditional,
            estado: novoestado,
            zip: novozip,
            cpf: novocpf,
            ddd: novocode,
            phone: novophone,
            candidato_id_sessao: userId
        };
        objDados.usuarios_candidato.push(novoUsuario);
        //Salvar os dados no localStorage novamente
        salvaDados(objDados);
        //Atualiza os dados da tela
        imprimeDados();
    }
}

function imprimeDados(){
    let objDados = leDados();
    let tela = document.getElementById('tela_informacoes');
    objUltimo = objDados.usuarios_candidato[objDados.usuarios_candidato.length - 1];
    strTexto = `
            <div class="row" id="dados">
                <strong>Dados salvos:</strong>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <p><strong>Nome: ${objUltimo.first_name} ${objUltimo.last_name}</strong></p>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <p><strong>Email: ${objUltimo.email}</strong></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-7">
                        <p><strong>Area de atuação: ${objUltimo.area}</strong></p>
                    </div>
                    <div class="col-sm-12 col-md-5">
                        <p><strong>Empresa: ${objUltimo.company}</strong></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <p><strong>Profissão: ${objUltimo.business}</strong></p>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <p><strong>Senoridade: ${objUltimo.seniority}</strong></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8 col-md-8">
                        <p><strong>Endereco: ${objUltimo.street}</strong></p>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <p><strong>Adicional: ${objUltimo.additional}</strong></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <p><strong>CPF: ${objUltimo.cpf}</strong></p>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <p><strong>CEP: ${objUltimo.zip}</strong></p>
                    </div>                    
                    <div class="col-sm-6 col-md-4">
                        <p><strong>Estado: ${objUltimo.estado}</strong></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p><strong>Telefone: (${objUltimo.ddd}) ${objUltimo.phone} </strong></p>
                    </div>
                </div>
            </div>
    `;
    
    tela.innerHTML = strTexto;
}

//Configura os botoes

document.getElementById('btnCadastrar').addEventListener('click', incluirContato)
