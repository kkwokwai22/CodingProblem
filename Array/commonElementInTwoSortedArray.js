// given two sorted Array
// A = [1,3,4,6,7,9]
// B = [1,2,4,5,9,10]
// Find all the common elements and put print in Array

// # NOTE: The following input values will be used for testing your solution.
let list_a1 = [1, 3, 4, 6, 7, 9];
let list_a2 = [1, 2, 4, 5, 9, 10];
// # common_elements(list_a1, list_a2) should return [1, 4, 9] (a list).

let list_b1 = [1, 2, 9, 10, 11, 12];
let list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15];
// # common_elements(list_b1, list_b2) should return [1, 2, 9, 10, 12] (a list).

let list_c1 = [0, 1, 2, 3, 4, 5];
let list_c2 = [6, 7, 8, 9, 10, 11];
// # common_elements(list_b1, list_b2) should return [] (an empty list).

// my solution
function twoCommon(a, b) {
	let storeList = new Set(a);
	let commonElement = [];
	b.forEach(num => {
		if (storeList.has(num)) {
			commonElement.push(num);
		}
	});
	return commonElement;
}

// other solution
function twoCommonFunc(a, b) {
	let p1 = 0;
	let p2 = 0;
	let result = [];
	while (p1 < a.length && p2 < b.length) {
		if (a[p1] == b[p2]) {
			result.push(a[p1]);
			p1++;
			p2++;
		} else if (a[p1] > b[p2]) {
			p2++;
		} else {
			p1++;
		}
	}
	return result;
}

console.log(twoCommonFunc(list_a1, list_a2));
console.log(twoCommonFunc(list_b1, list_b2));
console.log(twoCommonFunc(list_c1, list_c2));
