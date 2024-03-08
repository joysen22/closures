//javascript closures concept

function closure(money) {
  return function profit(a) {
    return (a * money) / 100;
  };
}

const totalMoney = closure(5000);
console.log(totalMoney(20)); // ans => 1000
