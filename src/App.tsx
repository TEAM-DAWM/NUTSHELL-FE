import styled from '@emotion/styled';

function App() {
	return <BoxStyled>세상에 이런 폰트가 나오다니</BoxStyled>;
}

const BoxStyled = styled.div`
	width: 100vw;
	height: 100vh;

	${({ theme }) => theme.fontTheme.DISPLAY_01};
	background-color: ${(props) => props.theme.palette.BLUE_DEFAULT};
`;

export default App;
