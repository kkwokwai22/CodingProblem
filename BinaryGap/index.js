// Task description
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by
// ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
// The number 529 has binary representation 1000010001 and contains two binary gaps:
// one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1.
// The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation
// 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0,
// because N has binary representation '100000' and thus no binary gaps.

// Assume that:

// N is an integer within the range [1..2,147,483,647].
// Complexity:

// expected worst-case time complexity is O(log(N));
// expected worst-case space complexity is O(1).

// Solution

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function dec2bin(dec) {
	return (dec >>> 0).toString(2);
}

function solution(N) {
	let count = 0;
	let biggerNum = 0;
	// change N to binary number first
	const binaryNum = dec2bin(N);
	// iterate through the str
	for (let i = 1; i < binaryNum.length; i++) {
		// once we hit another 1
		if (parseInt(binaryNum[i]) === 1) {
			// check is it the biggernumber or not;
			if (count >= biggerNum) {
				biggerNum = count;
			}
			// we are going to reset count to 0
			count = 0;
		} else {
			// we are going to count the 0;
			count++;
		}
	}
	return biggerNum;
}
