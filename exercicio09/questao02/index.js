const btn = document.getElementById('btn');

function sum(num1, num2) {
    try {
        if (isNaN(num1 + num2)) throw 'sum'
        if (num1 < 0 || num2 < 0) throw 'sum'
        if (Number(num1) != parseInt(num1) || Number(num2) != parseInt(num2) ) throw 'sum'
    } catch (error) {
        alert(`Impossible to ${error} ${num1} + ${num2}`)
        return null
    }
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    try {
        if (isNaN(num1 + num2)) throw 'subtract'
        if (num1 < 0 || num2 < 0) throw 'subtract'
        if (Number(num1) != parseInt(num1) || Number(num2) != parseInt(num2) ) throw 'subtract'
        if (num1 <= num2) throw 'subtract'
    } catch (error) {
        alert(`Impossible to ${error} ${num1} - ${num2}`)
        return null
    }
    return Number(num1) - Number(num2)
}

function calculo() {
    let num1 = document.getElementById('operando1').value;
    let num2 = document.getElementById('operando2').value;
    let options = document.getElementById('options').value;
    let result = document.getElementById('result');
    let answer;

    switch (options) {
        case 'plus':
            answer = sum(num1, num2)
            break;

        case 'less':
            answer = subtract(num1, num2);
            break;
    }

    result.innerHTML = answer;
    console.log(answer);
}

btn.addEventListener('click', calculo);