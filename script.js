//your code here
const priceArray=document.querySelectorAll('[data-ns-test="prices"]');
let table=document.getElementById("table1");
let ans=0;
for (let i = 0; i < priceArray.length; i++) {
	ans+=parseInt(priceArray[i].innerText);
}
let total=document.createElement("tr");
let td=document.createElement("td");
total.setAttribute("data-ns-test", "grandTotal");
tr.setAttribute("data-ns-test", "prices");
td.innerText=ans;
total.appendChild(td);
table.appendChild(total);
