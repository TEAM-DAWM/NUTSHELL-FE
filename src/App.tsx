import styled from '@emotion/styled';

function App() {
	return <BoxStyled />;
}

const BoxStyled = styled.div`
	width: 100vw;
	height: 100vh;

	background-color: ${(props) => props.theme.colors.primary};
`;

export default App;
