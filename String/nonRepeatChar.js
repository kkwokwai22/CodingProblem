// # Implement your function below.

// # NOTE: The following input values will be used for testing your solution.
non_repeating('abcab');
// # should return 'c'
non_repeating('abab');
// # should return None
non_repeating('aabbbc');
// # should return 'c'
non_repeating('aabbdbc');
// # should return 'd'

function non_repeating(str) {
	let charStore = {};
	for (let i = 0; i < str.length; i++) {
		if (!charStore[str[i]]) {
			charStore[str[i]] = 1;
		} else {
			charStore[str[i]]++;
		}
	}
	for (let i = 0; i < str.length; i++) {
		if (charStore[str[i]] === 1) {
			return str[i];
		}
	}
	return null;
}
