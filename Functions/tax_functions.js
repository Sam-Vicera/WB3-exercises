let grossPay = 750;

let socialSecurityTaxAmount;
let securityTaxRate = 0.062;

let medicareTaxAmount;
let medicareTaxRate = 0.0145;

let withholdingCode = 0;
let federalTaxAmount;
let federalTaxRate;


function getSocSecTax(pay, tax){

    socialSecurityTaxAmount = pay * tax
    console.log(socialSecurityTaxAmount);
}


function getMedicareTax(pay, tax){
    medicareTaxAmount = pay * tax;
    console.log(medicareTaxAmount);
}

function getFederalTax(pay, code){
 if (code >= 4){
    federalTaxRate = parseFloat(.18 - ((code - 4 ) * 0.005)).toFixed(2)
    federalTaxAmount = pay * federalTaxRate;
   
 }
 else if (code == 3){
    federalTaxRate = .185
    federalTaxAmount = pay * federalTaxRate;
   
 } 
 else if (code == 2){
    federalTaxRate = .195
    federalTaxAmount = pay * federalTaxRate;
    
 } 
 else if (code == 1){
    federalTaxRate = .21
    federalTaxAmount = pay * federalTaxRate;
   
 } 
 else {
    federalTaxRate = .23
    federalTaxAmount = pay * federalTaxRate;
   
 } 
 console.log( "Federal Tax amount is " + federalTaxAmount.toFixed(2));

}
getSocSecTax(grossPay, securityTaxRate);
getMedicareTax(grossPay, medicareTaxRate);
getFederalTax(750,0);
getFederalTax(1550,2);
getFederalTax(1100,6);