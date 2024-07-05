import styled from '@emotion/styled';

type Props = {
	text: string;
};

const ArrangeBtn = ({ text }: Props) => {
	return <ArrangeBtnLayout>{text}</ArrangeBtnLayout>;
};

export default ArrangeBtn;

const ArrangeBtnLayout = styled.button`
	display: flex;
	align-items: center;
	width: 10.5rem;
	height: 2.9rem;
	padding: 7px;

	border-radius: 6px;
`;
