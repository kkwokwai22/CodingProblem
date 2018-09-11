// A hash table is a data structure that maps keys to values for highly efficient lookup.

var hash = (string, max) => {
	var hash = 0;
	for (var i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i);
	}
	return hash % max;
};
