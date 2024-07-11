/** 입력된 날짜가 2000년 - 9999년인지, 01.01 - 12.31 인지 검사 */
const checkDateFormat = (date: string) => {
	const [year, month, day] = date.split('.').map(Number);

	if (year >= 2000 && year <= 9999 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
		const maxDays = new Date(year, month, 0).getDate();
		if (day <= maxDays) {
			return true;
		}
	}
	return false;
};
export default checkDateFormat;
