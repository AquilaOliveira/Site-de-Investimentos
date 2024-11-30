// script.js

document.getElementById("simulador").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtendo os valores inseridos pelo usuário
    const valorInvestido = parseFloat(document.getElementById("valorInvestido").value);
    const periodo = parseFloat(document.getElementById("periodo").value);
    const taxaJuros = parseFloat(document.getElementById("juros").value) / 100;
    const tipoJuros = document.getElementById("tipoJuros").value;

    let valorFinal = 0;
    let rendimento = 0;

    // Cálculo de juros simples ou compostos
    if (tipoJuros === "simples") {
        // Juros Simples
        rendimento = valorInvestido * taxaJuros * periodo;
        valorFinal = valorInvestido + rendimento;
    } else {
        // Juros Compostos
        valorFinal = valorInvestido * Math.pow((1 + taxaJuros), periodo);
        rendimento = valorFinal - valorInvestido;
    }

    // Atualizando o resultado na tela
    document.getElementById("valorFinal").textContent = `Valor Final: R$ ${valorFinal.toFixed(2)}`;
    document.getElementById("rendimento").textContent = `Rendimento Total: R$ ${rendimento.toFixed(2)}`;
});
