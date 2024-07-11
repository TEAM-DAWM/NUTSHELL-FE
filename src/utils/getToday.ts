/** 오늘은 몇년 몇월 몇일?? */
const getToday = () => {
	const today = new Date();
	const date = today.getDate();
	const month = today.getMonth() + 1;
	const year = today.getFullYear();
	return { year, month, date };
};

export default getToday;
