function enviarEmail(e){
    const serviceID = "service_xw5s7ne";
    const templateID = "template_f7n8ud8";
    var params = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        diaYhora: document.getElementById("diaYhora").value,
        comentarios: document.getElementById("comentarios").value
    }
    

    if(params.nombre != "" && params.email != "" && params.telefono != ""){
    emailjs.send(serviceID,templateID,params)
     .then(
        console.log(params.telefono),
         alert("El mensaje enviado. En seguida nos contactaremos contigo!"),
         document.querySelector('#form').reset()
         )
         .catch((error) => alert(error));
        }else{    
            if(params.nombre == "")       
            alert("Lo sentimos, debe ingresar su nombre completo.")
            else 
            if(params.telefono == "")
            alert("Lo sentimos, debe ingresar su teléfono celular.")
            else
            if(params.email == "")          
            alert("Lo sentimos, debe ingresar su e-mail.");
            
            
        }
    e.preventDefault();
}

