/**
 * 
 * @param num The number to be reversed
 * @returns The number reversed
 */
function reverseInt(num) {
	num = num.toString().split(''); // Separe the number in a array
	num = num.reverse().join(''); // reverse de array and turn it again in a string
	return parseInt(num);
	//The same as: parseInt(num.toString().split('').reverse().join(''))
}

console.log(reverseInt(123)); // 321
console.log(reverseInt(145263)); // 362541
