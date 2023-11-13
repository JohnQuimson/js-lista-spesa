'use strict';

const lista = document.querySelector('.list');
console.log(lista);

const spesa = [
  'Pane',
  'Insalata',
  'Uova',
  'Pasta',
  'Riso',
  'Cozze',
  'Patate',
  'Melograno',
  'Kiwi',
  'Farina',
  'Vino rosso',
];

let j = 0;

while (j < spesa.length) {
  const prodotto = document.createElement('li');
  prodotto.classList.add('prodotto');
  prodotto.textContent = spesa[j];
  lista.append(prodotto);
  j++;
}
