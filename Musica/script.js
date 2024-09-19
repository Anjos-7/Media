function calcularMedia() {
    // Obtém os valores dos inputs e os converte para números
    var nota1 = parseFloat(document.getElementById("text1").value);
    var nota2 = parseFloat(document.getElementById("text2").value);

    // Verifica se os valores são números válidos
    if (isNaN(nota1) || isNaN(nota2)) {
        document.getElementById("res").innerHTML = 'Por favor, insira valores válidos.';
    } else {
        // Calcula a média
        var res = (nota1 + nota2) / 2;
        
        // Exibe o resultado no elemento com ID 'res'
        document.getElementById("res").innerHTML = 'A média é: ' + res;

        // Verifica se a média é maior ou igual a 6 para determinar se passou
        if (res >= 6) {
            document.getElementById("res").innerHTML += '<br>Você passou!';
                
       
        } else {
            document.getElementById("res").innerHTML += '<br>Você não passou.';
        }
    }
}