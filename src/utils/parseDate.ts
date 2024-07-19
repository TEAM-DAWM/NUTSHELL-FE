/**
 * ISO 8601 형식의 날짜 문자열에서 YYYY-MM-DD 형식으로 변환합니다.
 * @param {string} isoDateString - 변환할 ISO 8601 형식의 날짜 문자열.
 * @returns {string} - 변환된 날짜 문자열.
 */
const parseDate = (isoDateString: string): string => {
	const date = new Date(isoDateString);
	const year = date.getFullYear();
	const month = `0${date.getMonth() + 1}`.slice(-2); // 월을 두 자리로 포맷팅
	const day = `0${date.getDate()}`.slice(-2); // 일을 두 자리로 포맷팅
	return `${year}-${month}-${day}`; // YYYY-MM-DD 형식으로 반환
};

export default parseDate;
