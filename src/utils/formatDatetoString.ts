/** Date 형식을 0000.00.00 형식 string 으로 반환합니다
 * undefined, null 의 경우 '시간' 텍스트를 반환합니다
 */
const formatDatetoString = (date: Date | undefined | null) => {
	if (date) {
		const year = date.getFullYear();
		const month = '0'.concat((date.getMonth() + 1).toString()).slice(-2);
		const day = '0'.concat(date.getDate().toString()).slice(-2);
		return `${year}.${month}.${day}`;
	}
	return '시간';
};

export default formatDatetoString;
