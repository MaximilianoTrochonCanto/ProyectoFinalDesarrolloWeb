function enviarEmail(){
    const serviceID = "service_xw5s7ne";
    const templateID = "template_f7n8ud8";
    var chars = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var params = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        diaYhora: document.getElementById("diaYhora").value,
        comentarios: document.getElementById("comentarios").value
    }
    
    // if(params.email.value.match(chars)){
    //     alert("SI")
    // }else{
    //     alert("NO")
    // }
    e.preventDefault();
    

    // if(params.nombre != "" && params.email != "" && params.telefono != "" && validarMail(params.email)){
    // emailjs.send(serviceID,templateID,params)
    //  .then(
    //     console.log(params.telefono),
    //      alert(`Gracias ${params.nombre} por contactarnos. El mensaje fue enviado. En seguida nos contactaremos contigo!`),
    //      document.querySelector('#form').reset()
    //      )
    //      .catch((error) => alert(error));
    //     }else{    
    //         if(params.nombre == "")       
    //         alert("Lo sentimos, debe ingresar su nombre completo.")
    //         else 
    //         if(params.telefono == "")
    //         alert("Lo sentimos, debe ingresar su teléfono celular.")
    //         else
    //         if(params.email == "")          
    //         alert("Lo sentimos, debe ingresar su e-mail.");
    //         else
    //         if(!validarMail(params.email))
    //         alert("Debe ingresar una dirección de correo válida.");
            
    //     }
    // e.preventDefault();
}
