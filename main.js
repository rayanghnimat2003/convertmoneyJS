
document.querySelector(".registerForm").onsubmit = convert;

function convert(e){
    e.preventDefault()
    
    var amount = e.target.elements['amount'].value;
    var result = document.querySelector(".result")
    var selectedCurrency = e.target.elements['exchange'].value;
  if(selectedCurrency === "dollar"){
    result.innerHTML = amount * 0.27;
  } else if(selectedCurrency === "dinar"){
    result.innerHTML = amount * 0.19;
  } else {
    result.innerHTML = amount
  } 
}