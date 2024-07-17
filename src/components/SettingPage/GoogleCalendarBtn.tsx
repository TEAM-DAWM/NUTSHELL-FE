import styled from '@emotion/styled';

import Images from '@/assets/images';
import Icons from '@/assets/svg/index';

function GoogleCalendarBtn() {
	return (
		<GoogleCalendarBtnLayout>
			<CalendarBox>
				<GoogleImg src={Images.googleCalendar} alt="구글 캘린더" />
				<CalendarText>구글 캘린더</CalendarText>
			</CalendarBox>
			<IconBox />
		</GoogleCalendarBtnLayout>
	);
}

const GoogleCalendarBtnLayout = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	justify-content: space-between;
	width: 38rem;
	height: 4rem;
`;

const CalendarBox = styled.div`
	display: flex;
	gap: 0.4rem;
	justify-content: flex-start;
	box-sizing: border-box;
	height: 4rem;
`;

const GoogleImg = styled.img`
	width: 3.6rem;
	height: 3.6rem;
	margin: 0.2rem 0;
`;

const CalendarText = styled.p`
	align-self: center;
	width: 7.4rem;
	margin: 0.6rem 0;
	${({ theme }) => theme.fontTheme.BODY_02};
`;

const IconBox = styled(Icons.plus_circle)`
	box-sizing: border-box;
	width: 2.4rem;
	height: 2.4rem;
	margin: 0.8rem;
`;
export default GoogleCalendarBtn;
