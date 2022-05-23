'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var arr = Array.from(num);
  let decimal = 0;
  for (let i = 0; i < arr.length; i++) {
    decimal = decimal + Math.pow(2, arr.length - i-1) * arr[i];
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
let numero = num;
let newArray = [];
while (numero / 2 > 0) {
  newArray.unshift(numero % 2);
  numero = Math.floor(numero/2);
}

return newArray.join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}