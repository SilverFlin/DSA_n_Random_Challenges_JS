// Jan 2023

/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  let totalCost = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i !== k) totalCost += bill[i];
  }
  const costPerPerson = totalCost / 2;
  const annaCharge = Math.abs(costPerPerson - b);

  console.log(annaCharge === 0 ? "Bon Appetit" : annaCharge);
}
