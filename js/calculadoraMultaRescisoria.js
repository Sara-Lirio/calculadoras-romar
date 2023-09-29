

const inputInicio = document.querySelector('#inicio')
const inputTermino = document.querySelector('#termino')
const inputEntrega = document.querySelector('#entrega')
const inputAluguel = document.querySelector('#aluguel')
const inputRef = document.querySelector('#REF')
const inputCC = document.querySelector('#CC')
const selectTipoLocacao = document.querySelector('#tipoLocacao')
const inputImovel = document.querySelector('#imovel')

const resultados = document.querySelector('#resultados')

const button = document.querySelector('button')
const spanDias = document.querySelector('#difPeriodoDias')
const spanFalta = document.querySelector('#difPeriodoFalta')
const spanMeses = document.querySelector('#difPeriodoMeses')
const spanMultaInt = document.querySelector('#multaIntegral')
const spanMultaProp = document.querySelector('#multaProporcional')
const spanREF = document.querySelector('#idREF')
const spanCC = document.querySelector('#idCC')
const spanTipoLocacao = document.querySelector('#idTipoLocacao')
const spanImovel = document.querySelector('#idImovel')
const spanInicioContrato = document.querySelector('#idInicioDoContrato')
const spanTerminoContrato = document.querySelector('#idFimDoContrato')



function infoRef() {
    const valor = inputRef.value
    return valor
}

function infoCC() {
    const valor = inputCC.value
    return valor
}

function tipoLocacao() {
    const valor = selectTipoLocacao.value
    return valor
}

function infoImovel() {
    const valor = inputImovel.value
    return valor
}

function inicioContrato() {
    const valor = inputInicio.value
    return valor
}

function terminoContrato() {
    const valor = inputTermino.value
    return valor
}

function calculateDateDiff() {
    let inicio = inputInicio.value
    let termino = inputTermino.value

    inicio = new Date(inicio)
    termino = new Date(termino)

    let diffInTime = Math.round(termino - inicio)
    let timeInOneDay = 1000 * 60 * 60 * 24 * 30
    let diffInDays = diffInTime / timeInOneDay
    return diffInDays
}

function calculateDateDiff1() {
    let inicio = inputInicio.value
    let termino = inputTermino.value

    inicio = new Date(inicio)
    termino = new Date(termino)

    let diffInTime1 = Math.abs(termino - inicio)
    let timeInOneDay1 = 1000 * 60 * 60 * 24
    let diffInDays1 = diffInTime1 / timeInOneDay1
    return diffInDays1
}

function calculateDateDiff2() {
    let entrega = inputEntrega.value
    let termino = inputTermino.value

    entrega = new Date(entrega)
    termino = new Date(termino)

    let diffInTime2 = Math.abs(entrega - termino)
    let timeInOneDay2 = 1000 * 60 * 60 * 24
    let diffInDays2 = diffInTime2 / timeInOneDay2
    return diffInDays2
}

function calculoMultaIntegral() {
    let aluguel = inputAluguel.value

    let multaInt = aluguel * 3
    return multaInt
}

function calculoMultaProporcional() {
    let multaProp = calculoMultaIntegral() / calculateDateDiff1() * calculateDateDiff2()
    const multaPropFinal = multaProp.toFixed(2)

    return multaPropFinal
}

button.addEventListener('click', () => {
    const diffInDays = calculateDateDiff()
    spanMeses.innerHTML = Math.round(diffInDays)
    const diffInDays1 = calculateDateDiff1()
    spanDias.innerHTML = diffInDays1
    const multaInt = calculoMultaIntegral()
    spanMultaInt.innerHTML = multaInt
    const diffInDays2 = calculateDateDiff2()
    spanFalta.innerHTML = diffInDays2
    const multaPropFinal = calculoMultaProporcional()
    spanMultaProp.innerHTML = multaPropFinal

    const escreveREF = infoRef()
    spanREF.innerHTML = escreveREF
    const escreveCC = infoCC()
    spanCC.innerHTML = escreveCC
    const escreveTipoLocacao = tipoLocacao()
    spanTipoLocacao.innerHTML = escreveTipoLocacao
    const escreveImovel = infoImovel()
    spanImovel.innerHTML = escreveImovel
    const escreveInicio = inicioContrato()
    spanInicioContrato.innerHTML = escreveInicio
    const escreveTermino = terminoContrato()
    spanTerminoContrato.innerHTML = escreveTermino
})

function Mudarestado(el, btn, res) {
    var display = document.getElementById(el).style.display;

    if (display == "none") {
        document.getElementById(el).style.display = 'block';
    }

    else {
        document.getElementById(el).style.display = 'none';
        document.getElementById(res).style.display = 'block';
        document.getElementById(btn).style.display = 'none';
    }
}

const salvar = document.querySelector('#salvar');

salvar.addEventListener("click", () => {
    const saveBody = document.querySelector("#resultados");

    const options = {
        margin: [10,10,10,10],
        filename: "teste.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait"}
    };

    html2pdf().set(options).from(saveBody).save();
});