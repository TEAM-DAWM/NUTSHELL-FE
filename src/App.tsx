import styled from '@emotion/styled';

function App() {
	return <BoxStyled>디스플레이 Display</BoxStyled>;
}

const BoxStyled = styled.div`
	width: 100vw;
	height: 100vh;

	${({ theme }) => theme.fontTheme.DISPLAY_01};
	background-color: ${(props) => props.theme.palette.BLUE_DEFAULT};
`;

export default App;
