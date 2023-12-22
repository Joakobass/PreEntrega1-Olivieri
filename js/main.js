const valorUma = 30595
let montoCapital = 0

// función principal
function calcularHonorarios() {
    montoCapital = parseFloat(prompt("Ingresa el capital de condena: "))

    let hayHonorarios = true
    let hayUmas = false

    while (montoCapital > 0 && montoCapital !== NaN && hayHonorarios === true) {

        let honorario = prompt("¿Que honorario queres calcular")

        switch (honorario) {

            case "actora":
                hayUmas = confirm("¿Esta regulado en UMAS?")
                if (hayUmas === true) {
                    let cantidadUma = parseFloat(prompt("¿Cuantos UMAS fueron regulados?"))
                    console.log("Los honorarios del letrado de la parte actora son $ ", calcularHonorariosUma(cantidadUma))
                } else {
                    let porcentaje = parseFloat(prompt("¿Que porcentaje fue regulado?"))
                    console.log("Los honorarios del letrado de la parte actora son $ ", calcularHonorariosPorcentaje(porcentaje))
                }
                break;
            case "demandada":
                hayUmas = confirm("¿Esta regulado en UMAS?")
                if (hayUmas === true) {
                    let cantidadUma = parseFloat(prompt("¿Cuantos UMAS fueron regulados?"))
                    console.log("Los honorarios del letrado de la parte demandada son $ ", calcularHonorariosUma(cantidadUma))
                } else {
                    let porcentaje = parseFloat(prompt("¿Que porcentaje fue regulado?"))
                    console.log("Los honorarios del letrado de la parte demandada son $ ", calcularHonorariosPorcentaje(porcentaje))
                }
                break;
            case "perito":
                hayUmas = confirm("¿Esta regulado en UMAS?")
                if (hayUmas === true) {
                    let cantidadUma = parseFloat(prompt("¿Cuantos UMAS fueron regulados?"))
                    console.log("Los honorarios del perito son $ ", calcularHonorariosUma(cantidadUma))
                } else {
                    let porcentaje = parseFloat(prompt("¿Que porcentaje fue regulado?"))
                    console.log("Los honorarios del perito son $ ", calcularHonorariosPorcentaje(porcentaje))
                }
                break;
            default: console.warn("⚠️Por favor, ingresa de manera correcta a quien queres regular honorarios");

        }
        hayHonorarios = confirm("¿Hay más honorarios que calcular?")

    }
    if (montoCapital <= 0 || montoCapital == NaN) {
        console.warn("❌Ingresa un monto de capital valido y que sea mayor a $ 0");
    } else {
        console.log("✅La calculadora ha finalizado");
    }
}

function calcularHonorariosUma(cantidadUma) {
    let honorariosUma = cantidadUma * valorUma
    return honorariosUma.toFixed(2)
}

function calcularHonorariosPorcentaje(porcentaje) {
    let honorariosPorcentaje = montoCapital * porcentaje / 100
    return honorariosPorcentaje.toFixed(2)
}
