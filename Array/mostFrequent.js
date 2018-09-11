// Most Frequent item occur in the Array

// # NOTE: The following input values will be used for testing your solution.
// # most_frequent(list1) should return 1
let list1 = [1, 3, 1, 3, 2, 1];
// # most_frequent(list2) should return 3
let list2 = [3, 3, 1, 3, 2, 1];
// # most_frequent(list3) should return None
let list3 = [];
// # most_frequent(list4) should return 0
let list4 = [0];
// # most_frequent(list5) should return -1
let list5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1];

function mostFrequent(arr) {
	let maxOccur = 0;
	let itemResult;
	let itemOccur = {};
	if (arr.length === 0) {
		return null;
	}
	arr.forEach(item => {
		if (!itemOccur[item]) {
			itemOccur[item] = 1;
		} else {
			itemOccur[item]++;
		}

		if (itemOccur[item] > maxOccur) {
			maxOccur = itemOccur[item];
			itemResult = item;
		}
	});
	return itemResult;
}
