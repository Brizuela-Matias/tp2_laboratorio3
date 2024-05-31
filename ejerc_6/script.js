function validacion() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;

    let edad = document.getElementById('edad').value;
    edad = parseFloat(edad)

    let altura = document.getElementById('altura').value;
    altura = parseFloat(altura)

    let correo = document.getElementById('correo').value;

    let mensaje = "vacio"

    if (nombre === "" || apellido === "") {
        mensaje = "Nombre o apellido vacíos";
    } 
    else if (isNaN(edad) || edad < 0 || edad < 18) {
        mensaje = "Edad negativa, menor de edad o no válida";
    }
    else if (isNaN(altura) || altura < 0 || altura > 230) {
        mensaje = "Altura negativa, mayor a 230 cm o no válida";
    }
    else if (correo === "" || correo.indexOf('@') === -1) {
        mensaje = "Correo vacío o sin @";
    } else {
        mensaje = "Validaciones completadas correctamente";
    }

    mensajeElement.innerHTML = mensaje;

    return mensaje === "Validaciones completadas correctamente";
}


document.getElementById('form').addEventListener('submit', validacion);

