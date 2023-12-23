const valorUma = 30595 //Unidad de Medida Arancelaria
let montoCapital = 0
let porcentaje = 0

// función principal
function calcularHonorarios() {
    while (true) {
        montoCapital = parseFloat(prompt("📱Ingresa el capital de condena: "))
        if (montoCapital <= 0 || isNaN(montoCapital) === true) {
            console.warn("❌Ingresa un monto de capital valido y que sea mayor a $ 0");
            continue;
        } else {
            break;
        }
    }
    let hayHonorarios = true
    let hayUmas = false

    while (montoCapital > 0 && hayHonorarios === true) {

        let honorario = prompt("¿Que honorario queres calcular? 🤔")
        if (honorario === "" || honorario === null) {
            console.warn("⚠️Por favor, ingresa un interviniente valido para calcular sus honorarios")
            continue;
        }
        switch (honorario) {

            case "actora":
                hayUmas = confirm("¿Esta regulado en UMAS? 🤔")
                if (hayUmas === true) {
                    let cantidadUma = parseFloat(prompt("¿Cuantos UMAS fueron regulados? 🤔"))
                    console.log("✅Los honorarios del letrado de la parte actora son ", cantidadUma, "UMAs, equivalente a $ ", calcularHonorariosUma(cantidadUma))
                } else {
                    while (true) {
                        porcentaje = parseFloat(prompt("¿Que porcentaje fue regulado? 🤔"))
                        if (porcentaje <= 0 || isNaN(porcentaje) === true) {
                            console.warn("⚠️Por favor, ingresa un valor de porcentaje válido")
                            continue;
                        } else {
                            break;
                        }
                    }
                console.log("✅Los honorarios del letrado de la parte actora son $ ", calcularHonorariosPorcentaje(porcentaje))
                }
                break;
            case "demandada":
                hayUmas = confirm("¿Esta regulado en UMAS? 🤔")
                if (hayUmas === true) {
                    let cantidadUma = parseFloat(prompt("¿Cuantos UMAS fueron regulados? 🤔"))
                    console.log("✅Los honorarios del letrado de la parte demandada son ", cantidadUma, "UMAs, equivalente a $ ", calcularHonorariosUma(cantidadUma))
                } else {
                    while (true) {
                        porcentaje = parseFloat(prompt("¿Que porcentaje fue regulado? 🤔"))
                        if (porcentaje <= 0 || isNaN(porcentaje) === true) {
                            console.warn("⚠️Por favor, ingresa un valor de porcentaje válido")
                            continue;
                        } else {
                            break;
                        }
                    }
                    console.log("✅Los honorarios del letrado de la parte demandada son $ ", calcularHonorariosPorcentaje(porcentaje))
                }
                break;
            case "perito":
                hayUmas = confirm("¿Esta regulado en UMAS? 🤔")
                if (hayUmas === true) {
                    let cantidadUma = parseFloat(prompt("¿Cuantos UMAS fueron regulados? 🤔"))
                    console.log("✅Los honorarios del perito son ", cantidadUma, "UMAs, equivalente a $ ", calcularHonorariosUma(cantidadUma))
                } else {
                    while (true) {
                        porcentaje = parseFloat(prompt("¿Que porcentaje fue regulado? 🤔"))
                        if (porcentaje <= 0 || isNaN(porcentaje) === true) {
                            console.warn("⚠️Por favor, ingresa un valor de porcentaje válido")
                            continue;
                        } else {
                            break;
                        }
                    }
                    console.log("✅Los honorarios del letrado del perito son $ ", calcularHonorariosPorcentaje(porcentaje))
                }
                break;
            default: console.warn("⚠️Por favor, ingresa de manera correcta a quien queres regular honorarios");

        }
        hayHonorarios = confirm("¿Hay más honorarios que calcular? 🤔")
    }

    console.log("✅La calculadora ha finalizado");
}


function calcularHonorariosUma(cantidadUma) {
    let honorariosUma = cantidadUma * valorUma
    return honorariosUma.toFixed(2)
}

function calcularHonorariosPorcentaje(porcentaje) {

    let honorariosPorcentaje = montoCapital * porcentaje / 100
    return honorariosPorcentaje.toFixed(2)
}


