/**
 * 
 * @param n The number to check
 * @returns The amount of prime factors
 */

function primeFactorsCount(n) {
	if (n === 1) return 1; // Without this the function will return 0 if 1 is the parameter
	let tracker = 0;
	let qty = n;
	for (let i = 1; i < qty; i++) {
		// check each number between 1 and the parameter

		if (n % i === 0) {
			tracker++;
			n /= i; // Reduce for the next test
			i = 2; // Reset the test of divisor
		}
	}
	return tracker;
}
console.log(primeFactorsCount(372)); // 4 (2*2*3*31)
