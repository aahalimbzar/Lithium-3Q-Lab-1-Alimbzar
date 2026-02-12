function calculateResult() {
    let Radius = parseFloat(document.getElementById("Radius").value);
    let Mass = parseFloat(document.getElementById("Mass").value);

    const G = 6.6743e-11;


    let T = Math.sqrt((4 * Math.PI ** 2 * Radius ** 3) / (G * Mass));

    document.getElementById("result").innerText =
        `The orbital period is ${T} seconds`;
}
