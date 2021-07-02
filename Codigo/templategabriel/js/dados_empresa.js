function leDados(){
    let strDados = localStorage.getItem('dbEmpresa')
    let objDados = {}

    if (strDados){
        objDados = JSON.parse(strDados)
    }
    else{
        objDados = {Empresas:[
            {
                id: 0,
                first_name: "Primeiro Nome",
                last_name: "Ultimo Nome",
                setor: "Setor",
                position: "Cargo",
                email: "empresa@pucminas.br",
                fantasia: "Nome fantasia",
                company: "Razão social",
                empregados: "Número de funcinários",
                street: "Endereço",
                additional: "Número",
                estado: "UF",
                zip: "Cep",
                phone: "Telefone"
            }
        ]}
    }
    return objDados
}
function salvaDados(dados){
    localStorage.setItem('dbEmpresa', JSON.stringify(dados))
}
function incluirEmpresa(){
    let objDados = leDados();
    let dadosSession = sessionStorage.getItem('usuario-login')
    let idSession = dadosSession.id
    let index = -1

    for (i = 0; i < objDados.Empresas.lenght; i++){
        if (objDados.Empresas[i].id == idSession){
            index = i
        } 
    }
    if (index != -1){
        objDados.Empresas[index].first_name = document.getElementById('first_name').value
        objDados.Empresas[index].last_name = document.getElementById('last_name').value
        objDados.Empresas[index].setor = document.getElementById('setor').value
        objDados.Empresas[index].position = document.getElementById('position').value
        objDados.Empresas[index].email = document.getElementById('your_email').value
        objDados.Empresas[index].fantasia = document.getElementById('fantasia').value
        objDados.Empresas[index].company = document.getElementById('company').value
        objDados.Empresas[index].empregados = document.getElementById('empregados').value
        objDados.Empresas[index].street = document.getElementById('street').value
        objDados.Empresas[index].additional = document.getElementById('additional').value
        objDados.Empresas[index].zip = document.getElementById('zip').value
        objDados.Empresas[index].estado = document.getElementById('estado').value
        objDados.Empresas[index].phone = document.getElementById('phone').value

        // Atualizando localStorage
        localStorage.setItem('dbEmpresa', JSON.stringify(objDados))

        // Atualizando os dados na tela
        imprimeDados()

    }else{
        // Incluir novo contato
        let novoId = objDados.Empresas[objDados.Empresas.length - 1].id + 1
        let novofirst_name = document.getElementById('first_name').value
        let novolast_name = document.getElementById('last_name').value
        let novoemail = document.getElementById('your_email').value
        let novoSetor = document.getElementById('setor').value
        let novoposition = document.getElementById('position').value
        let novofantasia = document.getElementById('fantasia').value
        let novocompany = document.getElementById('company').value
        let novoempregados = document.getElementById('empregados').value
        let novostreet = document.getElementById('street').value
        let novoadditional = document.getElementById('additional').value
        let novoestado = document.getElementById('estado').value
        let novozip = document.getElementById('zip').value
        let novophone = document.getElementById('phone').value

        let novaEmpresa = {
            id: novoId,
            first_name: novofirst_name,
            last_name: novolast_name,
            setor: novoSetor,
            position: novoposition,
            email: novoemail,
            fantasia: novofantasia,
            company: novocompany,
            empregados: novoempregados,
            street: novostreet,
            additional: novoadditional,
            estado: novoestado,
            zip: novozip,
            phone: novophone
        }
        objDados.Empresas.push(novaEmpresa)
        
        salvaDados(objDados)

        imprimeDados()
    }
}

function imprimeDados(){
    let objDados = leDados();
    let tela = document.getElementById('tela_informacoes');
    let objUltimo = objDados.Empresas[objDados.Empresas.length - 1];
    let strTexto = `
                                <div class="row" id="dados">
                                    <strong>Dados salvos:</strong>
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-4">
                                            <p><strong>Responsável: ${objUltimo.first_name} ${objUltimo.last_name}</strong></p>
                                        </div>
                                        <div class="col-sm-12 col-md-4">
                                            <p><strong>Setor: ${objUltimo.setor}</strong></p>
                                        </div>
                                        <div class="col-sm-12 col-md-4">
                                            <p><strong>Cargo: ${objUltimo.position}</strong></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6">
                                            <p><strong>Razão social: ${objUltimo.company}</strong></p>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <p><strong>Nome fantasia: ${objUltimo.fantasia}</strong></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6">
                                            <p><strong>Email: ${objUltimo.email}</strong></p>
                                        </div>
                                        <div class="col-sm-12 col-md-6">
                                            <p><strong>Número de funcionarios: ${objUltimo.empregados}</strong></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-8 col-md-8">
                                            <p><strong>Endereco: ${objUltimo.street}, ${objUltimo.additional}</strong></p>
                                        </div>
                                        <div class="col-sm-4 col-md-4">
                                            <p><strong>UF: ${objUltimo.estado}</strong></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <p><strong>Telefone: ${objUltimo.phone}</strong></p>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <p><strong>CEP: ${objUltimo.zip}</strong></p>
                                        </div>
                                    </div>
                                </div>
    `
    tela.innerHTML = strTexto
}

document.getElementById('btnCadastrar').addEventListener('click', incluirEmpresa)

