let fahrenheitTemp;
let celsiusTemp;
function convertFtoC(val1,val2, val3, val4, val5, val6){
fahrenheitTemp = val1;
celsiusTemp = (fahrenheitTemp - 32)/ 1.8
console.log(celsiusTemp.toFixed(2) + " Celsius");

fahrenheitTemp = val2;
celsiusTemp = (fahrenheitTemp - 32)/ 1.8
console.log(celsiusTemp.toFixed(2) + " Celsius");

fahrenheitTemp = val3;
celsiusTemp = (fahrenheitTemp - 32)/ 1.8
console.log(celsiusTemp.toFixed(2)+ " Celsius");

fahrenheitTemp = val4;
celsiusTemp = (fahrenheitTemp - 32)/ 1.8
console.log(celsiusTemp.toFixed(2)+ " Celsius");

fahrenheitTemp = val5;
celsiusTemp = (fahrenheitTemp - 32)/ 1.8
console.log(celsiusTemp.toFixed(2)+ " Celsius");

fahrenheitTemp = val6;
celsiusTemp = (fahrenheitTemp - 32)/ 1.8
console.log(celsiusTemp.toFixed(2)+ " Celsius");
}

convertFtoC(212,90,72,32,0,-40);

