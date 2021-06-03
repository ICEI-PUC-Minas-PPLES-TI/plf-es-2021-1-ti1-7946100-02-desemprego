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