/** 00:00 ~ 23:59 내의 유효한 시간인지 확인하고 유효하면 true 아니라면 false 반환 */
const checkTimeFormat = (time: string) => {
	const [hours, minutes] = time.split(':').map(Number);
	if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) {
		return true;
	}
	return false;
};

export default checkTimeFormat;
