// Description:StringCompression
// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string.

/**
 * @param {string} string
 * @return {string}
 */
function stringCompression(string) {
	let stringObject = {};
	let stringArr = string.split('');
	stringArr.forEach(function(char) {
		if (!stringObject.hasOwnProperty(char)) {
			stringObject[char] = 1;
		} else {
			stringObject[char]++;
		}
	});
	return stringObject;
}

stringCompression('aabcccccaaa'); 



