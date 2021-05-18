export function isValidJson(jsonString) {
	try {
		const o = JSON.parse(jsonString);

		return o && typeof o === 'object';
	} catch (e) {
		return false;
	}
}

export function chunkString(baseString, size) {
	return `${baseString}`.match(new RegExp(`.{1,${size}}`, 'g'));
}

export function cutStringEnd(baseString, separatorString) {
	return `${baseString}`.split(separatorString).pop();
}

export function cutStringStart(baseString, separatorString) {
	return `${baseString}`.split(separatorString).shift();
}
