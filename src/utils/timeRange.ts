// timeRange.js
const timeRange = (startTime: string, endTime: string) => {
	const parseTime = (time: string) => {
		const [hours, minutes] = time.split(':').map(Number);
		return hours * 60 + minutes;
	};

	if (!startTime || !endTime) {
		return 'NaN';
	}

	const startMinutes = parseTime(startTime);
	const endMinutes = parseTime(endTime);

	const totalMinutes = endMinutes - startMinutes;

	return totalMinutes >= 0 ? totalMinutes.toString() : '';
};

export default timeRange;
