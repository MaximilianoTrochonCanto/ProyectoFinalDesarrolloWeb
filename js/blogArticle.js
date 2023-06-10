document.getElementById('tituloArticulo').textContent = localStorage.getItem("Titulo");
document.title = localStorage.getItem("Titulo");
document.getElementById('parrafoArticulo').textContent = localStorage.getItem("Parrafo");
document.getElementById('parrafoArticulo2').textContent = localStorage.getItem("Parrafo2");
document.querySelector('meta[name="description"]').setAttribute("content", localStorage.getItem("Parrafo") + localStorage.getItem("Parrafo2"));