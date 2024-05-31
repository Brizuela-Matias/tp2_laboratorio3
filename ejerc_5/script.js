// Formula ejerc 5
// let ladoA = ladoA.value - ladoC.value

// let area =

function calc_area() {
    let lado_a = document.getElementById('lado_a').value;
    let lado_b = document.getElementById('lado_b').value;
    let lado_c = document.getElementById('lado_c').value;

    lado_a = lado_a - lado_c;

    let area_rectangulo = lado_a * lado_c;

    let area_triangulo = (lado_a * lado_b) / 2;

    let area_final = area_rectangulo + area_triangulo;

    document.getElementById('area_final').textContent = 'Área del rectángulo: ' + area_final;

    
    

}