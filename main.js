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
    if (res < 18.5) {
        console.log('Magreza')
    } else if (res <= 24.9) {
        console.log('Normal')
    } else if (res <= 29.9 ) {
        console.log('sobrepeso')
    } else {
        console.log('Obesidade de grau I, II ou III')
    }
}