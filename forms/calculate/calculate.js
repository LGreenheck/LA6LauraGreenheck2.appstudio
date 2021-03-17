let product = 0
let sum = 0


btnClear.onclick=function(){
  inptNum1.value = 0
  inptNum2.value = 0
  lblOutput.textContent = ''
}


btnMult.onclick=function(){
  product = 
  inptNum1.value * inptNum2.value
  lblOutput.textContent = `The product is ${product}`
}



btnAdd.onclick=function(){
  sum = 
  Number(inptNum1.value) + Number (inptNum2.value)
  lblOutput.textContent = `The sum is ${sum}`
  
}
