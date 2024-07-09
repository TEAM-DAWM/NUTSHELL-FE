import styled from '@emotion/styled';

import ArrangeBtn from '@/components/common/arrangeBtn/ArrangeBtn';
import DatePickerCustom from '@/components/common/datePicker/DatePickerCustom';

function DashBoard() {
	return (
		<>
			{/* right */}
			<Wrapper>
				<ArrangeBtn type="right" color="BLUE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="right" color="BLUE" mode="DISABLED" size="small" />

				<ArrangeBtn type="right" color="WHITE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="right" color="WHITE" mode="DISABLED" size="small" />

				<ArrangeBtn type="right" color="BLACK" mode="DEFAULT" size="small" />
				<ArrangeBtn type="right" color="BLACK" mode="DISABLED" size="small" />
			</Wrapper>

			{/* left */}
			<Wrapper>
				<ArrangeBtn type="left" color="BLUE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="left" color="BLUE" mode="DISABLED" size="small" />

				<ArrangeBtn type="left" color="WHITE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="left" color="WHITE" mode="DISABLED" size="small" />

				<ArrangeBtn type="left" color="BLACK" mode="DEFAULT" size="small" />
				<ArrangeBtn type="left" color="BLACK" mode="DISABLED" size="small" />
			</Wrapper>

			{/* set */}
			<Wrapper>
				<ArrangeBtn type="set" color="BLUE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="set" color="BLUE" mode="DISABLED" size="small" />

				<ArrangeBtn type="set" color="WHITE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="set" color="WHITE" mode="DISABLED" size="small" />

				<ArrangeBtn type="set" color="BLACK" mode="DEFAULT" size="small" />
				<ArrangeBtn type="set" color="BLACK" mode="DISABLED" size="small" />
			</Wrapper>

			{/* calendar */}
			<Wrapper>
				<ArrangeBtn type="calendar" color="BLUE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="calendar" color="BLUE" mode="DISABLED" size="small" />

				<ArrangeBtn type="calendar" color="WHITE" mode="DEFAULT" size="small" />
				<ArrangeBtn type="calendar" color="WHITE" mode="DISABLED" size="small" />

				<ArrangeBtn type="calendar" color="BLACK" mode="DEFAULT" size="small" />
				<ArrangeBtn type="calendar" color="BLACK" mode="DISABLED" size="small" />
			</Wrapper>
			<DatePickerCustom />
		</>
	);
}
const Wrapper = styled.div`
	display: flex;
`;
export default DashBoard;
