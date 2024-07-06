import styled from '@emotion/styled';

import Icons from '@/assets/svg/index';

interface TextInputTimeProps {
	time: 'start' | 'end' | 'total';
}

function TextInputTime({ time }: TextInputTimeProps) {
	const isTotalTime = time === 'total';
	return (
		<InputTimeLayout time={time}>
			{time === 'end' && <ArrowIcon />}
			<InputTimeStyle type="text" time={time} maxLength={isTotalTime ? 2 : 10} />
			{isTotalTime && <MinuteTxt>분</MinuteTxt>}
		</InputTimeLayout>
	);
}
const InputTimeLayout = styled.div<{ time: string }>`
	display: flex;
	align-items: center;
	width: ${({ time }) => (time === 'total' ? '2rem' : '9.5rem')};
	height: 2.4rem;
	padding: 0.4rem 1rem;

	${({ theme }) => theme.fontTheme.BODY_02};
	background-color: ${({ theme, time }) => (time !== 'total' ? theme.palette.GRAY_DISABLED : theme.palette.WITHE)};
	border-radius: 8px;
`;
const ArrowIcon = styled(Icons.Icn_arrow_narrow_right)`
	width: 1.4rem;
	height: 1.4rem;
`;
const MinuteTxt = styled.p`
	${({ theme }) => theme.fontTheme.BODY_02};
	padding-left: 0.4rem;
`;
const InputTimeStyle = styled.input<{ time: string }>`
	${({ theme }) => theme.fontTheme.BODY_02};
	width: ${({ time }) => (time === 'total' ? '2rem' : '100%')};
	height: 100%;
	padding: 0.4rem 0.8rem;

	background-color: ${({ theme, time }) => (time === 'total' ? theme.palette.GRAY_DISABLED : 'transparent')};
	border: none;
	border-radius: 8px;

	&:focus {
		outline: none;
	}
`;
export default TextInputTime;
