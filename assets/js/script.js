document.addEventListener("DOMContentLoaded", function () {
    const ejerciciosSelect = document.getElementById("ejercicios");
    const ejecutarButton = document.getElementById("ejecutar");
    const resultadoDiv = document.getElementById("resultado");

    ejecutarButton.addEventListener("click", () => {
        const ejercicioSeleccionado = parseInt(ejerciciosSelect.value);

        switch (ejercicioSeleccionado) {
            case 0:
                resultadoDiv.innerHTML = "Seleccione un ejercicio.";
                break;
            case 1:
                // Contador de Números Pares e Impares
                const numero = parseInt(prompt("Ingrese un número:"));
                let pares = 0;
                let impares = 0;
                for (let i = 1; i <= numero; i++) {
                    if (i % 2 === 0) {
                        pares++;
                    } else {
                        impares++;
                    }
                }
                resultadoDiv.innerHTML = `Números pares: ${pares}<br>Números impares: ${impares}`;
                break;
            case 2:
                // Calculadora de Factorial
                const numFactorial = parseInt(prompt("Ingrese un número para calcular su factorial:"));
                let factorial = 1;
                for (let i = 1; i <= numFactorial; i++) {
                    factorial *= i;
                }
                resultadoDiv.innerHTML = `El factorial de ${numFactorial} es: ${factorial}`;
                break;
            case 3:
                // Validación de Contraseña
                const contraseña = prompt("Ingrese una contraseña:");
                if (contraseña === "secreto123") {
                    resultadoDiv.innerHTML = "Acceso concedido.";
                } else {
                    resultadoDiv.innerHTML = "Acceso denegado.";
                }
                break;
            case 4:
                // Generador de Tablas de Multiplicar
                const numeroMultiplicar = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));
                let tablaMultiplicarHtml = "<table>";
                for (let i = 1; i <= 10; i++) {
                    const resultadoMultiplicacion = numeroMultiplicar * i;
                    tablaMultiplicarHtml += `<tr><td>${numeroMultiplicar} x ${i}</td><td>=</td><td>${resultadoMultiplicacion}</td></tr>`;
                }
                tablaMultiplicarHtml += "</table>";
                resultadoDiv.innerHTML = tablaMultiplicarHtml;
                break;
            case 5:
                // Suma de Números Primos
                const numPrimos = parseInt(prompt("Ingrese la cantidad de números primos a sumar:"));
                let sumaPrimosResultado = 0;
                let contadorPrimos = 0;
                let numeroPrimo = 2;

                while (contadorPrimos < numPrimos) {
                    if (esPrimo(numeroPrimo)) {
                        sumaPrimosResultado += numeroPrimo;
                        contadorPrimos++;
                    }
                    numeroPrimo++;
                }

                resultadoDiv.innerHTML = `La suma de los primeros ${numPrimos} números primos es: ${sumaPrimosResultado}`;
                break;
            case 6:
                // Secuencia de Fibonacci
                const limiteFibonacci = parseInt(prompt("Ingrese el término de la secuencia de Fibonacci deseado:"));
                let secuenciaFibonacciResultado = "";
                let a = 0, b = 1;

                for (let i = 0; i < limiteFibonacci; i++) {
                    secuenciaFibonacciResultado += a + ", ";
                    const temp = a + b;
                    a = b;
                    b = temp;
                }

                resultadoDiv.innerHTML = secuenciaFibonacciResultado.slice(0, -2); // Elimina la última coma y espacio
                break;
            case 7:
                // Convertidor de Temperatura
                const tempConvertir = parseFloat(prompt("Ingrese la temperatura a convertir:"));
                const unidadConvertir = prompt("Seleccione la unidad de temperatura (C para Celsius, F para Fahrenheit):");
                let resultadoConvertir = 0;

                if (unidadConvertir === "C" || unidadConvertir === "c") {
                    resultadoConvertir = (tempConvertir - 32) * 5/9;
                    resultadoDiv.innerHTML = `${tempConvertir}°F es igual a ${resultadoConvertir.toFixed(2)}°C`;
                } else if (unidadConvertir === "F" || unidadConvertir === "f") {
                    resultadoConvertir = (tempConvertir * 9/5) + 32;
                    resultadoDiv.innerHTML = `${tempConvertir}°C es igual a ${resultadoConvertir.toFixed(2)}°F`;
                } else {
                    resultadoDiv.innerHTML = "Unidad de temperatura no válida. Use 'C' o 'F'.";
                }
                break;
            case 8:
                // Calculadora de Potencia
                const basePotencia = parseFloat(prompt("Ingrese la base:"));
                const exponentePotencia = parseInt(prompt("Ingrese el exponente:"));
                const resultadoPotencia = Math.pow(basePotencia, exponentePotencia);
                resultadoDiv.innerHTML = `El resultado de ${basePotencia} elevado a la ${exponentePotencia} es: ${resultadoPotencia}`;
                break;
            default:
                resultadoDiv.innerHTML = "Ejercicio no válido.";
                break;
        }
    });

    function esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }

        return true;
    }
});