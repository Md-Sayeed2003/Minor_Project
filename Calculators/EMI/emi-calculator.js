const principal = document.querySelector("#loan-amount-info");
const interest = document.querySelector("#interest-rate-info");
const tenure = document.querySelector("#duration-info");
const calculate = document.querySelector("#calculate");
const emi = document.querySelector("#emi")

function calculateEMI(){

   if( principal.value ==='' || interest.value ==='' || tenure.value===''){
       alert("please enter all the values");
       return;
   }else{
    const p = principal.value;
    const r = interest.value/1200;
    const n = tenure.value;
    const emiValue = (p * r * (1+r)**n)/((1+r)**n-1);

   
    
    emi.textContent = emiValue.toFixed(2);
   }
}

calculate.addEventListener('click',calculateEMI);
