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
                { 
                    id: 1,
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
        phone: novophone
    };
    objDados.usuarios_candidato.push(novoUsuario);
    //Salvar os dados no localStorage novamente
    salvaDados(objDados);
    //Atualiza os dados da tela
    imprimeDados();
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

onload = () => {
    imprimeDados();
    // email_login = sessionStorage.getItem('usuario-login');
    // your_email.value = email_login.

    // area.value = localStorage.getItem('area');
    // first_name.value = localStorage.getItem('first_name');
    // last_name.value = localStorage.getItem('last_name')
    // position.value = localStorage.getItem('position')
    // company.value = localStorage.getItem('company')
    // business.value = localStorage.getItem('business')
    // seniority.value = localStorage.getItem('seniority')
    // street.value = localStorage.getItem('adress')
    // additional.value = localStorage.getItem('additional')
    // estado.value = localStorage.getItem('estado')
    // zip.value = localStorage.getItem('zip')
    // cpf.value = localStorage.getItem('cpf')
    // code.value = localStorage.getItem('ddd')
    // phone.value = localStorage.getItem('phone')

    myform.onsubmit = (evento) =>{
        evento.preventDefault();
        // localStorage.setItem('email', your_email.value)
        // localStorage.setItem('area', area.value)
        // localStorage.setItem('first_name', first_name.value)
        // localStorage.setItem('last_name', last_name.value)
        // localStorage.setItem('position', position.value)
        // localStorage.setItem('company', company.value)
        // localStorage.setItem('business', business.value)
        // localStorage.setItem('seniority', seniority.value)
        // localStorage.setItem('adress', street.value)
        // localStorage.setItem('additional', additional.value)
        // localStorage.setItem('estado', estado.value)
        // localStorage.setItem('zip', zip.value)
        // localStorage.setItem('cpf', cpf.value)
        // localStorage.setItem('ddd', code.value)
        // localStorage.setItem('phone', phone.value) 
    }
}