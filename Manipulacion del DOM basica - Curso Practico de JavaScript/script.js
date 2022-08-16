// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parafito = document.querySelector('.Parafito');
const parafote = document.querySelector('#Parafote');
const input = document. querySelector('input');

console.log({
    h1,
    p,
    parafito,
    parafote,
    input
});

h1.innerText = 'patito';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'tommyloveshady');

h1.classList.add('rojo');
h1.classList.remove('manipulador');
//h1.classList.toggle(``);

//h1.classList.contains('');

input.value = "5435";

const img = document.createElement('img');
img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Grupp_1%2C_BELGISK_VALLHUND%2C_MALINOIS%2C_Krokasmedens_Epic_%2824014622180%29.jpg/1024px-Grupp_1%2C_BELGISK_VALLHUND%2C_MALINOIS%2C_Krokasmedens_Epic_%2824014622180%29.jpg');
//console.log(img);
//parafote.append(img);

parafote.innerHTML= ""
parafote.append(img)