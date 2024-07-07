// 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
/** 0-6 number를 요일로 변환 */
const getNameOfDay = (dayOfTheWeek: number) => {
	switch (dayOfTheWeek) {
		case 0:
			return 'SUNDAY';
		case 1:
			return 'MONDAY';
		case 2:
			return 'TUESDAY';
		case 3:
			return 'WEDNESDAY';
		case 4:
			return 'THURSDAY';
		case 5:
			return 'FRIDAY';
		case 6:
			return 'SATURDAY';
		default:
			return 'UNKNOWN';
	}
};

export default getNameOfDay;
