
function parseCode(code){

code = code.trim()
let firstSegment = code.indexOf(":");
let secondSegment = code.indexOf("-");


  let supplierCode = getSupplier(code,firstSegment);
  let productNumberCode = getProductNumber(code,firstSegment,secondSegment);
  let sizeCode = getSize(code,secondSegment);
   
   console.log(supplierCode);
   console.log(productNumberCode);
   console.log(sizeCode);
}

function getSupplier(code,firstSegment){

    return code.substring(0,firstSegment);

}

function getProductNumber(code,firstSegment,secondSegment){

    return code.substring(firstSegment + 1,secondSegment);
}
function getSize(code,secondSegment){

    return code.substring(secondSegment + 1);
}

parseCode("     ACME:123-L    ")