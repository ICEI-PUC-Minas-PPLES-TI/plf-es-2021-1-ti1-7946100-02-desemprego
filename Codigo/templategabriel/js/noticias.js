onload = () => {
    executaPesquisaNoticias()
    executaPesquisaCursos()
}



const API_KEY = 'b5d2164cdc0045ce8ca77e40d68a5555'

function exibeNoticias (){
    let divNoticias = document.getElementById('card_noticias')
    let Texto = ``

    let dados = JSON.parse(this.responseText)
    for (let i = 0; i < 5; i++){
        let noticia = dados.articles[i]
        let data = new Date (noticia.publishedAt)
        let autor = ''
        if (noticia.author == null){
            autor = ''
        }else{
            autor = `Autor/a: ${noticia.author}`
        }
        Texto += `
        <div class="row">
            <div class="card noticia">
                <div class="container informativo">
                    <div class="row">
                        <div class="col-4 div_img">
                            <img class="img_noticia" src="${noticia.urlToImage}" alt="Noticia">
                        </div>
                        <div class="col-8">
                                <div class="row title">
                                    <strong>${noticia.title}</strong>
                                </div>
                                <div class="row info">
                                    <p>${autor} | Data: ${data.toLocaleDateString()}</p>
                                </div>
                                <div class="row materia">
                                    ${noticia.content}
                                </div>
                                <div class="row link">
                                    <a class="noticias" href="${noticia.url}">Leia mais...</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    title = `
    <div class="row titulo_noticia">
        <h1>Notícias</h1>
    </div>
    `
    divNoticias.innerHTML = title + Texto
}

function executaPesquisaNoticias(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://newsapi.org/v2/everything?q=emprego&language=pt&apiKey=${API_KEY}`)
    xhr.onload = exibeNoticias
    xhr.send()
}

function exibeCursos(){
    let divCursos = document.getElementById('cursos')
    let Texto = ``

    let dados = JSON.parse(this.responseText)
    for (let i = 0; i <4; i++){
        let curso = dados.articles[i]
        Texto += `
        <div class="card cursos">
            <h6>${curso.title}</h6>
            <a class="cursos" href="${curso.url}">Leia mais...</a>
        </div>
        `
    }
    divCursos.innerHTML = Texto
}

function executaPesquisaCursos(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://newsapi.org/v2/everything?q=cursos-mercado&language=pt&apiKey=${API_KEY}`)
    xhr.onload = exibeCursos
    xhr.send() 
}
