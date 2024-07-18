const getStartDayOfWeek = (date = new Date()) => {
	const currentDate = new Date(date);
	const currentDay = currentDate.getDay();
	const diff = currentDate.getDate() - currentDay;
	const sunday = new Date(currentDate.setDate(diff));

	const year = sunday.getFullYear();
	const month = String(sunday.getMonth() + 1).padStart(2, '0');
	const day = String(sunday.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};

export default getStartDayOfWeek;
