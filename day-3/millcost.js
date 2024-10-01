// Calculate the total bill amount including a 15% tip for a meal costing $40.

// Input: $40
// Output: Total bill amount with tip: $46
let mealcost=40;
let tipper=0.15;
let tip;
let totalBill;
if(mealcost >= 40){
  tip = mealcost * tipper;
  totalBill = tip + mealcost;
}
console.log("Total bill amount with tip: " + totalBill);
