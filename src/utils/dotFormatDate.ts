/** 입력 중인 날짜 string에 0000.00.00 형태로 '.' 을 추가한 string 을 반환합니다 */
const dotFormatDate = (text: string) => {
	let value = text.replace(/\D/g, '');
	value = value.slice(0, 8);
	if (value.length > 4) {
		value = value.replace(/(\d{4})(\d{1,2})/, '$1.$2');
	}
	if (value.length > 7) {
		value = value.replace(/(\d{4}\.\d{2})(\d{1,2})/, '$1.$2');
	}
	return value;
};

export default dotFormatDate;
