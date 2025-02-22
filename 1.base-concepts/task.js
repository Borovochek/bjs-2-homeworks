// Задание №1
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - (4 * a * c);
  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else if (discriminant > 0) {
    let root1 = (- b + Math.sqrt(discriminant) ) / (2 * a);
    let root2 = (- b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}



// Задание №2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) / 12;
  let creditSum = amount - contribution;
  let monthlyPayment = creditSum * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let result = monthlyPayment * countMonths;
  return Number(result.toFixed(2));
}

