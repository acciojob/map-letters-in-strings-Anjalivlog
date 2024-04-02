//your JS code here. If required.
function mapLetters(string) {
	const map = {};
	for (let i = 0; i < string; i++) {
		const c = string[i];
		if (map[c]) {
			map[c].push(i);
		} else {
			map[c] = [i];
		}
	}
	return map;
}
