/** Date 형식을 0000년 00월 00일 형식 string 으로 반환합니다
 * undefined, null 의 경우 '시간' 텍스트를 반환합니다
 */
const formatDatetoStrinKor = (date: Date | undefined | null) => {
	if (date) {
		const year = date.getFullYear();
		const month = '0'.concat((date.getMonth() + 1).toString()).slice(-2);
		const day = '0'.concat(date.getDate().toString()).slice(-2);
		return `${year}년 ${month}월 ${day}일`;
	}
	return '';
};

export default formatDatetoStrinKor;
