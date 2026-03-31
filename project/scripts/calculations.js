const calcType = document.getElementById("calc-type");
const unitSelect = document.getElementById("unit");
const inputFields = document.getElementById("input-fields");
const calcButton = document.getElementById("calculate-btn");
const resultBox = document.getElementById("result");

// Atualiza inputs conforme cálculo selecionado
calcType.addEventListener("change", () => {
    const type = calcType.value;
    inputFields.innerHTML = ""; // limpa

    switch (type) {
        case "area":
            inputFields.innerHTML = `
                <label>Largura:</label>
                <input type="number" id="width">

                <label>Comprimento:</label>
                <input type="number" id="height">
            `;
            break;

        case "perimeter":
            inputFields.innerHTML = `
                <label>Lado A:</label>
                <input type="number" id="side1">

                <label>Lado B:</label>
                <input type="number" id="side2">
            `;
            break;

        case "volume":
            inputFields.innerHTML = `
                <label>Largura:</label>
                <input type="number" id="width">

                <label>Comprimento:</label>
                <input type="number" id="height">

                <label>Altura:</label>
                <input type="number" id="depth">
            `;
            break;

        case "circle":
            inputFields.innerHTML = `
                <label>Raio:</label>
                <input type="number" id="radius">
            `;
            break;

        case "square":
            inputFields.innerHTML = `
                <label>Lado:</label>
                <input type="number" id="side">
            `;
            break;

        case "triangle":
            inputFields.innerHTML = `
                <label>Base:</label>
                <input type="number" id="base">

                <label>Altura:</label>
                <input type="number" id="height">
            `;
            break;

        case "rectangle":
            inputFields.innerHTML = `
                <label>Base:</label>
                <input type="number" id="base">

                <label>Altura:</label>
                <input type="number" id="height">
            `;
            break;
    }
});

// Cálculo final
calcButton.addEventListener("click", () => {
    const type = calcType.value;
    const unit = unitSelect.value;
    let result = "";

    if (!type) {
        resultBox.textContent = "Selecione um tipo de cálculo.";
        return;
    }

    const uArea = unit === "m" ? "m²" : "cm²";
    const uLength = unit === "m" ? "m" : "cm";
    const uVolume = unit === "m" ? "m³" : "cm³";

    switch (type) {
        case "area":
            const w = Number(document.getElementById("width").value);
            const h = Number(document.getElementById("height").value);
            result = w * h;
            resultBox.textContent = `Área: ${result} ${uArea}`;
            break;

        case "perimeter":
            const a = Number(document.getElementById("side1").value);
            const b = Number(document.getElementById("side2").value);
            result = 2 * (a + b);
            resultBox.textContent = `Perímetro: ${result} ${uLength}`;
            break;

        case "volume":
            const vw = Number(document.getElementById("width").value);
            const vh = Number(document.getElementById("height").value);
            const vd = Number(document.getElementById("depth").value);
            result = vw * vh * vd;
            resultBox.textContent = `Volume: ${result} ${uVolume}`;
            break;

        case "circle":
            const r = Number(document.getElementById("radius").value);
            const areaCircle = (Math.PI * r * r).toFixed(2);
            const circ = (2 * Math.PI * r).toFixed(2);
            resultBox.textContent = `Área: ${areaCircle} ${uArea} | Circunferência: ${circ} ${uLength}`;
            break;

        case "square":
            const s = Number(document.getElementById("side").value);
            resultBox.textContent =
                `Área: ${s * s} ${uArea} | Perímetro: ${4 * s} ${uLength}`;
            break;

        case "triangle":
            const baseT = Number(document.getElementById("base").value);
            const heightT = Number(document.getElementById("height").value);
            result = (baseT * heightT) / 2;
            resultBox.textContent = `Área: ${result} ${uArea}`;
            break;

        case "rectangle":
            const baseR = Number(document.getElementById("base").value);
            const heightR = Number(document.getElementById("height").value);
            const areaR = baseR * heightR;
            const periR = 2 * (baseR + heightR);
            resultBox.textContent =
                `Área: ${areaR} ${uArea} | Perímetro: ${periR} ${uLength}`;
            break;
    }
});