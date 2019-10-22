import styled from 'styled-components';

const ButtonIcon = styled.button`
	display: block;
	width: 6.7rem;
	height: 6.7rem;
	border-radius: 2rem;
	background-image: url(${({ icon }) => icon});
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: 40%;
	background-color: ${({ active }) => (active ? 'white' : 'transparent')};
	border: none;

	&.active {
		background-color: white;
	}
`;

export default ButtonIcon;
