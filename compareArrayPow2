/**
 * 
 * @param a Array with numbers
 * @param b Array with numbers
 * @returns True if the array 'b' contains each number of 'a' but squared
 */

function compareArrayPow2(a, b) {
	let result = true;
	if (a.length !== b.length) result = false; // With different lengths there's no way to be true

	const check = (a, b) => (a > b ? 1 : -1); // Function for the sort method that sort the numbers in a ascendent way
	a = a.sort(check);
	b = b.sort(check);

	// Now the arrays are in the place where each index should correspond to his squared form
	for (let i = 0; i < a.length; i++) {
		if (a[0] ** 2 !== b[0]) return false;
	}
	return result;
}

const test = compareArrayPow2(
	[ 6, 10, 6, 9, 4, 1, 0, 10, 5, 10, 1, 9, 7 ],
	[ 17, 36, 100, 81, 36, 100, 25, 0, 49, 1, 1, 81, 100 ]
);
console.log(test); // true

const test2 = compareArrayPow2([ 1, 2, 3 ], [ 1, 4, 8 ]);
console.log(test2); // false

const test3 = compareArrayPow2([ 3, 4, 2 ], [ 16, 9, 4 ]);
console.log(test2); // true
