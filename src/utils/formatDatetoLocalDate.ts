/** Date 형식을 0000-00-00 형식 string 으로 반환합니다 */
const formatDatetoLocalDate = (date: Date | null | string) => {
	if (date) {
		const dateTypeDate = new Date(date);
		const year = dateTypeDate.getFullYear();
		const month = '0'.concat((dateTypeDate.getMonth() + 1).toString()).slice(-2);
		const day = '0'.concat(dateTypeDate.getDate().toString()).slice(-2);
		return `${year}-${month}-${day}`;
	}
	return '';
};

export default formatDatetoLocalDate;
