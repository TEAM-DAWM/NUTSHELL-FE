/** 입력 중인 시간 string에 HH:MM 형태로 ':' 을 추가한 string 을 반환합니다 */
const dotFormatTime = (text: string) => {
	let value = text.replace(/\D/g, '');
	value = value.slice(0, 4);
	if (value.length > 2) {
		value = value.replace(/(\d{2})(\d{1,2})/, '$1:$2');
	}
	return value;
};
export default dotFormatTime;
