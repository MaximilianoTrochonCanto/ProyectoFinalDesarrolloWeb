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
    

    if(params.nombre != "" && params.email != "" && params.telefono != "" && validarMail(params.email) && validarCelular(params.telefono)){
    emailjs.send(serviceID,templateID,params)
     .then(
        console.log(params.telefono),
         alert(`Gracias ${params.nombre} por contactarnos. El mensaje fue enviado. En seguida nos contactaremos contigo!`),
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
            else
            if(!validarMail(params.email))
            alert("Lo sentimos. El Email no es válido.")
            else
            if(!validarCelular(params.telefono))
            alert("Lo sentimos. El celular no es válido.")
            
        }
    e.preventDefault();
}

function validarMail(email){
    var chars = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   return email.match(chars)
}

function validarCelular(cel){
    return cel.match(/^09\d{7}$/) || cel.match(/^2\d{7}$/) || cel.match(/^4\d{7}$/)
}
