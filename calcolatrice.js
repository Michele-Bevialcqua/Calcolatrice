let feedback = document.getElementById('feedback');
let signFeedback = document.getElementById('signFeedback')

//variabili tasti numerici, virgola e delete
let tastoUno = document.getElementById('uno');
let tastoDue = document.getElementById('due');
let tastoTre = document.getElementById('tre');
let tastoQuattro = document.getElementById('quattro');
let tastoCinque = document.getElementById('cinque');
let tastoSei = document.getElementById('sei');
let tastoSette = document.getElementById('sette');
let tastoOtto = document.getElementById('otto');
let tastoNove = document.getElementById('nove');
let tastoZero =  document.getElementById('zero');
let tastoVirgola = document.getElementById('comma');
let tastoDelete = document.getElementById('delete');
let percent = document.getElementById('percent');

//variabili tasti delle operazioni
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let times = document.getElementById('times')
let division = document.getElementById('division')
let returnTotal = document.getElementById('returnTotal')

let clear = document.getElementById('clear')

//evita spostamento della tastiera quando viene premuto il primo tasto
if(feedback === null){
    feedback.style.height = '85px'
}
else{
    feedback.style.height = '0px'
};

let numeri = [tastoUno, tastoDue, tastoTre, tastoQuattro, tastoCinque, tastoSei, tastoSette, tastoOtto, tastoNove, tastoZero];

numeri.forEach((tasto) => {
    tasto.addEventListener('click', () =>{
        feedback.innerText += tasto.innerText
    })
})

//input dei numeri nel p 'feedback'

tastoVirgola.addEventListener('click', () =>{
    console.log(feedback.innerText)
    if(feedback.innerText === ""){
        feedback.innerText += "0."
        console.log("null")
    }
    else{
        feedback.innerText += "."
        console.log("not null")
    }
})

tastoDelete.addEventListener('click', () =>{
    console.log('delete');
    feedback.innerText = '';
    console.log('deleted')
})

let operators = [plus, minus, division, times]

operators.forEach((operator) =>{
    operator.addEventListener('click', () => {
        signFeedback.innerText = operator.innerText;
        localStorage.setItem("primoNumero", feedback.innerText);
        localStorage.setItem("simbolo", signFeedback.innerText);
        feedback.innerText = '';
        console.log(localStorage.getItem("primoNumero") + " nel localStorage")
    })
})


//funzione per ottenere il risultato
returnTotal.addEventListener('click', () =>{
    let numOne = Number(localStorage.getItem("primoNumero"));

    let symbol = signFeedback.innerText;

    let numTwo = Number(feedback.innerText);

    console.log(numOne + symbol + numTwo);

    feedback.innerText = '';

    if(symbol === "+"){
        let sum = (numOne + numTwo);
        feedback.innerText = sum;
    }
    else if(symbol === "-"){
        let min = (numOne - numTwo);
        feedback.innerText = min;
    }

    else if(symbol === "x"){
        let times = (numOne * numTwo);
        feedback.innerText = times;
    }

    else if(symbol === "÷"){
        if(numTwo === 0){
            feedback.innerText = "undefined"
        }
        else{
            let div = (numOne / numTwo)
            feedback.innerText = div
        }
    }
})

percent.addEventListener('click', () =>{
    let numOne = Number(localStorage.getItem("primoNumero"));
    
    let symbol = signFeedback.innerText;

    let numTwo = Number(feedback.innerText);

    console.log(numOne + symbol + numTwo);

    feedback.innerText = '';

    if(symbol === "+"){
        let sum = (numOne + ((numOne / 100) * numTwo));
        feedback.innerText = sum;
    }
    else if(symbol === "-"){
        let min = (numOne - ((numOne / 100) * numTwo));
        feedback.innerText = min;
    }

    else if(symbol === "x"){
        let times = (numOne * ((numOne / 100) * numTwo));
        feedback.innerText = times;
    }

    else if(symbol === "÷"){
        if(numTwo === 0){
            feedback.innerText = "undefined"
        }
        else{
            let div = (numOne / ((numOne / 100) * numTwo))
            feedback.innerText = div
        }
    }
})


//funzione per cancellare tutto
clear.addEventListener('click', () =>{
    feedback.innerText = "";
    signFeedback.innerText = "";
    localStorage.removeItem("primoNumero")
    localStorage.removeItem("simbolo")
})


