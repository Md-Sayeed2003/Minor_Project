const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const time = document.getElementById("time");
const output = document.querySelector(".out-section");
const box = document.querySelector(".content-box");


const calculate = document.getElementById("calculate");

calculate.addEventListener("click",function(){
    const p = amount.value;
    const n = time.value * 12 ;
    const i = (interest.value/100)/12;

    if(p==''||p==NaN || n=='' || n == NaN || i == '' || i==NaN){
       alert("Enter valid details ");
    }

    const total_investment = p * n;
    const future_value = p *((((1+i)**n ) - 1)/i) * (i+1);
    const profit_value = future_value - total_investment;

    

    console.log(future_value.toFixed(2));
    console.log(total_investment)
    console.log(profit_value.toFixed(2))

    const total = document.getElementById("total");
    const maturity = document.getElementById("maturity");
    const profit = document.getElementById("profit");

    total.innerText = "Rs "+total_investment;
    maturity.innerHTML ="Rs "+ future_value.toFixed(1);
    profit.innerHTML ="Rs " + profit_value.toFixed(2);

    box.style.height="520px";
    output.style.display="block";


    

})