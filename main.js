const button = document.getElementById('btn')

button.onclick = (e) => {
    e.preventDefault()
    calcImc()
}

function calcImc() {
    const altura = document.forms['mainForm']['altura'].value
    const peso = document.forms['mainForm']['peso'].value
    
    let newAltura = altura * altura
    let response = peso / newAltura

    showMessage(response)
}

function showMessage(res) {
    const result = document.getElementById('result')
    let message
    
    if (res < 18.5) {
        message = 'Magreza'
    } else if (res <= 24.9) {
        message = 'Normal'
    } else if (res <= 29.9 ) {
        message = 'sobrepeso'
    } else {
        message = 'Obesidade de grau I, II ou III'
    }

    result.innerHTML = `<p>Segundo o indice IMC o seu estado é de ${message}</p>` 
}