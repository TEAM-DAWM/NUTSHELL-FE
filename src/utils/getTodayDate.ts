function getTodayDate() {
	const today = new Date();
	const date = today.getDate();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();
	return `${year}년 ${month}월 ${date}일`;
}
export default getTodayDate;
