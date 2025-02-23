// Задача №1
function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, current) => acc + current, 0);
  let avg = sum / arr.length; 
  return {
    min: min,
    max: max,
    avg: Number(avg.toFixed(2)),
  };
}

// Задача №2
function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, current) => acc + current, 0);
  return sum;
}

// Задача №3
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  return difference;
}

// Задача №4
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

// Задача №5
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  let average = sumEvenElement / countEvenElement;
  return average;
}

// Задача №6
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let subArray of arrOfArr) {
    const result = func(...subArray);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}