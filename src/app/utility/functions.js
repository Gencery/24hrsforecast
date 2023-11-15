export function objToArray(obj) {
	return Object.keys(obj).map((key) => {
		return { key: key, ...obj[key] };
	});
}
