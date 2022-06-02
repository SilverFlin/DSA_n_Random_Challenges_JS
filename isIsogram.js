/**
 * A Isogram is a word that has no repeaetd letters
 * */

function isIsogram(str) {
	let charCount = {}; // Is easy to track the letters with a object
	str.toLowerCase(); // The differnece of caps can disturbe the code
	for (let char of str) {
		if (charCount[char] === 1) return false; // Check if the char is in the charCount.

		if (/[a-z]/.test(char)) {
			// This is a filter where all that isn't a character will be ignored
			charCount[char] = 1; // Each character is saved in the object as 1 (A true also may work)
		}
	}
	return true;
}

isIsogram('WREatHs'); // True
isIsogram('isIsogram'); // False (At the 3rd char it will return the false)
