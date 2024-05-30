
function calcular_imc() {

    // Obtiene el valor del input
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    // Convierte a número con decimales
    let alturaDecimal = parseFloat(altura);
    let pesoDecimal = parseFloat(peso)

    if (isNaN(pesoDecimal) && isNaN(alturaDecimal)) {
        alert("Ambos valores no son válidos")
        return;
    }
    else if (isNaN(pesoDecimal) || pesoDecimal <= 0 ) {
        alert("Peso no tiene un valor válido")
        return;
    }
    else if (isNaN(alturaDecimal) || alturaDecimal <= 0 ) {
        alert("Altura no tiene un valor válido")
        return;
    }
    

    const imc = peso / (alturaDecimal * alturaDecimal);

    alert("El imc es: " + imc);
    
    
}

//2da opción (flecha)
// const form = $("form_imc");
// const altura = $("altura");
// const peso = $("peso");

// form.onsubmit = (e) => {
//     e.preventDefault();
    
//     const imc = peso.value / (altura.value) * (altura.value);

//     if (peso.value == "") {
//         alert("Peso está vacio")
//     } 
    
//     else if (peso.value <= 0) {
//         alert("Peso es negativo o cero")
//     }

//     alert(imc); 
// }

// function $(elemento) {
//     return document.getElementById(elemento);
// }
    
    
