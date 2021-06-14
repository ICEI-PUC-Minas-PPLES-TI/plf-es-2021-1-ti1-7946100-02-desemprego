function leDados(){
    let strDados = localStorage.getItem('db');
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
    localStorage.setItem('db', JSON.stringify(dados));
}
function incluirContato(){
    //Ler os dados do localStorage
    let objDados = leDados();
    //Incluir um novo contato
    let novoId = db.usuarios[db.usuarios.length - 1].id + 1;
    let email = document.getElementById('your_email').value
    let area = document.getElementById('area').value
    let first_name = document.getElementById('first_name').value
    let last_name = document.getElementById('last_name').value
    let position = document.getElementById('position').value
    let company = document.getElementById('company').value
    let business = document.getElementById('business').value
    let seniority = document.getElementById('seniority').value
    let street = document.getElementById('street').value
    let additional = document.getElementById('additional').value
    let estado = document.getElementById('estado').value
    let zip = document.getElementById('zip').value
    let cpf = document.getElementById('cpf').value
    let code = document.getElementById('code').value
    let phone = document.getElementById('phone').value
    //Salvar os dados no localStorage novamente
}

function imprimeDados(){
    let 
}

//Configura os botoes

document.getElementById('btnCadastrar').addEventListener('click', atualizarDados)

onload = () => {
    your_email.value = localStorage.getItem('email');
    area.value = localStorage.getItem('area');
    first_name.value = localStorage.getItem('first_name');
    last_name.value = localStorage.getItem('last_name')
    position.value = localStorage.getItem('position')
    company.value = localStorage.getItem('company')
    business.value = localStorage.getItem('business')
    seniority.value = localStorage.getItem('seniority')
    street.value = localStorage.getItem('adress')
    additional.value = localStorage.getItem('additional')
    estado.value = localStorage.getItem('estado')
    zip.value = localStorage.getItem('zip')
    cpf.value = localStorage.getItem('cpf')
    code.value = localStorage.getItem('ddd')
    phone.value = localStorage.getItem('phone')

    myform.onsubmit = (evento) =>{
        evento.preventDefault();
        localStorage.setItem('email', your_email.value)
        localStorage.setItem('area', area.value)
        localStorage.setItem('first_name', first_name.value)
        localStorage.setItem('last_name', last_name.value)
        localStorage.setItem('position', position.value)
        localStorage.setItem('company', company.value)
        localStorage.setItem('business', business.value)
        localStorage.setItem('seniority', seniority.value)
        localStorage.setItem('adress', street.value)
        localStorage.setItem('additional', additional.value)
        localStorage.setItem('estado', estado.value)
        localStorage.setItem('zip', zip.value)
        localStorage.setItem('cpf', cpf.value)
        localStorage.setItem('ddd', code.value)
        localStorage.setItem('phone', phone.value) 
    }
}