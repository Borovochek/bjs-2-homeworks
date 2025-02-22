// Задание №1
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - (4 * a * c);

  if (discriminant < 0) {
    return arr;
  }

  if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  }

  else {
    let root1 = (- b + Math.sqrt(discriminant) ) / (2 * a);
    let root2 = (- b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}



// Задание №2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let n = countMonths;
  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
  let result = monthlyPayment * n;

  return Number(result.toFixed(2));
}

