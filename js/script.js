function converterMoeda() {
    var valorEntrada = parseFloat(document.getElementById('pequena').value);
    var moedaDe = document.getElementById('s1').value;
    var moedaPara = document.getElementById('s2').value;
    var taxaCambioUSD_BRL = 4.92;
    var resultado;

    if (moedaDe === "Estados Unidos, Dollar (USD)" && moedaPara === "Brasil, Real (BRL)") {
        resultado = valorEntrada * taxaCambioUSD_BRL;
    } else if (moedaDe === "Brasil, Real (BRL)" && moedaPara === "Estados Unidos, Dollar (USD)") {
        resultado = valorEntrada / taxaCambioUSD_BRL;
    }

    document.getElementById('conversoJanela').innerHTML = `<strong>${valorEntrada} ${moedaDe} = ${resultado.toFixed(2)} ${moedaPara}</strong>`;
}
