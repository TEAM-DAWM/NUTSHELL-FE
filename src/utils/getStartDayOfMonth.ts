const getStartDayOfMonth = (date = new Date()) => {
	const currentMonth = new Date(date).getMonth();
	const firstDayOfMonth = new Date(new Date(date).getFullYear(), currentMonth, 1);
	const dayOfWeek = firstDayOfMonth.getDay();
	const startDateOfMonthGrid = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate() - dayOfWeek));
	const formattedDate = startDateOfMonthGrid.toISOString().split('T')[0];

	return formattedDate;
};

export default getStartDayOfMonth;
