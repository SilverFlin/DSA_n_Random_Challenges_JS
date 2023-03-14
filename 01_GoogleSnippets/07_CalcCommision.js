let a = 50001;
let temp, comision;

let porComision = [0, 0.025, 0.05, 0.75, 0.1];
let rango = [1000, 5000, 10000, 50000];

for (let i = 0; i < 4; i++) {
  console.log(i);
  temp = i;
  if (a < rango[i]) {
    break;
  } else {
    temp = 4;
  }
}

comision = a * porComision[temp];

console.log(comision);
