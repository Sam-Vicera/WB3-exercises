let fahrenheitTemp;
let celsiusTemp;

function convertCtoF(val1,val2, val3, val4, val5, val6){
    celsiusTemp = val1;
    fahrenheitTemp = (celsiusTemp *(9/5)+32);
    console.log(fahrenheitTemp.toFixed(2) + " Fahrenheit");
    
    celsiusTemp = val2;
    fahrenheitTemp = (celsiusTemp *(9/5)+32);
    console.log(fahrenheitTemp.toFixed(2) + " Fahrenheit");
    
    celsiusTemp = val3;
    fahrenheitTemp = (celsiusTemp *(9/5)+32);
    console.log(fahrenheitTemp.toFixed(2) + " Fahrenheit");
    
    celsiusTemp = val4;
    fahrenheitTemp = (celsiusTemp *(9/5)+32);
    console.log(fahrenheitTemp.toFixed(2) + " Fahrenheit");
    
    celsiusTemp = val5;
    fahrenheitTemp = (celsiusTemp *(9/5)+32);
    console.log(fahrenheitTemp.toFixed(2) + " Fahrenheit");
    
    celsiusTemp = val6;
    fahrenheitTemp = (celsiusTemp *(9/5)+32);
    console.log(fahrenheitTemp.toFixed(2)  + " Fahrenheit");
}
convertCtoF(100,45,19,0,7,-40);