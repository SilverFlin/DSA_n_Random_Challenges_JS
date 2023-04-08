// Dec 2022
/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  const countCandles = {
    tallestCandle: -Infinity,
    count: 0,
  };

  for (let candle of candles) {
    if (candle === countCandles.tallestCandle) {
      countCandles.count += 1;
      continue;
    }
    if (candle > countCandles.tallestCandle) {
      countCandles.tallestCandle = candle;
      countCandles.count = 1;
    }
  }
  return countCandles.count;
}
