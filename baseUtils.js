const generateUUID = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
};

const isValidJson = jsonString => {
	try {
		const o = JSON.parse(jsonString);
		/* Handle non-exception-throwing cases:
			Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
			but... JSON.parse(null) returns null, and typeof null === "object",
			so we must check for that, too. Thankfully, null is falsey, so this suffices: */

		return o && typeof o === 'object' ? o : false;
	} catch (e) {
		return false;
	}
};

export { generateUUID, isValidJson };
