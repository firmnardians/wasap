/**
 * indonesian number validate
 * @param {Number} number
 * @returns
 */
export function validateNumber({ number }) {
	const onlyNumber = /^\d+$/;
	const getFirst = number.slice(0, 1);
	const getCountryCode = number.slice(0, 3);
	const getCountryCodeWithoutPlus = number.slice(0, 2);

	function removeString(string, number = 1) {
		const remove = string.substring(number);

		return remove;
	}

	// if number
	if (onlyNumber.test(number) === true) {
		if (getFirst === '0') {
			const remove = removeString(number, 1);
			const addCountryCode = `+62${remove}`;

			return addCountryCode;
		} else if (getCountryCodeWithoutPlus === '62') {
			const remove = removeString(number, 2);
			const addCountryCode = `+62${remove}`;

			return addCountryCode;
		} else {
			return false;
		}
	} else {
		const onlyNumber = number.replace(/\D/g, '');

		if (getCountryCode === '+62') {
			return `+${onlyNumber}`;
		} else if (getCountryCodeWithoutPlus === '62') {
			return `+${onlyNumber}`;
		} else if (getFirst === '0') {
			const remove = removeString(onlyNumber, 1);
			const addCountryCode = `+62${remove}`;

			return addCountryCode;
		} else {
			return false;
		}
	}
}
