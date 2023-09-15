const inputInicio = document.querySelector('#inicio')
const inputTermino = document.querySelector('#termino')
const inputEntrega = document.querySelector('#entrega')
const inputAluguel = document.querySelector('#aluguel')
const button = document.querySelector('button')
const spanDias = document.querySelector('#difPeriodoDias')
const spanFalta = document.querySelector('#difPeriodoFalta')
const spanMeses = document.querySelector('#difPeriodoMeses')
const spanMultaInt = document.querySelector('#multaIntegral')
const spanMultaProp = document.querySelector('#multaProporcional')

let referencia = document.querySelector('#REF')
const spanREF = document.querySelector('#idREF')

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
})



function Mudarestado(el,btn, res) {
    var display = document.getElementById(el).style.display;

    if(display == "none") {
        document.getElementById(el).style.display = 'block';
    }

    else {
        document.getElementById(el).style.display = 'none';
        document.getElementById(res).style.display = 'block';
        document.getElementById(btn).style.display = 'none';
    }
}


const printy = document.querySelector('#imprimir')

printy.addEventListener("click", () => {
    const resultado = document.querySelector("#resultados")

    const options = {
        margin: [10,10,10,10],
        filename: "multa.pdf",
        html2canvas: {scale: 2},
        jsPDF : {unit:"mm", format:"a4", origin:"portrait"}
    }


    html2pdf().set(options).from(resultado).save();
})