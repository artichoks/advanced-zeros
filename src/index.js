module.exports = function getZerosCount(number, base) {
  let count = number;
  const factors = factorize(base);
  for (let qi of factors.keys()) {
    let piQ = getQuantity(qi, number);
    count = Math.floor(Math.min(count, piQ / factors.get(qi)));
  }
  return count;
}

function factorize(number) {
  let factors = new Map();
  for (let i = 2; i <= Math.sqrt(number); i++) {
    let count = 0;
    while (number % i === 0) {
      count++;
      number /= i;
    }
    if (count > 0) factors.set(i, count);
  }
  if (number > 1) factors.set(number, 1);
  return factors;
}

function getQuantity(i, number) {
  let count = 0;
  while (number = Math.floor(number / i)) {
    count += number;
  }
  return count;
}