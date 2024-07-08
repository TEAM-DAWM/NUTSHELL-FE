import styled from '@emotion/styled';

function LogOutBtn() {
	return <LogOutBox>로그아웃</LogOutBox>;
}

export default LogOutBtn;

const LogOutBox = styled.button`
	width: 41.2rem;
	height: 3.6rem;
	display: flex;
	padding: 1.2rem 1.6rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	align-self: stretch;
	border-radius: 8px;
	background: ${({ theme }) => theme.palette.Grey.Grey3};
	margin: 2rem 0 2.8rem 1rem;
	${({ theme }) => theme.fontTheme.BODY_02};
	color: ${({ theme }) => theme.palette.Grey.Grey6};
	box-sizing: border-box;
`;
