const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalculador');
const pResult = document.querySelector('#result')

function btnOnClick () {
    const suma = input1.value + input2.value;
    pResult.innerText = "perro gay es: " + suma; 
};
