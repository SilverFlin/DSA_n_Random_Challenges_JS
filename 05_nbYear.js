function nbYear(p0, percent, aug, p) {
  let pop = p0;
  let year = 0;
  percent /= 100;
  while (pop < p) {
    pop = pop + pop * percent + aug;
    year++;
    console.log(year);
  }
  return year;
}

console.log(nbYear(1500, 5, 100, 5000));
