function verMas(numero,parrafo){
    
    localStorage.setItem("Titulo",document.querySelector('.blog-article:nth-child('+numero+') h1').innerHTML);
    localStorage.setItem("Parrafo",document.querySelector('.blog-article:nth-child('+numero+') p').innerHTML);    
    localStorage.setItem("Parrafo2",parrafo);
    window.location.href = "blogArticle.html"
    console.log(localStorage)
}