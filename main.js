
let key = '76edfe5dc5e044059e6a801bc223f931';
let  pais = 'us';
let categoria = ''; 
let url = `https://newsapi.org/v2/top-headlines?country=${pais}&apiKey=${key}`;
let mostrar_noticias = document.getElementById('contenido');

fetch(url).then((resp) => resp.json()).then(data => {
    let noticiaUno = (data.articles);
    console.log(noticiaUno);
    noticiaUno.map(function(numero){
        let div = document.createElement("div");
        div.className = "news";
        div.innerHTML = `<br>
                        <a href = ${numero.url} target='blank'>
                        <img class= 'imagen' src=${numero.urlToImage}><br>
                        <h1>${numero.title}</h1>
                        <h2>${numero.description}</h2>
                        <h4>${numero.url}</h4>
                        <h6>${numero.publishedAt}</h6></a>`;
                        mostrar_noticias.appendChild(div);
    })
});

// esta funciones abren y cierran el menu

function abrirMenu(){
    document.getElementById("leftMenu").style.width = "150px"   
}

function cerrarMenu(){
    document.getElementById("leftMenu").style.width = "0"
}





