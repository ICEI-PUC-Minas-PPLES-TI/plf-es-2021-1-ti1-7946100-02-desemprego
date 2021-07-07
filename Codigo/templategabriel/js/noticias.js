// onload = () => {
//     executaPesquisaNoticias()
//     // executaPesquisaCursos()
// }

const API_KEY = '40cc1e78470844b7af4e4a5183069da0'

function exibeNoticiasPagina(){
    let divNoticias = document.getElementById('card_noticias')
    let Texto = ``

    let dados = JSON.parse(this.responseText)
    for (let i = 0; i < 5; i++){
        let noticia = dados.articles[i]
        let data = new Date (noticia.publishedAt)
        let autor = ''
        if (noticia.author == 'null'){
            autor = ''
        }else{
            autor = `Autor/a: ${noticia.author}`
        }
        Texto += `
        <div class="row">
            <div class="card noticia">
                <div class="container informativo">
                    <div class="row">
                        <div class="col-sm-12 col-md-5 div_img">
                            <img class="img_noticia" src="${noticia.urlToImage}" alt="Noticia">
                        </div>
                        <div class="col-sm-12 col-md-7">
                                <div class="row title">
                                    <strong>${noticia.title}</strong>
                                </div>
                                <div class="row info">
                                    <p>Data: ${data.toLocaleDateString()}</p>
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

function executaPesquisaPaginaNoticias(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://newsapi.org/v2/everything?q=emprego&language=pt&apiKey=${API_KEY}`)
    xhr.onload = exibeNoticiasPagina
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

function exibeNoticiasCardNoticias(){
    let divCardNoticias = document.getElementById('noticias_card')
    let Text = ``

    let dados = JSON.parse(this.responseText)
    for (let i = 0; i<4; i++){
        let noticia = dados.articles[i]
        Text += `
        <div class="card noticia">
            <h6>${noticia.title}</h6>
            <a class="noticia" href="${noticia.url}">Leia mais...</a>
        </div>
        `
    }
    divCardNoticias.innerHTML = Text
}

function executaPesquisaCardNoticias(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://newsapi.org/v2/everything?q=emprego&language=pt&apiKey=${API_KEY}`)
    xhr.onload = exibeNoticiasCardNoticias
    xhr.send()
}

function exibeCursosPagina(){
    let divCursos = document.getElementById('card_cursos')
    let Text = ``

    let dados = JSON.parse(this.responseText)
    for (let i =0; i < 5; i++){
        let curso = dados.articles[i]
        let data = new Date(curso.publishedAt)
        Text += `
        <div class="row">
            <div class="card noticia">
                <div class="container informativo">
                    <div class="row">
                        <div id="img_curso" class="col-sm-12 col-lg-5">
                            <img src="${curso.urlToImage}" alt="Imagem noticia">
                        </div>
                        <div class="col-sm-12 col-lg-7">
                                <div class="row title">
                                    <strong>${curso.title}</strong>
                                </div>
                                <div class="row info">
                                    <p>Data: ${data.toLocaleDateString()}</p>
                                </div>
                                <div class="row materia">
                                    ${curso.content}
                                </div>
                                <div class="row link">
                                    <a class="noticias" href="${curso.url}">Leia mais...</a>
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
        <h1>Cursos</h1>
    </div>
    `
    divCursos.innerHTML = title + Text
}
function executaPesquisaCardCursos(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://newsapi.org/v2/everything?q=cursos-mercado&language=pt&apiKey=${API_KEY}`)
    xhr.onload = exibeCursosPagina
    xhr.send()
}

