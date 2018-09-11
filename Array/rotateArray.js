// # Implement your function below.

// # NOTE: The following input values will be used for testing your solution.
let list1 = [1, 2, 3, 4, 5, 6, 7];
let list2a = [4, 5, 6, 7, 8, 1, 2, 3];
// # is_rotation(list1, list2a) should return False.
let list2b = [4, 5, 6, 7, 1, 2, 3];
//# is_rotation(list1, list2b) should return True.
let list2c = [4, 5, 6, 9, 1, 2, 3];
// # is_rotation(list1, list2c) should return False.
let list2d = [4, 6, 5, 7, 1, 2, 3];
// # is_rotation(list1, list2d) should return False.
let list2e = [4, 5, 6, 7, 0, 2, 3];
// # is_rotation(list1, list2e) should return False.
let list2f = [1, 2, 3, 4, 5, 6, 7];
// # is_rotation(list1, list2f) should return True.

function rotateArray(a, b) {
	// check if they have same length
	if (a.length !== b.length) {
		return false;
	}
}
