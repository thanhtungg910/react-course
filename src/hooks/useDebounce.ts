import { useEffect, useState } from 'react';

export const useDebounce = (value = '', delay = 800) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const result = setTimeout(() => {
			return setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(result);
		};
	}, [value]);
	return debouncedValue;
};
