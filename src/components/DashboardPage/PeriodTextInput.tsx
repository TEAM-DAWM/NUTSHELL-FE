import styled from '@emotion/styled';

import { theme } from '@/styles/theme';
import dotFormatDate from '@/utils/dotFormatDate';
import formatDatetoString from '@/utils/formatDatetoString';

interface PeriodTextInputProps {
	// eslint-disable-next-line react/no-unused-prop-types
	startDate?: string;
	// eslint-disable-next-line react/no-unused-prop-types
	endDate?: string;
	dateValue?: Date | null;
	onChange?: (date: Date) => void;
	dateTextRef?: React.RefObject<HTMLInputElement>;
}
function PeriodTextInput({ dateValue, onChange, dateTextRef }: PeriodTextInputProps) {
	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			const formattedInput = dotFormatDate(e.target.value);
			e.target.value = formattedInput;
			if (formattedInput && formattedInput.length > 9) {
				const valueDate = new Date(formattedInput);
				onChange(valueDate);
			}
		}
	};
	return (
		<InputContainer>
			<StyledInput
				type="text"
				placeholder={formatDatetoString(dateValue)}
				maxLength={10}
				onChange={handleDateChange}
				ref={dateTextRef}
			/>
		</InputContainer>
	);
}
const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 13.9rem;
	height: 3.2rem;
	padding: 0.7rem 1.4rem;

	background-color: ${({ theme }) => theme.palette.Grey.White};
	border-radius: 8px;

	&:focus-within {
		background-color: ${({ theme }) => theme.palette.Blue.Blue2};
		outline: solid 1px ${theme.palette.Primary};
	}
`;
const StyledInput = styled.input`
	width: 100%;
	height: 100%;

	${({ theme }) => theme.fontTheme.BODY_02};
	background-color: transparent;
	border: none;
	border-radius: 8px;

	&:focus {
		outline: none;
	}
`;

export default PeriodTextInput;
