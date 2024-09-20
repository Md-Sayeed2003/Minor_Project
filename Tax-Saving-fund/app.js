import {ELSSfunds} from "./data.js"

const funds = ELSSfunds;

const inp = document.querySelectorAll(".inp");
const heading = document.querySelector(".box-heading");
const fundSize = document.getElementById("FundSize");
const nav = document.getElementById("NAV");
const date = document.getElementById("LaunchDate");
const r3 = document.getElementById("R3");
const r5 = document.getElementById("R5");
const rA = document.getElementById("RA");

const ratio = document.getElementById("ExpenseRatio");
const ftype = document.getElementById("type");




const arr =Array.from(inp);

arr.forEach(button =>{
    button.addEventListener("click",function(e){
        const data = e.target.innerText;
        for(let fund of funds){
            if(fund.id == data){
                heading.innerHTML = fund.title;
                fundSize.innerHTML = fund.fund_size;
                nav.innerText = fund.NAV;
                date.innerText = fund.launched;
                r3.innerText = fund.return.year3;
                r5.innerText = fund.return.year5;
                rA.innerText = fund.return.launch;
                ratio.innerText = fund.expense_ratio;
                ftype.innerText = fund.plan_type;
            }
        }
    })
    

})







