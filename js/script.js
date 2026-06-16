
        function calcularSuma() {
            // Obtener los valores de los inputs usando su ID
            const num1 = parseFloat(document.getElementById('numero1').value);
            const num2 = parseFloat(document.getElementById('numero2').value);
            
            // Validar que se hayan ingresado números válidos
            if (isNaN(num1) || !isNaN(num2) === false) {
                document.getElementById('resultado').innerText = "Por favor, ingresa ambos números.";
                return;
            }

            // Realizar la suma
            const suma = num1 + num2;

            // Mostrar el resultado en el div correspondiente
            document.getElementById('resultado').innerText = "Resultado: " + suma;
        }