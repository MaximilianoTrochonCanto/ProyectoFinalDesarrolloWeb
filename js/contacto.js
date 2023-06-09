function enviarEmail(){
    console.log("Hola")
    const serviceID = "service_xw5s7ne";
    const templateID = "template_f7n8ud8";
    
    console.log("Envia msj");
    var params = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        diaYhora: document.getElementById("diaYhora").value,
        comentarios: document.getElementById("comentarios").value
    }

    console.log(params)

    if(params.nombre != "" && params.email != "" && params.telefono != "" && params.diaYhora != ""){
    emailjs.send(serviceID,templateID,params)
     .then(
         
         alert("mensaje enviado")
         )
         .catch((error) => alert(error));
        }else{
            alert("Lo sentimos, hace falta completar los datos")
        }
}


